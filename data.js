const fAndrBot = {
    "nodes": {
        "node-start": {
            "id": "node-start",
            "title": "Start",
            "size": {
                "width": 150,
                "height": 100
            },
            "coordinates": {
                "x": -681.5,
                "y": 62
            },
            "data": {
                "color": "#f3f3f3",
                "deletable": false,
                "type": "entry"
            },
            "portsIn": {},
            "portsOut": {
                "default": ""
            }
        },
        "condition-TuCl4": {
            "id": "condition-TuCl4",
            "title": "condition-TuCl4",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": -259.5,
                "y": 65
            },
            "data": {
                "color": "#f3f3f3",
                "type": "condition",
                "contents": [
                    {
                        "type": "otherwise-condition",
                        "condId": "port-out-condition-otherwise-TuCl4"
                    },
                    {
                        "type": "condition-group",
                        "contents": [
                            {
                                "type": "condition-response",
                                "operator": {
                                    "id": "op-equal",
                                    "name": "Equal"
                                },
                                "operandB": {
                                    "id": "op-text",
                                    "name": "Text"
                                },
                                "attrType": {
                                    "id": "standard",
                                    "name": "Standard"
                                },
                                "attr": {
                                    "id": "name",
                                    "name": "Name"
                                },
                                "value": "pz:4000",
                                "name": "",
                                "condId": "condition-outport-343bnO",
                                "customAttr": "",
                                "paramName": "",
                                "propertyName": ""
                            },
                            {
                                "value": "",
                                "type": "condition-op-logical",
                                "logicalOperator": {
                                    "id": "or",
                                    "name": "OR"
                                }
                            },
                            {
                                "type": "condition-contact",
                                "operator": {
                                    "id": "op-equal",
                                    "name": "Equal"
                                },
                                "operandB": {
                                    "id": "op-text",
                                    "name": "Text"
                                },
                                "attrType": {
                                    "id": "custom",
                                    "name": "Custom"
                                },
                                "attr": {
                                    "id": "name",
                                    "name": "Name"
                                },
                                "value": "on",
                                "name": "",
                                "condId": "condition-outport-ABTDZS",
                                "customAttr": "chatbot",
                                "paramName": "",
                                "propertyName": ""
                            },
                            {
                                "value": "",
                                "type": "condition-op-logical",
                                "logicalOperator": {
                                    "id": "or",
                                    "name": "OR"
                                }
                            },
                            {
                                "type": "condition-contact",
                                "operator": {
                                    "id": "op-x-null",
                                    "name": "is Null"
                                },
                                "operandB": {
                                    "id": "op-text",
                                    "name": "Text"
                                },
                                "attrType": {
                                    "id": "custom",
                                    "name": "Custom"
                                },
                                "attr": {
                                    "id": "name",
                                    "name": "Name"
                                },
                                "value": "",
                                "name": "",
                                "condId": "condition-outport-hjTeeA",
                                "customAttr": "chatbot",
                                "paramName": "",
                                "propertyName": ""
                            },
                            {
                                "value": "",
                                "type": "condition-op-logical",
                                "logicalOperator": {
                                    "id": "or",
                                    "name": "OR"
                                }
                            },
                            {
                                "type": "condition-contact",
                                "operator": {
                                    "id": "op-x-empty",
                                    "name": "is Empty"
                                },
                                "operandB": {
                                    "id": "op-text",
                                    "name": "Text"
                                },
                                "attrType": {
                                    "id": "custom",
                                    "name": "Custom"
                                },
                                "attr": {
                                    "id": "name",
                                    "name": "Name"
                                },
                                "value": "",
                                "name": "",
                                "condId": "condition-outport-tw2Ixv",
                                "customAttr": "chatbot",
                                "paramName": "",
                                "propertyName": ""
                            }
                        ],
                        "condId": "condition-outport-i8vUxf"
                    },
                    {
                        "type": "condition-contact",
                        "operator": {
                            "id": "op-equal",
                            "name": "Equal"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "custom",
                            "name": "Custom"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "off",
                        "name": "",
                        "condId": "condition-outport-ngeZHU",
                        "customAttr": "chatbot",
                        "paramName": "",
                        "propertyName": ""
                    }
                ],
                "customName": "Maincondition"
            },
            "portsIn": {
                "port-in-condition-TuCl4": ""
            },
            "portsOut": {
                "condition-outport-i8vUxf": "",
                "port-out-condition-otherwise-TuCl4": ""
            }
        },
        "action-S5KfW": {
            "id": "action-S5KfW",
            "title": "action-S5KfW",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 2088.5,
                "y": 128
            },
            "data": {
                "color": "#f3f3f3",
                "type": "action",
                "contents": [
                    {
                        "type": "action-contact",
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": {
                            "id": "variable",
                            "name": "Variable"
                        },
                        "attrType": {
                            "id": "custom",
                            "name": "Custom"
                        },
                        "name": "off",
                        "customAttr": "chatbot",
                        "custom": "",
                        "paramName": ""
                    }
                ],
                "customName": "lastnode"
            },
            "portsIn": {
                "port-in-action-S5KfW": ""
            },
            "portsOut": {
                "port-out-action-S5KfW": ""
            }
        },
        "content-cqQB0": {
            "id": "content-cqQB0",
            "title": "content-cqQB0",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1124.5,
                "y": 120
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "",
                        "type": "card",
                        "title": "Welcome",
                        "subtitle": "Hi, welcome to Company Name. Our operation hours are from Mon-Fri 10am-10pm. Do let us know how can we help you",
                        "file": "",
                        "actionButtons": [
                            {
                                "buttonTitle": "Catalog",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "Catalog"
                            },
                            {
                                "buttonTitle": "Status",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "Status"
                            },
                            {
                                "buttonTitle": "Location",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "Location"
                            }
                        ]
                    }
                ],
                "customName": "Greeting",
                "waitForUserMessage": true
            },
            "portsIn": {
                "port-in-content-cqQB0": ""
            },
            "portsOut": {
                "port-out-content-cqQB0": ""
            }
        },
        "condition-4RJQ6": {
            "id": "condition-4RJQ6",
            "title": "condition-4RJQ6",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 653.5,
                "y": -232
            },
            "data": {
                "color": "#f3f3f3",
                "type": "condition",
                "contents": [
                    {
                        "type": "otherwise-condition",
                        "condId": "port-out-condition-otherwise-4RJQ6"
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "Status",
                        "name": "",
                        "condId": "condition-outport-n8yc5M",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "Location",
                        "name": "",
                        "condId": "condition-outport-rNTN9w",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "Catalog",
                        "name": "",
                        "condId": "condition-outport-AkRZsz",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "CU",
                        "name": "",
                        "condId": "condition-outport-SkKzff",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "Menu",
                        "name": "",
                        "condId": "condition-outport-7XwaD0",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "Agent",
                        "name": "",
                        "condId": "condition-outport-0UtByu",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    }
                ],
                "customName": "MAINMENU"
            },
            "portsIn": {
                "port-in-condition-4RJQ6": ""
            },
            "portsOut": {
                "condition-outport-n8yc5M": "",
                "condition-outport-rNTN9w": "",
                "condition-outport-AkRZsz": "",
                "condition-outport-SkKzff": "",
                "condition-outport-7XwaD0": "",
                "condition-outport-0UtByu": "",
                "port-out-condition-otherwise-4RJQ6": ""
            },
            "contents": [
                {
                    "type": "otherwise-condition",
                    "condId": "port-out-condition-otherwise-4RJQ6"
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "Status",
                    "name": "",
                    "condId": "condition-outport-n8yc5M",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "Location",
                    "name": "",
                    "condId": "condition-outport-rNTN9w",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "Catalog",
                    "name": "",
                    "condId": "condition-outport-AkRZsz",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "CU",
                    "name": "",
                    "condId": "condition-outport-SkKzff",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "Menu",
                    "name": "",
                    "condId": "condition-outport-7XwaD0",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "Agent",
                    "name": "",
                    "condId": "condition-outport-0UtByu",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                }
            ]
        },
        "content-sqvGE": {
            "id": "content-sqvGE",
            "title": "content-sqvGE",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1031.5,
                "y": -215
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "type": "category_list",
                        "title": "Catalog",
                        "body": "Let us know what do you fancy",
                        "footer": "Select a category to browse items",
                        "button": "Categories",
                        "action": {
                            "sections": [
                                {
                                    "title": "Promo",
                                    "rows": [
                                        {
                                            "id": 19,
                                            "title": "Cakes"
                                        },
                                        {
                                            "id": 22,
                                            "title": "Brownies & Bars"
                                        },
                                        {
                                            "id": 24,
                                            "title": "Icebox Desserts"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "customName": "Categories",
                "waitForUserMessage": true
            },
            "portsIn": {
                "port-in-content-sqvGE": ""
            },
            "portsOut": {
                "port-out-content-sqvGE": ""
            }
        },
        "content-DHcHX": {
            "id": "content-DHcHX",
            "title": "content-DHcHX",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1322.5,
                "y": -108
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "Please browse the items here: https://shop.peasy.ai/app/accounts/{{account_id}}/?name=Peasy&category={{event.payload.text}}",
                        "type": "text"
                    }
                ],
                "customName": "categorylink"
            },
            "portsIn": {
                "port-in-content-DHcHX": ""
            },
            "portsOut": {
                "port-out-content-DHcHX": ""
            }
        },
        "content-hRi2d": {
            "id": "content-hRi2d",
            "title": "content-hRi2d",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1706.5,
                "y": -331
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "",
                        "type": "card",
                        "title": "Chop",
                        "subtitle": "Is there anything else I can help you with? Select Menu if you like to browse other items or return to the main option, Agent to speak to our human agent. Otherwise select CU to end this conversation",
                        "file": "",
                        "actionButtons": [
                            {
                                "buttonTitle": "Menu",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "Menu"
                            },
                            {
                                "buttonTitle": "Agent",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "Agent"
                            },
                            {
                                "buttonTitle": "CU",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "CU"
                            }
                        ]
                    }
                ],
                "customName": "preend",
                "waitForUserMessage": true
            },
            "portsIn": {
                "port-in-content-hRi2d": ""
            },
            "portsOut": {
                "port-out-content-hRi2d": ""
            }
        },
        "content-AuxkD": {
            "id": "content-AuxkD",
            "title": "content-AuxkD",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1031.5,
                "y": -73
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "Please visit us at https://googlemap.com",
                        "type": "text"
                    }
                ],
                "customName": "Location"
            },
            "portsIn": {
                "port-in-content-AuxkD": ""
            },
            "portsOut": {
                "port-out-content-AuxkD": ""
            }
        },
        "call-api-3KXCN": {
            "id": "call-api-3KXCN",
            "title": "call-api-3KXCN",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1187.5,
                "y": -613
            },
            "data": {
                "color": "#f3f3f3",
                "type": "call-api",
                "skillData": {
                    "method": "get",
                    "memory": "temp",
                    "randomId": "",
                    "body": "{\n    \"order_id\" : \"{{event.payload.text}}\"\n}",
                    "headers": "{\n  \"accesstoken\": \"WhQ0rIdgngdgdfgjjjjjjjjjjjjjjjjjjjXCX\",\n  \"Content-Type\": \"application/json\",\n  \"Accept\": \"application/json\",\n  \"Host\": \"chat.peasy.ai\"\n}",
                    "url": null,
                    "variable": "response",
                    "invalidJson": false
                },
                "contents": [
                    {
                        "type": "call-api-success",
                        "condId": "call-api-success-3KXCN"
                    },
                    {
                        "type": "call-api-failure",
                        "condId": "call-api-success-3KXCN"
                    }
                ],
                "customName": "callstatusapi"
            },
            "portsIn": {
                "port-in-call-api-3KXCN": ""
            },
            "portsOut": {
                "call-api-success-3KXCN": "",
                "call-api-failure-3KXCN": ""
            }
        },
        "content-nxu0T": {
            "id": "content-nxu0T",
            "title": "content-nxu0T",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 872.5,
                "y": -611
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "orderstatus-1733900781067.png",
                        "type": "image",
                        "title": "Please specify your order ID. You can get your order ID from this link: https://shop.peasy.ai/app/accounts/{{account_id}}/payment.  ",
                        "isUploading": false,
                        "url": ""
                    }
                ],
                "customName": "orderstatus",
                "waitForUserMessage": true
            },
            "portsIn": {
                "port-in-content-nxu0T": ""
            },
            "portsOut": {
                "port-out-content-nxu0T": ""
            }
        },
        "content-x81Ot": {
            "id": "content-x81Ot",
            "title": "content-x81Ot",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1481.5,
                "y": -690
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "Thanks for your patience. Your order status is {{temp.response.body.status}}",
                        "type": "text"
                    }
                ],
                "customName": "statusreply"
            },
            "portsIn": {
                "port-in-content-x81Ot": ""
            },
            "portsOut": {
                "port-out-content-x81Ot": ""
            }
        },
        "content-fI01Z": {
            "id": "content-fI01Z",
            "title": "content-fI01Z",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1483.5,
                "y": -549
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "",
                        "type": "card",
                        "title": "Sorry",
                        "subtitle": "Sorry, this order does not exist. Please ensure that you key in just your order ID. For example, if your order ID is 123, please reply 123. Otherwise, please select Menu to return to the main menu, Agent to speak to our human agent or CU to end this conversation",
                        "file": "",
                        "actionButtons": [
                            {
                                "buttonTitle": "Menu",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "Menu"
                            },
                            {
                                "buttonTitle": "Agent",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "Agent"
                            },
                            {
                                "buttonTitle": "CU",
                                "selectedAction": {
                                    "id": "act-btn-say",
                                    "name": "Say Something"
                                },
                                "buttonValue": "CU"
                            }
                        ]
                    }
                ],
                "customName": "errorstatus",
                "waitForUserMessage": true
            },
            "portsIn": {
                "port-in-content-fI01Z": ""
            },
            "portsOut": {
                "port-out-content-fI01Z": ""
            },
            "contents": [
                {
                    "value": "",
                    "type": "card",
                    "title": "Sorry",
                    "subtitle": "Sorry, this order does not exist. Please ensure that you key in just your order ID. For example, if your order ID is 123, please reply 123. Otherwise, please select Menu to return to the main menu, Agent to speak to our human agent or CU to end this conversation",
                    "file": "",
                    "actionButtons": [
                        {
                            "buttonTitle": "Menu",
                            "selectedAction": {
                                "id": "act-btn-say",
                                "name": "Say Something"
                            },
                            "buttonValue": "Menu"
                        },
                        {
                            "buttonTitle": "Agent",
                            "selectedAction": {
                                "id": "act-btn-say",
                                "name": "Say Something"
                            },
                            "buttonValue": "Agent"
                        },
                        {
                            "buttonTitle": "CU",
                            "selectedAction": {
                                "id": "act-btn-say",
                                "name": "Say Something"
                            },
                            "buttonValue": "CU"
                        }
                    ]
                }
            ]
        },
        "condition-nabDu": {
            "id": "condition-nabDu",
            "title": "condition-nabDu",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 1872.5,
                "y": -760
            },
            "data": {
                "color": "#f3f3f3",
                "type": "condition",
                "contents": [
                    {
                        "type": "otherwise-condition",
                        "condId": "port-out-condition-otherwise-nabDu"
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "Menu",
                        "name": "",
                        "condId": "condition-outport-D37Z47",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "Agent",
                        "name": "",
                        "condId": "condition-outport-8H4a8n",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    },
                    {
                        "type": "condition-response",
                        "operator": {
                            "id": "op-contains",
                            "name": "Contains"
                        },
                        "operandB": {
                            "id": "op-text",
                            "name": "Text"
                        },
                        "attrType": {
                            "id": "standard",
                            "name": "Standard"
                        },
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": "CU",
                        "name": "",
                        "condId": "condition-outport-ymmaa5",
                        "customAttr": "",
                        "paramName": "",
                        "propertyName": ""
                    }
                ],
                "customName": "secondmenu"
            },
            "portsIn": {
                "port-in-condition-nabDu": ""
            },
            "portsOut": {
                "condition-outport-D37Z47": "",
                "condition-outport-8H4a8n": "",
                "condition-outport-ymmaa5": "",
                "port-out-condition-otherwise-nabDu": ""
            },
            "contents": [
                {
                    "type": "otherwise-condition",
                    "condId": "port-out-condition-otherwise-nabDu"
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "Menu",
                    "name": "",
                    "condId": "condition-outport-D37Z47",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "Agent",
                    "name": "",
                    "condId": "condition-outport-8H4a8n",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                },
                {
                    "type": "condition-response",
                    "operator": {
                        "id": "op-contains",
                        "name": "Contains"
                    },
                    "operandB": {
                        "id": "op-text",
                        "name": "Text"
                    },
                    "attrType": {
                        "id": "standard",
                        "name": "Standard"
                    },
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": "CU",
                    "name": "",
                    "condId": "condition-outport-ymmaa5",
                    "customAttr": "",
                    "paramName": "",
                    "propertyName": ""
                }
            ]
        },
        "content-0SKHz": {
            "id": "content-0SKHz",
            "title": "content-0SKHz",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 2237.5,
                "y": -552
            },
            "data": {
                "color": "#f3f3f3",
                "type": "content",
                "contents": [
                    {
                        "value": "Our agent will attend to you shortly. Appreciate your patience",
                        "type": "text"
                    }
                ],
                "customName": "agent"
            },
            "portsIn": {
                "port-in-content-0SKHz": ""
            },
            "portsOut": {
                "port-out-content-0SKHz": ""
            }
        },
        "action-XxGTk": {
            "id": "action-XxGTk",
            "title": "action-XxGTk",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 2631.5,
                "y": -561
            },
            "data": {
                "color": "#f3f3f3",
                "type": "action",
                "contents": [
                    {
                        "type": "action-label",
                        "action": {
                            "id": "label-add",
                            "name": "Add Label"
                        },
                        "name": "agent"
                    }
                ],
                "customName": "action-XxGTk"
            },
            "portsIn": {
                "port-in-action-XxGTk": ""
            },
            "portsOut": {
                "port-out-action-XxGTk": ""
            }
        },
        "action-j8iqI": {
            "id": "action-j8iqI",
            "title": "action-j8iqI",
            "size": {
                "width": 160,
                "height": 120
            },
            "coordinates": {
                "x": 109.5,
                "y": -145
            },
            "data": {
                "color": "#f3f3f3",
                "type": "action",
                "contents": [
                    {
                        "type": "action-contact",
                        "attr": {
                            "id": "name",
                            "name": "Name"
                        },
                        "value": {
                            "id": "custom",
                            "name": "Custom"
                        },
                        "attrType": {
                            "id": "custom",
                            "name": "Custom"
                        },
                        "name": "",
                        "customAttr": "chatbot",
                        "custom": "on",
                        "paramName": ""
                    }
                ],
                "customName": "action-j8iqI"
            },
            "portsIn": {
                "port-in-action-j8iqI": ""
            },
            "portsOut": {
                "port-out-action-j8iqI": ""
            },
            "contents": [
                {
                    "type": "action-contact",
                    "attr": {
                        "id": "name",
                        "name": "Name"
                    },
                    "value": {
                        "id": "custom",
                        "name": "Custom"
                    },
                    "attrType": {
                        "id": "custom",
                        "name": "Custom"
                    },
                    "name": "",
                    "customAttr": "chatbot",
                    "custom": "on",
                    "paramName": ""
                }
            ]
        }
    },
    "links": {
        "01JET7HK47QV2GV52TE33F4F45": {
            "id": "01JET7HK47QV2GV52TE33F4F45",
            "start_id": "node-start",
            "start_port": "default",
            "end_id": "condition-TuCl4",
            "end_port": "port-in-condition-TuCl4",
            "breakPoints": []
        },
        "01JET7J9068TNVZGFDMADSB9HG": {
            "id": "01JET7J9068TNVZGFDMADSB9HG",
            "start_id": "condition-TuCl4",
            "start_port": "port-out-condition-otherwise-TuCl4",
            "end_id": "action-S5KfW",
            "end_port": "port-in-action-S5KfW",
            "breakPoints": []
        },
        "01JET7Y12A9R3NNMF43R32DBJR": {
            "id": "01JET7Y12A9R3NNMF43R32DBJR",
            "start_id": "condition-4RJQ6",
            "start_port": "condition-outport-AkRZsz",
            "end_id": "content-sqvGE",
            "end_port": "port-in-content-sqvGE",
            "breakPoints": []
        },
        "01JET7YEVM17TYXX6XB0W0XASW": {
            "id": "01JET7YEVM17TYXX6XB0W0XASW",
            "start_id": "content-sqvGE",
            "start_port": "port-out-content-sqvGE",
            "end_id": "content-DHcHX",
            "end_port": "port-in-content-DHcHX",
            "breakPoints": []
        },
        "01JET852YDKZYQBKVT2NJ5KFXY": {
            "id": "01JET852YDKZYQBKVT2NJ5KFXY",
            "start_id": "content-DHcHX",
            "start_port": "port-out-content-DHcHX",
            "end_id": "content-hRi2d",
            "end_port": "port-in-content-hRi2d",
            "breakPoints": []
        },
        "01JET855PSJWD6KXE6NEWPFWPQ": {
            "id": "01JET855PSJWD6KXE6NEWPFWPQ",
            "start_id": "content-hRi2d",
            "start_port": "port-out-content-hRi2d",
            "end_id": "condition-4RJQ6",
            "end_port": "port-in-condition-4RJQ6",
            "breakPoints": [
                {
                    "x": 1858.5,
                    "y": -361
                },
                {
                    "x": 578.5,
                    "y": -365
                }
            ]
        },
        "01JET869R5NC7PZ2EZ8T28VP8H": {
            "id": "01JET869R5NC7PZ2EZ8T28VP8H",
            "start_id": "content-cqQB0",
            "start_port": "port-out-content-cqQB0",
            "end_id": "condition-4RJQ6",
            "end_port": "port-in-condition-4RJQ6",
            "breakPoints": [
                {
                    "x": 1475.5,
                    "y": 204
                },
                {
                    "x": 1400.5,
                    "y": 432
                },
                {
                    "x": 591.5,
                    "y": 150
                }
            ]
        },
        "01JET86KT518F70J60JK86GZ0S": {
            "id": "01JET86KT518F70J60JK86GZ0S",
            "start_id": "condition-4RJQ6",
            "start_port": "condition-outport-7XwaD0",
            "end_id": "content-cqQB0",
            "end_port": "port-in-content-cqQB0",
            "breakPoints": []
        },
        "01JET86PT2MZW23D63AFT064K4": {
            "id": "01JET86PT2MZW23D63AFT064K4",
            "start_id": "condition-4RJQ6",
            "start_port": "port-out-condition-otherwise-4RJQ6",
            "end_id": "content-cqQB0",
            "end_port": "port-in-content-cqQB0",
            "breakPoints": []
        },
        "01JET8780PAB2P41AN3YZ0DE8R": {
            "id": "01JET8780PAB2P41AN3YZ0DE8R",
            "start_id": "condition-4RJQ6",
            "start_port": "condition-outport-SkKzff",
            "end_id": "action-S5KfW",
            "end_port": "port-in-action-S5KfW",
            "breakPoints": []
        },
        "01JET88JB2C1BE8QE8R8MPST5F": {
            "id": "01JET88JB2C1BE8QE8R8MPST5F",
            "start_id": "condition-4RJQ6",
            "start_port": "condition-outport-rNTN9w",
            "end_id": "content-AuxkD",
            "end_port": "port-in-content-AuxkD",
            "breakPoints": []
        },
        "01JET88NEXX5N55PK3JK6W3K7D": {
            "id": "01JET88NEXX5N55PK3JK6W3K7D",
            "start_id": "content-AuxkD",
            "start_port": "port-out-content-AuxkD",
            "end_id": "content-hRi2d",
            "end_port": "port-in-content-hRi2d",
            "breakPoints": []
        },
        "01JET8S2S2F2FPKQZ53HWBZP13": {
            "id": "01JET8S2S2F2FPKQZ53HWBZP13",
            "start_id": "condition-4RJQ6",
            "start_port": "condition-outport-n8yc5M",
            "end_id": "content-nxu0T",
            "end_port": "port-in-content-nxu0T",
            "breakPoints": []
        },
        "01JET9HXPG4S3EW1EHVJ2TAAHM": {
            "id": "01JET9HXPG4S3EW1EHVJ2TAAHM",
            "start_id": "content-nxu0T",
            "start_port": "port-out-content-nxu0T",
            "end_id": "call-api-3KXCN",
            "end_port": "port-in-call-api-3KXCN",
            "breakPoints": []
        },
        "01JET9KPNSDNVSY6ZFN8HS5W63": {
            "id": "01JET9KPNSDNVSY6ZFN8HS5W63",
            "start_id": "call-api-3KXCN",
            "start_port": "call-api-success-3KXCN",
            "end_id": "content-x81Ot",
            "end_port": "port-in-content-x81Ot",
            "breakPoints": []
        },
        "01JET9P1GS3Y73GKARY80PF4ED": {
            "id": "01JET9P1GS3Y73GKARY80PF4ED",
            "start_id": "call-api-3KXCN",
            "start_port": "call-api-failure-3KXCN",
            "end_id": "content-fI01Z",
            "end_port": "port-in-content-fI01Z",
            "breakPoints": []
        },
        "01JET9RSBS48EPZ7T6KB0G3A23": {
            "id": "01JET9RSBS48EPZ7T6KB0G3A23",
            "start_id": "content-x81Ot",
            "start_port": "port-out-content-x81Ot",
            "end_id": "content-hRi2d",
            "end_port": "port-in-content-hRi2d",
            "breakPoints": []
        },
        "01JET9S30W7Z965ZVQF6Y8A8RD": {
            "id": "01JET9S30W7Z965ZVQF6Y8A8RD",
            "start_id": "condition-nabDu",
            "start_port": "port-out-condition-otherwise-nabDu",
            "end_id": "call-api-3KXCN",
            "end_port": "port-in-call-api-3KXCN",
            "breakPoints": [
                {
                    "x": 2219.5,
                    "y": -650
                },
                {
                    "x": 2141.5,
                    "y": -796
                },
                {
                    "x": 1131.5,
                    "y": -758
                }
            ]
        },
        "01JET9T0BMNA50JPS3TMV649FC": {
            "id": "01JET9T0BMNA50JPS3TMV649FC",
            "start_id": "condition-nabDu",
            "start_port": "condition-outport-D37Z47",
            "end_id": "content-cqQB0",
            "end_port": "port-in-content-cqQB0",
            "breakPoints": [
                {
                    "x": 2869.5,
                    "y": -279
                }
            ]
        },
        "01JET9V5HP22X5SBMRVNDAR0KV": {
            "id": "01JET9V5HP22X5SBMRVNDAR0KV",
            "start_id": "condition-nabDu",
            "start_port": "condition-outport-8H4a8n",
            "end_id": "content-0SKHz",
            "end_port": "port-in-content-0SKHz",
            "breakPoints": []
        },
        "01JET9VAF725GNB11E5GKRT16H": {
            "id": "01JET9VAF725GNB11E5GKRT16H",
            "start_id": "content-0SKHz",
            "start_port": "port-out-content-0SKHz",
            "end_id": "action-XxGTk",
            "end_port": "port-in-action-XxGTk",
            "breakPoints": []
        },
        "01JET9VG0A0VJ4X2X172AKA9ME": {
            "id": "01JET9VG0A0VJ4X2X172AKA9ME",
            "start_id": "action-XxGTk",
            "start_port": "port-out-action-XxGTk",
            "end_id": "action-S5KfW",
            "end_port": "port-in-action-S5KfW",
            "breakPoints": []
        },
        "01JF7BVMBHTR9G9NE5ZZHD40TJ": {
            "id": "01JF7BVMBHTR9G9NE5ZZHD40TJ",
            "start_id": "condition-TuCl4",
            "start_port": "condition-outport-i8vUxf",
            "end_id": "action-j8iqI",
            "end_port": "port-in-action-j8iqI",
            "breakPoints": []
        },
        "01JF7BVPJG1GW4408HDZYEDNBJ": {
            "id": "01JF7BVPJG1GW4408HDZYEDNBJ",
            "start_id": "action-j8iqI",
            "start_port": "port-out-action-j8iqI",
            "end_id": "condition-4RJQ6",
            "end_port": "port-in-condition-4RJQ6",
            "breakPoints": []
        },
        "01JF7C9ZB0H2KNPZ4VXTP23C72": {
            "id": "01JF7C9ZB0H2KNPZ4VXTP23C72",
            "start_id": "condition-4RJQ6",
            "start_port": "condition-outport-0UtByu",
            "end_id": "content-0SKHz",
            "end_port": "port-in-content-0SKHz",
            "breakPoints": [
                {
                    "x": 2186.5,
                    "y": -19
                },
                {
                    "x": 2142.5,
                    "y": -458
                }
            ]
        },
        "01JF7CEEDXF0B2WPXX95DQ7RVC": {
            "id": "01JF7CEEDXF0B2WPXX95DQ7RVC",
            "start_id": "content-fI01Z",
            "start_port": "port-out-content-fI01Z",
            "end_id": "condition-nabDu",
            "end_port": "port-in-condition-nabDu",
            "breakPoints": []
        },
        "01JF7CF4435XFGZMM23JN9VRXX": {
            "id": "01JF7CF4435XFGZMM23JN9VRXX",
            "start_id": "condition-nabDu",
            "start_port": "condition-outport-ymmaa5",
            "end_id": "action-S5KfW",
            "end_port": "port-in-action-S5KfW",
            "breakPoints": []
        }
    },
    "template": true,
    "isSuperAdmin": false
}

