
const retailFormJson = {
    id:"",
    name:"",
    bot_id: '',  // '126-new-bot-H2bJBn' after create new bot
    template_name: '', // '4-shuvo_testbot_generator-H2bJBn'
    account_id: null,  // 613
    bot_description:"details of retail bot",
    form_data: {
        Greeting:{
            type:"content",
            contents: [
                {
                    type: "card",
                    title:"hi5 Welcome",
                    subtitle:"hi5 Hi, welcome to Company Name. Our operation hours are from Mon-Fri 10am-10pm. Do let us know how can we help you",
                    actionButtons:[
                        {visibility:true,title:"hi5 Catalog"},
                        {visibility:true,title:"hi5 Status"},
                        {visibility:false,title:"hi5 Location"},
                    ],
                    extraConfig:{
                        isMentionOperatingHour: true,
                    }
                },
            ],
        },
        Location:{
            type:"content",
            contents: [
                {
                    type: "text",
                    value:"55 Please visit us at https://googlemap.com?q=<latitude>,<longitude>",
                    extraConfig:{
                        includeGoogleMap: true,
                    }
                },
            ],
        },
        Categories:{
            type:"content",
            contents: [
                {
                    type: "category_list",
                    title:"Catalog",
                    body:"Let us know what do you fancy",
                    footer:"Select a category to browse items",
                    button:"Categories",
                    sections:[
                        {
                            title:"Promo",
                            rows:[
                                {id:19,title:"Cakes"},
                                {id:22,title:"Brownies & Bars"},
                                {id:24,title:"Icebox Desserts"},
                            ]
                        }
                    ],
                },
            ],
        },
        categorylink:{
            "type": "content",
            "contents": [
                {
                    "type": "text",
                    "value": "Please browse the items here: https://shop.peasy.ai/app/accounts/{{account_id}}/?name=Peasy&category={{event.payload.text}}",
                }
            ]
        },
        preend:{
            type: "content",
            contents: [
                {
                    type: "card",
                    title:"Chop",
                    subtitle:"Is there anything else I can help you with? Select Menu if you like to browse other items or return to the main option, Agent to speak to our human agent. Otherwise select CU to end this conversation",
                    actionButtons:[
                        {visibility:true,title:"Menu"},
                        {visibility:false,title:"Agent"},
                        {visibility:true,title:"CU"},
                    ],
                    // extraConfig:{
                    //     hasHuman: true,
                    // }
                },
            ],
        },
        orderstatus:{
            type: "content",
            contents: [
                {
                    type: "image",
                    "title": "Please specify your order ID. You can get your order ID from this link: https://shop.peasy.ai/app/accounts/{{account_id}}/payment.  ",

                }
            ]
        },
        statusreply:{
            type: "content",
            contents: [
                {
                    type: "text",
                    value: "Thanks for your patience. Your order status is {{temp.response.body.status}}",
                }
            ],
        },
        errorstatus:{
            type: "content",
            contents: [
                {
                    type: "card",
                    title: "Sorry",
                    subtitle: "Sorry, this order does not exist. Please ensure that you key in just your order ID. For example, if your order ID is 123, please reply 123. Otherwise, please select Menu to return to the main menu, Agent to speak to our human agent or CU to end this conversation",
                    actionButtons:[
                        {visibility:true,title:"Menu"},
                        {visibility:true,title:"Agent"},
                        {visibility:true,title:"CU"},
                    ]
                }
            ],
        },
        agent:{
            type: "content",
            contents: [
                {
                    type: "text",
                    value: "Our agent will attend to you shortly. Appreciate your patience",
                }
            ],
        },
    }







}

module.exports = {
    retailFormJson,
}