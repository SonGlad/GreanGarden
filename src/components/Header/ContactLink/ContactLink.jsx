import { ContactLinkStyled } from "./ContactLink.styled";


export const ContactLink = ({footer}) => {

    const phoneNumber = '+380969692447';
    const message = encodeURIComponent('Здравствуйте! Я хочу заказать ваши услуги.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


    return(
        <ContactLinkStyled $footer={footer}>
            <a  className="contact-menu-link" 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <span>Contact us</span>  
            </a>
        </ContactLinkStyled>
    );
};