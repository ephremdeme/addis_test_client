import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { doneSelector, loadingSelector } from "../store/reducers";
import { Button } from "./Custom/Button";
import { Card, CardFooter, CardHeader } from "./Custom/Card";
import { Box } from "./Custom/Grid";
import ModalDialogue from "./Custom/Modal";

export const DeleteModal: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  confirmDelete: () => void;
}> = ({ open, setOpen, confirmDelete }) => {
  const isDone = useSelector(doneSelector);
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    if (isDone && isLoading === false) {
      setOpen(false);
    }
  }, [isDone, isLoading, setOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    confirmDelete();
  };
  return (
    <ModalDialogue flat setOpen={setOpen} open={open}>
      <Card>
        <Box m={3}>
          <CardHeader> Are you sure you want to delete?</CardHeader>
          <CardFooter justify="space-evenly">
            <Button color="#3f51b5" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="red" disabled={isLoading} onClick={handleClick}>
              Delete
            </Button>
          </CardFooter>
        </Box>
      </Card>
    </ModalDialogue>
  );
};

export default DeleteModal;
