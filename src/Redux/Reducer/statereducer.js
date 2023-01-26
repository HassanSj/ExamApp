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
export const statereducer = (initial = initialevent, action) => {
  switch (action.type) {
    case ActionTypes.SET_LISTENER:
      return { ...initial };

    default:
      return initial;
  }
};
export const listener = (initial = initialevent, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_STATE:
      const newname = { ...initial.data.Name, Name: action.Name };
      return initial.data.concat(newname);

    default:
      return initial;
  }
};
