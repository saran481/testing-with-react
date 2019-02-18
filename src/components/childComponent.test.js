import React from 'react';
import { shallow } from 'enzyme';
import ChildComponent from './ChildComponent';

const fake = jest.fn();
//const onSubmit = onSubmitSpy;


const wrapper = shallow(<ChildComponent onSubmit={fake} />);
console.log(wrapper.find('div').find('input'))

describe(' button click', ()=> {
    it('should call button click', () => {
        expect(fake).not.toHaveBeenCalled()
        wrapper.find('div').find('input').simulate("click");
       expect(fake).toHaveBeenCalled();
       expect(fake).toHaveBeenCalledWith("I’m your son");
    })
})

