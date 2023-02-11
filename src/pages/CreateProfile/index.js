import React from "react";

import Layout from "../../components/Layout";
import Container from "../../components/Layout/Container";
import SplashScreen from "../../assets/img/create-profile.png";
import Form from "./Form";

const CreateProfile = () => {
    return (
        <Layout showHeaderMenus={false}>
            <Container>
                <div className="flex items-center justify-around h-[800px]">
                    <div className="w-2/3 flex items-center justify-center">
                        <img src={SplashScreen} alt="splash-screen" className="w-[600px]" />
                    </div>
                    <div className="w-1/3">
                        <h1 className="text-5xl text-primary font-semibold mb-5">
                            Create Profile
                        </h1>
                        <p className="text-2xl font-light text-gray-dark mb-5">
                            Join us to gain more control over your day!
                        </p>
                        <Form />
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default CreateProfile;
