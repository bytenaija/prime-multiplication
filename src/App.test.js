import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the right number of prime numbers', () => {
  const {getAllByTestId } = render(<App />);
  let linkElement = getAllByTestId('prime-numbers');
  expect(linkElement.length).toBe(10);
});

test('renders the right number of prime numbers when input changes', ()=>{
  const { getByTestId, getAllByTestId} = render(<App />);
  const input = getByTestId("input");
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('23')
  const linkElement = getAllByTestId('prime-numbers');
  expect(linkElement.length).toBe(23);
})

test('renders an input', ()=>{
    const { getByTestId, getAllByTestId } = render(<App />);
    const input = getByTestId("input");
    expect(input).toBeTruthy()
})

test('renders a table', ()=>{
    const { getByTestId} = render(<App />);
    const table = getByTestId("table");
    expect(table).toBeTruthy()
})

test('render the right results of multiplication', () =>{
    const { getByTestId, getAllByTestId} = render(<App />);
   
    const numberOfPrimes = 23
  const input = getByTestId("input");
  fireEvent.change(input, { target: { value:  numberOfPrimes} })
  const linkElement = getAllByTestId('product');
  expect(linkElement.length).toBe(numberOfPrimes * numberOfPrimes);
  expect(linkElement[0]).toHaveTextContent('4')
  expect(linkElement[linkElement["length"]-1]).toHaveTextContent('6889')
})


test('render the the default number of primes if input set to 0', () =>{
    const { getByTestId, getAllByTestId} = render(<App />);
    const numberOfPrimes = 0
  const input = getByTestId("input");
  fireEvent.change(input, { target: { value:  numberOfPrimes} })
  const linkElement = getAllByTestId('prime-numbers');
  expect(linkElement.length).toBe(10);
  expect(linkElement[0]).toHaveTextContent('2')
  expect(linkElement[linkElement["length"]-1]).toHaveTextContent('29')

  const products = getAllByTestId('product');
  expect(products[0]).toHaveTextContent('4')
  expect(products[products["length"]-1]).toHaveTextContent('841')
})


test('render correctly when text is entered into input', () =>{
    const { getByTestId, getAllByTestId} = render(<App />);
    const numberOfPrimes = "We are here now"
  const input = getByTestId("input");
  fireEvent.change(input, { target: { value:  numberOfPrimes} })
  const linkElement = getAllByTestId('prime-numbers');
  expect(linkElement.length).toBe(10);
  expect(linkElement[0]).toHaveTextContent('2')
  expect(linkElement[linkElement["length"]-1]).toHaveTextContent('29')

  const products = getAllByTestId('product');
  expect(products[0]).toHaveTextContent('4')
  expect(products[products["length"]-1]).toHaveTextContent('841')
})



