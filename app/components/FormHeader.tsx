import React from "react";
import Image from "next/image";

const FormHeader: React.FC = () => (
  <>
    <header className="flex justify-between items-center mb-4">
      <div className="w-[100px] h-[100px]">
        <Image src="/assets/logo.png" alt="Company Logo" width={100} height={100} priority />
      </div>
      <h1 className="card-title">STUDENT ELIGIBILITY REPORT</h1>
      <span className="text-lg">FORM 1</span>
    </header>
    <p className="text-center mb-4">Please type or print neatly</p>
  </>
);

export default FormHeader;