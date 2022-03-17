import styled from "styled-components";
import {mobile} from "./responsive.js"

export const Container = styled.div`
    
    max-width: 400px;
    
    ${mobile({ display: "flex", maxWidth: "1200px" })}

`;

export const ImgContainer = styled.div`
    margin-top: 25px;
    width: 100%;

    ${mobile({ width: "50%",  })}
`;

export const Image = styled.img`
    width: 90%;
    
    margin: 0 auto;
    margin-left: 22px;

    ${mobile({ width: "100%", marginLeft: "25px", marginBottom: "20px" })}


`;

export const InfoContainer = styled.div`
    flex: 1;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-left: 50px;
    padding-left: 20px;
    margin:  0 auto;

    ${mobile({ margin: "auto", paddingLeft: "80px" })}

    
`;

export const Dir = styled.p`
    margin-left: 15px;
    
    display: flex;
    padding-bottom: 5px;
   line-height: 23px;
   font-size: 14px;
   font-family: "Spartan";

   
    
    
`;