export type Root = Root2[]

export interface Root2 {
    uid: string
    label: string
    attribute_id: string
    type: string
    sort_order: number
    values: SwatchDataValue[]
    __typename: string
}

export interface SwatchDataValue {
    uid: string
    option_id: number
    value_index: number
    default_label: string
    label: string
    price: number
    sku?: string | null
    swatch_data?: SwatchData | null
    __typename: string
}

export interface SwatchData {
    type?: string | null 
    value?: string | null
    thumbnail?: string | null
    __typename: string
}


export const ampData: Root = [
    {
        "uid": "MzA5MDA=",
        "label": "Fabric",
        "attribute_id": "30900",
        "type": "radio",
        "sort_order": 1,
        "values": [
            {
                "uid": "NDQ5NjIy",
                "option_id": 30900,
                "value_index": 449622,
                "default_label": "Crystal Satin-default",
                "label": "Crystal Satin-default",
                "price": 0,
                "sku": null,
                "swatch_data": null,
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDQ5NjIz",
                "option_id": 30900,
                "value_index": 449623,
                "default_label": "Satin Charmeuse",
                "label": "Satin Charmeuse",
                "price": 0,
                "sku": "ST",
                "swatch_data": null,
                "__typename": "CustomizableRadioValue"
            }
        ],
        "__typename": "AmProtCustomizableRadioOption"
    },
    {
        "uid": "MzE1NDg=",
        "label": "Color-Crystal Satin",
        "attribute_id": "31548",
        "type": "drop_down",
        "sort_order": 2,
        "values": [
            {
                "uid": "NDYzNTM3",
                "option_id": 31548,
                "value_index": 463537,
                "default_label": "Ivory",
                "label": "Ivory",
                "price": 0,
                "sku": "2",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#efefe6",
                    "thumbnail": "#efefe6",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTM4",
                "option_id": 31548,
                "value_index": 463538,
                "default_label": "Champagne",
                "label": "Champagne",
                "price": 0,
                "sku": "5",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#e6dcc5",
                    "thumbnail": "#e6dcc5",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTM5",
                "option_id": 31548,
                "value_index": 463539,
                "default_label": "Taupe",
                "label": "Taupe",
                "price": 0,
                "sku": "19",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#bfaca2",
                    "thumbnail": "#bfaca2",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQw",
                "option_id": 31548,
                "value_index": 463540,
                "default_label": "Black Metallic",
                "label": "Black Metallic",
                "price": 0,
                "sku": "29",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#3f4249",
                    "thumbnail": "#3f4249",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQx",
                "option_id": 31548,
                "value_index": 463541,
                "default_label": "Baby Blue",
                "label": "Baby Blue",
                "price": 0,
                "sku": "127",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#aed2ff",
                    "thumbnail": "#aed2ff",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQy",
                "option_id": 31548,
                "value_index": 463542,
                "default_label": "Ink blue",
                "label": "Ink blue",
                "price": 0,
                "sku": "129",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#0f546b",
                    "thumbnail": "#0f546b",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQz",
                "option_id": 31548,
                "value_index": 463543,
                "default_label": "Dusty Blue",
                "label": "Dusty Blue",
                "price": 0,
                "sku": "195",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#889bae",
                    "thumbnail": "#889bae",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQ0",
                "option_id": 31548,
                "value_index": 463544,
                "default_label": "Navy",
                "label": "Navy",
                "price": 0,
                "sku": "137",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#20457d",
                    "thumbnail": "#20457d",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQ1",
                "option_id": 31548,
                "value_index": 463545,
                "default_label": "Dark Navy",
                "label": "Dark Navy",
                "price": 0,
                "sku": "131",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#353755",
                    "thumbnail": "#353755",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQ2",
                "option_id": 31548,
                "value_index": 463546,
                "default_label": "Pearl Pink",
                "label": "Pearl Pink",
                "price": 0,
                "sku": "69",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#f0d3c9",
                    "thumbnail": "#f0d3c9",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQ3",
                "option_id": 31548,
                "value_index": 463547,
                "default_label": "Dusty Rose",
                "label": "Dusty Rose",
                "price": 0,
                "sku": "79",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#d09894",
                    "thumbnail": "#d09894",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQ4",
                "option_id": 31548,
                "value_index": 463548,
                "default_label": "Rose Quartz",
                "label": "Rose Quartz",
                "price": 0,
                "sku": "78",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#ddb5b3",
                    "thumbnail": "#ddb5b3",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTQ5",
                "option_id": 31548,
                "value_index": 463549,
                "default_label": "Desert Rose",
                "label": "Desert Rose",
                "price": 0,
                "sku": "196",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#b77b82",
                    "thumbnail": "#b77b82",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTUw",
                "option_id": 31548,
                "value_index": 463550,
                "default_label": "Tango Red",
                "label": "Tango Red",
                "price": 0,
                "sku": "60",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#ab0e2d",
                    "thumbnail": "#ab0e2d",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTUx",
                "option_id": 31548,
                "value_index": 463551,
                "default_label": "Deep Claret",
                "label": "Deep Claret",
                "price": 0,
                "sku": "61",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#9a1834",
                    "thumbnail": "#9a1834",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTUy",
                "option_id": 31548,
                "value_index": 463552,
                "default_label": "Burgundy",
                "label": "Burgundy",
                "price": 0,
                "sku": "64",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#7c2439",
                    "thumbnail": "#7c2439",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTUz",
                "option_id": 31548,
                "value_index": 463553,
                "default_label": "Mist",
                "label": "Mist",
                "price": 0,
                "sku": "126",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#cbdede",
                    "thumbnail": "#cbdede",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTU0",
                "option_id": 31548,
                "value_index": 463554,
                "default_label": "Sage Green",
                "label": "Sage Green",
                "price": 0,
                "sku": "197",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#adc3b7",
                    "thumbnail": "#adc3b7",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTU1",
                "option_id": 31548,
                "value_index": 463555,
                "default_label": "Green Olive",
                "label": "Green Olive",
                "price": 0,
                "sku": "158",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#8a8751",
                    "thumbnail": "#8a8751",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTU2",
                "option_id": 31548,
                "value_index": 463556,
                "default_label": "Fennel Seed",
                "label": "Fennel Seed",
                "price": 0,
                "sku": "174",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#857b58",
                    "thumbnail": "#857b58",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTU3",
                "option_id": 31548,
                "value_index": 463557,
                "default_label": "Deep Lake",
                "label": "Deep Lake",
                "price": 0,
                "sku": "156",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#00585e",
                    "thumbnail": "#00585e",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTU4",
                "option_id": 31548,
                "value_index": 463558,
                "default_label": "Hunter Green",
                "label": "Hunter Green",
                "price": 0,
                "sku": "161",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#314f41",
                    "thumbnail": "#314f41",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTU5",
                "option_id": 31548,
                "value_index": 463559,
                "default_label": "Light Gold",
                "label": "Light Gold",
                "price": 0,
                "sku": "6",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#e3cb92",
                    "thumbnail": "#e3cb92",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTYw",
                "option_id": 31548,
                "value_index": 463560,
                "default_label": "Raw Sienna",
                "label": "Raw Sienna",
                "price": 0,
                "sku": "215",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#d68b59",
                    "thumbnail": "#d68b59",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTYx",
                "option_id": 31548,
                "value_index": 463561,
                "default_label": "Tangerine",
                "label": "Tangerine",
                "price": 0,
                "sku": "53",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#c76632",
                    "thumbnail": "#c76632",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTYy",
                "option_id": 31548,
                "value_index": 463562,
                "default_label": "Purple Haze",
                "label": "Purple Haze",
                "price": 0,
                "sku": "115",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#baa9be",
                    "thumbnail": "#baa9be",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            }
        ],
        "__typename": "AmProtCustomizableDropDownOption"
    },
    {
        "uid": "MzE1NDk=",
        "label": "Color-Satin Charmeuse",
        "attribute_id": "31549",
        "type": "drop_down",
        "sort_order": 3,
        "values": [
            {
                "uid": "NDYzNTYz",
                "option_id": 31549,
                "value_index": 463563,
                "default_label": "Ivory",
                "label": "Ivory",
                "price": 0,
                "sku": "2",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#efefe6",
                    "thumbnail": "#efefe6",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTY0",
                "option_id": 31549,
                "value_index": 463564,
                "default_label": "Champagne",
                "label": "Champagne",
                "price": 0,
                "sku": "5",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#e6dcc5",
                    "thumbnail": "#e6dcc5",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTY1",
                "option_id": 31549,
                "value_index": 463565,
                "default_label": "Taupe",
                "label": "Taupe",
                "price": 0,
                "sku": "19",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#bfaca2",
                    "thumbnail": "#bfaca2",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTY2",
                "option_id": 31549,
                "value_index": 463566,
                "default_label": "Black Metallic",
                "label": "Black Metallic",
                "price": 0,
                "sku": "29",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#3f4249",
                    "thumbnail": "#3f4249",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTY3",
                "option_id": 31549,
                "value_index": 463567,
                "default_label": "Baby Blue",
                "label": "Baby Blue",
                "price": 0,
                "sku": "127",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#aed2ff",
                    "thumbnail": "#aed2ff",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTg5",
                "option_id": 31549,
                "value_index": 463589,
                "default_label": "Blue Ashes",
                "label": "Blue Ashes",
                "price": 0,
                "sku": "202",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#395d76",
                    "thumbnail": "#395d76",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTY4",
                "option_id": 31549,
                "value_index": 463568,
                "default_label": "Ink blue",
                "label": "Ink blue",
                "price": 0,
                "sku": "129",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#0f546b",
                    "thumbnail": "#0f546b",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTY5",
                "option_id": 31549,
                "value_index": 463569,
                "default_label": "Dusty Blue",
                "label": "Dusty Blue",
                "price": 0,
                "sku": "195",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#889bae",
                    "thumbnail": "#889bae",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTcw",
                "option_id": 31549,
                "value_index": 463570,
                "default_label": "Navy",
                "label": "Navy",
                "price": 0,
                "sku": "137",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#20457d",
                    "thumbnail": "#20457d",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTcx",
                "option_id": 31549,
                "value_index": 463571,
                "default_label": "Dark Navy",
                "label": "Dark Navy",
                "price": 0,
                "sku": "131",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#353755",
                    "thumbnail": "#353755",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTcy",
                "option_id": 31549,
                "value_index": 463572,
                "default_label": "Pearl Pink",
                "label": "Pearl Pink",
                "price": 0,
                "sku": "69",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#f0d3c9",
                    "thumbnail": "#f0d3c9",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTcz",
                "option_id": 31549,
                "value_index": 463573,
                "default_label": "Dusty Rose",
                "label": "Dusty Rose",
                "price": 0,
                "sku": "79",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#d09894",
                    "thumbnail": "#d09894",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTc0",
                "option_id": 31549,
                "value_index": 463574,
                "default_label": "Rose Quartz",
                "label": "Rose Quartz",
                "price": 0,
                "sku": "78",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#ddb5b3",
                    "thumbnail": "#ddb5b3",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTc1",
                "option_id": 31549,
                "value_index": 463575,
                "default_label": "Desert Rose",
                "label": "Desert Rose",
                "price": 0,
                "sku": "196",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#b77b82",
                    "thumbnail": "#b77b82",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTc2",
                "option_id": 31549,
                "value_index": 463576,
                "default_label": "Tango Red",
                "label": "Tango Red",
                "price": 0,
                "sku": "60",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#ab0e2d",
                    "thumbnail": "#ab0e2d",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTc3",
                "option_id": 31549,
                "value_index": 463577,
                "default_label": "Deep Claret",
                "label": "Deep Claret",
                "price": 0,
                "sku": "61",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#9a1834",
                    "thumbnail": "#9a1834",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTc4",
                "option_id": 31549,
                "value_index": 463578,
                "default_label": "Burgundy",
                "label": "Burgundy",
                "price": 0,
                "sku": "64",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#7c2439",
                    "thumbnail": "#7c2439",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTc5",
                "option_id": 31549,
                "value_index": 463579,
                "default_label": "Mist",
                "label": "Mist",
                "price": 0,
                "sku": "126",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#cbdede",
                    "thumbnail": "#cbdede",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTgw",
                "option_id": 31549,
                "value_index": 463580,
                "default_label": "Sage Green",
                "label": "Sage Green",
                "price": 0,
                "sku": "197",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#adc3b7",
                    "thumbnail": "#adc3b7",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTkw",
                "option_id": 31549,
                "value_index": 463590,
                "default_label": "Deep Sea",
                "label": "Deep Sea",
                "price": 0,
                "sku": "176",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#669489",
                    "thumbnail": "#669489",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTgx",
                "option_id": 31549,
                "value_index": 463581,
                "default_label": "Green Olive",
                "label": "Green Olive",
                "price": 0,
                "sku": "158",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#8a8751",
                    "thumbnail": "#8a8751",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTgy",
                "option_id": 31549,
                "value_index": 463582,
                "default_label": "Fennel Seed",
                "label": "Fennel Seed",
                "price": 0,
                "sku": "174",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#857b58",
                    "thumbnail": "#857b58",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTgz",
                "option_id": 31549,
                "value_index": 463583,
                "default_label": "Deep Lake",
                "label": "Deep Lake",
                "price": 0,
                "sku": "156",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#00585e",
                    "thumbnail": "#00585e",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTg0",
                "option_id": 31549,
                "value_index": 463584,
                "default_label": "Hunter Green",
                "label": "Hunter Green",
                "price": 0,
                "sku": "161",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#314f41",
                    "thumbnail": "#314f41",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTg1",
                "option_id": 31549,
                "value_index": 463585,
                "default_label": "Light Gold",
                "label": "Light Gold",
                "price": 0,
                "sku": "6",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#e3cb92",
                    "thumbnail": "#e3cb92",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTg2",
                "option_id": 31549,
                "value_index": 463586,
                "default_label": "Raw Sienna",
                "label": "Raw Sienna",
                "price": 0,
                "sku": "215",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#d68b59",
                    "thumbnail": "#d68b59",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTg3",
                "option_id": 31549,
                "value_index": 463587,
                "default_label": "Tangerine",
                "label": "Tangerine",
                "price": 0,
                "sku": "53",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#c76632",
                    "thumbnail": "#c76632",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTg4",
                "option_id": 31549,
                "value_index": 463588,
                "default_label": "Purple Haze",
                "label": "Purple Haze",
                "price": 0,
                "sku": "115",
                "swatch_data": {
                    "type": "ColorSwatchData",
                    "value": "#baa9be",
                    "thumbnail": "#baa9be",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTkx",
                "option_id": 31549,
                "value_index": 463591,
                "default_label": "Dusty Blue Peonies",
                "label": "Dusty Blue Peonies",
                "price": 5,
                "sku": "P08",
                "swatch_data": {
                    "type": "ImageSwatchData",
                    "value": "/p/0/p08.jpg",
                    "thumbnail": "/p/0/p08.jpg",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTky",
                "option_id": 31549,
                "value_index": 463592,
                "default_label": "Oceanic Fantasy Rose",
                "label": "Oceanic Fantasy Rose",
                "price": 5,
                "sku": "P01",
                "swatch_data": {
                    "type": "ImageSwatchData",
                    "value": "/p/0/p01.jpg",
                    "thumbnail": "/p/0/p01.jpg",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDY1NDkx",
                "option_id": 31549,
                "value_index": 465491,
                "default_label": "Blue Romantic Bouquet",
                "label": "Blue Romantic Bouquet",
                "price": 5,
                "sku": "P10",
                "swatch_data": {
                    "type": "ImageSwatchData",
                    "value": "/p/1/p10_3.jpg",
                    "thumbnail": "/p/1/p10_3.jpg",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            },
            {
                "uid": "NDYzNTkz",
                "option_id": 31549,
                "value_index": 463593,
                "default_label": "Sage Garden Party",
                "label": "Sage Garden Party",
                "price": 5,
                "sku": "P09",
                "swatch_data": {
                    "type": "ImageSwatchData",
                    "value": "/p/0/p09.jpg",
                    "thumbnail": "/p/0/p09.jpg",
                    "__typename": "SwatchData"
                },
                "__typename": "AmProtCustomizableDropDownValue"
            }
        ],
        "__typename": "AmProtCustomizableDropDownOption"
    },
    {
        "uid": "MzE1NTA=",
        "label": "Size",
        "attribute_id": "31550",
        "type": "radio",
        "sort_order": 4,
        "values": [
            {
                "uid": "NDYzNTk2",
                "option_id": 31550,
                "value_index": 463596,
                "default_label": "0",
                "label": "0",
                "price": 0,
                "sku": "US0",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "0",
                    "thumbnail": "0",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNTk3",
                "option_id": 31550,
                "value_index": 463597,
                "default_label": "2",
                "label": "2",
                "price": 0,
                "sku": "US2",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "2",
                    "thumbnail": "2",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNTk4",
                "option_id": 31550,
                "value_index": 463598,
                "default_label": "4",
                "label": "4",
                "price": 0,
                "sku": "US4",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "4",
                    "thumbnail": "4",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNTk5",
                "option_id": 31550,
                "value_index": 463599,
                "default_label": "6",
                "label": "6",
                "price": 0,
                "sku": "US6",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "6",
                    "thumbnail": "6",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjAw",
                "option_id": 31550,
                "value_index": 463600,
                "default_label": "8",
                "label": "8",
                "price": 0,
                "sku": "US8",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "8",
                    "thumbnail": "8",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjAx",
                "option_id": 31550,
                "value_index": 463601,
                "default_label": "10",
                "label": "10",
                "price": 0,
                "sku": "US10",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "10",
                    "thumbnail": "10",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjAy",
                "option_id": 31550,
                "value_index": 463602,
                "default_label": "12",
                "label": "12",
                "price": 0,
                "sku": "US12",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "12",
                    "thumbnail": "12",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjAz",
                "option_id": 31550,
                "value_index": 463603,
                "default_label": "14",
                "label": "14",
                "price": 0,
                "sku": "US14",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "14",
                    "thumbnail": "14",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjA0",
                "option_id": 31550,
                "value_index": 463604,
                "default_label": "16",
                "label": "16",
                "price": 0,
                "sku": "US16",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "16",
                    "thumbnail": "16",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjA1",
                "option_id": 31550,
                "value_index": 463605,
                "default_label": "18",
                "label": "18",
                "price": 0,
                "sku": "US18",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "18",
                    "thumbnail": "18",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjA2",
                "option_id": 31550,
                "value_index": 463606,
                "default_label": "20",
                "label": "20",
                "price": 0,
                "sku": "US20",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "20",
                    "thumbnail": "20",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjA3",
                "option_id": 31550,
                "value_index": 463607,
                "default_label": "22",
                "label": "22",
                "price": 0,
                "sku": "US22",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "22",
                    "thumbnail": "22",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjA4",
                "option_id": 31550,
                "value_index": 463608,
                "default_label": "24",
                "label": "24",
                "price": 0,
                "sku": "US24",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "24",
                    "thumbnail": "24",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjA5",
                "option_id": 31550,
                "value_index": 463609,
                "default_label": "26",
                "label": "26",
                "price": 0,
                "sku": "US26",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "26",
                    "thumbnail": "26",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjEw",
                "option_id": 31550,
                "value_index": 463610,
                "default_label": "28",
                "label": "28",
                "price": 0,
                "sku": "US28",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "28",
                    "thumbnail": "28",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjEx",
                "option_id": 31550,
                "value_index": 463611,
                "default_label": "30",
                "label": "30",
                "price": 0,
                "sku": "US30",
                "swatch_data": {
                    "type": "TextSwatchData",
                    "value": "30",
                    "thumbnail": "30",
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            },
            {
                "uid": "NDYzNjEy",
                "option_id": 31550,
                "value_index": 463612,
                "default_label": "customized_size",
                "label": "customized_size",
                "price": 0,
                "sku": null,
                "swatch_data": {
                    "type": null,
                    "value": null,
                    "thumbnail": null,
                    "__typename": "SwatchData"
                },
                "__typename": "CustomizableRadioValue"
            }
        ],
        "__typename": "AmProtCustomizableRadioOption"
    }
]