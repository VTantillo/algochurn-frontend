export type SliderCardDetails = {
  id: number
  name: string
  avatar: string
  content: string
  href: string
}

export const cardDetails = [
  {
    id: 0,
    name: 'Manu Arora',
    avatar: 'https://manuarora.in/avatar-new.png',
    content: 'Tailwind cards are awesome. Click on this tile to visit my Twitter profile. 😉',
    href: 'https://twitter.com/mannupaaji/status/1542486005403746305',
  },
  {
    id: 1,
    name: 'Elon Musk',
    avatar: 'https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg',
    content: 'We’re changing Starlink’s default wifi name to Stinky',
    href: 'https://twitter.com/elonmusk',
  },
  {
    id: 2,
    name: 'Victor',
    avatar: 'https://pbs.twimg.com/profile_images/1101963306338787330/4bApNta0_400x400.jpg',
    content: 'I should really be able to do this a lot easier',
    href: 'https://twitter.com/0xSabre',
  },
  {
    id: 3,
    name: 'Vercel',
    avatar: 'https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg',
    content: 'Vercel Edge Functions are a fast, efficient, and scalable.',
    href: 'https://twitter.com/vercel',
  },
  {
    id: 4,
    name: 'GitHub',
    avatar: 'https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg',
    content: 'Introducing Co-Pilot @ $10/mo. Lol you broke!',
    href: 'https://twitter.com/github',
  },
  {
    id: 5,
    name: 'TailwindCSS',
    avatar: 'https://pbs.twimg.com/profile_images/1468993891584073729/a_op8KnL_400x400.jpg',
    content: 'Tailwind Templates are here! 🎉',
    href: 'https://tailwindcss.com/',
  },
] as Array<SliderCardDetails>
