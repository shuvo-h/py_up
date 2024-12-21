const axios = require("axios");
const defaultData = require("../data");

const baseUrl = "https://flowbot.peasy.ai";
const baseServerUrl = "http://chatdev.peasy.ai/api/v1";
const ACT = {
  MAINMENU_change: "MAINMENU_change",
  Maincondition_change: "Maincondition_change",
  greeting_change: "greeting_change",
  categories_change: "categories_change",
  categorylink_change: "categorylink_change",
  preend_change: "preend_change",
  location_change: "location_change",
  // lastnode_change: "lastnode_change",
  orderstatus_change: "orderstatus_change",
  statusreply_change: "statusreply_change",
  errorstatus_change: "errorstatus_change",
  secondmenu_change: "secondmenu_change",
  agent_change: "agent_change",
  callstatusapi_change: "callstatusapi_change",
};

const PossibleDeleteNode ={
  Location:"Location",
}


// delete unnecessary links and nodes
const deleteUnnecessaryLinksNode = (rawNodeLinks,unnecessaryNodeNameList=[]) =>{
  const newNodeLinks = {...rawNodeLinks};
  const deletedIdList = [];

  // delete the  node if the (start_id || end_id) === node.id
  unnecessaryNodeNameList.forEach((unnecessaryNodeName,index)=>{
      // find the node.id
      Object.keys(newNodeLinks.nodes).forEach(nodeKey=>{
          // console.log(newNodeLinks.nodes[nodeKey].data);
          if (newNodeLinks.nodes[nodeKey].data?.customName?.toLocaleLowerCase() === unnecessaryNodeName.toLocaleLowerCase()) {
              // don't delete first node link since it will connect our new node
              if (index !== 0) {
                  deletedIdList.push(newNodeLinks.nodes[nodeKey].id);
              }
              delete newNodeLinks.nodes[nodeKey];
          }
      })
  })
  // console.log({deletedIdList});

  // delete the link also if the start_id/end_id exist in "deletedIdList"
  Object.keys(newNodeLinks.links).forEach(linkKey=>{
      const start_id = newNodeLinks.links[linkKey].start_id;
      const end_id = newNodeLinks.links[linkKey].end_id;
      const hasStartId = deletedIdList.includes(start_id);
      const hasEndId = deletedIdList.includes(end_id);
      // console.log({hasStartId,hasEndId});
      if (hasStartId || hasEndId) {
          delete newNodeLinks.links[linkKey];
      }
  })

  return newNodeLinks;

}

