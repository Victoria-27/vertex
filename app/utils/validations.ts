import * as yup from 'yup';

export const formSchema = yup.object().shape({
  presentCollege: yup.string().required('Present College is required'),
  presentConference: yup.string().required('Present Conference is required'),
  sportThisSeason: yup.string().required('Sport This Season is required'),
  previousSeasons: yup.string().required('Previous Seasons is required'),
  lastName: yup.string().required('Last Name is required'),
  firstName: yup.string().required('First Name is required'),
  middleName: yup.string().optional(),
  gender: yup.string().required('Gender is required'),
  studentId: yup.string().required('Student ID is required'),
  todaysDate: yup.date().required('Today\'s Date is required'),
  address: yup.string().required('Address is required'),
  telephone: yup.string().optional(),
  dateOfBirth: yup.date().required('Date of Birth is required'),
  highSchool: yup.string().required('High School is required'),
  lastDateAttended: yup.date().required('Last Date Attended is required'),
  timelineEntries: yup.array().of(
    yup.object().shape({
      fromMonth: yup.string().required('From Month is required'),
      fromYear: yup.string().required('From Year is required'),
      toMonth: yup.string().required('To Month is required'),
      toYear: yup.string().required('To Year is required'),
      collegeOrJob: yup.string().required('College or Job is required'),
    })
  ),
  sportEntries: yup.array().of(
    yup.object().shape({
      sport: yup.string().required('Sport is required'),
      college: yup.string().required('College is required'),
      level: yup.string().required('Level is required'),
      semester: yup.string().required('Semester is required'),
      year: yup.string().required('Year is required'),
    })
  ),
});