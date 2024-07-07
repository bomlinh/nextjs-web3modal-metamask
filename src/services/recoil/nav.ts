import { atom } from 'recoil'
// import { anonymousAvatar } from '../../../public/images'
import { recoilPersist } from 'recoil-persist'

const {persistAtom} = recoilPersist()

export const navSelectedKey = atom<number>({
    key: 'nav-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})