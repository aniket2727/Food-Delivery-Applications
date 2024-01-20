import React, { useState } from 'react';
import '../selectedproduct.css';
import backimage from '../images/image.jpg';

const Fooddetails = () => {
    const [data, setData] = useState([
        {
            id: "001",
            type: "fastfood",
            city: "pune",
            occasion: "diner",
            hotelname: "Royal gardens",
            productName: "burger",
            description: "best in all places",
            price: 100,
            address: "Phaltan",
            addCount: 1,
            ratings: 4.5
        },
        {
            id: "002",
            type: "fastfood",
            city: "pune",
            occasion: "diner",
            hotelname: "Royal gardens",
            productName: "burger",
            description: "best in all places",
            price: 100,
            address: "Phaltan",
            addCount: 1,
            ratings: 4.5
        }
    ]);

    const addcount = (index) => {
        const newData = [...data];
        newData[index].addCount += 1;
        setData(newData);
    };

    const descresecount = (index) => {
        const newData = [...data];
        if (newData[index].addCount > 0) {
            newData[index].addCount -= 1;
            setData(newData);
        }
    };

    const handleBuy = (item) => {
        
        console.log(`Buying ${item}`);
    };

    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className='main-food-details'>
                    <div className='hotelInfo'>
                        <div className='hotel-image'>
                            <img src={backimage} alt='image' />
                        </div>
                        <div className='hotel-name'>
                            <h1>{item.hotelname}</h1>
                            <h1>{item.productName}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className='productInfo'>
                        <p>Price: {item.price}</p>
                        <p>Address: {item.address}</p>
                        <p>Count: <button className='count' onClick={() => addcount(index)}>+</button> {item.addCount} <button className='count' onClick={() => descresecount(index)}>-</button></p>
                        <p>Ratings: {item.ratings}</p>
                        <button className='buy-button' onClick={() => handleBuy(item.id)}>Buy</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Fooddetails;
