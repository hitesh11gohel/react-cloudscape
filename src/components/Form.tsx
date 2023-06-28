import {
  Button,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useContext, useState } from "react";
import { IUser } from "../types";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../contexts/DashboardContext";
import { useAppProvider } from "../contexts/AppContext";

const FormComp: React.FC = () => {
  const navigate = useNavigate();
  const { users, setUsersDetails, setActiveHrefDetails } = useAppProvider();
  const DashboardContextContainer = useContext(DashboardContext);
  console.log("DashboardContextContainer :", DashboardContextContainer);

  const [user, setUser] = useState<IUser>({
    name: "",
    bio: "",
    jobTitle: "",
    jobArea: "",
    jobDescription: "",
  });

  const onSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // setUsers([user, ...context.users]);
    // setActiveHref("/users");
    setUsersDetails([user, ...users]);
    setActiveHrefDetails("/users");
    navigate("/users");
  };

  function resetForm() {
    setUser({
      name: "",
      bio: "",
      jobTitle: "",
      jobArea: "",
      jobDescription: "",
    });
  }

  return (
    <form onSubmit={onSubmitForm}>
      <Form
        variant="embedded"
        actions={
          <SpaceBetween direction="horizontal" size="m">
            <Button formAction="none" variant="link" onClick={resetForm}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </SpaceBetween>
        }
        header={<Header variant="h3">User Form</Header>}
      >
        <SpaceBetween size="l" direction="vertical">
          <FormField label="Name :" stretch>
            <Input
              value={user.name}
              onChange={({ detail }) =>
                setUser({ ...user, name: detail.value })
              }
            />
          </FormField>
          <FormField label="Bio :" stretch>
            <Input
              value={user.bio}
              onChange={({ detail }) => setUser({ ...user, bio: detail.value })}
            />
          </FormField>
          <FormField label="Job Title :" stretch>
            <Input
              value={user.jobTitle}
              onChange={({ detail }) =>
                setUser({ ...user, jobTitle: detail.value })
              }
            />
          </FormField>

          <FormField label="Job Area :" stretch>
            <Input
              value={user.jobArea}
              onChange={({ detail }) =>
                setUser({ ...user, jobArea: detail.value })
              }
            />
          </FormField>
          <FormField label="Job Description :" stretch>
            <Input
              value={user.jobDescription}
              onChange={({ detail }) =>
                setUser({ ...user, jobDescription: detail.value })
              }
            />
          </FormField>
        </SpaceBetween>
      </Form>
    </form>
  );
};

export default FormComp;
