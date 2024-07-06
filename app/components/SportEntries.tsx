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
          {fields.map((field, index) => (
            <tr key={field.id}>
              <td>
                <input {...register(`sportEntries.${index}.sport`)} className="border p-2 w-full" />
                {errors.sportEntries?.[index]?.sport && <p className="text-red-500">{errors.sportEntries[index].sport.message}</p>}
              </td>
              <td>
                <input {...register(`sportEntries.${index}.college`)} className="border p-2 w-full" />
                {errors.sportEntries?.[index]?.college && <p className="text-red-500">{errors.sportEntries[index].college.message}</p>}
              </td>
              <td>
                <input {...register(`sportEntries.${index}.level`)} className="border p-2 w-full" />
                {errors.sportEntries?.[index]?.level && <p className="text-red-500">{errors.sportEntries[index].level.message}</p>}
              </td>
              <td>
                <input {...register(`sportEntries.${index}.semester`)} className="border p-2 w-full" />
                {errors.sportEntries?.[index]?.semester && <p className="text-red-500">{errors.sportEntries[index].semester.message}</p>}
              </td>
              <td>
                <input {...register(`sportEntries.${index}.year`)} className="border p-2 w-full" />
                {errors.sportEntries?.[index]?.year && <p className="text-red-500">{errors.sportEntries[index].year.message}</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => append({ sport: "", college: "", level: "", semester: "", year: "" })}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 mb-4"
      >
        Add Sport Entry
      </button>
    </>
  );
};

export default SportEntries;