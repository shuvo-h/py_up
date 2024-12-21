const axios = require("axios");
const defaultForm = require("./formJson");

const baseUrl = "https://flowbot.peasy.ai";
const baseServerUrl = "http://chatdev.peasy.ai/api/v1";


const FlowBot = {
    createFlow: async function ({ userId, name, accountId, authorizationToken }) {
    try {
      const url = `${baseUrl}/create-bot`;
      // Prepare data for the request
      const data = new URLSearchParams();
      data.append("userid", userId);
      data.append("name", name);
      data.append("template", "default");
      data.append("accountid", accountId);

      // Axios request configuration
      const config = {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: authorizationToken,
        },
        data,
        url,
      };
      const result = await axios(config);
      return {
        isSuccess: true,
        data: result.data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        data: error.message || "An error occurred",
      };
    }
  },

    exportUpdateFlow : async function(botId,flowData, template = null, authorizationToken) {
    let response = {};
    try {
        const url = `${baseUrl}/update-bot`;

        // Prepare data for the request
        const data = new URLSearchParams();
        data.append("botid", botId);

        if (template === null) {
        data.append("flowdata", JSON.stringify(flowData));
        } else {
        data.append("template", template);
        }

        // Axios request configuration
        const config = {
            method: "put",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: authorizationToken,
            },
            data,
            url,
        };

        // Make the request
        const result = await axios(config);

        // Handle success
        response.status = "ok";
        response.data = result.data;
    } catch (error) {
        // Handle error
        response.status = "error";
        response.message = error.message || "An error occurred";
    }

    return response;
    },


}

const ExpressBot = {
  createExpressBot: async function(accountId,api_access_token,payload){
    // payload ={
    //   "bot_express": {
    //     name: "622-updated_bot-cDiu6t",
    //     account_id: 613,
    //     form_data: {...}
    //   }
    // }
    try {
      const config = {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ['api-access-token']: api_access_token,
        },
        url:`${baseServerUrl}/accounts/${accountId}/bot_expresses`,
        data:payload,
      };
      const {data} = await axios(config);
      return{isSuccess:true,data}
    } catch (error) {
      console.log(error);
      return{isSuccess:false,message:error.message}
    }
  },
  getExpressBotById: async function(express_bot_DB_id,accountId,api_access_token){
    try {
      const config = {
        headers: {
          ['api-access-token']: api_access_token,
        },
        url:`${baseServerUrl}/accounts/${accountId}/bot_expresses/${express_bot_DB_id}`,
      };
      const {data} = await axios(config);
      return{isSuccess:true,data}
    } catch (error) {
      console.log(error);
      return{isSuccess:false,message:error.message}
    }
  },
  getOriginalTemplateBotById: async function(express_bot_DB_id,accountId,api_access_token){
    try {
      const config = {
        headers: {
          ['api-access-token']: api_access_token,
        },
        url:`${baseServerUrl}/accounts/${accountId}/bot_expresses/${express_bot_DB_id}?bot_template=${true}`,
      };
      const {data} = await axios(config);
      return{isSuccess:true,data}
    } catch (error) {
      console.log(error);
      return{isSuccess:false,message:error.message}
    }
  },
}


