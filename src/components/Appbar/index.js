import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import logo from '../../assets/logo.png';

export default function AppBarComponent() {
    return (
        <AppBar position="fixed" title="Petz" style={{ background: '#fbcf3b', height: 80, boxShadow: 'none' }}>  
            <Toolbar>
                <img src={logo} alt="logo petz"/>
            </Toolbar>
        </AppBar>
    )
}