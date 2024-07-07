import React from "react";
import Image from "next/image";

const FormHeader: React.FC = () => (
  <>
    <header className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
      <div className="w-[100px] h-[100px]">
        <Image src="/assets/logo.png" alt="Company Logo" width={100} height={100} priority />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">STUDENT ELIGIBILITY REPORT</h1>
      <span className="badge badge-lg">FORM 1</span>
    </header>
    <p className="text-center mb-4 text-sm md:text-base">Please type or print neatly</p>
  </>
);

export default FormHeader;