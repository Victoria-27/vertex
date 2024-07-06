import React from "react";
import { useFieldArray, Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../types";

interface TimelineEntriesProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const TimelineEntries: React.FC<TimelineEntriesProps> = ({ control, register, errors }) => {
  const { fields, append } = useFieldArray({
    control,
    name: "timelineEntries",
  });

  return (
    <>
      <p className="mb-4 text-sm">
        Accurately account for all your time between high school graduation and the present. Beginning with the year you left high school, list
        employment dates, periods of unemployment, armed forces service, and all educational institutions in which you have registered, including
        your present College. Do include summer school. Do not include summer jobs.
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
          {fields.map((field, index) => (
            <tr key={field.id}>
              <td>
                <input {...register(`timelineEntries.${index}.fromMonth`)} className="border p-2 w-full" />
                {errors.timelineEntries?.[index]?.fromMonth && (
                  <p className="text-red-500">{errors.timelineEntries[index].fromMonth.message}</p>
                )}
              </td>
              <td>
                <input {...register(`timelineEntries.${index}.fromYear`)} className="border p-2 w-full" />
                {errors.timelineEntries?.[index]?.fromYear && (
                  <p className="text-red-500">{errors.timelineEntries[index].fromYear.message}</p>
                )}
              </td>
              <td>
                <input {...register(`timelineEntries.${index}.toMonth`)} className="border p-2 w-full" />
                {errors.timelineEntries?.[index]?.toMonth && (
                  <p className="text-red-500">{errors.timelineEntries[index].toMonth.message}</p>
                )}
              </td>
              <td>
                <input {...register(`timelineEntries.${index}.toYear`)} className="border p-2 w-full" />
                {errors.timelineEntries?.[index]?.toYear && (
                  <p className="text-red-500">{errors.timelineEntries[index].toYear.message}</p>
                )}
              </td>
              <td>
                <input {...register(`timelineEntries.${index}.collegeOrJob`)} className="border p-2 w-full" />
                {errors.timelineEntries?.[index]?.collegeOrJob && (
                  <p className="text-red-500">{errors.timelineEntries[index].collegeOrJob.message}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => append({ fromMonth: "", fromYear: "", toMonth: "", toYear: "", collegeOrJob: "" })}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 mb-4"
      >
        Add Timeline Entry
      </button>
    </>
  );
};

export default TimelineEntries;