const bot_prepare_FandB = (mainBotData, userInputJson,userObj) => {
  // return mainBotData;
  try {
    const { userId, name, accountId, authorizationToken,apiAccessToken } = userObj;
    let data = { ...mainBotData };
    // main update method
    function updateNode(nodeName, actionType, newValue) {
      for (const nodeId in data.nodes) {
        const node = data.nodes[nodeId];
        if (node.data && node.data.customName === nodeName) {
          if (actionType === ACT.Maincondition_change) {
            node.data.contents[1].contents[0].value = newValue;
            // node.contents[1].contents[0].value = newValue; // node.contents[1].contents[0].value = newValue
          }

           else if (actionType === ACT.MAINMENU_change) {
            // for "MAINMENU"
            // console.log(newValue.status);
            if (newValue?.status.show){
              node.data.contents[1].value =newValue.status.value.toLowerCase();
            }else{
              node.data.contents[1] = null
              node.contents[1] = null
            }

            if (newValue?.location.show){
              node.data.contents[2].value = newValue.location.value.toLowerCase();
            }else{
              // remove port out
              delete node.portsOut[node.data.contents[2].condId]
              // make empty the content item
              node.data.contents[2] = null
              node.contents[2] = null
              // remove the location node enteirely
              data = deleteUnnecessaryLinksNode(data,[PossibleDeleteNode.Location]);
            }
            node.data.contents[3].value = newValue.main_menu.value.toLowerCase();
            node.data.contents[4].value = newValue.cu.value.toLowerCase();
            node.data.contents[5].value = newValue.menu.value.toLowerCase();

            if (newValue?.agent.show){
              node.data.contents[6].value = newValue.agent.value.toLowerCase();
            }else{
              node.data.contents[6] = null;
              node.contents[6] = null
            }
            // fulter out for null
            node.data.contents = node.data.contents.filter(el=>Boolean(el))
            node.contents = node.contents.filter(el=>Boolean(el))
            console.log(node.data.contents);

          }
          /*
          // need to implement all based on the above MAINMENU_change
          else if (actionType === ACT.greeting_change) {
            // update data.content
            node.data.contents[0].title = newValue.title;
            node.data.contents[0].subtitle = newValue.subtitle;
            node.data.contents[0].actionButtons = newValue.actionButtons;

            // update node.contents
            // node.contents[0].title = newValue.title;
            // node.contents[0].subtitle = newValue.subtitle;
            // node.contents[0].actionButtons = newValue.actionButtons;
          } else if (actionType === ACT.categories_change) {
            // update data.content
            node.data.contents[0].title = newValue.title;
            node.data.contents[0].body = newValue.body;
            node.data.contents[0].footer = newValue.footer;
            node.data.contents[0].button = newValue.button;
            node.data.contents[0].action.sections[0].title =
              newValue.sectionTitle;
            node.data.contents[0].action.sections[0].rows = newValue.catalog;

            // update node.contents
            // node.contents[0].title = newValue.title;
            // node.contents[0].body = newValue.body;
            // node.contents[0].footer = newValue.footer;
            // node.contents[0].button = newValue.button;
            // node.contents[0].action.sections[0].title = newValue.sectionTitle;
            // node.contents[0].action.sections[0].rows = newValue.catalog;
            // node.data.contents[0].action.sections[0].rows = newValue.catalog;
          } else if (actionType === ACT.categorylink_change) {
            // update data.content
            node.data.contents[0].value = newValue.link;
            // update node.contents
            node.contents[0].value = newValue.link;
          } else if (actionType === ACT.preend_change) {
            // update data.content
            node.data.contents[0].title = newValue.title;
            node.data.contents[0].subtitle = newValue.subtitle;
            node.data.contents[0].actionButtons = newValue.actionButtons.map(
              (el) => ({
                buttonTitle: el.buttonTitle,
                selectedAction: {
                  id: "act-btn-say",
                  name: "Say Something",
                },
                buttonValue: el.buttonValue,
              })
            );
            // update node.contents
            // node.contents[0].title = newValue.title;
            // node.contents[0].subtitle = newValue.subtitle;
            // node.contents[0].actionButtons = newValue.actionButtons.map((el) => ({
            //   buttonTitle: el.buttonTitle,
            //   selectedAction: {
            //     id: "act-btn-say",
            //     name: "Say Something",
            //   },
            //   buttonValue: el.buttonValue,
            // }));
          } else if (actionType === ACT.location_change) {
            // update data.content
            node.data.contents[0].value = newValue;
            // update node.contents
            // node.contents[0].value = newValue.link;
          }
          else if (actionType === ACT.orderstatus_change) {
            // update data.content
            node.data.contents[0].value = newValue.value;
            node.data.contents[0].title = newValue.title;
            // update node.contents
            // node.contents[0].title = newValue.title;
          }
          // errorstatus_change
          else if (actionType === ACT.statusreply_change) {
            // update data.content
            node.data.contents[0].value = `${newValue.value} {{temp.response.body.status}}`;
            // update node.contents
            // node.contents[0].value = newValue.value;
          } else if (actionType === ACT.errorstatus_change) {
            // update data.content
            node.data.contents[0].title = newValue.Title;
            node.data.contents[0].subtitle = newValue.subtitle;
            // update node.contents
            // node.contents[0].value = newValue.value;
          } else if (actionType === ACT.secondmenu_change) {
            // update data.content
            if (newValue.menu_btn_value)
              node.data.contents[1].value = newValue.menu_btn_value;
            if (newValue.agent_btn_value)
              node.data.contents[2].value = newValue.agent_btn_value;
            if (newValue.cu_btn_value)
              node.data.contents[3].value = newValue.cu_btn_value;
            // update node.contents
            // node.contents[0].value = newValue.value;
          } else if (actionType === ACT.agent_change) {
            node.data.contents[0].value = newValue.value;
          } else if (actionType === ACT.callstatusapi_change) {
            // node.data.contents[0].value = newValue.value;
            const skillData = node.data.skillData;
            const newHeaders = JSON.parse(node.data.skillData.headers);
            newHeaders.accesstoken = newValue.accesstoken;
            node.data.skillData.headers = JSON.stringify(newHeaders);
            node.data.skillData.url = newValue.url;
          }
          */
        }
      }
    }

    // common nodes update
    const PinTouchCode = `pz:${accountId}`;
    updateNode('Maincondition', ACT.Maincondition_change, PinTouchCode);

    //  Dynamically update the nodes
    for (let key of Object.keys(userInputJson)) {
      const config = userInputJson[key].config;
      switch (key) {
        case "MAINMENU":
          console.log( userInputJson[key],key);
          // 2 condition, if location and status FALSE,  remove that node and buttons
          const mainmenuContentes = {
            status: {
              value: userInputJson[key].card.status,
              show: config.includeStatus,
            },
            location: {
              value: userInputJson[key].card.location,
              show: config.includeLocation,
            },
            main_menu: {
              value: userInputJson[key].card.main_menu,
              show: true,
            },
            cu: {
              value: userInputJson[key].card.cu,
              show: true,
            },
            menu: {
              value: userInputJson[key].card.menu,
              show: true,
            },
            agent: {
              value: userInputJson[key].card.agent,
              show: userInputJson.preend.config.hasHuman,  // in preend.hasHuman ?,
            },
          }
          updateNode(key, ACT.MAINMENU_change,mainmenuContentes);
          break;
        case "Greeting":
          // title, sbtitle, ismention operating hours
          const operatingHourMsg = `Hi, welcome to Company Name. Our operation hours are from Mon-Fri 10am-10pm. Do let us know how can we help you`
          updateNode(key, ACT.greeting_change, userInputJson[key]);
          break;
        case "Categories":
          updateNode(key, ACT.categories_change, userInputJson[key]);
          break;
        case "categorylink":
          updateNode(key, ACT.categorylink_change, userInputJson[key]);
          break;
        case "preend":
          updateNode(key, ACT.preend_change, userInputJson[key]);
          break;
        case "Location":
          // const locationLink = `${userInputJson[key].message} https://www.google.com/maps?q=${userInputJson[key].lat},${userInputJson[key].lng}`;
          updateNode(key, ACT.location_change, userInputJson[key].message);
          break;
        // case "lastnode":
        //   updateNode(key, ACT.lastnode_change, userInputJson[key]);
        //   break;
        case "orderstatus":
          userInputJson[
            key
          ].title = `${userInputJson[key].title} https://shop.peasy.ai/app/accounts/${userInputJson[key].account_id}/payment.`;
          updateNode(key, ACT.orderstatus_change, userInputJson[key]);
          break;
        case "statusreply":
          updateNode(key, ACT.statusreply_change, userInputJson[key]);
          break;
        case "errorstatus":
          updateNode(key, ACT.errorstatus_change, userInputJson[key]);
          break;
        case "secondmenu":
          updateNode(key, ACT.secondmenu_change, userInputJson[key]);
          break;
        case "agent":
          updateNode(key, ACT.agent_change, userInputJson[key]);
          break;
        case "callstatusapi":
          // const getOrderApi = `/api/v1/accounts/${userInputJson[key].account_id}/orders/get_order_status`
          updateNode(key, ACT.callstatusapi_change, userInputJson[key]);
          break;

        default:
          // updateNode(key, ACT.change_Maincondition, payloadObj[key]);
          break;
      }
    }

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
// call flowbot api by axios to update if exist else create new one
const FlowBot = {
  exportUpdateFlow : async function(
    botId,
    flowData,
    template = null,
    authorizationToken
  ) {
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
  }
}


async function createFlow({ userId, name, accountId, authorizationToken }) {
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

    // Make the request
    const result = await axios(config);

    // Handle successy
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
}

function formatUserJsonToFB_Json(userInfo, fieldDbJson) {
  const { account_id, lat, lng } = userInfo;
  const {
    greeting,
    MAINMENU,
    categories,
    categorylink,
    preend,
    location,
    statusreply,
    errorstatus,
    agent,
  } = fieldDbJson;
  const DynamciCatalog = "Catalog";

  return {
    Maincondition: {
      account_id,
    },
    MAINMENU: {
      status: MAINMENU.status,
      location: MAINMENU.location,
      catalog: DynamciCatalog, // make it dynamic
      cu: MAINMENU.cu,
      menu: MAINMENU.menu,
      agent: MAINMENU.agent,
    },
    Greeting: {
      title: greeting.card.main_title,
      subtitle: greeting.card.subtitle, // if inculde operating hour, add the hour text
      actionButtons: [
        {
          buttonTitle: DynamciCatalog,
          selectedAction: {
            id: "act-btn-say",
            name: "Say Something",
          },
          buttonValue: DynamciCatalog,
        },
        {
          buttonTitle: MAINMENU.status,
          selectedAction: {
            id: "act-btn-say",
            name: "Say Something",
          },
          buttonValue: MAINMENU.status,
        },
        {
          buttonTitle: MAINMENU.location,
          selectedAction: {
            id: "act-btn-say",
            name: "Say Something",
          },
          buttonValue: MAINMENU.location,
        },
      ],
    },
    Categories: {
      title: categories.list.title,
      body: categories.list.body,
      footer: categories.list.footer,
      button: categories.list.button,
      sectionTitle: "new ctg title",
      catalog: [
        {
          id: 100,
          title: "new catalog 1",
        },
      ],
    },
    preend: {
      title: preend.title,
      subtitle: preend.subtitle,
      actionButtons: [
        // for menu
        {
          buttonTitle: MAINMENU.menu,
          buttonValue: MAINMENU.menu,
        },
        // for agent
        {
          buttonTitle: MAINMENU.agent,
          buttonValue: MAINMENU.agent,
        },
        // for cu
        {
          buttonTitle: MAINMENU.cu,
          buttonValue: MAINMENU.cu,
        },
      ],
    },
    Location: {
      // lat: 22.8,
      // lng: 89.54,
      message: `${location.text.message} https://www.google.com/maps?q=${lat},${lng}`,
    },
    orderstatus: {
      account_id: 455,
      value: "orderstatus-1733900781067.png",
      title:
        "Please specify your order ID. You can get your order ID from this link:",
    },
    statusreply: {
      value: statusreply.text.message,
    },
    errorstatus: {
      Title: errorstatus.title,
      subtitle: errorstatus.text.message,
    },
    secondmenu: {
      menu_btn_value: MAINMENU.menu,
      agent_btn_value: MAINMENU.agent,
      cu_btn_value: MAINMENU.cu,
    },
    agent: {
      value: agent.text.message,
    },
    callstatusapi: {
      accesstoken: "new access token of this account",
      url: `/api/v1/accounts/4/orders/5414/get_order_status`,
    },
  };
}


const FormDBdata = {

  getExpressBotByName: async function(accountId,api_access_token,payload){
    // payload ={
    //   "bot_express": {
    //     name: "622-updated_bot-cDiu6t",
    //     account_id: 613,
    //     form_data: {...}
    //   }
    // }
    try {
      const config = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ['api-access-token']: api_access_token,
        },
        // url:`${baseServerUrl}/accounts/${accountId}/bot_expresses`,
        data:payload,
      };
      const {data} = await axios(config);
      return{isSuccess:true,data}
    } catch (error) {
      console.log(error);
      return{isSuccess:false,message:error.message}
    }
  },
  createExpressNewBot: async function(accountId,api_access_token,payload){
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
        // url:`${baseServerUrl}/accounts/${accountId}/bot_expresses`,
        data:payload,
      };
      const {data} = await axios(config);
      return{isSuccess:true,data}
    } catch (error) {
      console.log(error);
      return{isSuccess:false,message:error.message}
    }
  },

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
  updateExpressBotById: async function(accountId,api_access_token,express_bot_id,payload){
    // payload ={
    //   "bot_express": {
    //     name: "622-updated_bot-cDiu6t",
    //     account_id: 613,
    //     form_data: {...}
    //   }
    // }
    try {
      const config = {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ['api-access-token']: api_access_token,
        },
        url:`${baseServerUrl}/accounts/${accountId}/bot_expresses/${express_bot_id}`,
        data:payload,
      };
      const {data} = await axios(config);
      return{isSuccess:true,data}
    } catch (error) {
      console.log(error);
      return{isSuccess:false,message:error.message}
    }
  },
  getById: async function(express_bot_DB_id,accountId,api_access_token){
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
}

