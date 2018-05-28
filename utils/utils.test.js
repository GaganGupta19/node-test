const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(1, 3);
    if(res !== 4){
        throw new Error('Value not correct.');
    }
});

it('should square the number', () => {
    let res = utils.square(2);
    if(res !== 4){
        throw new Error('Value not correct.');
    }
});
