import styled from "styled-components";


export const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.color.header_bg_color};
    position: fixed;
    width: 100%;
    transition: all ${(p) => p.theme.transition.main_transition};

    ${(props) => props.$isScrolled &&
    `
      background-color: #142515ed;
      backdrop-filter: blur(10px);
    `}


    .header-container{
        padding: 20px 0 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .header-logo{
        width: 60px;
        cursor: pointer;
    }

    .desctop-menu{
        @media screen and (max-width: 767px){
            display: none;
        }
        margin-left: auto;

        @media screen and (min-width: 1280px){
            margin-right: 40px;
            width: 100%;
        }
    }


    .lang-cont{
        margin-left: auto;
        margin-right: 2.5rem;
        position: relative;

        @media screen and (min-width: 768px){
            margin-right: 0;
        }

        @media screen and (min-width: 1280px){
            margin-left: 0;
        }

        & .lang-text{
            font-size: 1rem;
        }

        & .lang-button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 5px;
            border-radius: 10px;
            background-color: transparent;
            /* background-color: ${(props) => props.theme.color.header_bg_color}; */
            color: ${(p) => p.theme.color.logo_green_color};
            transition: background-color ${(p) => p.theme.transition.main_transition};

            &:hover{
                background-color: ${(props) => props.theme.color.hover_color};
            }

            & .arrow-svg{
                fill: ${(p) => p.theme.color.logo_green_color};
                rotate: 0deg;
                transition: rotate ${(p) => p.theme.transition.main_transition};
            }
        }

        & .lang-drop-list{
            position: absolute;
            top: 100%;
            width: 100%;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            overflow: hidden;
            transform: scale(0);
            transform-origin: left top;
            transition: transform ${p => p.theme.transition.main_transition};

            
            & .lang-drop-item{
                padding: 5px;
                width: 100%;
                background-color: ${(props) => props.theme.color.header_bg_color};
                color: ${(p) => p.theme.color.logo_green_color};
                border-top: 1px solid ${(p) => p.theme.color.logo_green_color};
                transition: background-color ${(p) => p.theme.transition.main_transition};
                cursor: pointer;
                
                &:hover{
                    background-color: ${(props) => props.theme.color.hover_color};
                }
            }
        }

        & .visible{
            transform: scale(1);
        }

        & .active{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            background-color: ${(props) => props.theme.color.active_color};
            

            & .arrow-svg{
                rotate: 180deg;
            }
        }
    }

    .mobile-nav-cont{
        @media screen and (min-width: 768px){
            display: none;
        }
    }

    .burger-button{
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .burger-svg{
        width: 2.25rem;
        height: 2.25rem;
        fill: ${(props) => props.theme.color.logo_green_color};
    }


    .mob-menu{
        top: 0;
        left: 0;
        position: absolute;
        height: auto;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        padding: 20px;
        background-color: ${(props) => props.theme.color.header_bg_color};
        transform: translateX(-100%);
        transition: transform ${p => p.theme.transition.main_transition};
        text-align: center;
        
        @media screen and (min-width: 768px){
            display: none;
        }

        & .close-btn{
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
    
            & .close-svg{
                fill: ${(props) => props.theme.color.logo_green_color};
                width: 24px;
                height: 24px;
            }
        }
    }

    .is-mob-menu-active{
        transform: translateX(0);
    }

    .mobile-logo-cont {
        position: relative;
        width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid ${(p) => p.theme.color.logo_green_color};
    }

    .menu-description{
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 16px;
        max-width: 210px;
        line-height: 24px;
        color: ${(p) => p.theme.color.logo_green_color};
    }

`