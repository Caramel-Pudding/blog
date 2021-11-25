interface SocialAdress {
  readonly href: string;
  readonly alt: string;
  readonly iconUrl: string;
}

export const mail = "nazarof.anton@gmail.com";
export const linkedInUrl =
  "https://www.linkedin.com/in/antonnazarov-mortymerr/";
export const gitHubUrl = "https://github.com/MortyMerr/";
export const telegramUrl = "https://t.me/m0rtymerr";
export const twitterUrl = "https://twitter.com/M0rtyMerr";
export const instagramUrl = "https://www.instagram.com/m0rtymerr/";
export const youtubeUrl =
  "https://www.youtube.com/channel/UChgyWucAyMDU_Xt9BLBlzrQ";
export const donateUrl = "https://www.tinkoff.ru/cf/ZUlVxscn4J";

export const socials: SocialAdress[] = [
  {
    href: `mailto:${mail}`,
    alt: "Mail",
    iconUrl: "/assets/icons/email.svg",
  },
  {
    href: gitHubUrl,
    alt: "GitHub",
    iconUrl: "/assets/icons/github.svg",
  },
  {
    href: linkedInUrl,
    alt: "LinkedIn",
    iconUrl: "/assets/icons/linkedin.svg",
  },
  {
    href: telegramUrl,
    alt: "Telegtam",
    iconUrl: "/assets/icons/telegram.svg",
  },
  {
    href: twitterUrl,
    alt: "Twitter",
    iconUrl: "/assets/icons/twitter.svg",
  },
  {
    href: instagramUrl,
    alt: "Instagram",
    iconUrl: "/assets/icons/instagram.svg",
  },
  {
    href: youtubeUrl,
    alt: "YouTube",
    iconUrl: "/assets/icons/youtube.svg",
  },
];