const defautlFormData = {
    bot_express: {
      // id: 11,
    //   name: "622-updated_bot-cDiu6t",
    //   account_id: 613,
      form_data: {
        form_config: {
          current_step: "MAINMENU"
        },
        MAINMENU: {
          type: "condition",
          config: {
            includeLocation: false,
            includeStatus: false
          },
          card: {
            location: "",
            status: "",
            menu: "",
            main_menu: "",
            agent: "",
            cu: ""
          }
        },
        greeting: {
          type: "card",
          card: {
            main_title: "",
            subtitle: "",
            message: ""
          },
          config: {
            includeOperatingHours: false
          }
        },
        categories: {
          type: "categories",
          config: {},
          card: {
            title: "",
            body: "",
            footer: "",
            button: "",
            section: {
              title: "",
              list: []
            }
          }
        },
        categorylink: {
          type: "text",
          config: {},
          card: {
            message: "",
            category: 23
          }
        },
        preend: {
          type: "card",
          config: {
            hasHuman: false
          },
          card: {
            title: "",
            subtitle: ""
          }
        },
        location: {
          type: "text",
          config: {},
          card: {
            title: "",
            message: ""
          }
        },
        orderstatus: {
          type: "file",
          config: {},
          card: {
            file_url: "",
            label: ""
          }
        },
        statusreply: {
          type: "text",
          config: {},
          card: {
            message: ""
          }
        },
        errorstatus: {
          type: "card",
          config: {},
          card: {
            title: "",
            subsitle: ""
          }
        },
        agent: {
          type: "text",
          config: {},
          card: {
            message: ""
          }
        }
      }
    }
  }

