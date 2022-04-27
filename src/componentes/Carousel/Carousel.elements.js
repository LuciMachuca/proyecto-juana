import styled from "styled-components";
import {mob} from "./responsiveC"

export const Container = styled.div`
    max-width: 1400px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    height: 50%;
    display: flex;
    position: relative;
    overflow: hidden;

    
    
    
`;

export const Arrow = styled.div`
    
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

export const Wrapper = styled.div`
   
    height: 50%;
    display: flex;
    transition: all 1.5s ease;
    
   
    transform: translateX(${props=>props.slideIndex * -100}vw);
    
    
`;

export const Slide = styled.div`
    width: 100vw;
    height: 50%;
    display: flex;
    align-items: center;
    
    
    
    ${mob({ display: "block", })}
`;

export const ImgContainer = styled.div`
    width: 50%;
    height: 100%;
    
    /* flex: 1; */
    ${mob({ width: "100%",})}
`;

export const Image = styled.img`
    width: 100%;
    height: 70%;

    
`;

export const InfoContainer = styled.div`
    width: 50%;
   
   /*  flex: 1; */

   ${mob({ width: "95%", })}
`;

export const ImageComen = styled.img`

    width: 100%;
`;