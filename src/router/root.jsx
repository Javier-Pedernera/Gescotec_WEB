
// import FAQPage from "../components/FAQPage/index.jsx";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Servicios from "../components/Servicios";
import ContactoForm from "../components/ContactoForm";
import Equipo from "../components/Equipo";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/servicios",
                element: <Servicios />
            },
            {
                path: "/contactanos",
                element: <ContactoForm />
            },
            {
                path: "/equipo",
                element: <Equipo />
            },
            // {
            //     path: '/faq',
            //     element: <FAQPage />
            // },
            {
                path: "*",
                element: <Navigate to="/home" replace />
            }
        ]
    }
]);