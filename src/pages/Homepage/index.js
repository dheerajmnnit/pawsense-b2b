import React from "react";

import Layout from "../../components/Layout";
import Container from "../../components/Layout/Container";

import SplashScreen from "../../assets/img/splash-screen.png";

const Home = () => {
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
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Home;
