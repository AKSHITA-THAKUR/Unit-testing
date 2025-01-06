import Index from "../app/index.tsx"
import { render , screen } from "@testing-library/react-native"

test("snapshot test for index component" , ()=>{
    const container = render(<Index/>);
    expect(container).toMatchSnapshot();
})