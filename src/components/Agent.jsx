import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
export default () => {
    const { id } = useParams()
    const [agent, setAgent] = useState('')
    const [abilities, setAbilities] = useState('')


    useEffect(() => {
        Agent();
    }, [])

    const Agent = () => {
        axios.get('https://valorant-api.com/v1/agents/' + id)
            .then(res => {
                // console.log(res.data.data);
                setAgent(res.data.data)
                // console.log(res.data.data.abilities);
                setAbilities(res.data.data.abilities)
            })
            .catch(err => {
                console.log(err);
                setAgent({ err: "Unable to find Agent" })
            })
    }
    return (
        <div className="page">
            <div className="main" >
                <div className="subhead">
                    <img className="profile" height="700px" width="500px" style={{backgroundColor:"darkslateblue" }} src={agent.fullPortrait} alt="" />
                    <div className="bio">
                        <h1>Bio</h1>
                        <p>{agent.description}</p>
                    </div>
                </div>
                <div className="abilities">
                    <div className="icons ">
                        {
                            Object.values(abilities).map((ability, i) => {
                                return (
                                    <div className="abilities">
                                        <img  key={i} src={ability.displayIcon} alt="" height={75} width={75} />
                                        <p >{ability.displayName}</p>
                                        {/* <hr /> */}
                                        {/* <p >{ability.displayName}</p> */}
                                        <span class="tooltiptext">{ability.description}</span>
                                        <p>{ability.description}</p>
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