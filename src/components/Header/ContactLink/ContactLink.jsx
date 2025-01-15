import { ContactLinkStyled } from "./ContactLink.styled";
import {ReactComponent as WhatsAppIcon} from "../../../images/svg/whatsApp.svg";


export const ContactLink = () => {

    const phoneNumber = '+380969692447';
    const message = encodeURIComponent('Здравствуйте! Я хочу заказать ваши услуги.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


    return(
        <ContactLinkStyled>
            <a  className="contact-menu-link" 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <WhatsAppIcon className="whatsapp-icon" width={16} height={16}/>
                <span>CONTACT US</span>  
            </a>
        </ContactLinkStyled>
    );
};