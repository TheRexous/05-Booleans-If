console.log(3 > 5);

console.log(typeof true);

console.log(typeof 'false');

console.log(5 == '5.00');

console.log(5 === '5.00');

if (30 >= 16) {
    console.log('You can drive');
} else {
    console.log('You can not drive');
}

const age = 15;

if (age >= 16){
    console.log('You can drive');
} else if (age >= 14) {
    console.log('almost there');
} else {
    console.log('You can not drive');
}

if (5) {
    console.log('truthy');
}

const cartQuantity = 5;

if (cartQuantity) {
    console.log('cart has products');
}

console.log('text' / 5);

true ? 'truthy' : 'falsy'

const message = false && 'hello';

console.log(message);