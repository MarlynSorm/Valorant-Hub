import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
export default () => {
    const { id } = useParams()
    const [map, setMap] = useState('')


    useEffect(() => {
        axiosMap();
    }, [])

    const axiosMap = () => {
        axios.get('https://valorant-api.com/v1/maps/' + id)
            .then(res => {
                console.log(res.data.data);
                setMap(res.data.data)
            })
            .catch(err => {
                console.log(err);
                setMap({ err: "Unable to find Agent" })
            })
    }
    return (
        <div className="page">
            <div className="main" >
                <div className="subhead">
                    <div>
                        <h1 style={{ textAlign: "center" }}>{map.displayName}</h1>
                        <h2>Coordinates:  {map.coordinates}</h2>
                        <img height="400px" width="500px" src={map.splash} alt="" />
                    </div>
                </div>
                    <div style={{alignSelf: "center", marginLeft:"100px"}}>
                        <img height="700px" width="900px" src={map.displayIcon} alt="" />
                    </div>
            </div>
        </div>
    )
}