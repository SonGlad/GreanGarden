import styled from "styled-components";


export const WorksStyled = styled.div`
    position: relative;
    padding-bottom: 120px;
    /* padding-bottom: calc(460px - (100vw - 460px)); */


    /* @media screen and (min-width: 768px){
        padding-bottom: calc(380px - ((100vw - 768px) * 0.3));
    } */

    
    /* @media screen and (min-width: 1280px){
        padding-bottom: calc(335px - ((100vw - 1280px) * 0.1));
    } */


    .work-title-cont{
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 15px;
       margin-bottom: 90px;
       
       & .work-section-title{
           color: ${p => p.theme.color.text_color2};
           font-weight: 500;
           font-size: 48px;
           white-space: nowrap;
           flex-shrink: 0;
        }

        & .span-before{
            position: relative;
            width: 100%;

            @media screen and (min-width: 1280px){
                max-width: 462px;
            }
            
            &::before{
                position: absolute;
                left: 0;
                content: '';
                background-color: ${p => p.theme.color.text_color2};
                width: 100%;
                height: 1px;
                z-index: 1;
            }
        }

        .span-after{
            position: relative;
            width: 100%;

            &::before{
                position: absolute;
                left: 0;
                content: '';
                background-color: ${p => p.theme.color.text_color2};
                width: 100%;
                height: 1px;
                z-index: 1;
            }
        }  
    }

    .work-list{
        color: ${p => p.theme.color.text_color1};
        width: 100%;

        & li{
            margin-bottom: 24px;

            @media screen and (min-width: 768px){
                margin-bottom: 0;
            }
        }

        & li:last-child{
            margin-bottom: 0;

            @media screen and (min-width: 768px){
                transform: translateX(53.5%);
            }

            @media screen and (min-width: 1280px){
                transform: translateX(52.5%);
            }

            @media screen and (min-width: 1440px){
                transform: translateX(60%);
            }
        }

        @media screen and (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
            flex-wrap: wrap;
        }

        @media screen and (min-width: 1440px){
            justify-content: space-evenly;
            
        }


        & .work-item{
            background-color: ${p => p.theme.color.text_color2};
            border-radius: 15px;
            padding: 32px;
            max-width: 491px;
            margin-left: auto;
            margin-right: auto;
            min-height: 216px;

            @media screen and (min-width: 768px){
                margin-left: 0;
                margin-right: 0;
                width: 48%;
            }

            @media screen and (min-width: 1440px){
                max-width: none;
                width: 40%;
            } 
            
            
            & .item-title-cont{
                display: flex;
                gap: 14px;
                align-items: flex-end;
                margin-bottom: 35px;

                & span{
                    font-weight: 500;
                    font-size: 48px;
                    line-height: 37px;
                }

                & h3{
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 20px;

                    @media screen and (min-width: 1440px){
                        font-size: 24px;
                    } 
                }
            }

            & .work-item-text{
                font-weight: 400;
                font-size: 16px;

                @media screen and (min-width: 1440px){
                    font-size: 20px;
                } 
            }
        }
    }




    & .work-back-cont{
        @media screen and (max-width: 767px){
            display: none;
        }

        position: absolute;
        height: auto;
        z-index: -1;
        left: -3%;
        bottom: -19%;

        @media screen and (min-width: 1440px){
            width: 45%;
            max-width: 940px;
        }


        & .services-svg-background-four-img{
            width: 100%;
            height: auto;   
        }

    }
`