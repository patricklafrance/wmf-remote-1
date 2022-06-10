import React, { lazy } from "react";

import { Page5 } from "@pages/Page5";

const Page3 = lazy(() => import("@pages/Page3"));
const Page4 = lazy(() => import("@pages/Page4"));
const Page6 = lazy(() => import("@pages/Page6"));
const Page7 = lazy(() => import("@pages/Page7"));
const Page8 = lazy(() => import("@pages/Page8"));
const Page9 = lazy(() => import("@pages/Page9"));
const FullLayout = lazy(() => import("@layouts/FullLayout"));

const FullLayoutDefinition = { path: "full", element: <FullLayout /> };

export function register({ registerRoute, registerNavigationItem, eventBus }) {
    console.log("registering remote1");

    registerRoute({ path: "remote1/page-3", element: <Page3 /> });
    registerRoute({ path: "page-4", element: <Page4 />, layout: FullLayoutDefinition });
    registerRoute({ path: "remote1/page-5", element: <Page5 /> });
    registerRoute({ path: "remote1/page-6", element: <Page6 /> });
    registerRoute({ path: "remote1/page-7", element: <Page7 /> });
    registerRoute({ path: "remote1/page-8", element: <Page8 eventBus={eventBus} /> });
    registerRoute({ path: "remote1/page-9", element: <Page9 /> });

    registerNavigationItem({ to: "remote1/page-3", displayName: "Lazy loaded page from remote1 + custom css styling" });
    registerNavigationItem({ to: "full/page-4", displayName: "Custom lazy loaded layout from remote1" });
    registerNavigationItem({ to: "remote1/page-5", displayName: "Regular page from remote1", nestedItems: [{ to: "remote1/page-6", displayName: "Nested page in menu" }] });
    registerNavigationItem({ to: "remote1/page-7", displayName: "Higher menu priority", priority: 999 });
    registerNavigationItem({ to: "remote1/page-8", displayName: "Event bus example" });
    registerNavigationItem({ to: "remote1/page-9", displayName: "Orbit themed page in remote1" });
}