import React from "react";
import { IEmployee } from "../store/types";
import Button from "./Custom/Button";
import { Card, CardHeader, CardContent, CardFooter } from "./Custom/Card";
import { Row, Col } from "./Custom/Grid";
import { Typography } from "./Custom/Text";

export const Employee: React.FC<{
  employee: IEmployee;
  deleteHandler: (employee: IEmployee) => void;
  editHandler: (employee: IEmployee) => void;
}> = ({ employee, deleteHandler, editHandler }) => {
  const handleDeleteClick = () => {
    deleteHandler(employee);
  };
  const handleEditClick = () => {
    editHandler(employee);
  };
  return (
    <Card>
      <CardHeader>{employee.name}</CardHeader>
      <CardContent>
        <Row>
          <Col>
            <Typography fontWeight={500} fontSize={16} textAlign="left">
              Gender :
            </Typography>
          </Col>
          <Col>
            <Typography fontWeight={500} fontSize={16} textAlign="left">
              {employee.gender}
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography fontWeight={500} fontSize={16} textAlign="left">
              Salary :
            </Typography>
          </Col>
          <Col>
            <Typography fontWeight={500} fontSize={16} textAlign="left">
              {employee.salary}
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography fontWeight={500} fontSize={16} textAlign="left">
              Date Of Birth :
            </Typography>
          </Col>
          <Col>
            <Typography fontWeight={500} fontSize={16} textAlign="left">
              {new Date(employee.birth_date).toLocaleDateString()}
            </Typography>
          </Col>
        </Row>
      </CardContent>
      <CardFooter justify="space-evenly">
        <Button color="red" onClick={handleDeleteClick}>
          Delete
        </Button>
        <Button color="#3f51b5" onClick={handleEditClick}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Employee;
