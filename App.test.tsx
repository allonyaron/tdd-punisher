import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import console = require('console');
import { deflateSync } from 'zlib';

const createTestProps = (props: Object) => ({
	...props,
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
	return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper, val) => {
	//console.log(wrapper);
	//console.log('val - ', val);
	return wrapper.find(`[data-test="${val}"]`);
};
describe('App', () => {
	describe('rendering', () => {
		let wrapper: ShallowWrapper;
		let props: Object;
		let appComponent;
		beforeEach(() => {
			props = createTestProps({});
			wrapper = setup();
			//console.log(wrapper.debug());
			appComponent = findByTestAttr(wrapper, 'component-app');
			//data-test="component-app"
		});

		it('should render a <View />', () => {
			expect(appComponent.length).toBe(1);
			//expect(wrapper.find(View)).toHaveLength(1);
		});
	});
});

//review api calls for each component
describe('Payment Method Container', () => {
	describe('Payment Method component', () => {
		it('should display credit radio button', () => {});
		it('should display pay with miles radio button if flag is true', () => {});
		it('should display join a tab radio button if flag is true', () => {});

		//break this out into components that need to update
		it('should display prices in miles if miles radio button is selected', () => {});
		//turn on flag
		it('should select correct radio button when clicked', () => {});
		it('should default to credit radio button', () => {});
	});
	describe('Join a tab Component', () => {
		//clicking info button same as clicking joina tab and pay now
		//review join a tab state change
		//USE CHARLES
		it('should ', () => {});
		it('should ', () => {});
		it('should ', () => {});
	});
	//promo codes
	//KAtest22

	//UAP build has miles setup

	describe('Gratuity Component', () => {
		it('should render', () => {});
		it('should default to percent sent in by tipPercentage', () => {});
		it('should appear blue when selected', () => {});
		it('should update order total when another tip percentage is clicked', () => {});
		it('should open a slider when `other` button is clicked', () => {});
		describe('tip modal', () => {
			//should slider be a field with an up down arrow?
			//would this mean calls to papi?
			//where does other tip display??
			//bug in tip modal - if percentage isn't changed  when tip modal opened it doesn't apply correctly
			//hit cancel - should go back to previous selected gratuity

			it('should default to percent sent in by tipPercentage', () => {});

			// should it default to percent selected in tip component

			it('should close modal when cancel button clicked', () => {});
			it('should apply tip to total when `apply` button clicked', () => {});
		});
		it('should make papi api call to update order summary', () => {});
	});
	describe('Enter Promo Code', () => {
		it('should display input field', () => {});
		it('should display camera icon if promoScannerEnabled set to true', () => {});
		it('should send action to concierge when clicking on camera icon', () => {});
		it('should send action and payload to concierge when clicking on ok button', () => {});
		// What was this for? should I make validation call in punisher and not message concierge
		it('should have limit of 8 characters on field', () => {});
	});
	describe('Redeem Vouchers', () => {
		it('should display if ccVoucher set to true', () => {});
		it('should display ccv modal when input field clicked', () => {});
		describe('CC Vouchers modal', () => {
			it('should display camera icon in voucher Number field if ccvScannerEnabled set to true', () => {});
			//validation
			it('should have all fields entered when submit buttons is pressed', () => {});
			it('should change field background to red when submit clicked and field is empty', () => {});
			//split this one up
			// it('shoud hightlight incorrect field - after its entered or when submit button is pressed?',() => {})
			it('should only allow digits in all fields', () => {});

			//formatting
			it('should display voucher number format with dashes between grouping of 4 digits', () => {});
			// it('should add a hyphen after each set of 4 digits', () => {});
			it('should have voucher number only be digits', () => {});
			it('should empty fields if canceled is clicked', () => {});

			// it('should start voucher amount field cursor on right and push left with decmial point in correct place', () => {});
			it('should format Voucher amount with decimal after 100th placement, dollar sign in front, and entered from right to left', () => {});
			//is there a max amount to check for?

			it('should start display dollar sign on left of input in voucher amount field', () => {});
			it('should insert slash in expiration date field', () => {});
			it('should have a max of 3 digits entered in CVV field', () => {});

			it('should format Expiration date field with a slash between MM and YY in ', () => {});
			it('should have Expiration date field a max of 4 digits entered', () => {});

			//??????
			// it('should have voucher number be validated against luhn check', () => {});
		});
	});
});

//what's the scenario again that totals are calculated with a discount on the react side
//if voucher is true than caluculate discount from subtotal

//check validation

//where can I post helpful online tools?
//Can we make a standard of using gitflow?

describe('Order Summary Container', () => {
	it('should display title with correct translation ', () => {});
	it('should display takeout slider default to false', () => {});
	it('should update flag(???) when takeout slider bset to true', () => {});
	it('should display item with number of items in parenthese next to label', () => {});
	it('should display items sum in amount column', () => {});
	it('should display gratuity label and gratuity amount', () => {});
	it('should display total before tax and display amount the sum of items total and gratuity', () => {});
	it('should displya tax label and amount', () => {});
	it('should display order total label and amount the sum of all amounts', () => {});
	it('should display order total amount in miles only if miles flag is true', () => {});

	it('should display dollar sign before amount', () => {});
	it('should display minus sign before dollar sign if amount is negative', () => {});
	it('should add a comma before groups of 3 numbers if number of digits greater than 3', () => {});

	//todo
	it('should not display exception(voucher) label if value does not exist', () => {});
});
