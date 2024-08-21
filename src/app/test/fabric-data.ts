export type fabricColorDataRoot = fabricColorDataRoot2[]

export interface fabricColorDataRoot2 {
  __typename: string
  uid: string
  option_id: number
  value_index: number
  default_label: string
  label: string
  price: number
  sku?: string | null
  swatch_data: any
}


export const fabricColorData: fabricColorDataRoot = [
    {
        "__typename": "CustomizableRadioValue",
        "uid": "NDQ5NjIy",
        "option_id": 30900,
        "value_index": 449622,
        "default_label": "Crystal Satin-default",
        "label": "Crystal Satin-default",
        "price": 0,
        "sku": null,
        "swatch_data": null
    },
    {
        "__typename": "CustomizableRadioValue",
        "uid": "NDQ5NjIz",
        "option_id": 30900,
        "value_index": 449623,
        "default_label": "Satin Charmeuse",
        "label": "Satin Charmeuse",
        "price": 0,
        "sku": "ST",
        "swatch_data": null
    }
]