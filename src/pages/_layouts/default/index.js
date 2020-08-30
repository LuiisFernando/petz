import React from "react";

import AppBarComponent from '../../../components/Appbar';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <AppBarComponent />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}