/*
const modifyBot = (originalBot,formJson) =>{
    const data = {...originalBot};
    try {
        for(const formNodeName in formJson){
            for (const nodeId in data.nodes) {
                const node = data.nodes[nodeId];
                if (node.data && node.data.customName === formNodeName) {
                    // console.log(formNodeName);
                    // update contents
                    if (formJson[formNodeName].type === "content") {
                        for(let i=0;i<formJson[formNodeName].contents.length;i++){
                            const singleContent = formJson[formNodeName].contents[i]
                            switch (singleContent.type) {
                                case 'card':
                                    // console.log(singleContent);
                                    // update card content
                                    // console.log(node.data.contents[i])
                                    node.data.contents[i].title = singleContent.title;
                                    node.data.contents[i].subtitle = singleContent.subtitle;
                                    node.data.contents[i].actionButtons.forEach((btn,ctnBtnIndex)=>{
                                        if(singleContent.actionButtons[ctnBtnIndex]){
                                            // if visiability
                                            // else remove btn from enteriely
                                            if (singleContent.actionButtons[ctnBtnIndex].visibility) {
                                                node.data.contents[i].actionButtons[ctnBtnIndex] = {
                                                    ...node.data.contents[i].actionButtons[ctnBtnIndex],
                                                    buttonTitle: singleContent.actionButtons[ctnBtnIndex].title,
                                                    buttonValue: singleContent.actionButtons[ctnBtnIndex].title,
                                                }
                                            }else if (singleContent.actionButtons[ctnBtnIndex].visibility === false) {
                                                // renove this buttons enteirely
                                                const removedBtnTitle = node.data.contents[i].actionButtons[ctnBtnIndex].buttonTitle;
                                                console.log({removedBtnTitle});
                                            }
                                        }
                                    })
                                    break;

                                default:
                                    break;
                            }
                        }

                        // console.log(formJson[formNodeName],node.data.contents);
                        // return data
                    }

                }
            }
        }

        return data;
    } catch (error) {
        console.log(error);
        return data;
    }
}
*/


const modifyBot = (originalBot,formJson) =>{
    const data = {...originalBot};
    const btnsTobeDeletedFromLinks = [];
    try {
        for(const formNodeName in formJson){
            const formNode = formJson[formNodeName];
            for (const nodeId in data.nodes) {
                const node = data.nodes[nodeId];

                if (node.data && node.data.customName === formNodeName) {
                    // console.log(formNodeName);
                    // update contents
                    if (formNode.type === "content") {
                        for(let i=0;i<formNode.contents.length;i++){
                            const singleContent = formNode.contents[i];
                            const nodeContent = node.data.contents[i];
                            switch (singleContent.type) {
                                case 'card':
                                    nodeContent.title = singleContent.title;
                                    nodeContent.subtitle = singleContent.subtitle;

                                    // Handle buttons
                                    const cardBtnRemoveList =[];
                                    nodeContent.actionButtons.forEach((btn,ctnBtnIndex)=>{
                                        if(singleContent.actionButtons[ctnBtnIndex]){
                                            // if visiability
                                            if (singleContent.actionButtons[ctnBtnIndex].visibility) {
                                                node.data.contents[i].actionButtons[ctnBtnIndex] = {
                                                    ...node.data.contents[i].actionButtons[ctnBtnIndex],
                                                    buttonTitle: singleContent.actionButtons[ctnBtnIndex].title,
                                                    buttonValue: singleContent.actionButtons[ctnBtnIndex].title,
                                                }
                                            }else if (singleContent.actionButtons[ctnBtnIndex].visibility === false) {
                                                // renove this buttons enteirely
                                                const originalBtn = node.data.contents[i].actionButtons[ctnBtnIndex].buttonTitle;
                                                console.log({originalBtn});
                                                cardBtnRemoveList.push(originalBtn);
                                                btnsTobeDeletedFromLinks.push(originalBtn);
                                            }
                                        }
                                    })
                                    nodeContent.actionButtons=nodeContent.actionButtons.filter(nodeBtn=>!cardBtnRemoveList.includes(nodeBtn.buttonTitle))
                                    break;

                                case "text":
                                    nodeContent.value = singleContent.value;
                                    break;

                                case "category_list":
                                    nodeContent.title = singleContent.title;
                                    nodeContent.body = singleContent.body;
                                    nodeContent.footer = singleContent.footer;
                                    nodeContent.button = singleContent.button;
                                    nodeContent.sections = singleContent.sections;
                                    break;

                                case "image":
                                    nodeContent.title = singleContent.title;
                                    break;

                                default:
                                    console.warn(`Unsupported content type: ${singleContent.type}`);
                                    break;
                            }
                        }

                        // console.log(formJson[formNodeName],node.data.contents);
                        // return data
                    }


                }
            }
        }

        // remove conditin response and links
        console.log({btnsTobeDeletedFromLinks});
        // do loop and remove conditon and links
        const condIdsToBeDelete = [];
        for (const nodeId in data.nodes) {
            const node = data.nodes[nodeId];
            if (node.data && node.data.type === "condition") {
                const deletedConds = node.data.contents.filter(el=>btnsTobeDeletedFromLinks.includes(el.value))
                console.log(node.data.contents.length);
                node.data.contents = node.data.contents.filter(el=>!btnsTobeDeletedFromLinks.includes(el.value));
                node.contents = node.data.contents.filter(el=>!btnsTobeDeletedFromLinks.includes(el.value));
                // console.log(node.portsOut);
                // delete the portOuts
                deletedConds.forEach(cond=>{
                    console.log(node.data.contents);
                    console.log(node.portsOut[cond.condId],"DELETING..",cond.condId);
                    delete node.portsOut[cond.condId]
                })
                // console.log(node.portsOut);

                condIdsToBeDelete.push(...deletedConds.map(el=>el.condId))
            }
        }

        // remove links for the removed buttons
        for (const linkId in data.links) {
            const link = data.links[linkId];
            // console.log(linkId);
            if (condIdsToBeDelete.includes(link.start_port)) {
                // delete the link
                delete data.links[linkId]
            }
        }
        console.log({condIdsToBeDelete});

        return data;
    } catch (error) {
        console.log(error);
        return data;
    }
}







