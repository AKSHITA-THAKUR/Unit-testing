import Event from "../app/events.tsx";
import { render, screen, fireEvent } from "@testing-library/react-native";

test("check if click works", () => {
  //test to check if the click works
  render(<Event />);
  const dataText = screen.getByText("0");
  expect(dataText).toBeTruthy();
  const button = screen.getByRole("button");
  expect(button).toBeTruthy();
  const pressable = screen.getByText("Click to Add");
  fireEvent.press(pressable);
  const updatedDataText = screen.getByText("1");
  expect(updatedDataText).toBeTruthy();
});


//JEST HOOKS :- BeforeAll and BeforeEach

beforeAll(()=>{
    console.log("Before all tests")
})
beforeEach(()=>{
    console.log("Before each test")
})
