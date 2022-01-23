import { IContactCard } from "../components/modules/cards/ContactCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IAnnouncement } from "../components/modules/announcements/Announcement"
import { IMiniCard } from "../components/modules/cards/MiniCard"

export const dataSundayMeeting: IHeroCard = {
  title: "Sunday Meetings",
  subtitle: "Maples 3rd Ward",
  paragraph: "Schedule, Broadcasts & Sign Ups",
  image: {
    src: "/images/hero-cards/church-building.webp",
    alt: "Meetinghouse",
  },
  button: {
    text: "View",
    link: {
      url: "/sunday",
    },
  },
  type: "dark",
}

export const dataAnnouncements: IAnnouncement[] = [
  {
    date: new Date("January 23, 2022 16:00:00"),
    title: "Stake Temple Preparation",
    description:
      "The stake temple preparation class is on the 4th Sunday of each month at 4pm in this building. This is for any high school seniors up to 24 years of age.",
  },
  {
    date: new Date("January 23, 2022 18:00:00"),
    title: "Stake Trek Kickoff Devotional",
    description:
      "Sunday (Jan 23) is our Stake Trek Kickoff Devotional for youth who will be 14 years old (or older) in 2022. Youth, parents, youth leaders and trek leaders including Ma’s and Pa’s are encouraged to attend this devotional at 6pm. Remote link available at http://www.maplesstake.org",
  },
  {
    date: new Date("January 29, 2022 9:00:00"),
    title: "Building Cleaning",
    description: "We are assigned to clean the building in January. Those with last names starting with N-Z please help clean this Saturday at 9:00am",
  },
  {
    date: new Date("February 5, 2022 18:00:00"),
    title: "Stake Conference",
    description:
      "Stake conference will be Saturday, February 5th, at 6pm for the adult session. The general session will be Sunday, February 6th, at 10am. The presiding authority will be Elder Berne S. Broadbent of the 5th Quorum of the Seventy. All sessions will be held at the Oaks Building (8137 S. Echo View Dr.). Links will be available on the stake website http://www.maplesstake.org.",
  },
  {
    date: new Date("January 6, 2022 19:00:00"),
    title: "Relief Society Activity",
    description: "Relief Society activity Wednesday, January 26th, 7 pm in our building cultural hall. We are combining with the 4th and 6th wards to listen to a speaker and enjoy refreshments. Casual dress. A Zoom link will be available on the Relief Society Linktree."
  },
  {
    date: new Date("February 6, 2022 19:00:00"),
    title: "Stake LGBTQ+ Support Group",
    description: 'Stake LGBTQ+ support group is Sunday, February 6th at 7 pm at our building. Special guest speaker: Ben Schilaty; co-host of "Questions from the Closet" podcast.'
  },
  {
    date: new Date("January 30, 2022 18:00:00"),
    title: "Oakcrest Girls Camp Kick Off",
    description: "Next Sunday, January 30th, the Stake will hold the Oakcrest Girls Camp Kick Off meeting for all Young Women who will be finishing the 7th grade this year, and their parents.  Important paperwork and information will be given at this meeting.  We ask that you wear Sunday Dress as we will meet here in the Chapel." 
  }
]

export const dataFaceCards: IContactCard[] = [
  {
    title: "Bishop\xa0Budge",
    subtitle: "Bishop",
    images: [
      {
        src: "/images/face-cards/bishop.jpg",
        alt: "Bishop\xa0Budge",
        width: 100,
        height: 100,
      },
    ],
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3-bishop/bishop",
        calendly: true,
      },
    },
    hidden: false,
  },
  {
    title: "Bro.\xa0Nichols or Bro.\xa0Smith",
    subtitle: "Counselor",
    images: [
      {
        src: "/images/face-cards/first-counselor.jpg",
        alt: "Bro.\xa0Nichols",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second-counselor.jpg",
        alt: "Bro.\xa0Smith",
        width: 100,
        height: 100,
      },
    ],
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3rdward/counselor",
        calendly: true,
      },
    },
    hidden: false,
  },
]

export const dataMiniCards: IMiniCard[] = [
  {
    title: "Temple Recommend",
    subtitle: "Interview",
    button: {
      text: "Schedule",
      link: [
        {
          url: "https://calendly.com/ssr3rdward/temple",
          label: { text: "Expired less than 6 months" },
          calendly: true,
        },
        {
          url: "https://calendly.com/ssr3-bishop/temple",
          label: { text: "Expired 6 months or more" },
          calendly: true,
        },
      ],
    },
    hidden: false,
  },
  {
    title: "Youth Interview",
    subtitle: "Interview",
    button: {
      text: "Schedule",
      link: [
        {
          url: "https://calendly.com/ssr3rdward/youth-interview",
          label: { text: "Ages 12-15" },
          calendly: true,
        },
        {
          url: "https://calendly.com/ssr3-bishop/youth",
          label: { text: "Ages 16-17" },
          calendly: true,
        },
      ],
    },
    hidden: false,
  },
  {
    title: "Bishopric Visit",
    subtitle: "Visit",
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3rdward/bishopric-visit",
        calendly: true,
      },
    },
    hidden: false,
  },
]

export const dataImageCards: IImageCard[] = [
  {
    title: "New Move-in",
    subtitle: "Welcome",
    paragraph: "Welcome! The bishop would like to get to know you better and welcome you to the ward.",
    image: {
      src: "/images/image-cards/new-movein.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3-bishop/new-move-in",
        calendly: true,
      },
    },
    hidden: false,
  },
  {
    title: "Temple & Family History",
    subtitle: "Activities",
    paragraph:
      "Sign up for the opportunity to have the basket in your home. Find resources and activities to help your family get involved with the temple and family history.",
    image: {
      src: "/images/image-cards/temple-and-family-history.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/temple-family-history",
        calendly: false,
      },
    },
    hidden: false,
  },
  {
    title: "Welfare & Service",
    subtitle: "Where Charity Never Faileth",
    paragraph: "View information about all of the upcoming service opportunities this year.",
    image: {
      src: "/images/image-cards/welfare-and-service.png",
      alt: "The Lord's Vineyard",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/welfare",
        calendly: false,
      },
    },
    hidden: false,
  },
  {
    title: "Young Women",
    subtitle: "A Great Work",
    paragraph: "Find information about what we are doing in our Young Women's group.",
    image: {
      src: "/images/young-women/background.jpg",
    },
    button: {
      text: "Learn More",
      link: {
        url: "https://sites.google.com/view/maples3yw",
        external: true,
      },
    },
    hidden: false,
  },
  {
    title: "Ward Mission",
    subtitle: "Inspire and Invite Others to Come Unto Christ",
    paragraph: "Find out how to help members and friends of other faiths embrace the restored gospel.",
    image: {
      src: "/images/ward-mission/ward-mission.png",
      alt: "Come Unto Christ",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/ward-mission",
        calendly: false,
      },
    },
    hidden: false,
  },
]
