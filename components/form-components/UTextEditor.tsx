"use client";

import { useFormContext, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// 🔥 Generic Props টাইপ
type UTextEditorProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

export default function UTextEditor<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
}: UTextEditorProps<T>) {
  const { control } = useFormContext<T>();

  const joditConfig = useMemo(
    () => ({
      height: 500,
      placeholder: placeholder || "Start typing...",
      uploader: {
        insertImageAsBase64URI: true,
      },
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "fontsize",
        "brush",
        "ul",
        "ol",
        "copyformat",
        "paragraph",
        "superscript",
        "subscript",
        "cut",
        "copy",
        "paste",
        "undo",
        "redo",
        "table",
        "lineHeight",
        "image",
        "preview",
      ],
      toolbarAdaptive: false,
    }),
    [placeholder]
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>

          <FormControl>
            <div className="relative">
              <JoditEditor
              
                value={field.value || ""}
                config={joditConfig}
                onBlur={(content: string) => field.onChange(content)}
              />
            </div>
          </FormControl>

          <FormMessage className="text-danger" />
        </FormItem>
      )}
    />
  );
}