import React from 'react';
import './Addtoteam.css'

const Addtoteam = (props) => {
    const info = props.infoSending;
    

    let totalCost = 0;
    for (let i = 0; i < info.length; i++) {
        const singleInfo = info[i];
        totalCost = totalCost + singleInfo.Salery
    }

    
    return (
        <div className="fixes">
            <h4>Final Squade</h4>
            <hr/>
            <h4>total added: {info.length}</h4>
            <hr/>
            <div className="playerNamebox">
                {
                    info.map(name => <span class="badge bg-danger text-light ml-2" >{name.last_name}</span>)
                }
            </div>
            <hr/>
            <h5>Total Cost : {totalCost} tk</h5>
            <hr/>
            <h4>shakil</h4>
            <hr/>
            <h4>shakil</h4>
            <hr/>
        </div>
    );
};

export default Addtoteam;