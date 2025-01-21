import { HeroStyled } from "./Hero.styled";



export const HeroSection = () => {


    const phoneNumber = '+380969692447';
    const message = encodeURIComponent('Здравствуйте! Я хочу заказать ваши услуги.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


    return(
        <HeroStyled>
            <div className="fog-div"></div>
            <div className="content-cont">
                <h1 className="title">View of the Gardens</h1>
                <h2 className="sub-title">Professional care for every garden</h2>
            </div>
            <div className="contact-link-cont">
                <a  className="hero-contact-link" 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span>Contact us</span>  
                </a>
            </div>
        </HeroStyled>
    )
};