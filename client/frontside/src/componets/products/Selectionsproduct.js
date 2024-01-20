import React, { useState } from 'react';
import './selectedproduct.css';
import Fooddetails from './fooddetails/Fooddetails';

const Selectionsproduct = () => {
  const prices = ['Below 300', 'Below 500', 'Below 1000', 'Below 1500'];
  const foodTypes = ['Chinese', 'South Indian', 'Fast Food', 'Spanish Food'];
  const occasions = ['Breakfast', 'Dinner', 'Lunch', 'Drinks'];

  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);

  const handlePrice = (item) => {
    const updatedSelection = [item];

    setSelectedPrices(updatedSelection);
    setSelectedFoodTypes([]);
    setSelectedOccasions([]);
    
    console.log(`Selected Prices: ${updatedSelection}`);
  };

  const handleFoodType = (item) => {
    const updatedSelection = [item];

    setSelectedFoodTypes(updatedSelection);
    setSelectedPrices([]);
    setSelectedOccasions([]);
    
    console.log(`Selected Food Types: ${updatedSelection}`);
  };

  const handleOccasion = (item) => {
    const updatedSelection = [item];

    setSelectedOccasions(updatedSelection);
    setSelectedPrices([]);
    setSelectedFoodTypes([]);
    
    console.log(`Selected Occasions: ${updatedSelection}`);
  };

  return (
    <div className='main-selectproduct'>
      <div className='main-product-orderedBy'>
        <div className='orderBy-title'>
          <h1>Order By</h1>
        </div>

        <div className='main-orderList'>
          <div className='orderByprice'>
            <h3>Order By Price</h3>
            {prices.map((item, index) => (
              <div key={index}>
                <label>
                  {item}
                  <input
                    type='checkbox'
                    onChange={() => handlePrice(item)}
                    checked={selectedPrices.includes(item)}
                  />
                </label>
              </div>
            ))}
          </div>

          <div className='orderByfoodtype'>
            <h3>Order By Food</h3>
            {foodTypes.map((item, index) => (
              <div key={index}>
                <label>
                  {item}
                  <input
                    type='checkbox'
                    onChange={() => handleFoodType(item)}
                    checked={selectedFoodTypes.includes(item)}
                  />
                </label>
              </div>
            ))}
          </div>

          <div className='orderByoccasion'>
            <h3>Order By Occasion</h3>
            {occasions.map((item, index) => (
              <div key={index}>
                <label>
                  {item}
                  <input
                    type='checkbox'
                    onChange={() => handleOccasion(item)}
                    checked={selectedOccasions.includes(item)}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='main-product-and-resturant-Info'>
               <Fooddetails/>
      </div>
    </div>
  );
};

export default Selectionsproduct;
