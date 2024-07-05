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
  todaysDate: Date;
  address: string;
  telephone: string;
  dateOfBirth: Date;
  highSchool: string;
  lastDateAttended: Date;
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