import React from "react";
import "./App.css";
import { Table, Input, Label } from "reactstrap";
import uuid from "uuid/v4";

function App() {
  // set the initial number of prime numbers
  const [numberOfPrimes, setNumberOfPrimes] = React.useState(10);

  // hooks to store the primes when generated
  const [primes, setPrimes] = React.useState([]);

  // calculate the first 10 prime numbers on application start
  React.useEffect(() => {
    const primesLists = getPrimeNumbers(numberOfPrimes);
    setPrimes(primesLists);
  }, [numberOfPrimes]);


  /* function to get all prime numbers to a certain number
// @param nPrimes: number - The number of primes to find
  */
  const getPrimeNumbers = nPrimes => {
    let primes = [];
    for (let n = 2; nPrimes > 0; n++) {
      if (isPrime(n)) {
        primes.push(n);
        --nPrimes;
      }
    }
    return primes;
  };

  //Function to check if a given number is a prime
  const isPrime = n => {
    let sqrtn = Math.sqrt(n);
    for (let i = 2; i <= sqrtn; i++) if (n % i === 0) return false;
    return true;
  };

  //display the multiplication table
  const displayTable = () => {
    return primes.map(prime => {
      return (
        <tr key={uuid()}>
          {/* Left table label listing prime numbers */}
          <td>{prime}</td>
          {primes.map(primeNumber => {
            return (
              <td key={uuid()} data-testid="product">
                {prime * primeNumber}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <Label htmlFor="primes">Number of Primes</Label>
        <Input
          type="number"
          data-testid="input"
          id="primes"
          value={numberOfPrimes}
          onChange={e => {
            e.target.value > 0
              ? setNumberOfPrimes(parseInt(e.target.value))
              : setNumberOfPrimes(parseInt(10));
          }}
        />
      </div>
      <Table width="100%" data-testid="table" responsive>
        <tbody>
          {/* Top table label listing primes */}
          <tr>
            <td></td>
            {primes.map(prime => (
              <td data-testid="prime-numbers" key={uuid()}>
                {prime}
              </td>
            ))}
          </tr>
          {displayTable()}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
