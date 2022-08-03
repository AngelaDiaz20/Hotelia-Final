import React from 'react';
import './Opinion.css';

import User1 from '../../../img/opinion/user1.png';
import User2 from '../../../img/opinion/user2.png';
import User3 from '../../../img/opinion/user3.png';

function Opinion (){
    return(
        <div className='opinions'>
        <div className='opinion'>
            <div className='opinion__username'>
                <img src={User1} alt="User Diego"/>
                <div className='opinion_user-score'>
                    <p>Diego Rodríguez</p>
                    <div className='opinion__score'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> 
                        <i class="magent fa-solid fa-star"></i>
                    </div>
                </div>
            </div>

            <div className='opinion__description'>
                Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum.
            </div>
        </div>

        <div className='opinion opinion2'>
            <div className='opinion__username '>
                <img src={User2} alt="Diana García"/>
                <div className='opinion_user-score'>
                    <p>Diana García</p>
                    <div className='opinion__score'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>

            <div className='opinion__description'>
                Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum.
            </div>
        </div>

        <div className='opinion opinion3'>
            <div className='opinion__username '>
                <img src={User3} alt="User Diego"/>
                <div className='opinion_user-score'>
                    <p>Diego Rodríguez</p>
                    <div className='opinion__score'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="magent fa-solid fa-star"></i>
                    </div>
                </div>
            </div>

            <div className='opinion__description'>
                Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum.
            </div>
        </div>
        </div>
    );
}

export default Opinion;
