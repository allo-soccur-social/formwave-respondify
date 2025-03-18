
import React from "react";
import { FormProvider } from "@/context/FormContext";
import MultiStepForm from "@/components/MultiStepForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <FormProvider>
          <MultiStepForm />
        </FormProvider>
      </div>
    </div>
  );
};

export default Index;
