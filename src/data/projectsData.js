import { media } from './mediaData.js'

import phopho_poster1    from '../assets/phopho_poster1.jpg'
import phopho_magazine   from '../assets/phopho_magazine.jpg'
import phopho_bottle_img from '../assets/phopho_bottle_img.jpg'
import phopho_poster2    from '../assets/phopho_poster2.jpg'
import phopho_photo      from '../assets/phopho_photo.jpg'
import phopho_poster3    from '../assets/phopho_poster3.jpg'
import phopho_logo_img   from '../assets/phopho_logo_img.jpg'

const projects = [
  {
    id: 'haven',
    title: 'Haven',
    subtitle: 'Motion to Product Demo',
    year: '2026',
    tools: ['C4D', 'After Effects'],
    description: `Haven is a digital product designed for humanity's transition to Mars. Based on deep research, the aesthetic is intentionally refined yet clinical — creating a flawless, stable, but unsettling futuristic environment. This is a motion prototype exploring the tension between absolute trust and digital Detachment that leaves us to wonder: In a world this perfect, is there still room for being human? 3D Motion: Custom modeling & animation in Cinema 4D. Product Flow: Branded Loader, Systemic Onboarding, and UI Pop ups.`,
    course: 'Designed as part of \'Motion to digital product\' course at Bezalel.',
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
    subtitle: '',
    year: '',
    tools: [],
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
    subtitle: '',
    year: '',
    tools: [],
    description: '',
    course: '',
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
    title: 'Pho Pho',
    subtitle: '',
    year: '',
    tools: [],
    description: '',
    course: '',
    sections: [
      { layout: 'full', items: [{ type: 'video', src: media.phopho.phopho_Logo }] },
      { layout: 'half', items: [
        { type: 'image', src: phopho_poster1 },
        { type: 'image', src: phopho_magazine },
      ]},
      { layout: 'full', items: [{ type: 'video', src: media.phopho.phopho_bottle }] },
      { layout: 'half', items: [
        { type: 'image', src: phopho_bottle_img },
        { type: 'image', src: phopho_poster2 },
      ]},
      { layout: 'half', items: [
        { type: 'image', src: phopho_photo },
        { type: 'image', src: phopho_poster3 },
      ]},
      { layout: 'full', items: [{ type: 'image', src: phopho_logo_img }] },
    ],
  },
]

export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]))
export default projects
