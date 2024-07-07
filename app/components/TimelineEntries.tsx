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

      <div className="overflow-x-auto">
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th colSpan={2} className="px-2 py-1 text-xs md:text-sm">From</th>
              <th colSpan={2} className="px-2 py-1 text-xs md:text-sm">To</th>
              <th className="px-2 py-1 text-xs md:text-sm">Colleges Attended or Jobs Held, City, State</th>
            </tr>
            <tr>
              <th className="px-2 py-1 text-xs md:text-sm">Mo</th>
              <th className="px-2 py-1 text-xs md:text-sm">Year</th>
              <th className="px-2 py-1 text-xs md:text-sm">Mo</th>
              <th className="px-2 py-1 text-xs md:text-sm">Year</th>
              <th className="px-2 py-1"></th>
            </tr>
          </thead>

          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id}>
                <td className="px-1 py-1 md:px-2">
                  <input {...register(`timelineEntries.${index}.fromMonth`)} className="input input-bordered w-full text-xs md:text-sm" />
                  {errors.timelineEntries?.[index]?.fromMonth && (
                    <p className="text-red-500 text-xs">{errors.timelineEntries[index].fromMonth.message}</p>
                  )}
                </td>
                <td className="px-1 py-1 md:px-2">
                  <input {...register(`timelineEntries.${index}.fromYear`)} className="input input-bordered w-full text-xs md:text-sm" />
                  {errors.timelineEntries?.[index]?.fromYear && (
                    <p className="text-red-500 text-xs">{errors.timelineEntries[index].fromYear.message}</p>
                  )}
                </td>
                <td className="px-1 py-1 md:px-2">
                  <input {...register(`timelineEntries.${index}.toMonth`)} className="input input-bordered w-full text-xs md:text-sm" />
                  {errors.timelineEntries?.[index]?.toMonth && (
                    <p className="text-red-500 text-xs">{errors.timelineEntries[index].toMonth.message}</p>
                  )}
                </td>
                <td className="px-1 py-1 md:px-2">
                  <input {...register(`timelineEntries.${index}.toYear`)} className="input input-bordered w-full text-xs md:text-sm" />
                  {errors.timelineEntries?.[index]?.toYear && (
                    <p className="text-red-500 text-xs">{errors.timelineEntries[index].toYear.message}</p>
                  )}
                </td>
                <td className="px-1 py-1 md:px-2">
                  <input {...register(`timelineEntries.${index}.collegeOrJob`)} className="input input-bordered w-full text-xs md:text-sm" />
                  {errors.timelineEntries?.[index]?.collegeOrJob && (
                    <p className="text-red-500 text-xs">{errors.timelineEntries[index].collegeOrJob.message}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
  type="button"
  onClick={() => append({ fromMonth: "", fromYear: "", toMonth: "", toYear: "", collegeOrJob: "" })}
  className="btn btn-primary btn-sm md:btn-md"
>
  Add Timeline Entry
</button>
    </>
  );
};

export default TimelineEntries;