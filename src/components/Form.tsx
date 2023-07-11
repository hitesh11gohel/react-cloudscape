import {
  Button,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useState } from "react";
import { IUser } from "../types";
import { useNavigate } from "react-router-dom";
// import { DashboardContext } from "../contexts/DashboardContext";
import { useAppProvider } from "../contexts/AppContext";

interface IhandleChange {
  cancelBubble: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  detail: { value: string };
}

const FormComp: React.FC = () => {
  const navigate = useNavigate();
  const { users, setUsersDetails, setActiveHrefDetails } = useAppProvider();
  // const DashboardContextContainer = useContext(DashboardContext);
  // console.log("DashboardContextContainer :", DashboardContextContainer);

  const [user, setUser] = useState<IUser>({
    name: "",
    bio: "",
    jobTitle: "",
    jobArea: "",
    jobDescription: "",
  });
  const [error, setError] = useState<IUser>({
    name: "",
    bio: "",
    jobTitle: "",
    jobArea: "",
    jobDescription: "",
  });

  const onSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, bio, jobTitle, jobArea, jobDescription } = user;
    if (!(name && bio && jobTitle && jobArea && jobDescription)) {
      setError({
        name: !name ? "name field is required" : "",
        bio: !bio ? "bio field is required" : "",
        jobTitle: !jobTitle ? "jobTitle field is required" : "",
        jobArea: !jobArea ? "jobArea field is required" : "",
        jobDescription: !jobDescription
          ? "jobDescription field is required"
          : "",
      });
    } else {
      // setUsers([user, ...context.users]);
      // setActiveHref("/users");
      setUsersDetails([user, ...users]);
      setActiveHrefDetails("/users");
      navigate("/users");
    }
  };

  const resetForm = () => {
    setUser({
      name: "",
      bio: "",
      jobTitle: "",
      jobArea: "",
      jobDescription: "",
    });
    setError({
      name: "",
      bio: "",
      jobTitle: "",
      jobArea: "",
      jobDescription: "",
    });
  };

  const validate = (name: string, value: string) => {
    setError({
      ...error,
      [name]: !value ? `${name} field is required` : "",
    });
  };

  const handleChange = (name: string, { detail }: IhandleChange) => {
    validate(name, detail.value);
    setUser({ ...user, [name]: detail.value });
  };

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
          <FormField label="Name :" errorText={error.name} stretch>
            <Input
              value={user.name}
              onChange={(e) => handleChange("name", e)}
            />
          </FormField>
          <FormField label="Bio :" errorText={error.bio} stretch>
            <Input value={user.bio} onChange={(e) => handleChange("bio", e)} />
          </FormField>
          <FormField label="Job Title :" stretch errorText={error.jobTitle}>
            <Input
              value={user.jobTitle}
              onChange={(e) => handleChange("jobTitle", e)}
            />
          </FormField>

          <FormField label="Job Area :" errorText={error.jobArea} stretch>
            <Input
              value={user.jobArea}
              onChange={(e) => handleChange("jobArea", e)}
            />
          </FormField>
          <FormField
            label="Job Description :"
            errorText={error.jobDescription}
            stretch
          >
            <Input
              value={user.jobDescription}
              onChange={(e) => handleChange("jobDescription", e)}
            />
          </FormField>
        </SpaceBetween>
      </Form>
    </form>
  );
};

export default FormComp;
