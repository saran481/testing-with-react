import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Parent from './Parent'

jest.mock('./childComponent.jsx')

let wrapper = shallow(<Parent />);

var container, containerProp,childContainerProps;

var childContainer

describe('parent component snapshot', () => {
 it('matches the snapshot', () => {
     const tree =renderer.create(<Parent />).toJSON()
      expect(tree).toMatchSnapshot() 
 })

})

describe("Parent", ()=> {
   beforeEach(()=>{
       container = wrapper.find(".container")
       containerProp=container.props();
   })
})

it("should have div", () => {
    expect(wrapper.find(".container")).toHaveLength(1);
});

describe('childcomponent', () => {
    beforeEach(() =>{
        childContainer = wrapper.find("ChildComponent");
       childContainerProps = childContainer.props();
    })
})

it('shoudl find child in parent component', () => {
    expect(wrapper.find("ChildComponent")).toHaveLength(1)
})

it('access child container props', () => {
    expect(wrapper.find("ChildComponent").props().label).toEqual('I’m your father')
})

it('accessing state variables', () => {
    // console.log(wrapper.state())
      // const saran= "saran"
      expect(wrapper.state().saran).toBe("hey there")
})

