import styled from "styled-components";
import HeroBackgroundImage from '../../images/images/Subtract.png';
import FogBackgroundImage from '../../images/images/fog.png';



export const HeroStyled = styled.div`
    height: calc(100dvh - 88px);
    position: absolute;
    z-index: 1;
    overflow: hidden;
    background-image: url(${HeroBackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    left: 0;

    @media screen and (min-width: 1280px){
        height: calc(100dvh - 96px); 
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column; 
    }

    .fog-div {
        width: 100%;
        height: calc(100dvh - 88px);
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(${FogBackgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        z-index: 2;
        pointer-events: none;


        -webkit-mask-image: 
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
            linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
        -webkit-mask-composite: intersect;

        mask-image: 
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
            linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
        mask-composite: intersect;
        animation: fogRise 15s linear infinite;

        @media screen and (min-width: 1280px){
            height: calc(100dvh - 96px);  
        }
    }

    @keyframes fogRise {
        0% {
            background-position-y: -30%;
            opacity: 0;
        }
        50% {
            background-position-y: 20%;
            opacity: 1;
        }
        100% {
            background-position-y: 70%;
            opacity: 0;
        }
    }


    .content-cont{
        backdrop-filter: blur(4px);
        background-color: #e7ffcb3b;
        border-radius: 30px;
        padding: 43px 24px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 180px;

        @media screen and (min-width: 780px){
            margin-left: auto;
            margin-right: auto;
            max-width: 70%;
        }
        
        @media screen and (min-width: 1280px){
            max-width: none;
            margin-top: 0px;
            margin-left: 140px;
            margin-right: 0;
        }
    }

    .title{
        text-align: center;
        font-weight: 600;
        font-size: 48px;
        margin-bottom: 20px;

        @media screen and (min-width: 780px){
            font-size: 56px;
        }

        @media screen and (min-width: 1280px){
            font-size: 64px;
        }
    }

    .sub-title{
        font-weight: 400;
        font-size: 20px;
        text-align: center;

        @media screen and (min-width: 780px){
            font-size: 28px;
        }

        @media screen and (min-width: 1280px){
            font-size: 32px;
            text-align: left;
        }
    }

    .contact-link-cont{
        margin-top: 40px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;


        @media screen and (min-width: 1280px){
            margin-top: 24px;
            margin-left: 140px;
            margin-right: 0;
        }
    }
    
    .hero-contact-link{
        width: 100%;
        display: block;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid ${(p) => p.theme.color.logo_green_color};
        color: ${(p) => p.theme.color.text_color2};
        background-color: ${(p) => p.theme.color.body_bg_color};
        font-weight: 500;
        font-size: 20px;
        line-height: 14px;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
        transition: color ${p => p.theme.transition.main_transition},
                    background-color ${p => p.theme.transition.main_transition},
                    outline ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px){
            text-align: center;
            text-decoration: none;
            max-width: 50%;
        }

        @media screen and (min-width: 1280px){
            line-height: 22px;
            font-weight: 500;
            padding: 12px 90px;
            border-radius: 30px;
            max-width: none;
            width: fit-content;
        }  

        &:hover{
            background-color: ${(props) => props.theme.color.hover_color};
            border: 1px solid ${(p) => p.theme.color.hover_color};  
        }
    }

`