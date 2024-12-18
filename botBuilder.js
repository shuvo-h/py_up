const ACT = {
    change_MAINMENU:"change_MAINMENU",
    change_Maincondition:"change_Maincondition",
    change_greeting:"change_greeting",
    categories_change:"categories_change",
    categorylink_change:"categorylink_change",
    preend_change:"preend_change",
    location_change:"location_change",
    lastnode_change:"lastnode_change",
}

function modifyBotFlowForFnbRetail(mainData,payloadObj) {
    const data = {...mainData};
    try {
         // Helper function to update a specific node's content or attribute
        function updateNode(nodeName, actionType,newValue) {
             for (const nodeId in data.nodes) {
                 const node = data.nodes[nodeId];
                 if (node.data && node.data.customName === nodeName) {
                    console.log(nodeName,actionType);
                     if (actionType === 'attribute_change') {
                         // node attribute value change
                         node.data.contents.forEach((content) => {
                             if (content.customAttr) {
                                 content.customAttr = newValue;
                             }
                         });
                     }else if (actionType === 'question_change') {
                         node.data.contents[0].value = newValue;
                     }else if (actionType === ACT.change_MAINMENU) {
                        // for "MAINMENU"
                        if(newValue?.status)  node.data.contents[1].value = newValue.status.toLowerCase();
                        if(newValue?.location)  node.data.contents[2].value = newValue.location.toLowerCase();
                        if(newValue?.catalog)  node.data.contents[3].value = newValue.catalog.toLowerCase();
                        if(newValue?.cu)  node.data.contents[4].value = newValue.cu.toLowerCase();
                        if(newValue?.menu)  node.data.contents[5].value = newValue.menu.toLowerCase();
                    }else if (actionType === ACT.change_Maincondition) {
                        node.data.contents[1].contents[0].value = newValue;
                        node.contents[1].contents[0].value = newValue
                        console.log(node, node.contents[1].contents[0].value);  // node.contents[1].contents[0].value = newValue
                    }
                    else if (actionType === ACT.change_greeting) {
                        // update data.content
                        node.data.contents[0].title = newValue.title;
                        node.data.contents[0].subtitle = newValue.subtitle;
                        node.data.contents[0].actionButtons = newValue.actionButtons;

                        // update node.contents
                        node.contents[0].title = newValue.title;
                        node.contents[0].subtitle = newValue.subtitle;
                        node.contents[0].actionButtons = newValue.actionButtons;
                    }
                    else if (actionType === ACT.categories_change) {
                        // update data.content
                        node.data.contents[0].title = newValue.title;
                        node.data.contents[0].body = newValue.body;
                        node.data.contents[0].footer = newValue.footer;
                        node.data.contents[0].button = newValue.button;
                        node.data.contents[0].action.sections[0].title = newValue.sectionTitle;
                        node.data.contents[0].action.sections[0].rows = newValue.catalog;

                        // update node.contents
                        node.contents[0].title = newValue.title;
                        node.contents[0].body = newValue.body;
                        node.contents[0].footer = newValue.footer;
                        node.contents[0].button = newValue.button;
                        node.contents[0].action.sections[0].title = newValue.sectionTitle;
                        node.contents[0].action.sections[0].rows = newValue.catalog;
                        // node.data.contents[0].action.sections[0].rows = newValue.catalog;
                    }
                    else if (actionType === ACT.categorylink_change) {
                        // update data.content
                        node.data.contents[0].value = newValue.link;
                        // update node.contents
                        node.contents[0].value = newValue.link;
                    }
                    else if (actionType === ACT.preend_change) {
                        // update data.content
                        node.data.contents[0].title = newValue.title;
                        node.data.contents[0].subtitle = newValue.subtitle;
                        node.data.contents[0].actionButtons = newValue.actionButtons.map(el=>({
                            buttonTitle: el.buttonTitle,
                            selectedAction: {
                                id: "act-btn-say",
                                name: "Say Something"
                            },
                            buttonValue: el.buttonValue
                        }));
                        // update node.contents
                        node.contents[0].title = newValue.title;
                        node.contents[0].subtitle = newValue.subtitle;
                        node.contents[0].actionButtons = newValue.actionButtons.map(el=>({
                            buttonTitle: el.buttonTitle,
                            selectedAction: {
                                id: "act-btn-say",
                                name: "Say Something"
                            },
                            buttonValue: el.buttonValue
                        }));
                    }
                    else if (actionType === ACT.location_change) {
                        // update data.content
                        node.data.contents[0].value = newValue.link;
                        // update node.contents
                        node.contents[0].value = newValue.link;
                    }
                    else if (actionType === ACT.lastnode_change) {
                        // update data.content
                        node.data.contents[0].name = newValue.attributeName;
                        node.data.contents[0].customAttr = newValue.customAttr;
                        // update node.contents
                        node.contents[0].name = newValue.attributeName;
                        node.contents[0].customAttr = newValue.customAttr;
                    }
                    else if (actionType === 'orderstatus_change') {
                        // update data.content
                        node.data.contents[0].title = newValue.title;
                        // update node.contents
                        node.contents[0].title = newValue.title;
                    }
                    // errorstatus_change
                    else if (actionType === 'statusreply_change' || actionType === 'errorstatus_change') {
                        // update data.content
                        node.data.contents[0].value = newValue.value;
                        // update node.contents
                        node.contents[0].value = newValue.value;
                    }
                    else if (actionType === 'agent_change') {
                        // update data.content
                        node.data.contents[0].value = newValue.value;
                        // update node.contents
                        node.contents[0].value = newValue.value;
                    }
                }
            }
        }


        //  Dynamically update the nodes
        for(let key of Object.keys(payloadObj)){
            switch (key) {
                case 'Maincondition':
                    const PinTouchCode = `pz:${payloadObj[key].pinTouchCode}`;
                    updateNode(key, ACT.change_Maincondition, PinTouchCode);
                    break;
                case 'MAINMENU':
                    updateNode(key, ACT.change_MAINMENU, payloadObj[key]);
                    break;
                case 'Greeting':
                    updateNode(key, ACT.change_greeting, payloadObj[key]);
                    break;
                case 'Categories':
                    updateNode(key, ACT.categories_change, payloadObj[key]);
                    break;
                case 'categorylink':
                    updateNode(key, ACT.categorylink_change, payloadObj[key]);
                    break;
                case 'preend':
                    updateNode(key, ACT.preend_change, payloadObj[key]);
                    break;
                case 'Location':
                    updateNode(key, ACT.location_change, payloadObj[key]);
                    break;
                case 'lastnode':
                    updateNode(key, ACT.lastnode_change, payloadObj[key]);
                    break;

                default:
                    // updateNode(key, ACT.change_Maincondition, payloadObj[key]);
                    break;
            }
        }


       /*
       // card 1: "Maincondition": pz:4 -> pz:account_id
       const PinTouchCodePayload = {
            pinTouchCode: 48
        };
       updateNode('Maincondition', 'change_Maincondition', `pz:${PinTouchCodePayload.pinTouchCode}`);


         const mainMenuConditonBtns = {
            status:"call me",
            location:"location_SH",
            catalog:"catalog_SH",
            cu:"cu_SH",
            menu:"MeNu_SH",
         }
        //  card 2: Condition "MAINMENU": update condition button names
        updateNode('MAINMENU', 'change_MAINMENU', mainMenuConditonBtns);


        // card 3: GREETING
        const greetingPayload = {
            title:"Hey Welcome 2025",
            subtitle:"Hello new text message for welcoming 2025",
            actionButtons: [
                {
                    buttonTitle: "catalog_SH",
                    selectedAction: {
                        "id": "act-btn-say",
                        "name": "Say Something"
                    },
                    buttonValue: "catalog_SH"
                },
                {
                    buttonTitle: "StAtus_SH",
                    selectedAction: {
                        "id": "act-btn-say",
                        "name": "Say Something"
                    },
                    buttonValue: "StAtus_SH"
                },
                {
                    buttonTitle: "location_SH",
                    selectedAction: {
                        "id": "act-btn-say",
                        "name": "Say Something"
                    },
                    buttonValue: "location_SH"
                },
            ]
        }
        updateNode('Greeting', 'change_greeting', greetingPayload);

        // card 4: Categories
        const categoriesPayload = {
            title:"Delicious Catalog",
            body:"Delicious Catalog body txt",
            footer:"Delicious Catalog footer txt",
            button:"Delicious Catalog btn",
            sectionTitle:"new ctg title",
            catalog: [
                {id: 100, title: "new catalog 1"},
                {id: 200, title: "new catalog 2"},
            ]
        }
        updateNode('Categories', 'categories_change', categoriesPayload);

        // card 5: categorylink
        const categorylinkPayload = {
            link:"Go to my shop here: https://shop.peasy.ai/app/accounts/{{account_id}}/?name=Peasy_SH&category={{event.payload.text}}",
        }
        updateNode('categorylink', 'categorylink_change', categorylinkPayload);

        // card 6: preend
        const preendPayload = {
            title:"menu title",
            subtitle:"menu sub description",
            actionButtons:[
                {
                    buttonTitle: "new Btn",
                    buttonValue: "NewBtn"
                },
                {
                    buttonTitle: "new Btn 2",
                    buttonValue: "NewBtn 2"
                },
            ],
        }
        updateNode('preend', 'preend_change', preendPayload);

        // card 7: Location
        const lat = 22.80
        const lng = 89.54
        const locationPayload = {
            link:`https://www.google.com/maps?q=${lat},${lng}`,
        }
        updateNode('Location', 'location_change', locationPayload);

        // card 8: lastnode
        const lastnodePayload = {
            attributeName: "OFF2",
            customAttr: "newBot",
        }
        updateNode('lastnode', 'lastnode_change', lastnodePayload);

        // card 9: orderstatus
        const orderstatusPayload = {
            title: `Please specify your order ID. You can get your order ID from this link: https://shop.peasy.ai/app/accounts/622/payment.`,
        }
        updateNode('orderstatus', 'orderstatus_change', orderstatusPayload);

        // card 10: callstatusapi
        // take access token from prefil data

        // card 11: statusreply
        const statusreplyPayload = {
            value: `Thank you so much for your patience. Your order status is {{temp.response.body.status}}`,
        }
        updateNode('statusreply', 'statusreply_change', statusreplyPayload);


        // card 12: errorstatus
        const errorstatusPayload = {
            value: `Sorry, this order does not exist. Please ensure that you key in just your order ID. For example, if your order ID is 5999, please reply 8800.

            Otherwise, reply "menu" to return to the main menu OR reply "agent" to speak to our customer service now.`,
        }
        updateNode('errorstatus', 'errorstatus_change', errorstatusPayload);

        // card 13: secondmenu
        // card 14: agent
        const agentPayload = {
            value: `Our agent will attend to you shortly! Appreciate your patience.`,
        }
        updateNode('agent', 'agent_change', agentPayload);
        */


        /*
        // list of dynamic(auto-prefill) data:
        const autoPrefil = {
            account_id: 4, // PinTouchCode 'pz:4'
            location: {
                lat: 22.80,
                lng: 89.54
            },
        }

        // list of user data:,
        const userData= {
            Maincondition:{
                pinTouchCode: 4
            },
            MAINMENU: {
                status:"call me",
                location:"location_SH",
                catalog:"catalog_SH",
                cu:"cu_SH",
                menu:"MeNu_SH",
            },
            Greeting: {
                title:"Hey Welcome 2025",
                subtitle:"Hello new text message for welcoming 2025",
                actionButtons: [
                    {
                        buttonTitle: "catalog_SH",
                        selectedAction: {
                            "id": "act-btn-say",
                            "name": "Say Something"
                        },
                        buttonValue: "catalog_SH"
                    },
                    // ...more
                ]
            },
            Categories: {
                title:"Delicious Catalog",
                body:"Delicious Catalog body txt",
                footer:"Delicious Catalog footer txt",
                button:"Delicious Catalog btn",
                sectionTitle:"new ctg title",
                catalog: [
                    {id: 100, title: "new catalog 1"},
                    // ...more
                ]
            },
            preend: {
                title:"menu title",
                subtitle:"menu sub description",
                actionButtons:[
                    {
                        buttonTitle: "new Btn",
                        buttonValue: "NewBtn"
                    },
                    // ...more
                ],
            },
            Location: {
                lat: 22.80,
                lng: 89.54
            },
            lastnode: {
                attributeName: "OFF2",
                customAttr: "newBot",
            },
            orderstatus:{
                title: `Please specify your order ID. You can get your order ID from this link: https://shop.peasy.ai/app/accounts/622/payment.`,
            },
            statusreply: {
                value: `Thank you so much for your patience. Your order status is {{temp.response.body.status}}`,
            },
            errorstatus: {
                value: `Sorry, this order does not exist. Please ensure that you key in just your order ID. For example,.....`,
            },
            agent: {
                value: `Our agent will attend to you shortly! Appreciate your patience.`,
            }
        }
        */


        return {isError: false,data}

    } catch (error) {
        console.log(error);
        return {isError: true,message:"failed to modify flow"}
    }
};

const doSum =(a,b)=>a+b;

module.exports = {
    doSum,
    modifyBotFlowForFnbRetail
}