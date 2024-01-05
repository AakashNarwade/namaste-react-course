import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import { screen, render } from "@testing-library/react";
import { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("Should load RestaurantCard Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Starbucks Coffee");
  expect(name).toBeInTheDocument();
});

// it("Should load RestaurantCard Component with withPromotedLabel", () => {
//   const { baseElement } = render(<RestaurantCard />);
//   console.log(baseElement);
//   //   const name = screen.getByText("withPromotedLabel");
//   expect(baseElement).toMatchSnapshot();
// });
