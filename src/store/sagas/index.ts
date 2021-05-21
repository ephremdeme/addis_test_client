import {
  call,
  put,
  SagaReturnType,
  takeLatest,
  all,
  fork,
} from "redux-saga/effects";
import {
  deleteEmployeeById,
  fetchEmployee,
  fetchEmployees,
  registerEmployee,
  updateEmployeeInfo,
} from "../../api";
import {
  setLoading,
  setEmployees,
  setError,
  setEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setDone,
} from "../actions";

import {
  ActionConstant,
  AddEmployee,
  DeleteEmployee,
  GetEmployees,
  UpdateEmployee,
} from "../actions/types";

function* handleGetEmployees(action: GetEmployees) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));

    const data: SagaReturnType<typeof fetchEmployees> = yield call(
      fetchEmployees
    );
    yield put(setEmployees(data));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* handleGetEmployee(action: DeleteEmployee) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    const data: SagaReturnType<typeof fetchEmployee> = yield call(
      fetchEmployee,
      action.payload
    );
    yield put(setEmployee(data));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* handleSetEmployee(action: UpdateEmployee) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    yield put(setEmployee(action.payload));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* handleAddEmployee(action: AddEmployee) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    const data: SagaReturnType<typeof registerEmployee> = yield call(
      registerEmployee,
      action.payload
    );
    yield put(addEmployee(data));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* handleUpdateEmployee(action: UpdateEmployee) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    const data: SagaReturnType<typeof updateEmployeeInfo> = yield call(
      updateEmployeeInfo,
      action.payload
    );
    yield put(updateEmployee(data));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* handleDeleteEmployee(action: DeleteEmployee) {
  try {
    yield put(setDone(false));
    yield put(setLoading(true));
    yield call(deleteEmployeeById, action.payload);
    yield put(deleteEmployee(action.payload));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* watchGetEmployees() {
  yield takeLatest(ActionConstant.SAGA_GET_EMPLOYEES, handleGetEmployees);
}
export function* watchGetEmployee() {
  yield takeLatest(ActionConstant.SAGA_GET_EMPLOYEE, handleGetEmployee);
}
export function* watchSetEmployee() {
  yield takeLatest(ActionConstant.SAGA_SET_EMPLOYEE, handleSetEmployee);
}
export function* watchAddEmployee() {
  yield takeLatest(ActionConstant.SAGA_ADD_EMPLOYEE, handleAddEmployee);
}
export function* watchUpdateEmployee() {
  yield takeLatest(ActionConstant.SAGA_UPDATE_EMPLOYEE, handleUpdateEmployee);
}
export function* watchDeleteEmployee() {
  yield takeLatest(ActionConstant.SAGA_DELETE_EMPLOYEE, handleDeleteEmployee);
}

export function* mainSaga() {
  yield all([
    fork(watchGetEmployees),
    fork(watchGetEmployee),
    fork(watchSetEmployee),
    fork(watchUpdateEmployee),
    fork(watchAddEmployee),
    fork(watchDeleteEmployee),
  ]);
}
