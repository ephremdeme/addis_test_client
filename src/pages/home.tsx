import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "../components/AddForm";
import { Box, Col, Row } from "../components/Custom/Grid";
import { Title } from "../components/Custom/Text";
import DeleteModal from "../components/DeleteModal";
import EditForm from "../components/EditForm";
import Employee from "../components/Employee";
import { ActionConstant } from "../store/actions/types";
import {
  employeeSelector,
  employeesSelector,
  loadingSelector,
} from "../store/reducers";
import { IEmployee } from "../store/types";

function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector);
  const employees = useSelector(employeesSelector);
  const employee = useSelector(employeeSelector);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  useEffect(() => {
    dispatch({ type: ActionConstant.SAGA_GET_EMPLOYEES });
  }, [dispatch]);

  const confirmDelete = () => {
    dispatch({
      type: ActionConstant.SAGA_DELETE_EMPLOYEE,
      payload: employee?._id,
    });
    setDeleteOpen(false);
  };

  const deleteHandler = (employee: IEmployee) => {
    dispatch({
      type: ActionConstant.SAGA_SET_EMPLOYEE,
      payload: employee,
    });
    setDeleteOpen(true);
  };

  const editHandler = (employee: IEmployee) => {
    dispatch({
      type: ActionConstant.SAGA_SET_EMPLOYEE,
      payload: employee,
    });
    setUpdateOpen(true);
  };

  return (
    <div>
      <AddForm />
      <Box m={3}>
        <Box flex justifyContent="center">
          <Title> Employee List </Title>
        </Box>
      </Box>
      {isLoading && (
        <Box flex justifyContent="center">
          <Title> Loading... </Title>
        </Box>
      )}
      <Box>
        <Row>
          {employees.map((emp) => (
            <Col key={emp._id}>
              <Employee
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                employee={emp}
              />
            </Col>
          ))}
        </Row>
      </Box>
      <DeleteModal
        confirmDelete={confirmDelete}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />
      <EditForm open={updateOpen} setOpen={setUpdateOpen} />
    </div>
  );
}

export default Home;
