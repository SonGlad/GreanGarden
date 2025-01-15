import { NavLinksStyled } from "./NavLink.styled";
import { forwardRef } from "react";
import { ContactLink } from "../ContactLink/ContactLink";
import { ReactComponent as PhoneIcon} from "../../../images/svg/phone.svg";
import ScrollIntoView from 'react-scroll-into-view';


export const NavLinks = forwardRef(({
    setMobileMenuActive, 
    aboutSectionRef, 
    serviceskSectionRef, 
    contactSectionRef, 
    workSectionRef
    }, ref) => {


    return (
        <NavLinksStyled>
            <ul className="navigation-list">
                <li className="navigation-item">
                    <ScrollIntoView selector='#ServiceSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>SERVICES</span>
                    </ScrollIntoView>
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#AboutSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>ABOUT US</span>
                    </ScrollIntoView>
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#WorksSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>HOW IT WORKS</span>
                    </ScrollIntoView>
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#ContactSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>CONTACTS</span>
                    </ScrollIntoView>
                </li>
            </ul>
            <address className="adress">
                <ul className="adress-list">
                    <li className="adress-item">
                        <a className="tel-link" href="tel:+110001111111">
                            <PhoneIcon className="phone-icon" width={12}/>
                            <span>+11 (000) 111-11-11</span>
                        </a>
                    </li>
                    <li className="adress-item">
                        <ContactLink/>
                    </li>
                </ul>
            </address>
        </NavLinksStyled>
    );
});