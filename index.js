const express = require('express');
const builder = require("./botBuilder")
const builderFB = require("./botBuilders/f_and_b")
const expressBot = require("./library/expressBot")




// console.log(BOTFILESORT.BOT_DATA_SORT);




const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Example of another route
app.get('/api', (req, res) => {
  const {main_bot,payload} = req.body;

    const {data} = builder.modifyBotFlowForFnbRetail(main_bot,payload)
    res.json(data);
});

const sampleUserField = {
  greeting:{
      card:{
          main_title:"",
          subtitle:"",
          message:""
      },
      includeOperatingHours: false,
  },
  MAINMENU:{
      includeLocation: false,
      location: "",
      includeStatus: false,
      status: "",
      menu: "",
      main_menu: "",
      agent: "",
      cu: "",
  },
  categories:{
      list: {
          title:"",
          body:"",
          footer:"",
          button:"",
      }
  },
  categorylink:{
      text:{
          message:""
      }
  },
  preend:{
      card:{
          title:"",
          subtitle:"",
      },
      hasHuman: false,
  },
  location:{
      title:"",
      text:{
          message:""
      }
  },
  statusreply:{
      text:{
          message:""
      }
  },
  errorstatus:{
      title:"",
      text:{
          message:""
      }
  },
  agent:{
      text:{
          message:""
      }
  },
}
app.get('/api/library', async(req, res) => {
  const {main_bot,payload} = req.body;
  const tempUser = {
    userId: 414,
    // name:"test-fbbot",
    accountId: 613,
    authorizationToken: "U2FsdGVkX1/3xH/Jz+DR4mB7wLnHylqNTeutZQsnt7E=",
    apiAccessToken: "6ajLRuWwkHuswzb8irgBbFEf",
  }

  const tempCurrentObj = {
    // flow_bot_id:"613-abctest-JjahLC",
    current_step:"MAINMENU",
    // db_express_bot_id: 2, // for 613-test-fbbot-vO6t43
  }

  const currentFormData = {
    MAINMENU: {
        type: "condition",
        config: {
            includeLocation: false,
            includeStatus: true
        },
        card: {
            location: "location",
            status: "status",
            menu: "menu",
            main_menu: "main",
            agent: "agent",
            cu: "cu"
        }
    }
  }
  const originalBotTemplateId = "4-retailtemplatebot-zS1bC3";
  const result = await expressBot.crateExpressBotFromTpl(tempUser,originalBotTemplateId)

  // const userFormatedPayload = builderFB.formatUserJsonToFB_Json()
    // const modifiedData = builderFB.bot_prepare_FandB(main_bot,payload);

    // const testBotId = '622-updated_bot-cDiu6t';
    // const authorizationToken = '';
    // const exportedResult = await builderFB.exportFlow(testBotId,modifiedData,null,authorizationToken)
    // const result = await builderFB.createNewBot(tempUser,tempCurrentObj,currentFormData)
    // return res.json(result);


    // retrive GET data
    // const mainFullDbExpBot = await builderFB.BotExpressRetrive.getFormDataByExpressBotId(tempCurrentObj.db_express_bot_id,tempUser.accountId,tempUser.apiAccessToken)
    // res.json(mainFullDbExpBot);
    // const mainDbExpBot = await builderFB.BotExpressRetrive.getFormDataByCurrentStep(mainFullDbExpBot.data,"MAINMENU")
    res.json(result);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
