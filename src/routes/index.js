import React from "react";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import { HeaderOnly } from "@/components/Layout";

const Home = React.lazy(() => import("@/pages/Home"));
const Upload = React.lazy(() => import("@/pages/Upload"));

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/follwing",
        component: Following,
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/upload",
        component: Upload,
        layout: HeaderOnly
    }
];

const privateRoutes = [];
export { privateRoutes, publicRoutes };
