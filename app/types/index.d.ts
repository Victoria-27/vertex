export interface FormData {
  presentCollege: string;
  presentConference: string;
  sportThisSeason: string;
  previousSeasons: string;
  lastName: string;
  firstName: string;
  middleName: string;
  gender: string;
  studentId: string;
  todaysDate: string;
  address: string;
  telephone: string;
  dateOfBirth: string;
  highSchool: string;
  lastDateAttended: string;
  timelineEntries: {
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    collegeOrJob: string;
  }[];
  sportEntries: {
    sport: string;
    college: string;
    level: string;
    semester: string;
    year: string;
  }[];
}

export interface DB {
  students: FormData[];
}