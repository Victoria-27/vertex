import React from "react";
import { useFieldArray, Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../types";

interface SportEntriesProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const SportEntries: React.FC<SportEntriesProps> = ({ control, register, errors }) => {
  const { fields, append } = useFieldArray({
    control,
    name: "sportEntries",
  });

  return (
    <>
      <p className="mb-4 text-sm">
        Including this college and this season, list all of the colleges and sports in which you have practiced, scrimmaged, or competed, including
        club sports, JV, and varsity contests since high school: (if you only practiced or scrimmaged in a sport, please state).
      </p>

      <hr className="border-t-2 border-gray-300 mb-4" />

      <div className="overflow-x-auto">
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="px-2 py-1">Sport</th>
              <th className="px-2 py-1">College</th>
              <th className="px-2 py-1">Varsity/JV/Club</th>
              <th className="px-2 py-1">Semester</th>
              <th className="px-2 py-1">Yr</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id}>
                <td className="px-2 py-1">
                  <input {...register(`sportEntries.${index}.sport`)} className="input input-bordered input-sm md:input-md w-full" />
                  {errors.sportEntries?.[index]?.sport && <p className="text-red-500 text-xs">{errors.sportEntries[index].sport.message}</p>}
                </td>
                <td className="px-2 py-1">
                  <input {...register(`sportEntries.${index}.college`)} className="input input-bordered input-sm md:input-md w-full" />
                  {errors.sportEntries?.[index]?.college && <p className="text-red-500 text-xs">{errors.sportEntries[index].college.message}</p>}
                </td>
                <td className="px-2 py-1">
                  <input {...register(`sportEntries.${index}.level`)} className="input input-bordered input-sm md:input-md w-full" />
                  {errors.sportEntries?.[index]?.level && <p className="text-red-500 text-xs">{errors.sportEntries[index].level.message}</p>}
                </td>
                <td className="px-2 py-1">
                  <input {...register(`sportEntries.${index}.semester`)} className="input input-bordered input-sm md:input-md w-full" />
                  {errors.sportEntries?.[index]?.semester && <p className="text-red-500 text-xs">{errors.sportEntries[index].semester.message}</p>}
                </td>
                <td className="px-2 py-1">
                  <input {...register(`sportEntries.${index}.year`)} className="input input-bordered input-sm md:input-md w-full" />
                  {errors.sportEntries?.[index]?.year && <p className="text-red-500 text-xs">{errors.sportEntries[index].year.message}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={() => append({ sport: "", college: "", level: "", semester: "", year: "" })}
        className="btn btn-primary btn-sm md:btn-md"
      >
        Add Sport Entry
      </button>
    </>
  );
};

export default SportEntries;