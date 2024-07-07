import PAGE_ROUTES from "@/utils/constants/routes";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "@/services/recoil/user";
import { useRouter } from "next/navigation";


const HeaderElement = () => {
    const router = useRouter();
    const userStateData = useRecoilValue(userState)
    const setUserData = useSetRecoilState(userState)
    return (
        <></>
    )
}

export default HeaderElement