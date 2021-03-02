import { faCartPlus ,faFlag, faMale, faMoneyCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css'






const Card = (props) => {

    const BtnHxandler = props.BtnHxandler;
    const info = props.singlePlayerInfo;
    
    

    const {first_name,last_name,Salery,Current_age,Batting_style,Bowling_style,gender,Country,image} = props.singlePlayerInfo
    return (   
            <div className="col mb-3 ">
                <div className="card card-s">
                    <img src={image} className="card-img-top " alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{first_name + ' '+ last_name} 
                             <span class="badge bg-danger text-light ml-2">{Country} <FontAwesomeIcon icon={faFlag}/></span>
                        </h5>
                        <p className="card-text">Current age: {Current_age}</p>
                        <p className="card-text"><span><FontAwesomeIcon icon={faMale}/></span> Gender: {gender}</p>
                        <p className="card-text"><span><FontAwesomeIcon icon={faMoneyCheck}/></span> Salery: {Salery} tk</p>
                        <p className="card-text ">Batting style: {Batting_style}</p>
                        <p className="card-text ">Bowling style: {Bowling_style}</p>
                        <button className="btn-sm btn-primary" onClick={()=>BtnHxandler(info)}>Add To Team 
                         <FontAwesomeIcon icon={faCartPlus}/>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

export default Card;


{/* // <div className="upperPart">
//                 <img src="" alt=""/>
//                 <p>{first_name + ' ' + last_name}</p>
//                 <h5>{Salery} tk</h5>
//             </div>
//             <div className="lowerPart">
//                 <p>Born</p>
//                 <p>Current age: {Current_age}</p>
//             </div> */}