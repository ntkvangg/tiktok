import React, {Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes";
import DefaultLayout  from "@/common/DefaultLayout";
import "./App.scss";
import {useStore} from "./store";



function App() {
    const [state, dispatch] = useStore();
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout || DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Suspense fallback={<p>Loading....</p>}>
                                        <Page />
                                    </Suspense>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
