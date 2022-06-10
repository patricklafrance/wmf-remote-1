import "@sharegate/orbit-ui/index.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Button, Div, H1, Inline, LI, Nav, ShareGateTheme, ThemeProvider, UL, createThemeVars, useColorSchemeContext } from "@sharegate/orbit-ui";
import React, { Suspense, lazy, useCallback } from "react";

import { Page5 } from "@pages/Page5";
import { RouterLink } from "@components/RouterLink";

const Page3 = lazy(() => import("@pages/Page3"));
const Page4 = lazy(() => import("@pages/Page4"));
const Page6 = lazy(() => import("@pages/Page6"));
const Page7 = lazy(() => import("@pages/Page7"));
const Page8 = lazy(() => import("@pages/Page8"));
const Page9 = lazy(() => import("@pages/Page9"));

createThemeVars([ShareGateTheme]);

function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useColorSchemeContext();

  const handleClick = useCallback(() => {
      setColorScheme(colorScheme === "light" ? "dark" : "light");
  }, [colorScheme, setColorScheme]);

  return (
      <Button variant="secondary" onClick={handleClick}>
          Toggle
      </Button>
  );
}

function DevLayout() {
    return (
        <Div backgroundColor="alias-default">
          <Inline alignY="center">
            <H1>This is the remote1 application for dev purpose only</H1>
            <ColorSchemeToggle />
          </Inline>
          <Nav>
            <UL>
              <LI>
                <RouterLink to="remote1/page-3">Page 3</RouterLink>
              </LI>
              <LI>
                <RouterLink to="remote1/page-4">Page 4</RouterLink>
              </LI>
              <LI>
                <RouterLink to="remote1/page-5">Page 5</RouterLink>
              </LI>
              <LI>
                <RouterLink to="remote1/page-6">Page 6</RouterLink>
              </LI>
              <LI>
                <RouterLink to="remote1/page-7">Page 7</RouterLink>
              </LI>
              <LI>
                <RouterLink to="remote1/page-8">Page 8</RouterLink>
              </LI>
              <LI>
                <RouterLink to="remote1/page-9">Page 9</RouterLink>
              </LI>
            </UL>
          </Nav>
          <Outlet />
        </Div>
    );
}

export function App() {
    return (
      <ThemeProvider theme={ShareGateTheme} colorScheme="light">
        <BrowserRouter>
          <Suspense fallback={<div>Loading from root...</div>}>
            <Routes>
                  <Route path="/" element={<DevLayout />}>
                      <Route path="remote1/page-3" element={<Page3 />} />
                      <Route path="remote1/page-4" element={<Page4 />} />
                      <Route path="remote1/page-5" element={<Page5 />} />
                      <Route path="remote1/page-6" element={<Page6 />} />
                      <Route path="remote1/page-7" element={<Page7 />} />
                      <Route path="remote1/page-8" element={<Page8 />} />
                      <Route path="remote1/page-9" element={<Page9 />} />
                  </Route>
              </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    )
}
