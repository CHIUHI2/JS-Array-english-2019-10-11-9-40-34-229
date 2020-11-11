// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('a is array : ' + Array.isArray(a));
console.log('b is array : ' + Array.isArray(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(function(x) { return x * 2;});
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log('Case 1 : ' + colors.join(' '));
console.log('Case 2 : ' + colors.join('+'));
console.log('Case 3 : ' + colors.join());

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a = a.sort((x,y) => y - x);
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var count = 0;
var maxFreqCount = 0;
var maxFreqItem;
for(var i = 0 ; i < a.length ; i++) {
	for(var j = i ; j < a.length ; j++) {
		if(a[i] == a[j]) {
			count++;
		}

		if(count > maxFreqCount) {
			maxFreqCount = count;
			maxFreqItem = a[i];
		}
	}

	count = 0;
}
console.log(maxFreqItem);