module.exports = {
    defautlFormData,
    fAndrBot,
}

/*
const fieldDbJson = {
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
*/

/*

when submit click:
1. take user form data
2. save into database
3. create a new bot
4. update(export) the bot with the user form data
5. return the bot data & form data

:
make a step list to operate Next & Pre button

make separate

const formJson_shuvoTestBot = {
    id:"",
    bot_template_id: '4-shuvo_testbot_generator-H2bJBn',
    bot_id: '126-new-bot-H2bJBn',  // after create new bot
    bot_name:"retail",
    bot_description:"details of retail bot",
    contents: [
        {
            testcard:{
                type:"content",
                contents: [
                    {
                        type: "text",
                        value:"bye"
                    },
                ],
            }
        },
        {
            shuvocard: {
                type:"content",
                contents: [
                    {
                        type: "text",
                        value:"hello"
                    },
                    {
                        type: "card",
                        title:"hello",
                        subtitle:"hello",
                        actionButtons:[
                            {visibility:true,title:"a"},
                            {visibility:true,title:"b"},
                        ]
                    },
                ],
            }
        },
        {
            acontent:{
                type:"content",
                contents: [
                    {
                        type: "text",
                        value:"buy buy"
                    },
                    {
                        type: "text",
                        value:""
                    },
                ],
            }
        },

    ]

}



*/


