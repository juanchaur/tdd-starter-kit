!(function(window, document, undefined) {
	'use strict';

	function Person(name, age) {
		this._name = name;
		this._age = age;
	}

	Person.prototype.getName = function() {
		return this._name;
	};

	Person.prototype.getAge = function() {
		return this._age;
	};

	Person.prototype.getPersonalInformation = function() {
		return {
			name: this.getName(),
			age: this.getAge()
		};
	};

	//To export it for testing
	window.Person = Person;

}(window, document));

