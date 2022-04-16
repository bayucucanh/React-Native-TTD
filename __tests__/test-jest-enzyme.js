import React from "react";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter(), disableLifecycleMethods: true})

import Member from "../src/Member";

const members = [{id: 1, name: 'maman'}, {id: 2, name: 'jajang'}];

describe('Member Component', () => { 
  it('should render without issues', () => {
    const component = shallow(
      <Member members={members} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render all item in members', () => {
    const wrapper = shallow(
      <Member members={members} />
    );

    expect(wrapper.find({testID: 'memberDetail'}).length).toBe(2)
  })

  it('should render render correct names', () => {
    const wrapper = shallow(
      <Member members={members} />
    );

    expect(wrapper.find({testID: 'memberDetail'}).forEach((node, index) => {
      expect(node.props().children).toBe(members[index].name)
    }))
  })
 })