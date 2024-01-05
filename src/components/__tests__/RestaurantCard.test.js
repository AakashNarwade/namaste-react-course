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



