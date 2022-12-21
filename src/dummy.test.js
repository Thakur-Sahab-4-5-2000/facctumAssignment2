import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Login from "./login";
jest.mock("./loginModal/loginModal", () => () => {
  return;
});
jest.mock("../loader/spinnerBlocker/spinnerBlocker", () => () => {
  return;
});
jest.mock("./userMenu/userMenu", () => () => {
  return;
});
const mockDispatchFn = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatchFn,
}));
describe("testing Login Component", () => {
  const initialState = {
    login: {
      sessionLoginAttempt: true,
      isAuthenticated: false,
      loading: false,
      user: null,
    },
    search: {},
    profile: {},
    createBatch: {},
    batchList: {},
    batchSummary: {},
    signUp: {},
    forgotPassword: {},
    batchResult: {},
    resendConfirmation: {},
  };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;
  test("it should mount and show login-btn", async () => {
    store = mockStore(initialState);
    render();
    const loginBtnComp = screen.getByTestId("login-btn");
    expect(loginBtnComp).toBeInTheDocument();
    fireEvent.click(loginBtnComp);
    expect(mockDispatchFn).toHaveBeenCalled();
  });
  test("it should mount and show spinner", async () => {
    initialState.login.loading = true;
    store = mockStore(initialState);
    render();
    const spinnerComp = screen.getByTestId("spinner-blocker");
    expect(spinnerComp).toBeInTheDocument();
  });
  test("it should show user menu if user is present and isAuthenticated is true", async () => {
    initialState.login.user = {
      username: "3de50d06-81c0-4a20-a269-2ce6a474cae3",
    };
    initialState.login.isAuthenticated = true;
    store = mockStore(initialState);
    render();
    const userMenuComp = screen.getByTestId("user-menu");
    expect(userMenuComp).toBeInTheDocument();
  });
});
