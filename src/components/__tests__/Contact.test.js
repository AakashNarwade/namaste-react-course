const { render, screen } = require("@testing-library/react");
// const { default: Contact } = require("../Contact");
import Contact from "../Contact";
import "@testing-library/jest-dom";

//describe is used to group the tests
//test == it its one and the same thing
describe("Contact Us  page it cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  afterAll(() => {
    console.log("After all");
  });
  afterEach(() => {
    console.log("After each");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  
  it("Should load conatct us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Button should  be in Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside the contact component ", () => {
    render(<Contact />);
    // const inputName = ;
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
  });

  it("should load 2 input boxes in Contact Document", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
