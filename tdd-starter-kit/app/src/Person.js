

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
