"use client";

import { FormProvider as RHFormProvider, useFormContext } from 'react-hook-form';

export default function FormProvider({ children, ...methods }: any) {
  return <RHFormProvider {...methods}>{children}</RHFormProvider>;
}

export { useFormContext };
