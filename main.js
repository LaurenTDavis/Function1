// var tripleFive = function() {

// 	for ( var i = 0; i < 3; i++ ) {
// 		console.log('Five!');
// 	}
// }

// tripleFive();


// var lastLetter = function(word1) {
// 	return console.log(word1[word1.length - 1]);
// }

// lastLetter('island');

// var square = function(num1) {
// 	return console.log( num1 * num1); 
// }

// square(5);

// var negate = function(num1) {
// 	return console.log(num1 - (2 * num1)); 
// }

// negate(5);
// negate(-8)

// var toArray = function(num1, num2, num3) {
// 	var myArray = [num1, num2, num3];
// 	return console.log(myArray);
// }
// toArray(1, 2, 3);

// var startsWithA = function(word1) {
// 	if (word1.charAt(0) === 'a' || word1.charAt(0) === 'A') {
// 		return console.log(true);
// 	}
// 	else {
// 		return console.log(false);
// 	}
// }

// startsWithA('aardvark');
// startsWithA('bear');

// var excite = function(word1) {
// 	return console.log(word1 + '!!!');
// }
// excite('go');


var getName = function(obj1) {
	return obj1.name;
}

console.log( getName({ name: 'Luisa', age: 25 }) );

var totalLetters = function(arr) {
	count = 0;  
	for (var i = 0; i < arr.length; i++) {
		count +=  arr[i].length; 
	}
	return count;
}

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));

var keyValue = function(key, value) {
	var obj1 = {};
	obj1[key] = value;
	return obj1; 
}

console.log(keyValue('city', 'Denver'));

var negativeIndex = function(arr1, num1) {
	var value = arr1.length + num1;
	return arr1[value];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) );
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

var removeM = function(str1) {
	var deletion = '';
	for (var i = 0; i < str1.length; i++) {
		if(str1[i] != 'm') {
			deletion += str1[i];
		}
	}
	return deletion;
}

console.log(removeM('family'));
console.log(removeM('memory'));

var printObject = function(obj1) {
	for (var key in obj1) {
		console.log(key + " is " + obj1[key]);
	}	

}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

var vowels = function(str1) {
	var arr = [];
	var vowelLetters = {
		'a': true,
		'e': true,
		'i': true,
		'o': true,
		'u': true 
	}
	for (var i = 0; i < str1.length; i++) {
		if(str1[i] in vowelLetters) {
			arr.push(str1[i]);
		}
	}
	return arr;
}

console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));

var twins = function(arr1) {
	if (arr1.length % 2 === 1)
		return false;
	for (var i = 0; i < arr1.length; i+=2) {
		if(arr1[i] != arr1[i + 1]) {
			return false;
		}
	}
	return true;
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', undefined]));

var or = function(arr1) {
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i]) {
			return true;
		}
	}

	return false; 
}

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

var unique = function(arr) {
	var obj1 = {};
	newArr = [];

	for (var i = 0; i < arr.length; i++) {
		obj1[arr[i]] = true; 
	}

	for (var key in obj1) {
		newArr.push(key);
	}
	return newArr; 
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));








