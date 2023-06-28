/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Button,
  Container,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
} from "@cloudscape-design/components";
import { useAppProvider } from "../contexts/AppContext";

const Users: React.FC = () => {
  const { users, setDataDetails } = useAppProvider();
  return (
    <Container>
      {users &&
        users.length > 0 &&
        users.map((item, i) => (
          <Container className={"my-2rem"} key={i}>
            <Form
              variant="embedded"
              header={<Header variant="h3">{item.name}</Header>}
            >
              <SpaceBetween size="l" direction="vertical">
                <FormField label="Name :" stretch>
                  <Input value={item.name} readOnly />
                </FormField>
                <FormField label="Bio :" stretch>
                  <Input value={item.bio} readOnly />
                </FormField>
                <FormField label="Job Title :" stretch>
                  <Input value={item.jobTitle} readOnly />
                </FormField>
                <FormField label="Job Area :" stretch>
                  <Input value={item.jobArea} readOnly />
                </FormField>
                <FormField label="Job Description :" stretch>
                  <Input value={item.jobDescription} readOnly />
                </FormField>
              </SpaceBetween>
            </Form>
          </Container>
        ))}
      <Button variant="primary" onClick={() => setDataDetails("users")}>
        Load Users
      </Button>
    </Container>
  );
};

export default Users;
