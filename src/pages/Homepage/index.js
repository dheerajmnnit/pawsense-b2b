import React from "react";

import Layout from "../../components/Layout";
import Container from "../../components/Layout/Container";
import Button from "../../components/Button";

import { useNavigate } from "react-router";

import SplashScreen from "../../assets/img/splash-screen.png";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Container>
                <div className="flex items-center justify-around h-[800px]">
                    <div className="w-1/2 flex items-center justify-center">
                        <img src={SplashScreen} alt="splash-screen" className="w-[600px]" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-7xl text-primary font-semibold mb-10">
                            More Power
                            <br /> to Groomers{" "}
                        </h1>
                        <p className="text-3xl font-light">
                            PawSense belives in greater control <br /> for businesses. Seize
                            the day and get <br /> more done!
                        </p>
                        <div className="flex items-center gap-4 mt-12">
                            <Button
                                label="Join Us"
                                className="ml-10"
                                variant="primary"
                                onClick={() => navigate("/login")}
                            />
                            <Button
                                label="Walk Thru"
                                variant="secondary"
                                onClick={() => navigate("/demo")}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Home;
