import Event from "../app/events.tsx";
import { render, screen, fireEvent } from "@testing-library/react-native";

test("check if click works", () => {
  //test to check if the click works
  render(<Event />);
  const dataText = screen.getByText("0");
  expect(dataText).toBeTruthy();
  const pressable = screen.getByTestId("increment-button")
  fireEvent.press(pressable);
  const updatedDataText = screen.getByText("1");
  expect(updatedDataText).toBeTruthy();
});

test("i want to check if decrement works" , ()=>{
  render(<Event />);
 const element = screen.getByTestId("DECREMENT-BUTTON")
  fireEvent.press(element);
  const updatedDataText = screen.getByText("-1");
  expect(updatedDataText).toBeTruthy();
})


//JEST HOOKS :- BeforeAll and BeforeEach

beforeAll(()=>{
    console.log("Before all tests")
})
beforeEach(()=>{
    console.log("Before each test")
})

