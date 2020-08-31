import styled, { css } from 'styled-components';
import { device } from '../../../../theme'

export const NavItemWrap = styled.li`
    padding: 0 20px;  
    @media ${device.xlarge}{
        padding: 0 15px; 
    }
    ${props => props.hasSubmenu && css`
        position: relative;
    `}
    /* ${props => props.hasMegamenu && css`
        position: static;
    `} */
`;
