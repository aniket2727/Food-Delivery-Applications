



import React from 'react'
import './menublocks.css'
import backgrondimage from '../images/image.jpg';
import { useNavigate } from 'react-router-dom';
const Menublocks = () => {
    const navigate=useNavigate();
    const handleBlockClick = (productType) => {
        navigate(`/selectedproducts/${productType}`);
      };
    return (
        <div className='main-menu-blocks'>

            <div className='block-title'>
                <h1>Select your food category</h1>
                <p>Good to see you again</p>
            </div>

            <div className='block-elemets'>
                 {
                    [1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className='block'>
                             <div  onClick={() => handleBlockClick('Dinner')}  className="block-images" style={{ backgroundImage: `url(${backgrondimage})`, backgroundSize: 'cover'}}>

                             </div>   

                             <div className='block-content'>
                                <h1  onClick={() => handleBlockClick('Dinner')}>Dinner</h1>
                             </div>   
                        </div>
                    ))
                 }
            </div>

        </div>
    )
}

export default Menublocks
