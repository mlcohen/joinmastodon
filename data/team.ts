export type SocialMap = {
  mastodon?: string
}

export type TeamMember = {
  image?: string
  name: string
  position: string
  socials?: SocialMap
}

const team: TeamMember[] = [
  {
    name: "Eugen Rochko",
    position: "Founder, CEO",
    socials: {
      mastodon: "https://mastodon.social/@Gargron",
    },
  },

  {
    name: "Renaud Chaput",
    position: "CTO",
    socials: {
      mastodon: "https://oisaur.com/@renchap",
    },
  },

  {
    name: "Felix Hlatky",
    position: "CFO",
    socials: {
      mastodon: "https://mastodon.social/@mellifluousbox",
    },
  },

  {
    name: "Claire",
    position: "Engineering",
    socials: {
      mastodon: "https://social.sitedethib.com/@Claire",
    },
  },

  {
    name: "Marcus Kida",
    position: "Engineering",
    socials: {
      mastodon: "https://bearologics.social/@marcus",
    },
  },

  {
    name: "Gregory Klyushnikov",
    position: "Engineering",
    socials: {
      mastodon: "https://mastodon.social/@grishka",
    },
  },

  {
    name: "David Roetzel",
    position: "Engineering",
    socials: {
      mastodon: "https://upp2.com/@dave",
    },
  },

  {
    name: "Timothy Campbell",
    position: "DevOps",
  },

  {
    name: "Inga Driksne",
    position: "Operations",
    socials: {
      mastodon: "https://mastodon.social/@inganomads",
    },
  },

  {
    name: "Andy Piper",
    position: "DevRel",
    socials: {
      mastodon: "https://macaw.social/@andypiper",
    },
  },

  {
    name: "Amelia Rochko",
    position: "Customer Service",
  },

  {
    name: "Philip Schröpel",
    position: "Finance",
    socials: {
      mastodon: "https://mastodon.social/@philipkristians",
    },
  },

  {
    name: "Dopatwo",
    position: "Illustrations",
    socials: {
      mastodon: "https://mastodon.social/@dopatwo",
    },
  },
]

export default team
