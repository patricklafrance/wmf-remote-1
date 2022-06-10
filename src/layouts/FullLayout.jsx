import { Div, H1, LI, Nav, UL } from "@sharegate/orbit-ui"

import { Outlet } from "react-router-dom";
import React from "react";
import { RouterLink } from "@components/RouterLink";

export default function FullLayout() {
  return (
      <Div backgroundColor="alias-default">
        <H1>Custom full layout from remote1</H1>
        <Nav>
          <UL>
            <LI>
                <RouterLink to="/">Go back</RouterLink>
            </LI>
          </UL>
        </Nav>
        <Outlet />
      </Div>
  );
};
