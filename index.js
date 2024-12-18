const express = require('express');
const builder = require("./botBuilder")
const builderFB = require("./botBuilders/f_and_b")




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
app.get('/api/new', async(req, res) => {
  const {main_bot,payload} = req.body;

    const modifiedData = builderFB.bot_prepare_FandB(main_bot,payload);

    const testBotId = '622-updated_bot-cDiu6t';
    const authorizationToken = '';
    const exportedResult = await builderFB.exportFlow(testBotId,modifiedData,null,authorizationToken)

    res.json(exportedResult);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
