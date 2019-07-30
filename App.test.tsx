import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const createTestProps = (props: Object) => ({
  ...props
});

//we do not want to rewrite tests when the code is rewritten
//test the same behaviour but not hte implementation
//ex counter = don't test that name of function is called ( implementation)
  //just test the state has been incremented
  //can alkso just test that the incremented number is displayed - integration and not just state
//define appComponent??
//add data-test attributes to components to be tested

//test - component renders
//test - initial states
//test - clicks
//https://github.com/flyrightsister/udemy-react-testing-projects/blob/master/jotto/src/Congrats.test.js

const setup = (props = {}, state = null) => {
  return shallow(<App {...props}/>)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}" ]`);
}
describe("App", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    let props: Object;
    let appComponent
    beforeEach(() => {
      props = createTestProps({});
      wrapper = setup();
      
      console.log(wrapper.debug());
    });
    
    it("should render a <View />", () => {
      appComponent = findByTestAttr(wrapper, 'component-app');
      expect(appComponent.length).toBe(1);
      //expect(wrapper.find(View)).toHaveLength(1);
    });
  });
});