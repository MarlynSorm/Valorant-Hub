import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';
export default () => {
    const [maps, setMaps] = useState('')
    const history = useHistory()


    const axiosMaps = () => {
        axios.get('https://valorant-api.com/v1/maps')
            .then(res => {
                console.log(res.data.data);
                setMaps(res.data.data)
            })
            .catch(err => {
                console.log(err);
                setMaps({ err: "Maps not found" })
            })
    }
    useEffect(() => {
        axiosMaps();
    }, [])

    const clickMap = (id) => {
        history.push("/maps/" +id)
        // console.log(id);
    }


    return (
        <div className="page">
            <div className="main" >
                <h1 className="title">Choose Location</h1>
                <div className="subhead">
                    <div className="icons">
                        {
                            Object.values(maps).map((map, i) => {
                                return (
                                    <figure key={i}>
                                        <img onClick={(e) => clickMap(map.uuid)} className="iconImg" src={map.splash} alt="" height={160} width={280} />
                                        <figcaption>{map.displayName}</figcaption>
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