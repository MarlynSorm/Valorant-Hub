import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';
export default () => {
    const [weapons, setWeapons] = useState('')
    const history = useHistory()


    const axiosWeapons = () => {
        axios.get('https://valorant-api.com/v1/weapons')
            .then(res => {
                console.log(res.data.data);
                setWeapons(res.data.data)
            })
            .catch(err => {
                console.log(err);
                setWeapons({ err: "Weapons not found" })
            })
    }
    useEffect(() => {
        axiosWeapons();
    }, [])

    const clickWeapon = (id,weapon) => {
        history.push("/weapons/" +id )
        console.log(weapon);
    }


    return (
        <div className="page">
            <div className="main" >
                <h1 className="title">Buy Phase</h1>
                <div className="subhead">
                    <div className="icons">
                        {
                            Object.values(weapons).map((weapon, i) => {
                                return (
                                    <figure key={i}>
                                        <button onClick={(e) => clickWeapon(weapon.uuid, weapon)} className="weaponIcon"><img src={weapon.displayIcon} alt="" height={75} width={75} /></button>
                                        <figcaption>{weapon.displayName}</figcaption>
                                    </figure>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}