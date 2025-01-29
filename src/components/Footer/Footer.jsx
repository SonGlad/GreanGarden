import { FooterStyled } from "./Footer.styled";
// import { Container } from "../Container/Container";
import { forwardRef, useState, useEffect } from "react";
import { ContactLink } from "../Header/ContactLink/ContactLink";
import { ReactComponent as PhoneIcon} from "../../images/svg/phone.svg";
import Logo from "../../images/images/Logo2.png";




export const Footer = forwardRef(({propsId, footerRef}, reff) => {
    const [date, setDate] = useState(null);
    const [footer, setFooter] = useState(false);
    

    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        setDate(year);
        setFooter(true);
    },[])
  


    return(
        <FooterStyled id={propsId} ref={footerRef}>
            <div className="footer-content-cont">
                <div className="footer-content-block">
                    <div className="hours-cont">
                        <p className="footer-sub-title">Working hours<span>:</span></p>
                        <p className="footer-=time">from 9:00 to 21:00 daily</p>
                    </div>
                    <address className="footer-adress">
                        <ul className="footer-adress-list">
                            <li className="footer-adress-item">
                                <a className="footer-tel-link" href="tel:+934534447565">
                                    <PhoneIcon className="footer-phone-icon" width={12}/>
                                    <span>+934 53 444-7565</span>
                                </a>
                            </li>
                            <li className="footer-adress-item">
                                <ContactLink
                                    footer={footer}
                                />
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="rights-block">
                    <span>&#169;</span>
                    <p>{date}</p>
                    <p>All rights reserved</p>
                    <span>...</span>
                </div>
            </div>
            <div className="footer-logo-cont">
                <img className="footer-logo" src={Logo} alt="logo" width={60}/> 
            </div>
        </FooterStyled>
    );
});