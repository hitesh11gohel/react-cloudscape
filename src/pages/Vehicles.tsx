import React from "react";
import { Button, Container } from "@cloudscape-design/components";
import CardComp from "../components/Card";
import { useAppProvider } from "../contexts/AppContext";

const Vehicles = () => {
  const { vehicles, setDataDetails } = useAppProvider();
  return (
    <Container>
      {vehicles && vehicles.length > 0 && <CardComp />}
      <Button variant="primary" onClick={() => setDataDetails("vehicles")}>
        Load Vehicle
      </Button>
    </Container>
  );
};

export default Vehicles;
