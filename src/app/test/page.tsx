"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ampData } from "./data"
import { useEffect, useState, useRef } from "react"
import { SwatchDataValue } from "./data"

export default function TestPage() {

  const [currentSelectedSize, setCurrentSelectedSize] = useState<string>("") // 用于保证 schema 是正确的

  // 动态生成 FormSchema
  const generateFormSchema = (currentSelectedSize: string) => {
    const schemaFields: Record<string, z.ZodTypeAny> = {}

    ampData.forEach((item, index) => {

      if (item.label.includes("Color")) {
        schemaFields[`Color`] = z.object({
          value_index: z.string().min(1, `请选择${item.label}`),
          label: z.string(),
          price: z.number(),
          option_id: z.string().optional()
        })
      } else {
        schemaFields[`${item.label}`] = z.object({
          value_index: z.string().min(1, `请选择${item.label}`),
          label: z.string(),
          price: z.number(),
          option_id: z.string().optional()
        })
      }

    })

    schemaFields["quantity"] = z.string().min(1, "请选择数量")

    const customSizeFields = ["bust", "waist", "hip", "hollowToFloor", "height", "extraLength"]
    customSizeFields.forEach(field => {
      schemaFields[field] = currentSelectedSize === "customized_size" 
        ? z.number().min(1, `${field}为必填项`)
        : z.number().optional()
    })

    return z.object(schemaFields)
  }

  const FormSchema = generateFormSchema(currentSelectedSize)

  console.log('❤️FormSchema', FormSchema);

  type FormValues = z.infer<typeof FormSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: ampData.reduce((acc, ampDataItem) => {
      if (ampDataItem.label === "Fabric") {
        const defaultValues = ampDataItem.values.find(item => item.label.includes("default"))
        acc[ampDataItem.label] = defaultValues ? {
          value_index: defaultValues.value_index.toString(),
          label: defaultValues.label,
          price: defaultValues.price,
          option_id: defaultValues.option_id.toString()
        } : undefined
      } else if (ampDataItem.label.startsWith("Color-")) {
        // 为每种面料的颜色设置默认值
        acc["Color"] = undefined
      } else {
        acc[ampDataItem.label] = undefined
      }
      return acc
    }, {} as FormValues)
  })

  const { watch, setValue, register, unregister, clearErrors, formState } = form
  const { errors } = formState

  // 添加这个 ref
  const formRef = useRef<HTMLFormElement>(null)

  // 添加这个 useEffect // TODO 有问题
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0]
      const errorElement = document.querySelector(`[name="${firstErrorKey}"]`)
      console.log('💛firstErrorKey', firstErrorKey);
      console.log('❤️errorElement', errorElement);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [errors])

  const allFormData = watch()

  const selectedFabric = watch("Fabric")

  const selectedSize = watch("Size")

  const selectedColor = watch("Color")

  console.log('allFormData', allFormData);

  // 重新生成 FormSchema
  useEffect(() => {
    setCurrentSelectedSize(selectedSize?.label)
  }, [selectedSize])

  // 监听面料变化, 如果面料变化, 颜色自动选中相同颜色
  useEffect(() => {
    if (selectedFabric) {
      const fabricName = ampData.find(d => d.label === "Fabric")?.values.find(v => v.value_index.toString() === selectedFabric?.value_index)?.label.replace("-default", "")


      if (fabricName) {
        const colorField = `Color-${fabricName}`
        const colorOptions = ampData.find(d => d.label.includes(colorField))?.values


        if (colorOptions && colorOptions.length > 0) {
          // 找到相同颜色的选项
          const sameColorOption = colorOptions.find(option => option.label === watch("Color")?.label)


          if (sameColorOption) {
            setValue("Color", {
              value_index: sameColorOption.value_index.toString(),
              label: sameColorOption.label,
              price: sameColorOption.price,
              sku: sameColorOption.sku
            })
          } else {
            // 如果找不到相同颜色，设置为 undefined
            setValue("Color", undefined)
          }
        } else {
          // 如果没有颜色选项，设置为 undefined
          setValue("Color", undefined)
        }
      }
    }
  }, [selectedFabric, watch, setValue])

  // 添加新的 useEffect 来监听 selectedSize 的变化
  useEffect(() => {
    if (selectedSize?.label === "customized_size") {
      // 如果选择了自定义尺寸，将这些字段设置为必填
      clearErrors()
    } else {
      // 如果没有选择自定义尺寸，将这些字段设置为可选
      unregister("bust")
      unregister("waist")
      unregister("hip")
      unregister("hollowToFloor")
      unregister("height")
      unregister("extraLength")
    }
  }, [selectedSize, register, unregister, clearErrors])

  function onSubmit(data: FormValues) {
    console.log('💚提交的数据', data);
    // 这里可以添加发送数据到服务器的逻辑
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {ampData.map((item, index) => {
          // fabric
          if (item.label === "Fabric") {
            return (
              <FormField
                key={item.uid}
                control={form.control}
                name={item.label}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          const selectedOption = item.values.find(v => v.value_index.toString() === value);
                          if (selectedOption) {
                            field.onChange({
                              value_index: value,
                              label: selectedOption.label,
                              price: selectedOption.price,
                              option_id: selectedOption.option_id.toString()
                            });
                          }
                        }}
                        value={field.value?.value_index}
                        className="flex flex-wrap gap-2"
                      >
                        {item.values.map((option) => (
                          <FabricRadioItem key={option.uid} item={option} />
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          }

          // color
          if (item.label.includes("Color")) {
            const fabricName = item.label.split("-")[1]
            if (selectedFabric && ampData.find(d => d.label === "Fabric")?.values.find(v => v.value_index.toString() === selectedFabric?.value_index)?.label.includes(fabricName)) {
              return (
                <FormField
                  key={item.uid}
                  control={form.control}
                  name={"Color"}
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>颜色</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            const selectedOption = item.values.find(v => v.value_index.toString() === value);
                            if (selectedOption) {
                              field.onChange({
                                value_index: value,
                                label: selectedOption.label,
                                price: selectedOption.price,
                                option_id: selectedOption.option_id.toString()
                              });
                            }
                          }}
                          value={field.value?.value_index}
                          className="flex flex-wrap gap-2"
                        >
                          {item.values.map((option) => (
                            <ColorRadioItem key={option.uid} item={option} />
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            }
            return null
          }

          // size or other
          return (
            <FormField
              key={item.uid}
              control={form.control}
              name={`${item.label}`}
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>{item.label}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        const selectedOption = item.values.find(v => v.value_index.toString() === value);
                        if (selectedOption) {
                          field.onChange({
                            value_index: value,
                            label: selectedOption.label,
                            price: selectedOption.price,
                            option_id: selectedOption.option_id.toString()
                          });
                        }
                      }}
                      value={field.value?.value_index}
                      className="flex flex-wrap gap-2"
                    >
                      {item.values.map((option) => (
                        <FabricRadioItem key={option.uid} item={option} />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        })}

        {selectedSize?.label === "customized_size" && (
          <div className="space-y-4">
            {[
              { name: "bust", label: "胸围", hint: "请输入30到68厘米之间的数值" },
              { name: "waist", label: "腰围", hint: "请输入22到70厘米之间的数值" },
              { name: "hip", label: "臀围", hint: "请输入30到75厘米之间的数值" },
              { name: "hollowToFloor", label: "空心到地板", hint: "请输入40到70厘米之间的数值" },
              { name: "height", label: "身高", hint: "请输入50到90厘米之间的数值" },
              { name: "extraLength", label: "额外长度", hint: "请输入0到6厘米之间的数值" },
            ].map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof FormValues}
                render={({ field: inputField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <input
                        {...inputField}
                        type="number"
                        onChange={(e) => inputField.onChange(Number(e.target.value))}
                        className="w-full p-2 border rounded"
                      />
                    </FormControl>
                    <p className="text-sm text-gray-500 mt-1">{field.hint}</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        )}

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>选择数量</FormLabel>
              <FormControl>
                <select
                  {...field as { value: string }}
                  className="quantityStepper_qtyselect__GB2nZ sm_h-9 h-[30px] w-20 appearance-none border border-solid border-[#ABA6A0] pl-2.5"
                >
                  <option value="" disabled>选择数量</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={(i + 1).toString()}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">提交</Button>
      </form>
    </Form>
  )
}

const ColorRadioItem = ({ item }: { item: SwatchDataValue }) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem value={item.value_index.toString()} className="peer sr-only" />
    </FormControl>
    <FormLabel className="flex flex-col items-center justify-between rounded-full border-transparent border-solid  border-[1px] p-1 hover:border-destructive peer-data-[state=checked]:border-destructive [&:has([data-state=checked])]:border-destructive">
      <div
        className="w-[30px] h-[30px] rounded-full"
        style={{
          backgroundColor: item?.swatch_data?.value || "transparent"
        }}
        data-cy="Swatch-root"
      />
    </FormLabel>
  </FormItem>
)

const FabricRadioItem = ({ item }: { item: SwatchDataValue }) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem value={item.value_index.toString()} className="peer sr-only" />
    </FormControl>
    <FormLabel className="tile_root__gozBD px-1 min-h-[36px] hover_border hover_border-solid hover_border-theme border border-solid border-bgtheme hover:bg-destructive peer-data-[state=checked]:bg-destructive [&:has([data-state=checked])]:bg-destructive   ">
      <div>{item.label}</div>
    </FormLabel>
  </FormItem>
)

const SizeRadioItem = ({ item }: { item: SwatchDataValue }) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem value={item.value_index.toString()} className="peer sr-only" />
    </FormControl>
    <FormLabel className="px-3 py-2 rounded-md border border-solid border-gray-300 hover:bg-gray-100 peer-data-[state=checked]:bg-blue-500 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:bg-blue-500 [&:has([data-state=checked])]:text-white">
      <div>{item.label}</div>
    </FormLabel>
  </FormItem>
)