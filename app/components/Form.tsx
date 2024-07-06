"use client";
import React from "react";
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  Resolver,
} from "react-hook-form";
import axios from "axios";
import Button from "./Button";
import { FormData } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../utils/validations";
import { toast } from "react-toastify";
import Image from 'next/image';

const Form: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema) as Resolver<FormData>,
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

  const { fields: timelineFields, append: appendTimeline } = useFieldArray({
    control,
    name: "timelineEntries",
  });
  const { fields: sportFields, append: appendSport } = useFieldArray({
    control,
    name: "sportEntries",
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card w-full bg-base-100 shadow-xl"
    >
      <div className="card-body">
        <header className="flex justify-between items-center mb-4">
        <div className="w-[100px] h-[100px]">
  <Image
    src="/assets/logo.png"
    alt="Company Logo"
    width={100}
    height={100}
    priority
  />
</div>
          <h1 className="card-title">STUDENT ELIGIBILITY REPORT</h1>
          <span className="text-lg">FORM 1</span>
        </header>

        <p className="text-center mb-4">Please type or print neatly</p>

        <div className="flex justify-between mb-4">
          <input
            {...register("presentCollege")}
            placeholder="Your present College"
            className="input input-bordered w-full"
          />
          {errors.presentCollege && (
            <p className="text-error">{errors.presentCollege.message}</p>
          )}

          <input
            {...register("presentConference")}
            placeholder="Your present Conference"
            className="input input-bordered w-full"
          />
          {errors.presentConference && (
            <p className="text-error">{errors.presentConference.message}</p>
          )}

          <select
            {...register("sportThisSeason")}
            className="select select-bordered w-full"
          >
            <option value="">Sport This Season</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="soccer">Soccer</option>
          </select>
          {errors.sportThisSeason && (
            <p className="text-error">{errors.sportThisSeason.message}</p>
          )}

          <div>
            <span>Previous Seasons of Competition Used in This Sport:</span>
            <input type="radio" {...register("previousSeasons")} value="0" /> 0
            <input type="radio" {...register("previousSeasons")} value="1" /> 1
            {errors.previousSeasons && (
              <p className="text-red-500">{errors.previousSeasons.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}

          <input
            {...register("firstName")}
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}

          <input
            {...register("middleName")}
            placeholder="Middle Name"
            className="input input-bordered w-full"
          />

          <div>
            <input type="radio" {...register("gender")} value="male" /> Male
            <input type="radio" {...register("gender")} value="female" /> Female
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>

          <input
            {...register("studentId")}
            placeholder="Student ID"
            className="input input-bordered w-full"
          />
          {errors.studentId && (
            <p className="text-red-500">{errors.studentId.message}</p>
          )}
          <label htmlFor="todaysDate" className="mb-2">
          Todays Date
          </label>

          <input
            type="date"
            {...register("todaysDate")}
            className="input input-bordered w-full"
          />
          {errors.todaysDate && (
            <p className="text-red-500">{errors.todaysDate.message}</p>
          )}
        </div>

        <div className="flex justify-between mb-4">
          <input
            {...register("address")}
            placeholder="Present Address, Street, City, State, and ZipCode"
            className="input input-bordered w-full"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
          <input
            {...register("telephone")}
            placeholder="Telephone number"
            className="input input-bordered w-full"
          />
          <label htmlFor="dateOfBirth" className="mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dateOfBirth")}
            placeholder="Date of Birth"
            className="input input-bordered w-full"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500">{errors.dateOfBirth.message}</p>
          )}
        </div>

        <div className="flex justify-between mb-4">
          <input
            {...register("highSchool")}
            placeholder="High School Last Attended, City, State, Zip Code"
            className="input input-bordered w-full"
          />
          {errors.highSchool && (
            <p className="text-red-500">{errors.highSchool.message}</p>
          )}
          <label htmlFor="lastDateAttended" className="mb-2">
            Last Date Attended
          </label>
          <input
            type="date"
            {...register("lastDateAttended")}
            placeholder="Last Date Attended"
            className="input input-bordered w-full"
          />
          {errors.lastDateAttended && (
            <p className="text-red-500">{errors.lastDateAttended.message}</p>
          )}
        </div>

        <p className="mb-4 text-sm">
          Accurately account for all your time between high school graduation
          and the present. Beginning with the year you left high school, list
          employment dates, periods of unemployment, armed forces service, and
          all educational institutions in which you have registered, including
          your present College. Do include summer school. Do not include summer
          jobs.
        </p>

        <hr className="border-t-2 border-gray-300 mb-4" />

        <table className="w-full mb-4">
          <thead>
            <tr>
              <th colSpan={2}>From</th>
              <th colSpan={2}>To</th>
              <th>Colleges Attended or Jobs Held, City, State</th>
            </tr>
            <tr>
              <th>Mo</th>
              <th>Year</th>
              <th>Mo</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {timelineFields.length > 0 ? (
              timelineFields.map((field, index) => (
                <tr key={field.id}>
                  <td>
                    <input
                      {...register(`timelineEntries.${index}.fromMonth`)}
                      className="border p-2 w-full"
                    />
                    {errors.timelineEntries?.[index]?.fromMonth && (
                      <p className="text-red-500">
                        {errors.timelineEntries[index].fromMonth.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`timelineEntries.${index}.fromYear`)}
                      className="border p-2 w-full"
                    />
                    {errors.timelineEntries?.[index]?.fromYear && (
                      <p className="text-red-500">
                        {errors.timelineEntries[index].fromYear.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`timelineEntries.${index}.toMonth`)}
                      className="border p-2 w-full"
                    />
                    {errors.timelineEntries?.[index]?.toMonth && (
                      <p className="text-red-500">
                        {errors.timelineEntries[index].toMonth.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`timelineEntries.${index}.toYear`)}
                      className="border p-2 w-full"
                    />
                    {errors.timelineEntries?.[index]?.toYear && (
                      <p className="text-red-500">
                        {errors.timelineEntries[index].toYear.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`timelineEntries.${index}.collegeOrJob`)}
                      className="border p-2 w-full"
                    />
                    {errors.timelineEntries?.[index]?.collegeOrJob && (
                      <p className="text-red-500">
                        {errors.timelineEntries[index].collegeOrJob.message}
                      </p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No timeline entries. Click &ldquo;Add Timeline Entry&rdquo; to
                  add one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          type="button"
          onClick={() =>
            appendTimeline({
              fromMonth: "",
              fromYear: "",
              toMonth: "",
              toYear: "",
              collegeOrJob: "",
            })
          }
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 mb-4"
        >
          Add Timeline Entry
        </button>

        <p className="mb-4 text-sm">
          Including this college and this season, list all of the colleges and
          sports in which you have practiced, scrimmaged, or competed, including
          club sports, JV, and varsity contests since high school: (if you only
          practiced or scrimmaged in a sport, please state).
        </p>

        <hr className="border-t-2 border-gray-300 mb-4" />

        <table className="w-full mb-4">
          <thead>
            <tr>
              <th>Sport</th>
              <th>College</th>
              <th>Varsity/JV/Club</th>
              <th>Semester</th>
              <th>Yr</th>
            </tr>
          </thead>
          <tbody>
            {sportFields.length > 0 ? (
              sportFields.map((field, index) => (
                <tr key={field.id}>
                  <td>
                    <input
                      {...register(`sportEntries.${index}.sport`)}
                      className="border p-2 w-full"
                    />
                    {errors.sportEntries?.[index]?.sport && (
                      <p className="text-red-500">
                        {errors.sportEntries[index].sport.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`sportEntries.${index}.college`)}
                      className="border p-2 w-full"
                    />
                    {errors.sportEntries?.[index]?.college && (
                      <p className="text-red-500">
                        {errors.sportEntries[index].college.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`sportEntries.${index}.level`)}
                      className="border p-2 w-full"
                    />
                    {errors.sportEntries?.[index]?.level && (
                      <p className="text-red-500">
                        {errors.sportEntries[index].level.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`sportEntries.${index}.semester`)}
                      className="border p-2 w-full"
                    />
                    {errors.sportEntries?.[index]?.semester && (
                      <p className="text-red-500">
                        {errors.sportEntries[index].semester.message}
                      </p>
                    )}
                  </td>
                  <td>
                    <input
                      {...register(`sportEntries.${index}.year`)}
                      className="border p-2 w-full"
                    />
                    {errors.sportEntries?.[index]?.year && (
                      <p className="text-red-500">
                        {errors.sportEntries[index].year.message}
                      </p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No sport entries. Click &ldquo;Add Sport Entry&rdquo; to add
                  one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          type="button"
          onClick={() =>
            appendSport({
              sport: "",
              college: "",
              level: "",
              semester: "",
              year: "",
            })
          }
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 mb-4"
        >
          Add Sport Entry
        </button>

        <div className="text-center">
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
