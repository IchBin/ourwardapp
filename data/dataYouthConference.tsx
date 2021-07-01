import { IContactCard } from "../components/modules/cards/ContactCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"

export const dataHeroCard: IHeroCard = {
  title: "Youth Conference Sign\xa0Up",
  paragraph: "All youth ages 11 - 18",
  image: {
    src: "/images/youth-conference/M3W_YouthConf_Image-1.png",
    alt: "Youth Conference - Small and simple means",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe0jrytdc8DlWg4jsZYhi5a2iPBvDdPIYygz9hUhcTvUx7MvA/viewform",
      external: true,
    },
  },
  type: "light",
}

export const dataFaceCards: IContactCard[] = [
  {
    title: "Danielle\xa0Gough",
    subtitle: "Youth Conference Committee",
    soft: true,
  },
  {
    title: "Jordan\xa0Gough",
    subtitle: "Youth Conference Committee",
    soft: true,
  },
]