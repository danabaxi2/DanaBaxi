// All Cloudinary URLs include f_auto,q_auto for automatic format + quality optimization.
// Keys match Figma component names for direct mapping to layout placeholders.

const BASE = 'https://res.cloudinary.com/dgkvr80cy/video/upload/f_auto,q_auto'

export const media = {
  banners: {
    Weird_fishes_banner: `${BASE}/ovxbvd3bzxk4zf8gi6xn.mp4`,
    Haven_banner:        `${BASE}/sm5xn5824civv0os6yol.mp4`,
  },

  haven: {
    haven_loader:    `${BASE}/v1775724181/vf84nohdi6f145n91wbl.mp4`,
    haven_Welcome:   `${BASE}/jtguhbiznpviekqovs7f.mp4`,
    haven_Question1: `${BASE}/gg7uoyuggp8vvvpexu7x.mp4`,
    haven_Question2: `${BASE}/sm5xn5824civv0os6yol.mp4`,
    haven_PopUp:     `${BASE}/c9eki497obwmdcr831yr.mp4`,
  },

  weird_fishes: {
    Weird_Fishes_1: `${BASE}/ovxbvd3bzxk4zf8gi6xn.mp4`,
    Weird_Fishes_2: `${BASE}/f60lvi0rwqexb7cbnysx.mp4`,
    Weird_Fishes_3: `${BASE}/ovxbvd3bzxk4zf8gi6xn_0cdfe2.mp4`,
    Weird_Fishes_4: `${BASE}/u1onq4fcsaa2jhqeio1h.mp4`,
    Weird_Fishes_5: `${BASE}/fhbnirfmzlgpy4ihfstb.mp4`,
  },

  no_strings: {
    No_Strings_full:        `${BASE}/osz7fo3ygvuzo6cf73wz.mov`,
    No_Strings_kissing:     `${BASE}/y4uo9xdn1ue7dairft9u_e04a1d.mp4`,
    No_Strings_hugging:     `${BASE}/y4uo9xdn1ue7dairft9u_54a050.mp4`,
    No_Strings_goofing:     `${BASE}/y4uo9xdn1ue7dairft9u_7791a0.mp4`,
    No_Strings_toothbrush:  `${BASE}/y4uo9xdn1ue7dairft9u_8f5e46.mp4`,
  },

  phopho: {
    phopho_Logo:   `${BASE}/eel7fqvxs9e6488mysbe.mp4`,
    phopho_bottle: `${BASE}/ebtinllpckbkofguluta.mov`,
  },
}
