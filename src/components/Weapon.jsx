import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
export default () => {
    const { id } = useParams()
    const [weapon, setWeapon] = useState('')
    const [skins, setSkins] = useState('')
    const [stats, setStats] = useState('')
    const [shop, setShop] = useState('')




    useEffect(() => {
        Weapon();
    }, [])

    const Weapon = () => {
        axios.get('https://valorant-api.com/v1/weapons/' + id)
            .then(res => {
                // console.log(res.data.data);
                setWeapon(res.data.data)
                // console.log(res.data.data.abilities);
                setSkins(res.data.data.skins)
                setStats(res.data.data.weaponStats)
                setShop((res.data.data.shopData))
                // console.log(DMG);
            })
            .catch(err => {
                console.log(err);
                setWeapon({ err: "Unable to find Weapon" })
            })
    }
    return (
        <div className="page">
            <div className="main" >
                <div className="subhead">
                    <img className="gun" height="700px" width="500px" style={{backgroundColor:"darkslateblue" }} src={weapon.displayIcon} alt="" />
                    <div className="bio">
                        <h1>{weapon.displayName}</h1>
                        <p>Type: {shop.category}</p>
                        <p>Cost: {shop.cost} credits</p>
                        <p> Fire Rate: {stats.fireRate} bps</p>
                        <p> Magazine Size: {stats.magazineSize} bullets</p>
                        <p>Reload Speed: {stats.reloadTimeSeconds} sec</p>
                    </div>
                </div>
                        <h1 style={{textAlign:"center"}}>Skins</h1>
                <div className="abilities">
                    <div className="icons ">
                        {
                            Object.values(skins).map((skin, i) => {
                                return (
                                    <div className="abilities">
                                        <img  key={i} src={skin.displayIcon} alt="" height={200} width={200} />
                                        {/* <hr /> */}
                                        <p style={{marginTop:"75px"}}>{skin.displayName}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}