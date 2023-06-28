import { Container, SpaceBetween } from "@cloudscape-design/components";
import React from "react";
import Chart from "../components/Chart";
import FormComp from "../components/Form";
import DashboardContextProvider from "../contexts/DashboardContext";

const Dashboard: React.FC = () => {
  return (
    <DashboardContextProvider>
      <SpaceBetween size="xxl">
        <Container>
          <FormComp />
        </Container>
        <Container>
          <Chart />
        </Container>
      </SpaceBetween>
    </DashboardContextProvider>
  );
};

export default Dashboard;
