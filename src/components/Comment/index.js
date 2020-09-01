import React from 'react';

import { Container, Title, Body } from './styles'

export default function Comment({ title, body }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Body>{body}</Body>
        </Container>
    );
}