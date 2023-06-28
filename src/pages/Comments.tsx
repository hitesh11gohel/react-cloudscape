import React from "react";
import { Button, Container } from "@cloudscape-design/components";
import CustomTable from "../components/CustomTable";
import { useAppProvider } from "../contexts/AppContext";

const Comments: React.FC = () => {
  const { comments, setDataDetails } = useAppProvider();
  return (
    <Container>
      {comments && comments.length > 0 && <CustomTable />}
      <Button variant="primary" onClick={() => setDataDetails("comments")}>
        Load Comments
      </Button>
    </Container>
  );
};

export default Comments;
