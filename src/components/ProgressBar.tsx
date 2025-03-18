
import React from "react";
import { useForm } from "@/context/FormContext";

const ProgressBar: React.FC = () => {
  const { progress } = useForm();
  
  return (
    <div className="w-full h-1 bg-slate-100">
      <div 
        className="h-full bg-blue-500 transition-all duration-300 ease-in-out" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
