import Index from "../app/index.tsx";
import { render, screen } from "@testing-library/react-native";

test("renders the screen", () => {
  render(<Index />);
  const linkElement = screen.getByText("Welcome to react-native");
  expect(linkElement).toBeTruthy();
});

test("Test input box", () => {
  //check whether the textbox present or not
  render(<Index />);
  const input = screen.getByPlaceholderText("Enter your name");
  expect(input).toBeTruthy();
});

describe("This is to create group", () => {
  //describe is used to create group of tests
  test("Test button", () => {
    render(<Index />);
    const component = screen.getByText("Create Group");
    expect(component).toBeTruthy();
  }),
    test("Test Group", () => {
      render(<Index />);
      const button = screen.getByRole("button"); //check that the button is present in the coponent or not
      expect(button).toBeTruthy();
    });
});
