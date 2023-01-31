//in that reducer file define the inner functionality what is the next state of application
// it is more similar to usereducer functions that are declared in Test/.js file

import { data } from "jquery";
import { ActionTypes } from "../Constants/ActionTypes";

const firststate = {
  data: [
    {
      id: 1,
      Name: "Army Public ",

      State: {
        Sid: 1,
        SName: "Punjab",
      },
      Borough: "Rawalpindi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
    },
    {
      id: 2,
      Name: "Army Public School Cantt",
      State: {
        Sid: 2,
        SName: "Sindh",
      },
      Borough: "Lahore",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
    },
    {
      id: 3,
      Name: "Army Public School Fort ",
      State: {
        Sid: 3,
        SName: "KPK",
      },
      Borough: "Karachi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
    },
    {
      id: 4,
      Name: "Army Public School Ordinance ",
      State: {
        Sid: 4,
        SName: "Islamabad",
      },
      Borough: "Rawalpindi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
    },
    {
      id: 5,
      Name: "Roots International ",
      State: {
        Sid: 1,
        SName: "Punjab",
      },
      Borough: "Lahore",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
    },
    {
      id: 6,
      Name: "BeaconHouse School",
      State: {
        Sid: 1,
        SName: "Punjab",
      },
      Borough: "Sialkot",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
    },
    {
      id: 7,
      Name: "SLS Montessori  ",
      State: {
        Sid: 4,
        SName: "Islamabad",
      },
      Borough: "Rawalpindi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
    },
  ],
};
const initialevent = {
  biodata: [
    { id: 1, name: "hassan", fathername: "sajjad", designation: "employee" },
    { id: 2, name: "areeb", fathername: "sajjad", designation: "employee" },
  ],
};
const newobject = [
  {
    id: 1,
    Name: "Ads ",

    State: {
      Sid: 1,
      SName: "Punjabdsdsd",
    },
    Borough: "Rawalpddsindi",
    Staff: {
      CordinatorName: "Rao dsdsdKashan",
      TeacherName: "Mr.Adsdli",
      PrincipleName: "Mr.dssdBilal",
      SubTeacherName: "Mr.Zdsdsdayn",
      Contact: {
        Mobile: "0334898sd3493",
        LandLine: "051525dsdsd5567",
      },
    },
    Students: {
      FirstGrade: {
        Active: 30,
        UnActive: 60,
      },
      SecondGrade: {
        Active: 30,
        UnActive: 60,
      },
      ThirdGrade: {
        Active: 30,
        UnActive: 60,
      },
    },
  },
];

export const listener = (initial = initialevent, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_STATE:
      return {
        biodata: action.payload,
        // biodata: action.payload.data, //copying the original state
        // biodata: initial.biodata.map((data) => {
        //   return { ...data, data: action.payload };
        // }),
      };

    default:
      return initial;
  }
};

export const statefilter = (initial = firststate, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_STATE:
      return {
        data: action.payload,
        // biodata: action.payload.data, //copying the original state
        // data: initial.data.map((result) => {
        //   if(action.payload.SName === result.State.S)
        //   return { ...result, result: action.payload };
        // }),
      };
    default:
      return initial;
  }
};

export const response = (initial = initialevent, action) => {
  switch (action.type) {
    case ActionTypes.SET_RESPONSE:
      return {
        biodata: action.payload,
        // biodata: action.payload.data, //copying the original state
        // biodata: initial.biodata.map((data) => {
        //   return { ...data, data: action.payload };
        // }),
      };

    default:
      return initial;
  }
};
