import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Provider } from "react-redux";
import App from "./App";
import { userDataMock } from "./mocks";
import { store } from "./store";
import { setupServer } from "msw/node";
import { rest } from "msw";
// jest.mock("axios");
afterEach(() => cleanup());

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json(userDataMock));
  })
);
describe("UsersList", () => {
  beforeAll(() => {
    server.listen();
  });
  beforeEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
  test("Fetch user button to be present", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const fetchButton = screen.getByTestId("fetch-user-btn");

    expect(fetchButton).toBeInTheDocument();
  });

  // test("Call get users api to get the data of 10 users and display their names", async () => {
  //   render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );
  //   const fetchUserMock = axios.get.mockResolvedValue({
  //     data: userDataMock,
  //   });
  //   const fetchButton = screen.getByTestId("fetch-user-btn");
  //   userEvent.click(fetchButton);
  //   expect(fetchUserMock).toHaveBeenCalled();
  //   const items = await screen.findAllByTestId("user-data");
  //   expect(items.length).toBe(10);
  // });

  test("GET API call made to the server to get posts", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    userEvent.click(screen.getByTestId("fetch-user-btn"));
    await waitFor(() => screen.findAllByTestId("user-data"));
    const items = await screen.findAllByTestId("user-data");
    expect(items.length).toBe(9);
  });
});
