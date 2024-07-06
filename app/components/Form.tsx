"use client";
import React from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { FormData } from "../types";
import FormHeader from "./FormHeader";
import PersonalInfo from "./PersonalInfo";
import TimelineEntries from "./TimelineEntries";
import SportEntries from "./SportEntries";
import Button from "./Button";
import { formSchema } from "../utils/validations";

const Form: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema) as Resolver<FormData> ,
    defaultValues: {
      timelineEntries: [
        { fromMonth: "", fromYear: "", toMonth: "", toYear: "", collegeOrJob: "" },
        { fromMonth: "", fromYear: "", toMonth: "", toYear: "", collegeOrJob: "" },
        { fromMonth: "", fromYear: "", toMonth: "", toYear: "", collegeOrJob: "" },
        { fromMonth: "", fromYear: "", toMonth: "", toYear: "", collegeOrJob: "" },
      ],
      sportEntries: [
        { sport: "", college: "", level: "", semester: "", year: "" },
        { sport: "", college: "", level: "", semester: "", year: "" },
        { sport: "", college: "", level: "", semester: "", year: "" },
        { sport: "", college: "", level: "", semester: "", year: "" },
      ],
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("/api/formData", data);
      if (response.status === 201) {
        toast.success("Form submitted successfully");
        reset();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <FormHeader />
        <PersonalInfo register={register} errors={errors} />
        <TimelineEntries control={control} register={register} errors={errors} />
        <SportEntries control={control} register={register} errors={errors} />
        <div className="text-center">
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;