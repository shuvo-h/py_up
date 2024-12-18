const axios = require("axios");

const baseUrl = "https://flowbot.peasy.ai";
const ACT = {
  MAINMENU_change: "MAINMENU_change",
  Maincondition_change: "Maincondition_change",
  greeting_change: "greeting_change",
  categories_change: "categories_change",
  categorylink_change: "categorylink_change",
  preend_change: "preend_change",
  location_change: "location_change",
  lastnode_change: "lastnode_change",
};

const bot_prepare_FandB = (mainBotData, userInputJson) => {
    try {
        const data = { ...mainBotData };
        // main update method
        function updateNode(nodeName, actionType, newValue) {
          for (const nodeId in data.nodes) {
            const node = data.nodes[nodeId];
            if (node.data && node.data.customName === nodeName) {
              if (actionType === ACT.MAINMENU_change) {
                // for "MAINMENU"
                if (newValue?.status)
                  node.data.contents[1].value = newValue.status.toLowerCase();
                if (newValue?.location)
                  node.data.contents[2].value = newValue.location.toLowerCase();
                if (newValue?.catalog)
                  node.data.contents[3].value = newValue.catalog.toLowerCase();
                if (newValue?.cu)
                  node.data.contents[4].value = newValue.cu.toLowerCase();
                if (newValue?.menu)
                  node.data.contents[5].value = newValue.menu.toLowerCase();
              } else if (actionType === ACT.Maincondition_change) {
                node.data.contents[1].contents[0].value = newValue;
                node.contents[1].contents[0].value = newValue; // node.contents[1].contents[0].value = newValue
              } else if (actionType === ACT.greeting_change) {
                // update data.content
                node.data.contents[0].title = newValue.title;
                node.data.contents[0].subtitle = newValue.subtitle;
                node.data.contents[0].actionButtons = newValue.actionButtons;

                // update node.contents
                node.contents[0].title = newValue.title;
                node.contents[0].subtitle = newValue.subtitle;
                node.contents[0].actionButtons = newValue.actionButtons;
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
                node.contents[0].title = newValue.title;
                node.contents[0].body = newValue.body;
                node.contents[0].footer = newValue.footer;
                node.contents[0].button = newValue.button;
                node.contents[0].action.sections[0].title = newValue.sectionTitle;
                node.contents[0].action.sections[0].rows = newValue.catalog;
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
                node.contents[0].title = newValue.title;
                node.contents[0].subtitle = newValue.subtitle;
                node.contents[0].actionButtons = newValue.actionButtons.map((el) => ({
                  buttonTitle: el.buttonTitle,
                  selectedAction: {
                    id: "act-btn-say",
                    name: "Say Something",
                  },
                  buttonValue: el.buttonValue,
                }));
              } else if (actionType === ACT.location_change) {
                // update data.content
                node.data.contents[0].value = newValue.link;
                // update node.contents
                node.contents[0].value = newValue.link;
              } else if (actionType === ACT.lastnode_change) {
                // update data.content
                node.data.contents[0].name = newValue.attributeName;
                node.data.contents[0].customAttr = newValue.customAttr;
                // update node.contents
                node.contents[0].name = newValue.attributeName;
                node.contents[0].customAttr = newValue.customAttr;
              } else if (actionType === "orderstatus_change") {
                // update data.content
                node.data.contents[0].title = newValue.title;
                // update node.contents
                node.contents[0].title = newValue.title;
              }
              // errorstatus_change
              else if (
                actionType === "statusreply_change" ||
                actionType === "errorstatus_change"
              ) {
                // update data.content
                node.data.contents[0].value = newValue.value;
                // update node.contents
                node.contents[0].value = newValue.value;
              } else if (actionType === "agent_change") {
                // update data.content
                node.data.contents[0].value = newValue.value;
                // update node.contents
                node.contents[0].value = newValue.value;
              }
            }
          }
        }

        //  Dynamically update the nodes
        for (let key of Object.keys(userInputJson)) {
          switch (key) {
            case "Maincondition":
              const PinTouchCode = `pz:${userInputJson[key].pinTouchCode}`;
              updateNode(key, ACT.Maincondition_change, PinTouchCode);
              break;
            case "MAINMENU":
              updateNode(key, ACT.MAINMENU_change, userInputJson[key]);
              break;
            case "Greeting":
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
              updateNode(key, ACT.location_change, userInputJson[key]);
              break;
            case "lastnode":
              updateNode(key, ACT.lastnode_change, userInputJson[key]);
              break;

            default:
              // updateNode(key, ACT.change_Maincondition, payloadObj[key]);
              break;
          }
        }

        return data

    } catch (error) {
        console.log(error);
        return null
    }


};
// call flowbot api by axios to update if exist else create new one
async function exportFlow(botId, flowData, template = null,authorizationToken) {
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
        'Authorization': authorizationToken,
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

async function createFlow(userId, name, template, accountId,authorizationToken) {
  globalUserId = userId;

  let response = {};

  try {
    const url = `${baseUrl}/create-bot`;

    // Prepare data for the request
    const data = new URLSearchParams();
    data.append("userid", userId);
    data.append("name", name);
    data.append("template", template.id);
    data.append("accountid", accountId);

    // Axios request configuration
    const config = {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization': authorizationToken,
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

module.exports = {
    bot_prepare_FandB,
    exportFlow,
    createFlow,
};
