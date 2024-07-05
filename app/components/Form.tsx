"use client";
import React from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import axios from "axios";
import Button from "./Button";
import { FormData } from "../types";

const Form: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      timelineEntries: [
        {
          fromMonth: "",
          fromYear: "",
          toMonth: "",
          toYear: "",
          collegeOrJob: "",
        },
      ],
      sportEntries: [
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
      const response = await axios.post('/api/formData', data);
      if (response.status === 201) {
        alert('Form submitted successfully');
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-6xl mx-auto p-4 bg-white shadow-lg"
    >
      <header className="flex justify-between items-center mb-4">
        <div className="w-16 h-16 bg-gray-200">Logo</div>
        <h1 className="text-2xl font-bold">STUDENT ELIGIBILITY REPORT</h1>
        <span className="text-lg">FORM 1</span>
      </header>

      <p className="text-center mb-4">Please type or print neatly</p>

      <div className="flex justify-between mb-4">
        <input
          {...register("presentCollege")}
          placeholder="1. Your present College"
          className="border p-2 w-1/4"
        />
        <input
          {...register("presentConference")}
          placeholder="Your present Conference"
          className="border p-2 w-1/4"
        />
        <select {...register("sportThisSeason")} className="border p-2 w-1/4">
          <option value="">Sport This Season</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="soccer">Soccer</option>
        </select>

        <div>
          <span>Previous Seasons of Competition Used in This Sport:</span>
          <input type="radio" {...register("previousSeasons")} value="0" /> 0
          <input type="radio" {...register("previousSeasons")} value="1" /> 1
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="border p-2 w-1/5"
        />
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="border p-2 w-1/5"
        />
        <input
          {...register("middleName")}
          placeholder="Middle Name"
          className="border p-2 w-1/5"
        />
        <div>
          <input type="radio" {...register("gender")} value="male" /> Male
          <input type="radio" {...register("gender")} value="female" /> Female
        </div>
        <input
          {...register("studentId")}
          placeholder="Student ID"
          className="border p-2 w-1/5"
        />
        <input
          type="date"
          {...register("todaysDate")}
          className="border p-2 w-1/5"
        />
      </div>

      <div className="flex justify-between mb-4">
        <input
          {...register("address")}
          placeholder="Present Address, Street, City, State, and ZipCode"
          className="border p-2 w-1/3"
        />
        <input
          {...register("telephone")}
          placeholder="Telephone number"
          className="border p-2 w-1/3"
        />
        <input
          type="date"
          {...register("dateOfBirth")}
          placeholder="Date of Birth"
          className="border p-2 w-1/3"
        />
      </div>

      <div className="flex justify-between mb-4">
        <input
          {...register("highSchool")}
          placeholder="High School Last Attended, City, State, Zip Code"
          className="border p-2 w-1/2"
        />
        <input
          type="date"
          {...register("lastDateAttended")}
          placeholder="Last Date Attended"
          className="border p-2 w-1/2"
        />
      </div>

      <p className="mb-4 text-sm">
  Accurately account for all your time between high school graduation and
  the present. Beginning with the year you left high school, list
  employment dates, periods of unemployment, armed forces service, and all
  educational institutions in which you have registered, including your
  present College. Do include summer school. Do not include summer jobs.
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
        </td>
        <td>
          <input
            {...register(`timelineEntries.${index}.fromYear`)}
            className="border p-2 w-full"
          />
        </td>
        <td>
          <input
            {...register(`timelineEntries.${index}.toMonth`)}
            className="border p-2 w-full"
          />
        </td>
        <td>
          <input
            {...register(`timelineEntries.${index}.toYear`)}
            className="border p-2 w-full"
          />
        </td>
        <td>
          <input
            {...register(`timelineEntries.${index}.collegeOrJob`)}
            className="border p-2 w-full"
          />
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={5} className="text-center py-4">No timeline entries. Click &ldquo;Add Timeline Entry&rdquo; to add one.</td>
    </tr>
  )}
</tbody>
      </table>
      <button 
  type="button" 
  onClick={() => appendTimeline({ fromMonth: '', fromYear: '', toMonth: '', toYear: '', collegeOrJob: '' })}
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
        </td>
        <td>
          <input
            {...register(`sportEntries.${index}.college`)}
            className="border p-2 w-full"
          />
        </td>
        <td>
          <input
            {...register(`sportEntries.${index}.level`)}
            className="border p-2 w-full"
          />
        </td>
        <td>
          <input
            {...register(`sportEntries.${index}.semester`)}
            className="border p-2 w-full"
          />
        </td>
        <td>
          <input
            {...register(`sportEntries.${index}.year`)}
            className="border p-2 w-full"
          />
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={5} className="text-center py-4">No sport entries. Click &ldquo;Add Sport Entry&rdquo; to add one.</td>
    </tr>
  )}
</tbody>
      </table>
      <button 
  type="button" 
  onClick={() => appendSport({ sport: '', college: '', level: '', semester: '', year: '' })}
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
    </form>
  );
};

export default Form;
