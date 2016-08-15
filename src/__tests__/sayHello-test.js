import expect from 'expect';
import sayHello from '../sayHello';

describe('sayHello', () => {
  it('Should return Hello World with no param', () => {
    let expected = 'Hello World!';
    let actual = sayHello();
    expect(actual).toBe(expected);
  });

  it('Should return Hello ... according to param', () => {
    let expected = 'Hello Dan!';
    let actual = sayHello('Dan');
    expect(actual).toBe(expected);
  });
});
