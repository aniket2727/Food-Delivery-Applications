import React from 'react';
import './frontpage.css';
import backgrondimage from './images/image.jpg';
import Menublocks from './menublocks/Menublocks';

const Frontpage = () => {
    return (
        <>
        <div className='main-front-page' style={{ backgroundImage: `url(${backgrondimage})` }}>
            <div className='select-options'>
                <div className='select-city'>
                    <select>
                        <option>select city</option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                        <option>Satara</option>
                        <option>Phaltan</option>
                    </select>

                </div>

                <div className='select-resturant'>
                <select>
                        <option>select resturant</option>
                        <option>resturant A</option>
                        <option>reesturant B</option>
                        <option>resturant C</option>
                        <option>resturant D</option>
                    </select>
                </div>
            </div>
        </div>

        <Menublocks/>
        </>
    );
}

export default Frontpage;
