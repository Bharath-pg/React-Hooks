import React, { useState } from 'react';

const prices = {
  Apple: 20,
  Mango: 15,
};

const taxPercent = 2;

function App() {

  const [applesCount, setApplesCount] = useState(0);
  const [mangoesCount, setMangoesCount] = useState(0);

  const totalFruitsCount = applesCount + mangoesCount;
  const totalFruitsPrice = applesCount * prices.Apple + mangoesCount * prices.Mango;

  const taxPrice = (totalFruitsPrice * taxPercent) / 100;
  const totalPrice = totalFruitsPrice + taxPrice;
  function addApplesToBasket() {
    setApplesCount(applesCount + 1);
  }

  function removeApplesFromBasket() {
    setApplesCount(applesCount - 1);
  }

  function addMangoesToBasket() {
    setMangoesCount(mangoesCount + 1);
  }

  function removeMangoesFromBasket() {
    setMangoesCount(mangoesCount - 1);
  }

  return (
    <div>
     <h1>Fruit Shop</h1>
     <div>
     <button onClick = {addApplesToBasket}> + </button>&emsp;
     <button onClick = {removeApplesFromBasket}> - </button>&emsp;
     Apple: {applesCount}
     </div>
      <br />

     <div>
     <button onClick = {addMangoesToBasket}> + </button>&emsp;
     <button onClick = {removeMangoesFromBasket}> - </button>&emsp;
     Mango: {mangoesCount}
     </div>

     <hr />
     <h1>Invoice</h1>
     <div>Total no of fruits: {totalFruitsCount}</div>
     <div>Total:{totalFruitsPrice} </div>
     <div>Tax: 2%</div>
     <div>Tax Price: {taxPrice}</div>
     <br />
     <div>Grand Total: {totalPrice}</div>

    </div>
  );
}

export default App;
