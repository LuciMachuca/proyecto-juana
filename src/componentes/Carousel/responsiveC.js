import { css } from "styled-components"

export const mob = (props) => {
    return css`
        @media only screen and (max-width: 400px){
        ${props}
    }
    `;
}