import { media } from './mediaData.js'

import phopho_poster1  from '../assets/phopho_poster1.jpg'
import phopho_magazine from '../assets/phopho_magazine.jpg'
import phopho_poster2  from '../assets/phopho_poster2.jpg'
import phopho_photo    from '../assets/phopho_photo.jpg'
import phopho_poster3  from '../assets/phopho_poster3.jpg'

const projects = [
  {
    id: 'haven',
    title: 'Haven',
    subtitle: 'Motion to Product Demo',
    year: '2026',
    toolsLabel: '[C4D, After Effects]',
    description: `Haven is a digital product designed for humanity's transition to Mars. Based on deep research, the aesthetic is intentionally refined yet clinical - creating a flawless, stable, but unsettling futuristic environment.\nThis is a motion prototype exploring the tension between absolute trust and digital Detachment that leaves us to wonder: In a world this perfect, is there still room for being human?\n> 3D Motion: Custom modeling & animation in Cinema 4D.\n> Product Flow: Branded Loader, Systemic Onboarding, and UI Pop ups.`,
    course: 'Designed as part of ׳Motion to digital product׳ course at Bezalel.',
    sections: [
      { layout: 'full', items: [{ type: 'video', src: media.haven.haven_loader }] },
      { layout: 'full', items: [{ type: 'video', src: media.haven.haven_Welcome }] },
      { layout: 'full', items: [{ type: 'video', src: media.haven.haven_Question1 }] },
      { layout: 'full', items: [{ type: 'video', src: media.haven.haven_Question2 }] },
      { layout: 'full', items: [{ type: 'video', src: media.haven.haven_PopUp }] },
    ],
  },

  {
    id: 'weird-fishes',
    title: 'Weird Fishes',
    subtitle: '3D Wandering Simulator',
    year: '',
    toolsLabel: '',
    description: '',
    course: '',
    sections: [
      { layout: 'full', items: [{ type: 'video', src: media.weird_fishes.Weird_Fishes_1 }] },
      { layout: 'full', items: [{ type: 'video', src: media.weird_fishes.Weird_Fishes_2 }] },
      { layout: 'full', items: [{ type: 'video', src: media.weird_fishes.Weird_Fishes_3 }] },
      { layout: 'half', items: [
        { type: 'video', src: media.weird_fishes.Weird_Fishes_4 },
        { type: 'video', src: media.weird_fishes.Weird_Fishes_5 },
      ]},
    ],
  },

  {
    id: 'no-strings',
    title: 'No Strings Attached',
    subtitle: 'Interactive Game',
    year: '2026',
    toolsLabel: '[Unity, C4d]',
    description: `A narrative game exploring the emotional tension of a casual relationship where one partner wants more. Built on a single mechanic -stretch and release. The game mirrors the cycle of trying to let go, only to be pulled back in again and again.\n> Mechanic as Metaphor: Developed in Unity, using mouse-based physics to tell a story through tactile interaction.\n> Hand Drawn Animation: A series of frame by frame animations created in Procreate to achieve the weird looking creatures.`,
    course: 'Developed as part of the Interactive Storytelling course at Bezalel.',
    sections: [
      { layout: 'full', items: [{ type: 'video', src: media.no_strings.No_Strings_full }] },
      { layout: 'full', items: [{ type: 'video', src: media.no_strings.No_Strings_kissing }] },
      { layout: 'full', items: [{ type: 'video', src: media.no_strings.No_Strings_hugging }] },
      { layout: 'half', items: [
        { type: 'video', src: media.no_strings.No_Strings_goofing },
        { type: 'video', src: media.no_strings.No_Strings_toothbrush },
      ]},
    ],
  },

  {
    id: 'phopho',
    title: 'PHo PHo',
    subtitle: 'Speculative Brand Design',
    year: '2025',
    toolsLabel: '[C4d] [Figma] [Sora]',
    description: `PHO PHO is a speculative luxury brand for a future where technology, wealth and weather changes redefine beauty. The aesthetic is hyper clean and clinical, creating a premium look that feels intentionally unsettling to match the product - an injectable eye serum.\n> Branding & Packaging: Developing a complete graphic system, including the typographic logo and layouts.\n> AI Powered Art Direction: Creating a full series of editorial posters, using Generative AI to capture the brand's distinctive look.\n> Digital Design: A dedicated, single page product minisite.`,
    course: 'Designed as part of ׳Motion to digital product׳ course at Bezalel.',
    sections: [
      // Row 1: Poster1 (left) | phopho_Logo video (right)
      { layout: 'half', items: [
        { type: 'image', src: phopho_poster1 },
        { type: 'video', src: media.phopho.phopho_Logo },
      ]},
      // Row 2: Magazine (left) | phopho_bottle video (right)
      { layout: 'half', items: [
        { type: 'image', src: phopho_magazine },
        { type: 'video', src: media.phopho.phopho_bottle },
      ]},
      // Row 3: Poster2 full width
      { layout: 'full', items: [
        { type: 'image', src: phopho_poster2 },
      ]},
      // Row 4: Photo (left) | Poster3 (right)
      { layout: 'half', items: [
        { type: 'image', src: phopho_photo },
        { type: 'image', src: phopho_poster3 },
      ]},
    ],
  },
]

export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]))
export default projects
