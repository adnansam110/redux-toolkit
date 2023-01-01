import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Provider } from "react-redux";
import App from "./App";
import { userDataMock } from "./mocks";
import { store } from "./store";

jest.mock("axios");
afterEach(() => cleanup());

test("Fetch user button to be present", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const fetchButton = screen.getByTestId("fetch-user-btn");
  expect(fetchButton).toBeInTheDocument();
});

test("Call get users api to get the data of 10 users and display their names", async () => {
  const fetchUserMock = axios.get.mockResolvedValue({
    data: userDataMock,
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const fetchButton = screen.getByTestId("fetch-user-btn");
  userEvent.click(fetchButton);
  expect(fetchUserMock).toHaveBeenCalled();
  const items = await screen.findAllByTestId("user-data");
  expect(items.length).toBe(10);
});
