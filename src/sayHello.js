/* @flow */

export default function sayHello(name: string) {
  let greeting = name || 'World';
  return `Hello ${greeting}!`;
}
