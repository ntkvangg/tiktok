import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Uplodad";
import { HeaderOnly } from "@/components/Layout";

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