const crateExpressBotFromTpl = async(userObj,originalBotTemplateId) =>{
    const { userId, accountId, authorizationToken,apiAccessToken } = userObj;
    // console.log({originalBotTemplateId});

    const randomBotName = "testAC";
    // step 1: create a bot_id
    const createBotPayload = {
        userId,
        name:randomBotName,
        accountId,
        authorizationToken,
    }
    // const newBot = await FlowBot.createFlow(createBotPayload);
    const newBot = { isSuccess: true, data: 'created' }
    // console.log({newBot});
    const newExpressEmptyPayload= {
     bot_express: {
        name: createBotPayload.name,
        template_name: originalBotTemplateId,
        account_id: accountId,
        form_data: {}
   }}

   // step 2: insert the empty form into this account for this bot
   // const botCreateRes = await ExpressBot.createExpressBot(accountId,apiAccessToken,newExpressEmptyPayload);
   const botCreateRes = {
        isSuccess: true,
        data: {
            id: 4,
            name: 'testAC',
            bot_id: null,
            kind: 0,
            uploaded: false,
            template: false,
            template_name: '4-retailtemplatebot-zS1bC3',
            account_id: 613,
            form_data: {}
        }
    }
    // console.log({botCreateRes});

    // step 3: get the bot_id from DB
   // const {data:newExpressBotRes} = await ExpressBot.getExpressBotById(createBotPayload.name,accountId,apiAccessToken);
   const newExpressBotRes = {
        id: 4,
        name: 'testAC',
        bot_id: '613-testac-YYGCP0',
        kind: 0,
        uploaded: false,
        template: false,
        template_name: '4-retailtemplatebot-zS1bC3',
        account_id: 613,
        form_data: {} // it will be dynamic

    }
    // console.log({newExpressBotRes});


    // step 4: get the defaultFormJson from DB
    const formJson = {
        ...defaultForm.retailFormJson,
    }





    // step 5: get the originalBotData By originalBotId from DB
    const {data:originalBotJson,isSuccess:isOriginalBotSuccess} = await ExpressBot.getOriginalTemplateBotById(newExpressBotRes.id,accountId,apiAccessToken);
    // console.log({originalBotJson});


    // step 6: prepare the bot data based on the defaultFormJson
    const updatedBotData = modifyBot(originalBotJson,formJson.form_data);

    // step 7: update(export) the bot with the prepared data
    const exportedResult = await FlowBot.exportUpdateFlow(newExpressBotRes.bot_id,updatedBotData,null,authorizationToken);

    return {
        // newExpressBotRes,
        updatedBotData,
        // originalBotJson,
        // tempInitialForm
    }
}

module.exports = {
    crateExpressBotFromTpl,
}