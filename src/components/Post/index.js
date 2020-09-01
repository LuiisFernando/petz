import React from 'react';
import { Tooltip } from '@material-ui/core';
import { FiTrash, FiMessageCircle } from 'react-icons/fi';

import { Container, Title, Body, Actions, StyledIconButton } from './styles'

export default function Post({ title, body, onClickView, onClickDelete, showActions }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Body>{body}</Body>
            <Actions showActions={showActions}>
                <Tooltip title="delete the post">
                    <StyledIconButton onClick={onClickDelete}>
                        <FiTrash />
                    </StyledIconButton>
                </Tooltip>
                <Tooltip title="view the post">
                    <StyledIconButton onClick={onClickView}>
                        <FiMessageCircle />
                    </StyledIconButton>
                </Tooltip>
            </Actions>
        </Container>
    );
}