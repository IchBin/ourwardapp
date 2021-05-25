import { IFaceCard } from "../components/modules/cards/FaceCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IEventCard } from "../components/modules/cards/EventCard"
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

export const dataInfoCards: IEventCard[] = [
  {
    title: "Bishop Mobile",
    date: new Date("May 13, 2021 17:00:00"),
    image: {
      src: "/images/events/bishop-mobile.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Bishop Mobile",
          subtitle: "Ward Activity",
          image: {
            src: "/images/events/bishop-mobile.png",
          },
          date: new Date("May 13, 2021 17:00:00"),
          duration: 90,
          location: "Watch for us outside your home",
          details:
            "Members of the bishopric will be driving around the neighborhoods handing out candy to the primary and youth in the ward. We'll start in the entry roundabout at Serengeti Springs and work through the ward neighborhoods as we usually do.",
        },
      },
    },
    hidden: true,
  },
  {
    title: "Fathers and Son’s Camp",
    date: new Date("June 4, 2021 16:00:00"),
    image: {
      src: "/images/events/father-and-sons.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Fathers and Son’s Aaronic Priesthood Commemoration Camp",
          subtitle: "All Fathers and Sons",
          image: {
            src: "/images/events/father-and-sons.png",
          },
          date: new Date("June 4, 2021 16:00:00"),
          duration: 0,
          location: "South of Leamington, UT\n39°29'42.0\" N 112°14'35.6\" W",
          details:
            "Guys, we're all sons and many of us are fathers so we're all invited to the Maples Third Ward Aaronic Priesthood Commemoration Father and Son campout on June 4 & 5. We will meet any time after 4pm at our usual camp area south of Leamington, UT.\n\nBring dinner or eat on the way. There are fire rings for cooking. Breakfast will be provided by the Bishopric.\n\nAs usual, if it is safe, (kids are behaving and weather permitting) we will finish our day on Saturday target shooting so bring your guns.\n\nIf you are a father without sons, join us! If you are a son without a father to bring you, contact your minster or member of the bishopric and we will arrange a ride a place for you to camp!\n\nSee you there!\n\nYou can find us here:\n39°29'42.0\" N 112°14'35.6\" W\n\nOr follow these directions:\nI-15 South to Nephi\nExit 228 (UT 28), turn right toward I-15 business/Main Street\nTurn right at 100 N/UT 132\nTurn left on UT 125/300 E/Silver Maple Rd\nTurn left onto Leamington Pass Rd\nTurn left on FR 710\nTurn right at FR 2623\nTurn at first right into camp area.",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Supporting Children and Youth Broadcast",
    date: new Date("June 6, 2021 16:00:00"),
    image: {
      src: "/images/events/fireside.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Supporting Children and Youth: A Broadcast for Parents and Leaders",
          subtitle: "Parents and Leaders",
          image: {
            src: "/images/events/fireside.png",
          },
          date: new Date("June 6, 2021 16:00:00"),
          duration: 60,
          location: "More details to come...",
        },
      },
    },
    hidden: false,
  },
  {
    title: "Get To Know You Barbecue 🌭",
    date: new Date("May 29, 2021 18:00:00"),
    image: {
      src: "/images/events/barbecue.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Get To Know You Barbecue 🌭",
          subtitle: "At the Farm 🐎",
          image: {
            src: "/images/events/barbecue.png",
          },
          date: new Date("May 29, 2021 18:00:00"),
          duration: 120,
          location: "June & Lynne's Farm at 6417 W 7800 S",
          details:
            "We are having a ward barbecue at June & Lynn's Farm 👩‍🌾, which is located at 6417 W 7800 S (just north-east of the Loneview homes in our neighborhood).\n\nEveryone is invited to attend. Bring camp chairs or blankets to sit on and join us for fun, food and friendship!\n\nThe Ward will provide hot dogs 🌭 and drink 🥤and those attending are encouraged to SIGN UP and bring a salad 🥗, chips 🍟, or desserts 🍪.\nBring your guitar, violin, cello, drums, horns and/or keyboard for impromptu musical entertainment 🪕.\n\nJune and Lynne are excited to share their farm with us and have a good evening 🌄.\n\nSee you there 🙌!\n-Maples 3rd Ward Bishopric",
          button: {
            text: "Food Sign Up",
            color: "green",
            link: {
              url: "https://forms.gle/WSHhBSHGX2YLPHh6A",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Relief Society Ministering Interviews",
    date: new Date("June 13, 2021 14:30:00"),
    image: {
      src: "/images/events/relief-society.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Ministering Interviews",
          subtitle: "Relief Society",
          image: {
            src: "/images/events/relief-society.png",
          },
          date: new Date("June 13, 2021 14:30:00"),
          duration: 120,
          location: "Relief Society Room",
          details: "Please sign-up for a time to come and visit with one of the members of the Relief Society Presidency to see how ministering is going.",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/a7pURbJ6AXEuSh7E6",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Homeless Resource Center July Assignment",
    date: new Date("July 20, 2021 16:30:00"),
    image: {
      src: "/images/welfare/gail-miller.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "July Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/gail-miller.png",
          },
          date: new Date("July 20, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue\nSalt Lake City UT, 84115",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/TdcMZRM6fd2QwcNp7",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Gail Miller Homeless Resource Center July Assignment",
    date: new Date("July 23, 2021 16:30:00"),
    image: {
      src: "/images/welfare/gail-miller.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "July Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/gail-miller.png",
          },
          date: new Date("July 23, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue\nSalt Lake City UT, 84115",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/TdcMZRM6fd2QwcNp7",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "American Red Cross Blood Drive",
    date: new Date("May 20, 2021 15:00:00"),
    image: {
      src: "/images/welfare/arc-cross.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "American Red Cross Blood Drive",
          subtitle: "Give Blood - Save Life",
          image: {
            src: "/images/welfare/arc-give-save-wide.png",
          },
          date: new Date("May 20, 2021 15:00:00"),
          duration: 300,
          location: "Maples Building\n6592 South Haven Maple Drive\nWest Jordan, UT 84081\nin the Cultural Hall",
          details: 'Just click "Sign Up", then click "SEE TIMES" from ARC\'s website. As since the beginning of the pandemic, the need is great!',
          button: {
            text: "Sign Up",
            link: {
              url: "https://www.redcrossblood.org/give.html/drive-results?zipSponsor=maples",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  },
  {
    title: "Building Cleaning",
    date: new Date("April 24, 2021 10:00:00"),
    image: {
      src: "/images/events/cleaning.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Building Cleaning",
          image: {
            src: "/images/events/cleaning.png",
          },
          date: new Date("April 24, 2021 10:00:00"),
          duration: 60,
          location: "Ward Building",
          details:
            "We have the opportunity to clean the building. Please sign up and bring your family to help clean the building. Supplies will be provided upon arrival.",
          button: {
            text: "Sign Up",
            link: {
              url: "https://calendly.com/ssr3rdward/cleaning",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  },
  {
    title: "Special Ward Activity",
    date: new Date("April 25, 2021 19:00:00"),
    image: {
      src: "/images/events/special-activity.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Special Ward Activity",
          subtitle: "For All Adults",
          image: {
            src: "/images/events/special-activity.png",
          },
          date: new Date("April 25, 2021 19:00:00"),
          duration: 60,
          location: "Oaks Building",
          details:
            "We will have a special ward activity on Sunday, April 25th at 7pm for all adults. It will be held in person at the Oaks building (where we meet). We invite all to attend.\n\nIn preparation for this activity, please pay particular attention to General Conference this weekend. Take note of the things that inspire you and come prepared to share your experience and feelings with others.\n\nThis will be an unique and enjoyable evening of inspiration and fellowship. Please plan to attend.",
          button: {
            text: "Optional Broadcast",
            link: {
              url: "https://youtu.be/ZPCXg-a6ss8",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
]

export const dataFaceCards: IFaceCard[] = [
  {
    title: "Bishop\xa0Harman",
    subtitle: "Bishop",
    images: [
      {
        src: "/images/face-cards/bishop.webp",
        alt: "Bishop\xa0Harman",
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
    title: "Bro.\xa0Wheeler or Bro.\xa0Hammon",
    subtitle: "Counselor",
    images: [
      {
        src: "/images/face-cards/first-counselor.webp",
        alt: "Bro.\xa0Wheeler",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second-counselor.webp",
        alt: "Bro.\xa0Hammon",
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
]
