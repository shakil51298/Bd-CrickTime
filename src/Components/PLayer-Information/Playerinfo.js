import React, { useEffect, useState } from 'react'
import playerinformation from '../../FakeData/playerinformation.json'
import Addtoteam from '../AddToTeam/Addtoteam';
import Card from '../Player-card/Card';
import './Playerinfo.css'

const Playerinfo = () => {
    const [playerinfo,setPLayerInfo] = useState([])
    const [info, setInfo] = useState([]);

    useEffect(() => {
        setPLayerInfo(playerinformation)
    },[])

    const BtnHxandler = (playerinfo) => {
        const newInfo = [...info,playerinfo]
        setInfo(newInfo)
    }

    return (
        <div className="mt-5 card-Container mb-5">
            <div className="container d-flex ">
                <div className="cards ml-3 row row-cols-1 row-cols-md-2 g-5 myCard">
                    {
                        playerinfo.map(player => <Card singlePlayerInfo = {player} 
                            key={player.id}
                            BtnHxandler={BtnHxandler}
                            ></Card>)
                    }
                </div>
                <div className="card w-25 text-center ml-3 h-50 info">
                    <Addtoteam infoSending = {info}></Addtoteam>
                </div>
            </div>
        </div>
    );
};

export default Playerinfo;