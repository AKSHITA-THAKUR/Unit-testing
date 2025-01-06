import { render, screen } from "@testing-library/react-native";
import Insert from "../component/Insert.tsx";

test("Props testing", () => {
  //Test to check whether the props are passed correctly or not
  render(<Insert name="Akshita" />);
  const user = screen.getByText("Akshita");
  expect(user).toBeTruthy();
});

const add = jest.fn((x, y) => x + y);
test("mock function", () => {
  expect(add(8, 2)).toBe(10);
  expect(add).toHaveBeenCalledTimes(1); //Chck how many times called
  expect(add).toHaveBeenCalledWith(8, 2); // check the parameters to be called with
});
