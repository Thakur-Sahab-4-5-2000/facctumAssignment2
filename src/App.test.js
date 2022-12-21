// import { getByText, render, screen } from "@testing-library/react";
// import App from "./App";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

// // jest.mock("react-redux", () => {
// //   const ActualReactRedux = jest.requireActual("react-redux");
// //   return {
// //     ...ActualReactRedux,
// //     useSelector: jest.fn().mockImplementation(() => {
// //       return mockState;
// //     }),
// //   };
// // });

// const mockState = {
//   birth: [],
//   institue: [],
//   keyword: [],
//   mentor: [],
//   skills: [],
//   capitals: [],
// };

// describe("With React Testing Library", () => {
//   const initialState = mockState;
//   const mockStore = configureStore();
//   let store;

//   it("No Data Found", () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

//     expect(getByText("No Data Found")).not.toBeNull();
//   });

//   it("Assignment 2", () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

//     expect(getByText("Assignment 2")).not.toBeNull();
//   });

//   it("Output", () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

//     expect(getByText("Output")).not.toBeNull();
//   });

//   it("Try Again", () => {
//     store = mockStore(initialState);
//     const { getByRole } = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

//     expect(getByRole("Try Again")).not.toBeNull();
//   });
// });

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import LoginModal from "./loginModal";
import { BrowserRouter as Router } from "react-router-dom";
const mockDispatchFn = jest.fn();
jest.mock("../../forgotPassword/forgotPassword", () => () => {
  return;
});
jest.mock("../../resendConfirmation/resendConfirmation", () => () => {
  return;
});
jest.mock("../../confirmSignUp/confirmSignUp", () => () => {
  return;
});
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatchFn,
}));
describe("", () => {
  const initialState = {
    login: { showLoginModal: true, isAuthenticated: false },
    search: {},
    profile: {},
    createBatch: {},
    batchList: {},
    batchSummary: {},
    signUp: { openVerifySignupModal: true },
    forgotPassword: { passwordChanged: false },
    batchResult: {},
    resendConfirmation: { mailSent: false },
  };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;
  test("navigate to search page", async () => {
    initialState.login.isAuthenticated = true;
    store = mockStore(initialState);
    render();
    expect(mockDispatchFn).toHaveBeenCalled();
  });
  test("it show close-btn", async () => {
    store = mockStore(initialState);
    render();
    const closeBtnComp = screen.getByTestId("close-btn");
    expect(closeBtnComp).toBeInTheDocument();
    fireEvent.click(closeBtnComp);
    expect(mockDispatchFn).toHaveBeenCalled();
  });
  test("it show emailField", async () => {
    store = mockStore(initialState);
    render();
    const emailInputComponent =
      screen.getByTestId("emailField")?.lastElementChild?.firstElementChild;
    expect(emailInputComponent).toBeInTheDocument();
    fireEvent.change(emailInputComponent, {
      target: { value: "samarth.athreya@facctum.com" },
    });
    expect(emailInputComponent.value).toBe("samarth.athreya@facctum.com");
    fireEvent.keyPress(emailInputComponent, { key: "Enter", charCode: 13 });
    const emailErrorMessage = screen.getByTestId("emailErrorMessage");
    expect(emailErrorMessage).toBeInTheDocument();
  });
  test("it show password Field", async () => {
    store = mockStore(initialState);
    render();
    const passwordInputComponent =
      screen.getByTestId("passwordField")?.firstElementChild;
    expect(passwordInputComponent).toBeInTheDocument();
    fireEvent.change(passwordInputComponent, {
      target: { value: "Facctum@123" },
    });
    expect(passwordInputComponent.value).toBe("Facctum@123");
    fireEvent.keyPress(passwordInputComponent, { key: "Enter", charCode: 13 });
    const passwordErrorMessage = screen.getByTestId("passwordErrorMessage");
    expect(passwordErrorMessage).toBeInTheDocument();
  });
  test("password Field blur test", async () => {
    store = mockStore(initialState);
    render();
    const passwordInputComponent =
      screen.getByTestId("passwordField")?.firstElementChild;
    fireEvent.change(passwordInputComponent, {
      target: { value: "Facctum@123" },
    });
    expect(passwordInputComponent.value).toBe("Facctum@123");
    fireEvent.blur(passwordInputComponent);
    const passwordErrorMessage = screen.getByTestId("passwordErrorMessage");
    expect(passwordErrorMessage).toBeInTheDocument();
  });
  test("it show test for submit click", async () => {
    store = mockStore(initialState);
    render();
    const emailInputComponent =
      screen.getByTestId("emailField")?.lastElementChild?.firstElementChild;
    fireEvent.change(emailInputComponent, {
      target: { value: "samarth.athreya@facctum.com" },
    });
    const passwordInputComponent =
      screen.getByTestId("passwordField")?.firstElementChild;
    fireEvent.change(passwordInputComponent, {
      target: { value: "Facctum@123" },
    });
    const submitButtonComponent = screen.getByTestId("submitButton");
    fireEvent.click(submitButtonComponent);
    expect(mockDispatchFn).toHaveBeenCalled();
  });
  test("it  test for forgot password click", async () => {
    store = mockStore(initialState);
    render();
    const forgotPasswordButton = screen.getByTestId("forgotPasswordButton");
    expect(forgotPasswordButton).toBeInTheDocument();
    fireEvent.click(forgotPasswordButton);
  });
  test("it  test for continue verification click", async () => {
    store = mockStore(initialState);
    render();
    const ContinueVerificationButton = screen.getByTestId(
      "ContinueVerificationButton"
    );
    expect(ContinueVerificationButton).toBeInTheDocument();
    fireEvent.click(ContinueVerificationButton);
    expect(mockDispatchFn).toHaveBeenCalled();
  });
  test("it test for render confirmVerificationModal ", async () => {
    initialState.signUp.openVerifySignUpModal = true;
    store = mockStore(initialState);
    render();
  });
  test("it  test for openVerifySignUpModal", async () => {
    initialState.signUp.openVerifySignUpModal = true;
    store = mockStore(initialState);
    render();
  });
});
