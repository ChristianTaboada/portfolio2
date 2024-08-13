import type { AppsData } from '../types/configs/apps'
const apps: AppsData[] = [
  {
    id: 'github',
    title: 'GitHub',
    desktop: false,
    img: 'img/icons/github.png',
    link: 'https://github.com/ChristianTaboada'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    desktop: false,
    img: 'img/icons/linkedin.png',
    link: 'https://www.linkedin.com/in/christian-taboada/'
  },
  {
    id: 'whatsapp',
    title: 'Whatsapp',
    desktop: false,
    img: 'img/icons/whatsapp.png',
    link: `https://wa.me/${+541138722810}`
  },
  {
    id: 'instagram',
    title: 'Instagram',
    desktop: false,
    img: 'img/icons/instagram.png',
    link: 'https://www.instagram.com/christaboada.ok/'
  },
  {
    id: 'twitter',
    title: 'Twitter',
    desktop: false,
    img: 'img/icons/twitter.png',
    link: 'https://twitter.com/LaPanteraGrosa'
  },
  {
    id: 'Launchpad',
    title: 'Launchpad',
    desktop: false,
    img: 'img/icons/launchpad.png'
  }
]

export default apps
