import PAGE_ROUTES from "@/utils/constants/routes"

const FooterElement = () => {
    return (
        <div className="footer">
            <div className="bottom_menu">
                <div className="layout_fix">
                    <ul>
                        {/* <li>
                            <a href={""}
                               className="btn">
                                회사소개
                            </a>
                        </li> */}
                        <li>
                            <a href={PAGE_ROUTES.CUSTOMER.GUIDE}
                               className="btn">
                                이용안내
                            </a>
                        </li>
                        <li>
                            <a href={PAGE_ROUTES.INTRO.PROCESSING_POLICY}
                               className="btn">이용약관</a>
                        </li>

                        <li>
                            <a href={PAGE_ROUTES.INTRO.POLICY}
                               className="btn">개인정보처리방침</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="layout_fix">
                <ul className="copyright">
                    <li className="li info">
                        <ul className="info_box">
                            <li>
                                <div className="shop_name">쇼핑머니</div>
                                <div className="sns_box">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span className="txt">상호명 : 쇼핑머니</span>
                                <span className="txt">대표: 임혜진</span>
                                <span className="txt">대표전화: </span>
                            </li>
                            <li>
                                <span className="txt">통신판매업 신고번호 :    </span>
                                <span className="txt">
                                                사업자 등록번호:      <a
                                    href="https://teht.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/ab/a/a/UTEABAAA13.xml"
                                    className="btn_ssmall bx-grey">사업자정보확인</a>
                                            </span>
                            </li>
                            <li>
                                <span className="txt">소재지 :      </span>
                            </li>
                            <li className="copy">Copyright(c) 쇼핑머니. All Rights Reserved.</li>
                        </ul>
                    </li>
                    <li className="li pg">
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterElement