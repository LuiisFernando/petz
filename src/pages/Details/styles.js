import styled from 'styled-components';
import { List, ListItem, Divider } from '@material-ui/core';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
    margin-bottom: 24px;
`;

export const Title = styled.h1`
    color: #00A0E4;
    font-size: 36px;
    margin-left: 50px;
`;

export const StyledList = styled(List)`
    background: white;
    margin-top: 20px;
    margin-bottom: 50px;
    border-radius: 10px;
`;

export const StyledListItem = styled(ListItem)`
    margin-top: 10px;
    padding: 30px;
`;

export const StyledDivider = styled(Divider)`
    margin: 0 50px;
`;