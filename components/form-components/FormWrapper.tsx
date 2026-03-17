/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { KeyboardEventHandler, ReactNode } from "react";
import { Form } from "../ui/form";

type FormWrapperProps = {
  children: ReactNode;
  defaultValues?: FieldValues;
  resolver?: Resolver<any>;
  className?: string;
  onSubmit: SubmitHandler<any>;
  onKeyDown?: KeyboardEventHandler<HTMLFormElement>;
};

const FormWrapper = ({
  children,
  resolver,
  defaultValues,
  className,
  onSubmit,
  onKeyDown,
}: FormWrapperProps) => {
  const form = useForm({
    defaultValues,
    resolver,
  });

  const submit = (data: any) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form
        className={cn("w-full !font-dm-sans", className)}
        onSubmit={form.handleSubmit(submit)}
        onKeyDown={onKeyDown}
      >
        {children}
      </form>
    </Form>
  );
};

export default FormWrapper;