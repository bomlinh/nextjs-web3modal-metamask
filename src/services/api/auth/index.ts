import axiosClient from '../axiosClient'
import { ChangePasswordTypes, UpdateUserProfileForm } from '../collection'
import { API_ENDPOINTS } from '../endPoint'
import { authLoginTypeProps, signUpUsernameTypeProps } from './type'

const AUTH_API = {
    register: (params: signUpUsernameTypeProps) =>
        axiosClient.post(API_ENDPOINTS.AUTH.REGISTRATION, params),
    login: (params: authLoginTypeProps) =>
        axiosClient.post(API_ENDPOINTS.AUTH.LOGIN, params),
    getMe: () => axiosClient.get(API_ENDPOINTS.AUTH.ME),
    updateUserProfile: (params: UpdateUserProfileForm) =>
        axiosClient.post(API_ENDPOINTS.AUTH.UPDATE_PROFILE, params),

    CHANGE_PASSWORD: (params: ChangePasswordTypes) =>
        axiosClient.post(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, params),
}

export default AUTH_API