// const updateFormFields = async (

//   formId,
//   current_step,
//   currentNodeFormData = {}
// ) => {
//   // if exist formData_id, update, else create a newone
//   const payload = {
//     bot_express: {
//       name: "622-updated_bot-cDiu6t",
//       account_id: 613,
//       form_data: {
//         form_config: {
//           current_step: "MAINMENU",
//         },
//         MAINMENU: {
//           type: "condition",
//           config: {
//             includeLocation: false,
//             includeStatus: false,
//           },
//           card: {
//             location: "",
//             status: "",
//             menu: "",
//             main_menu: "", // Catalog
//             agent: "",
//             cu: "",
//           },
//         },
//         greeting: {
//           type: "card",
//           card: {
//             main_title: "",
//             subtitle: "",
//             message: "",
//           },
//           config: {
//             includeOperatingHours: false,
//           },
//         },
//         categories: {
//           type: "categories",
//           config: {},
//           card: {
//             title: "",
//             body: "",
//             footer: "",
//             button: "",
//             section: {
//               title: "",
//               list: [
//                 // {"id":1,"title":""}
//               ],
//             },
//           },
//         },
//         categorylink: {
//           type: "text",
//           config: {},
//           card: {
//             message: "",
//             category: 23,
//           },
//         },
//         preend: {
//           type: "card",
//           config: {
//             hasHuman: false,
//           },
//           card: {
//             title: "",
//             subtitle: "",
//           },
//         },
//         location: {
//           type: "text",
//           config: {},
//           card: {
//             title: "",
//             message: "",
//           },
//         },
//         orderstatus: {
//           type: "file",
//           config: {},
//           card: {
//             file_url: "",
//             label: "",
//           },
//         },
//         statusreply: {
//           type: "text",
//           config: {},
//           card: {
//             message: "",
//           },
//         },
//         errorstatus: {
//           type: "card",
//           config: {},
//           card: {
//             title: "",
//             subsitle: "",
//           },
//         },
//         agent: {
//           type: "text",
//           config: {},
//           card: {
//             message: "",
//           },
//         },
//       },
//     },
//   };
// };


