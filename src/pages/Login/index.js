import React from "react";

import Layout from "../../components/Layout";
import Container from "../../components/Layout/Container";
import Form from "./Form";

import SplashScreen from "../../assets/img/login.png";

const CreateProfile = () => {
  return (
    <Layout showHeaderMenus={false}>
      <Container>
        <div className="flex items-center justify-around h-[800px]">
          <div className="lg:w-2/3 xl:w-7/12 flex items-center justify-center">
            <img src={SplashScreen} alt="splash-screen" className="w-[600px]" />
          </div>
          <div className="lg:w-1/3 xl:w-5/12 pr-20">
            <h1 className="text-5xl text-primary font-semibold mb-5">Login</h1>
            <p className="text-2xl font-light text-gray-dark mb-5">
              Welcome back to PawSense!
            </p>
            <Form />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CreateProfile;
