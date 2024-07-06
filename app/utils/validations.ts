import * as yup from "yup";

export const formSchema = yup.object().shape({
  presentCollege: yup.string().required("Present College is required"),
  presentConference: yup.string().required("Present Conference is required"),
  sportThisSeason: yup.string().required("Sport This Season is required"),
  previousSeasons: yup.string().required("Previous Seasons is required"),
  lastName: yup.string().required("Last Name is required"),
  firstName: yup.string().required("First Name is required"),
  middleName: yup.string().optional(),
  gender: yup.string().required("Gender is required"),
  studentId: yup.string().required("Student ID is required"),
  todaysDate: yup.date().required("Today's Date is required"),
  address: yup.string().required("Address is required"),
  telephone: yup.string().optional(),
  dateOfBirth: yup
    .date()
    .required("Date of Birth is required")
    .test("is-adult", "You must be at least 18 years old", function (value) {
      return new Date().getFullYear() - value.getFullYear() >= 18;
    }),
  highSchool: yup.string().required("High School is required"),
  lastDateAttended: yup.date().required("Last Date Attended is required"),
  timelineEntries: yup.array().of(
    yup.object().shape({
      fromMonth: yup.string().test(
        'all-or-none',
        'All fields in a timeline entry must be filled',
        function (value, context) {
          const { fromYear, toMonth, toYear, collegeOrJob } = context.parent;
          const isEmpty = !value && !fromYear && !toMonth && !toYear && !collegeOrJob;
          const isComplete = value && fromYear && toMonth && toYear && collegeOrJob;
          return isEmpty || isComplete;
        }
      ),
      fromYear: yup.string(),
      toMonth: yup.string(),
      toYear: yup.string(),
      collegeOrJob: yup.string(),
    })
  ),
  sportEntries: yup.array().of(
    yup.object().shape({
      sport: yup.string().test(
        'all-or-none',
        'All fields in a sport entry must be filled',
        function (value, context) {
          const { college, level, semester, year } = context.parent;
          const isEmpty = !value && !college && !level && !semester && !year;
          const isComplete = value && college && level && semester && year;
          return isEmpty || isComplete;
        }
      ),
      college: yup.string(),
      level: yup.string(),
      semester: yup.string(),
      year: yup.string(),
    })
  ),
});