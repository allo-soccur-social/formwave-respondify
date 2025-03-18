
import React from "react";
import { useForm } from "@/context/FormContext";

const ProgressBar: React.FC = () => {
  const { progress } = useForm();
  
  return (
    <div className="w-full h-1 bg-slate-100">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
