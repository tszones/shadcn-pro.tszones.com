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
import {data, SwatchDataRoot2} from "./data"
import { fabricColorData, fabricColorDataRoot2 } from "./fabric-data"
import { sizeData, sizeDataRoot2 } from "./size-data"

const formConfig = {
  showFabric: false, // 根据实际情况设置为 true 或 false
  showColor: true,
  showSize: true,
  showQuantity: true,
};

const createDynamicFormSchema = (config: typeof formConfig) => {
  const schemaFields: Record<string, z.ZodTypeAny> = {};

  if (config.showFabric) {
    schemaFields.fabric = z.string().min(1, "请选择一种面料");
  }
  if (config.showColor) {
    schemaFields.color = z.string().min(1, "请选择一个颜色");
  }
  if (config.showSize) {
    schemaFields.size = z.string().min(1, "请选择一个尺寸");
  }
  if (config.showQuantity) {
    schemaFields.quantity = z.string().min(1, "请选择数量");
  }

  // 添加自定义尺寸字段
  const customSizeFields = [
    "bust", "waist", "hip", "hollowToFloor", "height", "extraLength"
  ];
  customSizeFields.forEach(field => {
    schemaFields[field] = z.string().optional();
  });

  return z.object(schemaFields).superRefine((data, ctx) => {
    if (data.size === "463612") {
      const customSizeValidation = [
        { name: "bust", min: 30, max: 68 },
        { name: "waist", min: 22, max: 70 },
        { name: "hip", min: 30, max: 75 },
        { name: "hollowToFloor", min: 40, max: 70 },
        { name: "height", min: 50, max: 90 },
        { name: "extraLength", min: 0, max: 6 },
      ];

      customSizeValidation.forEach(field => {
        const value = parseFloat(data[field.name as keyof typeof data] as string);
        if (isNaN(value) || value < field.min || value > field.max) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `${field.name} 必须在 ${field.min} 到 ${field.max} 厘米之间`,
            path: [field.name],
          });
        }
      });
    }
  });
};

const FormSchema = createDynamicFormSchema(formConfig);

const ColorRadioItem = ({ item }: {item: SwatchDataRoot2}) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem value={item.value_index.toString()} className="peer sr-only"  />
    </FormControl>
    <FormLabel   className="flex flex-col items-center justify-between rounded-full border-transparent border-solid  border-[1px] p-1 hover:border-destructive peer-data-[state=checked]:border-destructive [&:has([data-state=checked])]:border-destructive">
      <div
        className="w-[30px] h-[30px] rounded-full"
        style={{
          backgroundColor: item.swatch_data.value
        }}
        data-cy="Swatch-root"
      />
    </FormLabel>
  </FormItem>
)

const FabricRadioItem = ({ item }: { item: fabricColorDataRoot2 }) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem value={item.value_index.toString()} className="peer sr-only"/>
    </FormControl>
    <FormLabel className="tile_root__gozBD px-1 min-h-[36px] hover_border hover_border-solid hover_border-theme border border-solid border-bgtheme hover:bg-destructive peer-data-[state=checked]:bg-destructive [&:has([data-state=checked])]:bg-destructive   ">
      <div>{item.label}</div>
    </FormLabel>
  </FormItem>
)

const SizeRadioItem = ({ item }: { item: sizeDataRoot2 }) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem value={item.value_index.toString()} className="peer sr-only" />
    </FormControl>
    <FormLabel className="px-3 py-2 rounded-md border border-solid border-gray-300 hover:bg-gray-100 peer-data-[state=checked]:bg-blue-500 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:bg-blue-500 [&:has([data-state=checked])]:text-white">
      <div>{item.label}</div>
    </FormLabel>
  </FormItem>
)

export default function TestPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...(formConfig.showFabric && { fabric: "" }),
      ...(formConfig.showColor && { color: "" }),
      ...(formConfig.showSize && { size: "" }),
      ...(formConfig.showQuantity && { quantity: "" }),
    }
  })

  const {watch} = form

  const selectSize = watch("size")

  console.log('💚selectSize', selectSize);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { size, ...otherData } = data;
    let submissionData: any = { ...otherData, size };

    if (size === "463612") {
      submissionData.customSize = {
        bust: data.bust,
        waist: data.waist,
        hip: data.hip,
        hollowToFloor: data.hollowToFloor,
        height: data.height,
        extraLength: data.extraLength
      };
    }

    // 移除未使用的自定义尺寸字段
    ['bust', 'waist', 'hip', 'hollowToFloor', 'height', 'extraLength'].forEach(field => {
      delete submissionData[field];
    });

    console.log('💚提交的数据', submissionData);
    // 这里可以添加发送数据到服务器的逻辑
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {formConfig.showFabric && (
          <FormField
            control={form.control}
            name="fabric"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>选择面料</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value as string}
                    className="flex flex-wrap gap-2"
                  >
                    {fabricColorData.map((item: fabricColorDataRoot2) => (
                      <FabricRadioItem key={item.uid} item={item} />
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {formConfig.showColor && (
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>选择颜色</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value as string}
                    className="flex flex-wrap gap-2"
                  >
                    {data.map((item: SwatchDataRoot2) => (
                      <ColorRadioItem key={item.uid} item={item} />
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {formConfig.showSize && (
          <>
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>选择尺寸</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value as string}
                      className="flex flex-wrap gap-2"
                    >
                      {sizeData.map((item: sizeDataRoot2) => (
                        <SizeRadioItem key={item.uid} item={item} />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectSize === "463612" && (
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
                    name={field.name as keyof z.infer<typeof FormSchema>}
                    render={({ field: inputField }) => (
                      <FormItem>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl>
                          <input {...inputField} className="w-full p-2 border rounded" />
                        </FormControl>
                        <p className="text-sm text-gray-500 mt-1">{field.hint}</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {formConfig.showQuantity && (
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
        )}
        
        <Button type="submit">提交</Button>
      </form>
    </Form>
  )
}