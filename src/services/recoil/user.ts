import { atom } from 'recoil'
import { UserListTypeProps, UserTypeProps } from '../api/collection'
// import { anonymousAvatar } from '../../../public/images'
import { recoilPersist } from 'recoil-persist'

const {persistAtom} = recoilPersist()

export const userState = atom<UserTypeProps>({
    key: 'admin-user-key',
    default: {
        id: 0,
        avatar: 'none',
        email: '',
        firstName: '',
        lastName: '',
        role: 'admin',
        address: '',
        balance: 0,
        network: '',
        chainId: 0,
    },
    effects_UNSTABLE: [persistAtom],
})

export const userListState = atom<UserListTypeProps>({
    key: 'user-list-key',
    default: {
        statusCode: 0,
        data: {
            docs: [],
            totalDocs: 0,
            limit: 0,
            totalPages: 0,
            page: 0,
            pagingCounter: 0,
            hasNextPage: false,
            hasPrevPage: false,
            prevPage: null,
            nextPage: 0,
        },
    },
})

export const refreshPage = atom({
    key: 'refresh-page',
    default: {
        isRefresh: false,
    },
})
