import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const StyledToolbar = styled(Toolbar)`
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;