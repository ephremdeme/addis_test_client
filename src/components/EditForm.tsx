import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ActionConstant } from "../store/actions/types";
import {
  doneSelector,
  employeeSelector,
  loadingSelector,
} from "../store/reducers";
import { IEmployee, IEmployeeBase } from "../store/types";
import Button from "./Custom/Button";
import { Box, Col, Row } from "./Custom/Grid";
import { Input, Select, SelectOption } from "./Custom/Input";
import { ModalDialogue } from "./Custom/Modal";
import { ErrorHelperText, Title } from "./Custom/Text";

export const EditForm: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  const employee = useSelector(employeeSelector);

  const dispatch = useDispatch();

  const isDone = useSelector(doneSelector);
  const isLoading = useSelector(loadingSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IEmployeeBase>();

  useEffect(() => {
    if (isDone && isLoading === false) {
      setOpen(false);
    }
  }, [isDone, isLoading, setOpen]);

  const onSubmit = (data: IEmployee) => {
    const updateData = { ...employee, ...data };
    dispatch({
      type: ActionConstant.SAGA_UPDATE_EMPLOYEE,
      payload: updateData,
    });
  };

  useEffect(() => {
    if (employee) {
      setValue(
        "birth_date",
        new Date(employee.birth_date)
          .toISOString()
          .substr(0, 10) as unknown as Date
      );
      setValue("salary", employee.salary);
      setValue("gender", employee.gender);
      setValue("name", employee.name);
    }
  }, [employee, setValue]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ModalDialogue setOpen={setOpen} open={open}>
        <Title>Update Employee</Title>
        <Box m={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col />
              <Col alignSelf="center" size={2}>
                <Box textAlign="left">Name: </Box>
              </Col>
              <Col size={7}>
                <Input
                  defaultValue="Girma Kasu"
                  placeholder="Full Name"
                  type="text"
                  error={errors.name ? true : false}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <ErrorHelperText>
                    {errors.name.message || "Name Is Required"}
                  </ErrorHelperText>
                )}
              </Col>
            </Row>
            <Box my={2}>
              <Row>
                <Col />
                <Col alignSelf="center" size={2}>
                  Gender:
                </Col>

                <Col size={7}>
                  <Select
                    defaultValue="@probablyup"
                    {...register("gender", { required: true })}
                  >
                    <SelectOption value="Female">Female</SelectOption>
                    <SelectOption value="Male">Male</SelectOption>
                    <SelectOption value="Other">Other</SelectOption>
                  </Select>
                </Col>
              </Row>
            </Box>
            <Box my={2}>
              <Row>
                <Col />
                <Col alignSelf="center" size={2}>
                  Salary:
                </Col>

                <Col size={7}>
                  <Input
                    placeholder="Salary"
                    type="number"
                    {...register("salary", { required: true })}
                  />
                  {errors.salary && (
                    <ErrorHelperText>
                      {errors.salary.message || "Salary Is Required"}
                    </ErrorHelperText>
                  )}
                </Col>
              </Row>
            </Box>
            <Box my={3}>
              <Row>
                <Col />
                <Col alignSelf="center" size={2}>
                  Date of Birth:
                </Col>

                <Col size={7}>
                  <Input type="Date" {...register("birth_date")} />
                  {errors.birth_date && (
                    <ErrorHelperText>
                      {errors.birth_date.message || "Date of Birth Is Required"}
                    </ErrorHelperText>
                  )}
                </Col>
              </Row>
            </Box>
            <Box my={3}>
              <Row>
                <Col />
                <Col>
                  <Button type="reset" color="violet" onClick={handleClose}>
                    Cancel
                  </Button>
                </Col>
                <Col size={2} alignSelf="center">
                  <Button disabled={isLoading} type="submit" color="blue">
                    Update
                  </Button>
                </Col>
              </Row>
            </Box>
          </form>
        </Box>
      </ModalDialogue>
    </div>
  );
};

export default EditForm;
