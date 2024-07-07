import { atom } from 'recoil'
// import { anonymousAvatar } from '../../../public/images'
import { recoilPersist } from 'recoil-persist'

const {persistAtom} = recoilPersist()


export const navSelectedKey = atom<number>({
    key: 'nav-key-selected',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const generalSelectedKey = atom<number>({
    key: 'general-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const userSelectedKey = atom<number>({
    key: 'user-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const saleSelectedKey = atom<number>({
    key: 'sale-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const calcSelectedKey = atom<number>({
    key: 'calc-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const orgSelectedKey = atom<number>({
    key: 'org-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const prodSelectedKey = atom<number>({
    key: 'prod-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const statSelectedKey = atom<number>({
    key: 'stat-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const orderSelectedKey = atom<number>({
    key: 'order-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const designSelectedKey = atom<number>({
    key: 'design-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const logSelectedKey = atom<number>({
    key: 'log-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

