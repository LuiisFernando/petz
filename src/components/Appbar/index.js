import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import logo from '../../assets/logo.png';

import { StyledToolbar } from './styles';

export default function AppBarComponent() {
    return (
        <AppBar position="fixed" title="Petz" style={{ background: '#FFD400', height: 90, boxShadow: 'none' }}>  
            <StyledToolbar>
                <Link to="/">
                    <img src={logo} alt="logo petz"/>
                </Link>
            </StyledToolbar>
        </AppBar>
    )
}