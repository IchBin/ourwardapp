import { IScheduleTime, ISchedule } from "../components/modules/schedules/Schedule"

export const dataSundayScheduleTimes: IScheduleTime[] = [
  {
    time: "12:00 PM",
    color: "green",
    events: [
      {
        repeat: [1, 2, 3, 4, 5],
        title: "Sacrament",
        subtitle: "In-Person Meeting",
        paragraph: "All Individuals",
        image: {
          src: "/images/image-cards/sacrament.webp",
        },
      },
    ],
  },
  {
    time: "1:00 PM",
    color: "blue",
    events: [
      {
        repeat: [1, 3],
        title: "Gospel Doctrine",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adults",
      },
      {
        repeat: [1, 3],
        title: "Youth Sunday School",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Youth",
      },
      {
        repeat: [2, 4],
        title: "Priesthood",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adult Men",
      },
      {
        repeat: [2, 4],
        title: "Relief Society",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adult Women",
      },
      {
        repeat: [2, 4],
        title: "Young Men",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Young Men",
      },
      {
        repeat: [2, 4],
        title: "Young Women",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Young Women",
      },
      {
        repeat: [5],
        title: "Youth - Bishopric Message",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Youth",
      },
      {
        repeat: [5],
        title: "Adults - Bishopric Message",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Adults",
      },
      {
        repeat: [1, 2, 3, 4, 5],
        title: "Primary",
        subtitle: "In-Person Meeting",
        paragraph: "60 Min. All Primary Kids",
      },
    ],
  },
]

export const dataSpecialSchedules: ISchedule[] = []
