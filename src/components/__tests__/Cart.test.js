import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//       json: () => {
//         return Promise.resolve(MOCK_DATA);
//       },
//     });
//   });

it("should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordionHeader = screen.getByText("Party Combo - (2)");
  //   console.log(accordionHeader);
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(2);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(4);
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("foodItems").length).toBe(2);
  expect(screen.getByText("Add items , your cart looks empty!!"));
});
