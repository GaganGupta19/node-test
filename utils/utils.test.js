const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(1, 3);
    expect(res).toBe(4).toBeA('number');
});

it('should square the number', () => {
    let res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
});

it('should set names', () => {
    let user = {location: 'Ashok Vihar', age: 25};
    let res = utils.setName(user, 'Gagan Gupta');
    expect(res).toInclude({
        firstName: 'Gagan',
        lastName: 'Gupta'
    })
});