const formJson_shuvoRetailBot = {
    id:"",
    name:"",
    bot_id: '126-new-bot-H2bJBn',  // after create new bot
    template_name: '4-shuvo_testbot_generator-H2bJBn',
    account_id: 613,
    bot_description:"details of retail bot",
    form_data: [
        {
            Greeting:{
                type:"content",
                contents: [
                    {
                        type: "card",
                        title:"Welcome",
                        subtitle:"Hi, welcome to Company Name. Our operation hours are from Mon-Fri 10am-10pm. Do let us know how can we help you",
                        actionButtons:[
                            {visibility:true,title:"Catalog"},
                            {visibility:true,title:"Status"},
                            {visibility:true,title:"Location"},
                        ],
                        extraConfig:{
                            isMentionOperatingHour: true,
                        }
                    },
                ],
            },
            // MAINMENU: {
            //     type: "condition",
            //     contents: [
            //         {visibility:true,title:"Location"},
            //         {visibility:true,title:"Status",},
            //         {visibility:true,title:"Menu",},
            //     ]
            // }
        },
        {
            Location:{
                type:"content",
                contents: [
                    {
                        type: "text",
                        value:"Please visit us at https://googlemap.com?q=<latitude>,<longitude>",
                        extraConfig:{
                            includeGoogleMap: true,
                        }
                    },
                ],
            }
        },
        {
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
            }
        },
        {
            categorylink:{
                "type": "content",
                "contents": [
                    {
                        "type": "text",
                        "value": "Please browse the items here: https://shop.peasy.ai/app/accounts/{{account_id}}/?name=Peasy&category={{event.payload.text}}",
                    }
                ]
            }
        },
        {
            preend:{
                type: "content",
                contents: [
                    {
                        type: "card",
                        title:"Chop",
                        subtitle:"Is there anything else I can help you with? Select Menu if you like to browse other items or return to the main option, Agent to speak to our human agent. Otherwise select CU to end this conversation",
                        actionButtons:[
                            {visibility:true,title:"Menu"},
                            {visibility:true,title:"Agent"},
                            {visibility:true,title:"CU"},
                        ],
                        // extraConfig:{
                        //     hasHuman: true,
                        // }
                    },
                ],
            },
            // MAINMENU: {
            //     type: "condition",
            //     contents: [
            //         {
            //             visibility:true,
            //             title:"agent"
            //         },
            //         {
            //             visibility:true,
            //             title:"cu"
            //         },
            //     ]
            // }
        },
        {
            orderstatus:{
                type: "content",
                contents: [
                    {
                        type: "image",
                        "title": "Please specify your order ID. You can get your order ID from this link: https://shop.peasy.ai/app/accounts/{{account_id}}/payment.  ",

                    }
                ]
            }
        },
        {
            statusreply:{
                type: "content",
                contents: [
                    {
                        type: "text",
                        value: "Thanks for your patience. Your order status is {{temp.response.body.status}}",
                    }
                ],
            }
        },
        {
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
            }
        },
        {
            agent:{
                type: "content",
                contents: [
                    {
                        type: "text",
                        value: "Our agent will attend to you shortly. Appreciate your patience",
                    }
                ],
            }
        },


    ]

}
