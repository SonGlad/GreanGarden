import styled from "styled-components";


export const ContactLinkStyled = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px){
        width: 100%;
    }
    
    .contact-menu-link{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding: 15px;
        border-radius: 10px;
        outline: 1px solid ${(p) => p.theme.color.logo_green_color};
        outline-offset: -1px;
        color: ${(p) => p.theme.color.text_color};
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
            padding: 5px;
        }

        @media screen and (min-width: 1280px){
            padding: 10px;
            line-height: 18px;
        }  

        &:hover{
            background-color: ${(props) => props.theme.color.hover_color};
            color: ${(p) => p.theme.color.logo_green_color};    
            outline: 1px solid ${(p) => p.theme.color.hover_color};  
        }
    }
`