/*
  - create a flow bot id
  - create a express bot id

  - update the flow bot
  - update the express bot id

  - get the flow bot
  - get the express bot form data by corrent_step

*/

const createNewBot = async (
  userObj,
  currentFormObj={},
  form_data = {}, // {MAINMENU:{type,card,config},....more}
) => {
  const { userId, name, accountId, authorizationToken,apiAccessToken } = userObj;
  const {  db_express_bot_id ,current_step, } = currentFormObj;

  // check if bot exist else use default data
  let existForm = defaultData.defautlFormData
  if(db_express_bot_id){
    // http://chatdev.peasy.ai/api/v1/accounts/613/bot_expresses/:express_bot_id
    const {data,isSuccess:isExpBotRetiveSucess} = await FormDBdata.getById(db_express_bot_id,accountId,apiAccessToken);
    if (isExpBotRetiveSucess) {
      existForm.bot_express = {...data}
    }
  }

  /*
    - create bot
    - get bot naem
    - create express bot
    -
  */


  // step 1: create a flow bot id
  const createBotPayload = {
    userId,
    name,
    accountId,
    authorizationToken,
  };
  // if already the existForm.name /the flow bot id/, then skip to create a new flowBotId
  // it is not returing the bot id, so need to change the resutl of this API
  const newBotId = "613-test-fbbot-vO6t43"; // get it from above(currently the API is not returing the id)
  let bot = { isSuccess: true, data: { id: newBotId } };
  // let bot = null;
  if (!db_express_bot_id) {
    const newBotName = "testDEF";
     bot = await createFlow({...createBotPayload,name:newBotName});
     console.log({bot});
     const newExpressEmptyPayload= {
      bot_express: {
          name: newBotName,
          template_name:"4-retailtemplatebot-zS1bC3",
          account_id: 613,
          form_data: {}
    }}
    const botCreateRes = await FormDBdata.createExpressBot(accountId,apiAccessToken,newExpressEmptyPayload);
    console.log({botCreateRes});
    const newBotRes = await FormDBdata.getById(newBotName,accountId,apiAccessToken)
    console.log({newBotRes}); /// use this bot_id
    // call templte bot by template id(main retail bot)
    return
    // call chatdev(POST) to create a jsonRow with same name
    // call chatdev to retrive the json with bot_id; which to use next
  }
  if (!bot.isSuccess) {
    return { isSuccess: false };
  }




  // create new bot express
  // step 2.2: create a new express bot id in chatdev
  const payloadForExpressBotDB = {
    // ...defaultData.defautlFormData,
    bot_express: {
      name: bot.data.id,
      account_id: accountId,
      form_data: {
        // spread existing form; get the existing formData from DB
        form_config: {
          current_step, // "MAINMENU"
        },
        ...existForm.bot_express.form_data,  // take previous/default data
        ...form_data,  // update with latest data
      },
    },
  };

  // update the flow bot by form_data
  // prepare flowBot from form_data and update  /payloadForExpressBotDB.form_data/
  // *****************Here write code || remove nodes & links based on form_data[node].config  *************************
  const updatedFlowbotPayload = bot_prepare_FandB(defaultData.fAndrBot,payloadForExpressBotDB.bot_express.form_data,userObj);
  // return updatedFlowbotPayload

  const updatedFlowBotRes = await FlowBot.exportUpdateFlow(payloadForExpressBotDB.bot_express.name,updatedFlowbotPayload,null,authorizationToken)

  // return updatedFlowBotRes // temporary


  // if db_express_bot_id? then update existing, else create new express bot
  if (db_express_bot_id) {
    // update bot express
    const {data:expressBotData} = await FormDBdata.updateExpressBotById(accountId,apiAccessToken,db_express_bot_id,payloadForExpressBotDB);

    return expressBotData
  }

  // here will be update
  // const {data:expressBotData} = await FormDBdata.createExpressBot(accountId,apiAccessToken,payloadForExpressBotDB)
  // step 3:use this bot id to update/export the real data from user form
  // return expressBotData;
  return
  // return with proper form data
};

const BotExpressRetrive = {
  getFormDataByCurrentStep: function(expressBotDbData,current_step){
    return expressBotDbData.form_data[current_step];
  },
  getFormDataByExpressBotId: async function(db_express_bot_id,accountId,apiAccessToken){
    const result = await FormDBdata.getById(db_express_bot_id,accountId,apiAccessToken);
    return result
  },

}

module.exports = {
  // bot_prepare_FandB,
  // formatUserJsonToFB_Json,
  // exportFlow,
  // createFlow,
  createNewBot,
  BotExpressRetrive,
};
