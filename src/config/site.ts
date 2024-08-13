export const siteUrl = "https://shadcn-pro.tszones.com"

export const siteTitle = "Shadcn Pro"

export const githubUrl = "https://github.com/tszones/shadcn-pro.tszones.com"

export const baseSiteConfig = {
  name: siteTitle,
  description: "my site description",
  url: siteUrl,
  keywords: [
    "TS Zones",
    "TS Zones",
    "TS Zones",
  ],
  authors: [
    {
      name: siteTitle,
      url: siteUrl,
    }
  ],
  creator: siteTitle,
  themeColor: "#fff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  ogImage: `${siteUrl}/og.png`,
  links: {
    twitter: siteUrl,
    github: siteUrl,
  },
}

export const siteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${siteUrl}/og.png`],
    creator: baseSiteConfig.creator,
  },
}