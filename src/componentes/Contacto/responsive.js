import { css } from "styled-components"

export const desk = (props) => {
    return css`
        @media only screen and (min-width: 900px){
        ${props}
    }
    `;
}