!(function(window, document, undefined) {
	'use strict';

	describe('Class Person', function() {

		var testee;

		beforeEach(function() {
			testee = new Person('Batman', 28);
		});

		afterEach(function() {
			testee = null;
		});

		it('Should have a public API', function() {
			expect(typeof testee.getName).toEqual('function');
			expect(typeof testee.getAge).toEqual('function');
			expect(typeof testee.getPersonalInformation).toEqual('function');
		});

		it('getName should return a proper String', function() {
			expect(typeof testee.getName()).toEqual('string');
			expect(testee.getName()).toEqual('Batman');
		});

		it('getAge should return a proper Number', function() {
			expect(typeof testee.getAge()).toEqual('number');
			expect(testee.getAge()).toEqual(28);
		});

		it('getPersonalInformation should return a proper information', function() {

			expect(testee.getPersonalInformation()).toEqual({
				name: 'Batman',
				age: 28
			});
		});

	});

}(window, document));
