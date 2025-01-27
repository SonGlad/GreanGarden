import { AboutStyled } from "./About.styled";
import CardImageSeven from "../../images/images/picture7.jpg";
import {ReactComponent as AboutPictureSVG} from "../../images/svg/picture1_svg.svg";
import {ReactComponent as AboutDescrSVG} from "../../images/svg/about-decr-svg.svg";
import {ReactComponent as AboutSVGBack} from "../../images/svg/svg-back3.svg";



export const About = () => {


    return (
        <AboutStyled>
            <div className="about-title-cont">
                <span className='span-before'></span>
                <h2 className="about-section-title">About Us</h2>
                <span className="span-after"></span>
            </div>
            <div  className="about-back-cont">
                <AboutPictureSVG className="about-back-svg"/>
            </div>
            <div className="about-main-cont">
                <div className="about-image-cont">
                    <img className="about-img" src={CardImageSeven} alt="about-img"/>
                </div>
                <ul className="about-text-list">
                    <li className="about-text-item">
                        <p className="about-text">
                            We are a team of professionals who are in love with nature. Our mission is to transform any space into an oasis of harmony and beauty. We have been engaged in landscape design, creating gardens and green areas for more than 10 years.
                        </p>
                        <AboutDescrSVG className="about-descr-svg"/>
                    </li>
                    <li className="about-text-item">
                        <p className="about-text">
                            We know how to make your garden a place of inspiration, relaxation and tranquility. Our experts take into account every detail - from the composition of the soil to the unique needs of the plants.
                        </p>
                    </li>
                    <li className="about-text-item">
                        <p className="about-text">
                            We use modern technologies such as automatic watering systems and vertical gardening to keep your garden looking its best all year round. Trust us and we will give you a green corner where nature comes to life!
                        </p>
                    </li>
                </ul>
            </div>
            <div className="svg-back-cont">
                <AboutSVGBack className="about-cont-back-svg"/>
            </div>
        </AboutStyled>
    )
};