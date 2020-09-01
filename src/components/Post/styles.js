import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: white;
    border-radius: 10px;
`;

export const Title = styled.h1`
    color: #262626;
    margin-bottom: 15px;
`;

export const Body = styled.p`
    color: #6E6E6E;
`;

export const Actions = styled.div`
    display: ${props => (props.showActions ? 'flex' : 'none')};
    margin-top: 50px;
`;

export const StyledIconButton = styled(IconButton)`
    padding: 0;
    margin-right: 10px;
    font-size: 1rem;
`;

