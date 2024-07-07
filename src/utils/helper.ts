import dayjs from 'dayjs'
import moment from 'moment-timezone'
import { jwtDecode } from "jwt-decode";

export const LOCAL_TIME_ZONE = dayjs().utcOffset() / 60

export const getFullTime = (isoTime: string) => {
    const m = moment(isoTime).tz('Asia/Seoul');
    return m.format('YYYY-MM-DD HH:MM:SS');
}

export const getFullDate = (isoTime: string) => {
    const m = moment(isoTime).tz('Asia/Seoul');
    return m.format('YYYY-MM-DD');
}

export const isLoggedIn = () => {
    let isLoggedIn = true;
    let accessToken = localStorage.getItem('accessToken')
    if (!accessToken || accessToken === 'undefined' || accessToken == '') {
        isLoggedIn = false;
    } else {
        try {
            const decodedToken: any = jwtDecode(accessToken)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                isLoggedIn = false;
            }
        } catch (e) {
            isLoggedIn = false;
        }
    }
    return isLoggedIn;
}

export const addDotLongString = (str: string, len: number) => {
    if (len <= 3) return str;
    if (!str || str.length < len) {
        return str;
    }
    const subStr = str.substring(0, (len - 3));
    return (subStr + '...')

}

export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}