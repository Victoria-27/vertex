export const formFields = [
    { name: 'presentCollege', label: 'Your present College', type: 'text' },
    { name: 'presentConference', label: 'Your present Conference', type: 'text' },
    { 
      name: 'sportThisSeason', 
      label: 'Sport This Season', 
      type: 'select',
      options: [
        { value: 'football', label: 'Football' },
        { value: 'basketball', label: 'Basketball' },
        { value: 'soccer', label: 'Soccer' },
      ]
    },
  ];
  
  export const timelineEntryFields = [
    { name: 'fromMonth', label: 'From Month', type: 'text' },
    { name: 'fromYear', label: 'From Year', type: 'text' },
    { name: 'toMonth', label: 'To Month', type: 'text' },
    { name: 'toYear', label: 'To Year', type: 'text' },
    { name: 'collegeOrJob', label: 'College or Job', type: 'text' },
  ];
  
  export const sportEntryFields = [
    { name: 'sport', label: 'Sport', type: 'text' },
    { name: 'college', label: 'College', type: 'text' },
    { name: 'level', label: 'Varsity/JV/Club', type: 'text' },
    { name: 'semester', label: 'Semester', type: 'text' },
    { name: 'year', label: 'Year', type: 'text' },
  ];