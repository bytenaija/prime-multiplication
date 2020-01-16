import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Input, Label } from 'reactstrap';
import uuid from 'uuid/v4'

function App() {

const [numberOfPrimes, setNumberOfPrimes] = React.useState(10)
const [primes, setPrimes] = React.useState([])
React.useEffect(()=>{
  const primesLists = primeFactorsTo(numberOfPrimes)
  setPrimes(primesLists)
}, [numberOfPrimes])

const primeFactorsTo = (nPrimes) =>
{
 var primes = [];
    for( var n = 2;  nPrimes > 0;  n++ ) {
        if( isPrime(n) ) {
            primes.push( n );
            --nPrimes;
        }
    }
    return primes;

}

const isPrime =(n) => {
    var sqrtn = Math.sqrt(n);

    for (var i = 2; i <= sqrtn; i++)
        if (n % i === 0) return false;
    return true;
}



const displayTable = () =>{
return primes.map(prime =>{
return <tr key={uuid()}>
  <td>{prime}</td>
  { primes.map(prim =>{
return <td key={uuid()} data-testid="product">{prime * prim}</td>
  })}
  </tr>
  
})
}
  return (
    <div className="container">
      <div className="mt-4 mb-4">
      <Label htmlFor="primes">Number of Primes</Label>
      <Input type="number"
      data-testid="input" 
      id="primes"
      value={numberOfPrimes}
       onChange={(e) => {
        e.target.value > 0 ? setNumberOfPrimes(parseInt(e.target.value)) : setNumberOfPrimes(parseInt(10) )
        }
        } />
        </div>
      <Table width='100%' data-testid="table" responsive>
        <tbody>
        <tr><td></td>
  {primes.map(prime => <td data-testid="prime-numbers" key={uuid()}>{prime}</td>)}
  </tr>
      {displayTable()}
      
      </tbody>
      </Table>

    </div>
  );
}

export default App;
