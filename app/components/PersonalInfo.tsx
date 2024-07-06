import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../types";

interface PersonalInfoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ register, errors }) => (
  <>
    <div className="flex justify-between mb-4">
      <div className="w-full mr-2">
        <input {...register("presentCollege")} placeholder="Your present College" className="input input-bordered w-full" />
        {errors.presentCollege && <p className="text-red-500 text-xs mt-1">{errors.presentCollege.message}</p>}
      </div>

      <div className="w-full mx-2">
        <input {...register("presentConference")} placeholder="Your present Conference" className="input input-bordered w-full" />
        {errors.presentConference && <p className="text-red-500 text-xs mt-1">{errors.presentConference.message}</p>}
      </div>

      <div className="w-full mx-2">
        <select {...register("sportThisSeason")} className="select select-bordered w-full">
          <option value="">Sport This Season</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="soccer">Soccer</option>
        </select>
        {errors.sportThisSeason && <p className="text-red-500 text-xs mt-1">{errors.sportThisSeason.message}</p>}
      </div>

      <div className="w-full ml-2">
        <div>
          <span>Previous Seasons:</span>
          <input type="radio" {...register("previousSeasons")} value="0" className="ml-2" /> 0
          <input type="radio" {...register("previousSeasons")} value="1" className="ml-2" /> 1
        </div>
        {errors.previousSeasons && <p className="text-red-500 text-xs mt-1">{errors.previousSeasons.message}</p>}
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="w-full mr-2">
        <input {...register("lastName")} placeholder="Last Name" className="input input-bordered w-full" />
        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
      </div>

      <div className="w-full mx-2">
        <input {...register("firstName")} placeholder="First Name" className="input input-bordered w-full" />
        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
      </div>

      <div className="w-full mx-2">
        <input {...register("middleName")} placeholder="Middle Name" className="input input-bordered w-full" />
      </div>

      <div className="w-full mx-2">
        <div>
          <input type="radio" {...register("gender")} value="male" className="mr-1" /> Male
          <input type="radio" {...register("gender")} value="female" className="ml-2 mr-1" /> Female
        </div>
        {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
      </div>

      <div className="w-full ml-2">
        <input {...register("studentId")} placeholder="Student ID" className="input input-bordered w-full" />
        {errors.studentId && <p className="text-red-500 text-xs mt-1">{errors.studentId.message}</p>}
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="w-full mr-2 relative">
        <label htmlFor="todaysDate" className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">Todays Date</label>
        <input
          id="todaysDate"
          type="date"
          {...register("todaysDate")}
          className="input input-bordered w-full pt-2"
        />
        {errors.todaysDate && <p className="text-red-500 text-xs mt-1">{errors.todaysDate.message}</p>}
      </div>

      <div className="w-full mx-2">
        <input {...register("address")} placeholder="Present Address, Street, City, State, and ZipCode" className="input input-bordered w-full" />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>

      <div className="w-full mx-2">
        <input {...register("telephone")} placeholder="Telephone number" className="input input-bordered w-full" />
        {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
      </div>

      <div className="w-full ml-2 relative">
        <label htmlFor="dateOfBirth" className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          {...register("dateOfBirth")}
          className="input input-bordered w-full pt-2"
        />
        {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>}
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="w-full mr-2">
        <input
          {...register("highSchool")}
          placeholder="High School Last Attended, City, State, Zip Code"
          className="input input-bordered w-full"
        />
        {errors.highSchool && <p className="text-red-500 text-xs mt-1">{errors.highSchool.message}</p>}
      </div>

      <div className="w-full ml-2 relative">
        <label htmlFor="lastDateAttended" className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">Last Date Attended</label>
        <input
          id="lastDateAttended"
          type="date"
          {...register("lastDateAttended")}
          className="input input-bordered w-full pt-2"
        />
        {errors.lastDateAttended && <p className="text-red-500 text-xs mt-1">{errors.lastDateAttended.message}</p>}
      </div>
    </div>
  </>
);

export default PersonalInfo;