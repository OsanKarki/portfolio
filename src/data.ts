export const email = 'oceankarki10@gmail.com'
export const resumeUrl = './Osan_Karki_Resume.pdf'

export const socials = [
  { label: 'GitHub', href: 'https://github.com/osankarki' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/osan-karki' },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export const facts = [
  { term: 'Current role', detail: 'Flutter Engineer, Hamro Patro' },
  { term: 'Experience', detail: '4+ years in mobile' },
  { term: 'Platforms', detail: 'iOS and Android' },
  { term: 'Based in', detail: 'Kathmandu, Nepal (GMT +5:45)' },
]

export const expertise = [
  {
    title: 'Mobile engineering',
    body: 'Production Flutter apps for iOS and Android that stay fast on entry-level devices as well as flagships.',
    tools: 'Flutter, Dart, Firebase',
  },
  {
    title: 'Application architecture',
    body: 'Clear, layered codebases that remain easy to test, extend and hand over as products and teams grow.',
    tools: 'Clean Architecture, MVVM, MVC',
  },
  {
    title: 'State and data',
    body: 'Predictable state management and resilient data flows, including offline-first sync for unreliable networks.',
    tools: 'Riverpod, Provider, GetX, GraphQL',
  },
  {
    title: 'Real-time communication',
    body: 'Live video, audio and socket-driven features where latency and reliability define the experience.',
    tools: 'LiveKit, WebRTC, WebSockets',
  },
]

export type Project = {
  title: string
  category: string
  description: string
  tech: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: "Let's Read Asia",
    category: 'Digital library — with The Asia Foundation',
    description:
      'A multilingual reading platform giving children across Asia access to thousands of locally relevant books, including offline.',
    tech: ['Flutter', 'Firebase', 'Offline-first', 'Localisation'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=org.asiafoundation.letsread&hl=en' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/lets-read-digital-library/id1549160869' },
    ],
  },
  {
    title: 'Hamro Pay SDK',
    category: 'Open-source Flutter package',
    description:
      'A public package that gives product teams a clean, dependable way to integrate Hamro Pay checkout into their Flutter apps.',
    tech: ['Flutter', 'Payments', 'API design'],
    links: [{ label: 'pub.dev', href: 'https://pub.dev/packages/hamropay_flutter' }],
  },
  {
    title: 'Pokhara Food Delivery',
    category: 'Local commerce',
    description:
      'On-demand and scheduled food ordering with automatic location detection, built around how restaurants in Pokhara operate.',
    tech: ['Flutter', 'Maps', 'Payments'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=pokharafooddelivery.nipuna&hl=en' },
      { label: 'App Store', href: 'https://apps.apple.com/np/app/pokhara-food-delivery/id1487359029' },
    ],
  },
  {
    title: 'Hamro Chautari',
    category: 'Real-time communication',
    description:
      'Video meetings with distinct host and participant experiences, live moderation controls and dependable real-time interaction.',
    tech: ['Flutter', 'LiveKit', 'WebRTC'],
    links: [{ label: 'Website', href: 'https://chautari.hamropatro.com/' }],
  },
]
