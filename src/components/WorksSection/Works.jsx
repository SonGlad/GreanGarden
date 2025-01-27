import { WorksStyled } from "./Works.styled";
import SVGBackgroundImage4 from '../../images/images/svg-back4.png';



export const Works = () => {


    return(
        <WorksStyled>
            <div className="work-title-cont">
                <span className='span-before'></span>
                <h2 className="work-section-title">How it work</h2>
                <span className="span-after"></span>
            </div>
            <ul className="work-list">
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">01</span>
                        <h3 className="item-title">Consultation and analysis</h3>
                    </div>
                    <p className="work-item-text">We discuss your wishes, inspect the site and analyze its features (soil, lighting, climate).</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">02</span>
                        <h3 className="item-title">Project development</h3>
                    </div>
                    <p className="work-item-text">Our designers create a unique plan for your garden or green area, taking into account every detail.</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">03</span>
                        <h3 className="item-title">Preparing the area</h3>
                    </div>
                    <p className="work-item-text">We prepare the site for landscaping: we clean, fertilize the soil and install the necessary systems (watering, drainage).</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">04</span>
                        <h3 className="item-title">Planting</h3>
                    </div>
                    <p className="work-item-text">We plant selected plants, trees, flowers and create landscape elements in accordance with the approved project.</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">05</span>
                        <h3 className="item-title">Service</h3>
                    </div>
                    <p className="work-item-text">Our experts provide regular maintenance for your garden, including pruning, watering and pest control.</p>
                </li>
            </ul>
            <div className="work-back-cont">
                <img className="services-svg-background-four-img" src={SVGBackgroundImage4} alt='background_image' width={744}></img>
            </div>
        </WorksStyled>
    );
};