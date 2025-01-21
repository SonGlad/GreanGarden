import styled from "styled-components";


export const ContactLinkStyled = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px){
        width: 100%;
    }
    
    .contact-menu-link{
        width: 100%;
        display: block;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid ${(p) => p.theme.color.logo_green_color};
        color: ${(p) => p.theme.color.text_color2};
        background-color: ${(p) => p.theme.color.body_bg_color};
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        transition: color ${p => p.theme.transition.main_transition},
                    background-color ${p => p.theme.transition.main_transition},
                    outline ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px){
            text-align: center;
            text-decoration: none;
            padding: 5px 10px;
            width: 168px;
        }

        @media screen and (min-width: 1280px){
            line-height: 22px;
            font-size: 20px;
            padding: 10px 15px;
            border-radius: 30px;
            width: fit-content;
        }  

        &:hover{
            background-color: ${(props) => props.theme.color.hover_color};
            border: 1px solid ${(p) => p.theme.color.hover_color};  
        }
    }
`