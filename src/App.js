

import React, { useState, useEffect } from "react";

  function App () {
    const [products, setProducts] = useState({
      coffe: 0,
      sugar: 0
    });

    const [RemoveButton, setRemoveButton] = useState({
      coffe: false,
      sugar: false
    });

const addCoffe = () => setProducts((prevState) => {
  return {
    ...prevState,
    coffe: prevState.coffe + 1
  }});

const addSugar = () => setProducts((prevState) => {
  return {
      ...prevState,
      sugar: prevState.sugar + 1
  }});

const removeCoffe = () => setProducts((prevState) => {
  const newCoffe = prevState.coffe - 1 >= 0 ? prevState.coffe - 1 : 0;
  return {
    ...prevState,
    coffe: newCoffe
  }});

const removeSugar = () => setProducts((prevState) => {
  const newSugar = prevState.sugar - 1 >= 0 ? prevState.sugar - 1 : 0;
  return {
    ...prevState,
    sugar: newSugar
  }});

const save = () => {
  localStorage.setItem('products', JSON.stringify(products));
}

const clear = () => {
  localStorage.removeItem('products');
  setProducts({ coffe: 0, sugar: 0 });
}

useEffect(()=>{
  const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
  }
}, []);

useEffect(() => {
  setRemoveButton({
    coffe: products.coffe > 0,
    sugar: products.sugar > 0
  });
}, [products]);

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
        <div className='product'>
        <span>{`Coffee: ${products.coffe}`}</span>
          <button onClick={addCoffe}>Add</button>
          {RemoveButton.coffe && (<button onClick={removeCoffe}>Remove</button>)}
        </div>
        <div className='product'>
          <span>{`Sugar: ${products.sugar}`}</span>
            <button onClick={addSugar}>Add</button>
            {RemoveButton.sugar && (<button onClick={removeSugar}>Remove</button>)}
        </div>
        <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
    </div>
  </div> 
  );
}

export default App;