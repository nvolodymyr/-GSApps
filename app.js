//Tusk 1//

function arraySum(array) {
	try {
		if (Array.isArray(array)) {
			if (array.length === 0) {
				throw new Error(`this array is empty`);
			}
			let sum = array.reduce((a, b) => {
				return a + b;
			}, );
			return sum;
		} else {
			throw new Error(`this is not array`);
		}
	} catch (error) {
		return error;
	}
}
arraySum([1, 2, 2, 5]);
arraySum(2);
// Tusk 2// 
function fold(array, operation) {
	try {
		if (!Array.isArray(array)) {
			throw new Error(`this is not array`);
		}
		if (array.length === 0) {
			throw new Error(`this array is empty`);
		}
		if (typeof (operation) !== 'function') {
			throw new Error(`pleace write correct function`);
		}
		if (array.length == 1) {
			return array[0];
		} else {
			let sum = array.reduce((a, b) => {
				return operation(a, b);
			}, 0);

			return sum;
		}
	} catch (error) {
		return error;
	}
}

function add(a, b) {
	return a + b;
}

function mul(a, b) {
	return a * b;
}
fold([1, 2, 3, 4], add) // add(add(add(1, 2), 3), 4) === 10;
fold([1, 2, 3, 4], mul) // 24


//Tusk 3//
function fold(array, operation, initial) {
	try {
		if (!Array.isArray(array)) {
			throw new Error(`this is not array`);
		}
		if (array.length === 0) {
			throw new Error(`this array is empty`);
		}
		if (typeof (operation) !== 'function') {
			throw new Error(`pleace write correct function`);
		}

		if (typeof (initial) === 'string') {
			array.unshift(initial);
			return array.join('').toString();
		}
		if (array.length === 1) return array[0];
		if (arguments.length === 3) array.push(initial);
		let res = array[0];
		for (let i = 1; i < array.length; i++) {
			res = operation(res, array[i]);
		}
		return res;
	} catch (error) {
		return error;
	}
}

fold([1, 2, 3, 4], add) // 10
fold([1, 2, 3, 4], add, 10) // add(add(add(add(10, 1), 2), 3), 4) === 20
fold([1, 2, 3, 4], mul, 10) // 240
fold([1, 2, 3, 4], add, '10') // '101234'
// Tusk 4//
function fold(array, operation, initial) {
	try {
		if (!Array.isArray(array)) {
			throw new Error(`this is not array`);
		}
		if (array.length === 0) {
			throw new Error(`this array is empty`);
		}
		if (typeof (operation) !== 'function') {
			throw new Error(`pleace write correct operation`);
		}
		if (array.length == 1) {
			return array[0]
		}
		if (typeof (initial) === 'string') {
			array.unshift(initial);
			return array.join('').toString();
		}
		if (arguments.length === 3) {
			array.push(initial)
		};
		return array.length == 1 ?
			array[0] : operation(array[0], fold(array.slice(1), operation));
	} catch (error) {
		return error;
	}
}
// your code goes here
// hint: use array.slice
