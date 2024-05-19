import React from "react";
import { FormProvider, useForm, FieldValues } from "react-hook-form";

interface FormProps<T extends FieldValues> {
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

function Form<T extends FieldValues>({ onSubmit, children }: FormProps<T>) {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default Form;
