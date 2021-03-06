import React from 'react';
import './Addtoteam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

const Addtoteam = (props) => {
    const info = props.infoSending;
    

    let totalCost = 0;
    for (let i = 0; i < info.length; i++) {
        const singleInfo = info[i];
        totalCost = totalCost + singleInfo.Salery
    }
     

    
    return (
        <div className="fixes">
            <h4> <FontAwesomeIcon icon={faArrowAltCircleRight} /> Select For your Team</h4>
            <hr/>
            <p>Added: {info.length}</p>
            <hr/>
            <div className="playerNamebox" >
                {
                    info.map(name => <div class="badge bg-danger text-light ml-2 nameAndSalery" >
                        <p>{name.first_name + ' ' + name.last_name}</p>
                        <p>Salery: {name.Salery}</p>
                    </div>)
                }
            </div>
            <p>Total Cost : {totalCost} tk</p>
            <hr/>
        </div>
    );
};

export default Addtoteam;