import React, { useState } from 'react';


const fruits = ["Apple", "Mango", "Banana"];

const prices = {
  Apple: 20,
  Mango: 15,
  Banana: 5,
};

const taxPercent = 2;

const initialState = {};

fruits.forEach((fruit) => {
  const price = prices[fruit];
  initialState[fruit] = {
    count: 0,
    price,
  };
});



function App() {
  
  const [basket, setBasket] = useState(initialState);

  let totalFruitsCount = 0;
  let totalFruitsPrice = 0;

  Object.keys(basket).forEach((fruitKey) => {
    const fruit = basket[fruitKey];
    totalFruitsCount += fruit.count;
    totalFruitsPrice += fruit.count * fruit.price;
  });

  const taxPrice = (totalFruitsPrice * taxPercent) / 100;
  const totalPrice = totalFruitsPrice + taxPrice;



  function addFruitToBasket(fruitKey) {
    
    setBasket({
      ...basket, 
      [fruitKey]: {
        ...basket[fruitKey], 
        count: basket[fruitKey].count + 1,
      },
    });
    }

  function removeFruitFromBasket(fruitKey) {
    setBasket({
      ...basket, 
      [fruitKey]: {
        ...basket[fruitKey], 
        count: basket[fruitKey].count - 1,
      },
    });
  }



  return (
    <div>
     
     <h1>Fruit Shop</h1>
     {Object.keys(basket).map((fruitKey) => {
       const fruit = basket[fruitKey];
       return(
         <div>
         
      
            <button onClick = {() => addFruitToBasket(fruitKey)}> + </button>&emsp;
            <button onClick = {() => removeFruitFromBasket(fruitKey)}> - </button>&emsp;
     {fruitKey} = {fruit.count}
   
         </div>
       );
     })}
     
  

    
     <hr />
     <h1>Invoice</h1>
     <div>Total no of fruits: {totalFruitsCount}</div>
     <div>Total:{totalFruitsPrice} </div>
     <div>Tax: {taxPercent}</div>
     <div>Tax Price: {taxPrice}</div>
     <br />
     <div>Grand Total: {totalPrice}</div>
    
    </div>
  );
}

export default App;
