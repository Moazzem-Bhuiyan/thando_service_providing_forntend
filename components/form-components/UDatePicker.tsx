/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Calendar } from "@/components/ui/calendar";

export default function UDatePicker({
  name,
  label,
  disabledBeforeToday = false,
}: any) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: any) => (
        <FormItem>
          <FormLabel className="text-md font-normal">{label}</FormLabel>

          <FormControl>
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={
                disabledBeforeToday
                  ? { before: new Date() }
                  : undefined
              }
              className="rounded-md border"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}