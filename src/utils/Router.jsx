import Home from "@/pages/Home";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";

const UnderDevelopment = () => {
    return (
        <div className="text-center text-xl text-gray-600 mt-10">
            🚧 This page is under development.
        </div>
    );
};

const Profile = () => {
    return (
        <div className="text-center text-xl text-gray-600 mt-10">
            Profile page
        </div>
    );
};

const Articles = () => {
    return (
        <div className="text-center text-xl text-gray-600 mt-10">
            Articles
        </div>
    );
};


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'profile', element: <Profile /> },
            { path: 'articles', element: <Articles /> },

            // 👇 Catch-all route (fallback)
            { path: '*', element: <UnderDevelopment /> },
        ],
    },
]);

export default router;