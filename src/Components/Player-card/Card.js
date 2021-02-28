import React from 'react';
import './Card.css'






const Card = (props) => {

    const BtnHxandler = props.BtnHxandler;
    const info = props.singlePlayerInfo;
    
    

    const {first_name,last_name,Salery,Current_age,Batting_style,Boowling_style,gender,Country,image} = props.singlePlayerInfo
    return (   
            <div className="col mb-3 ">
                <div className="card card-s">
                    <img src={image} className="card-img-top " alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{first_name + ' '+ last_name} 
                             <span class="badge bg-danger text-light ml-2">{Country}</span>
                        </h5>
                        <p className="card-text">Current age: {Current_age}</p>
                        <p className="card-text">Gender: {gender}</p>
                        <p className="card-text">Salery: {Salery} tk</p>
                        <p className="card-text text-danger">Batting_style</p>
                        <p className="card-text text-danger">Boowling_style</p>
                        <button className="btn-sm btn-primary" onClick={()=>BtnHxandler(info)}>Add To Team</button>
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