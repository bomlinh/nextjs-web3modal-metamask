'use client'
// import Loading from '@/storybook/Loading'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import PAGE_ROUTES from "@/utils/constants/routes";


const Controller = () => {
    const router = useRouter()

    useEffect(() => {
        router.push(PAGE_ROUTES.MAIN.MAIN_PAGE)
    }, [])

    // router.push(PAGE_ROUTES.INTRO.COMPANY_INTRO)

    return (
        <div>
            {/*<Loading />*/}
        </div>
    )
}

export default Controller
