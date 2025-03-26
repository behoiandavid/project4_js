function originalFunction(num) {
    return num * num;
}

function modifyFunction(originalFunc, multiplier) {
    return function (num) {
        return originalFunc(num) * multiplier;
    };
};

const modifiedFunc = modifyFunction(originalFunction, 3);
console.log('Original function output for 4:', originalFunction(4));
console.log('Modified function output for 4:', modifiedFunc(4));



function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};

const addFirst = curriedAdd(1);
const addSecond = addFirst(2);
const result = addSecond(3);
console.log('Result:', result);



function curriedDomain(protocol) {
    return function (domainName) {
        return function (tld) {
            return `${protocol}://${domainName}.${tld}`;
        };
    };
};

const protocolSetter = curriedDomain('https');
const domainNameSetter = protocolSetter('example');
const fullDomain = domainNameSetter('com');
console.log('Full Domain:', fullDomain);



function outerFunction(arg1) {
    return function innerFunction(arg2) {
        return function deepInnerFunction(arg3) {
            return arg1 * arg2 * arg3;
        };
    };
};

const result1 = outerFunction(2)(3)(4);
console.log(result1);




