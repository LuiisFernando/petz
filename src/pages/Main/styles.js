import styled from 'styled-components';
import { List } from '@material-ui/core';

export const Title = styled.h1`
    color: #00A0E4;
    font-size: 36px;
    padding-top: 50px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const StyledList = styled(List)`
    background: #eee;
`;

export const FilterContainer = styled.div`
    width: 100%;
`;

export const ButtonContainer = styled.div`
    margin-top: 20px;
`;

export const CounterPost = styled.p`
    margin: 10px 0;
    color: #6E6E6E;
    font-size: 14px;
`;