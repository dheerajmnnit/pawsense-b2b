import React from "react";

import Layout from "../../components/Layout";
import Container from "../../components/Layout/Container";
import FormWrapper from "./FormWrapper";

const CreateProfile = () => {
  return (
    <Layout showHeaderMenus={false}>
      <Container>
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "calc(100vh - 200px)" }}
        >
          <div className="max-w-lg w-full flex flex-col items-center">
            <h1 className="text-5xl text-primary font-semibold mb-10">
              Business Onboarding
            </h1>
            <div className="w-full">
              <FormWrapper />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CreateProfile;
