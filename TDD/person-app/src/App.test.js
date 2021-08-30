// import { render, screen } from '@testing-library/react';
import { shallow } from "enzyme";
import App from "./App";
import PersonList from "./components/PersonList";

// it('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App ", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("renders a personlist", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });

  it("has state with property people", () => {
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
    expect(appState.people).toBeDefined();
    expect(appState.total).toBeDefined();
    expect(appState.people).toBeInstanceOf(Array);
  });

  it('passes people property of state to personList as props',()=>{
    const personList = appWrapper.find(PersonList);
    expect(personList.props().people).toEqual(appWrapper.state().people);
  })
});
