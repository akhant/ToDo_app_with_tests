import React from "react";
import Enzyme from "enzyme";
import { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ToDo from "./ToDo";
/* import { expect } from 'chai'; */

Enzyme.configure({ adapter: new Adapter() });

describe("todo testing with enzyme", () => {
  const component = shallow(<ToDo />);
  const h1Tag = component.find("h1");
  test("should be h1 tag on init app", () => {
    expect(h1Tag).toHaveLength(1);
  });
  test("h1 tag have init text", () => {
    expect(h1Tag.text()).toBe("Just do it: ");
  });
  test("completed method test", () => {
            component.setState({
          items: [
              ...component.state().items,
              { id: Date.now(), text: 'todo3', done: false}
          ]
      })
      
      
    expect(component.state().items).toHaveLength(1)
  });
});

describe('full render testing', () => {
    const component = shallow(<ToDo />);
    test('button must have onClick', () => {
        expect(component.childAt(0).props().onClick).toBeDefined()
    }
    )
  
}
)
