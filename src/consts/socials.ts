interface SocialAdress {
  readonly href: string;
  readonly alt: string;
  readonly iconUrl: string;
}

export const mail = "mail@gmail.com";

export const socials: SocialAdress[] = [
  {
    href: `mailto:${mail}`,
    alt: "Mail",
    iconUrl: "/assets/icons/email.svg",
  },
  {
    href: "https://github.com",
    alt: "GitHub",
    iconUrl: "/assets/icons/github.svg",
  },
  {
    href: "https://www.linkedin.com",
    alt: "LinkedIn",
    iconUrl: "/assets/icons/linkedin.svg",
  },
  {
    href: "https://t.me/",
    alt: "Telegtam",
    iconUrl: "/assets/icons/telegram.svg",
  },
  {
    href: "https://twitter.com",
    alt: "Twitter",
    iconUrl: "/assets/icons/twitter.svg",
  },
  {
    href: "https://www.instagram.com",
    alt: "Instagram",
    iconUrl: "/assets/icons/instagram.svg",
  },
  {
    href: "https://www.youtube.com/",
    alt: "YouTube",
    iconUrl: "/assets/icons/youtube.svg",
  },
];
