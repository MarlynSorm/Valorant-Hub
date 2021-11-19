import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';
export default () => {
    const [agents, setAgents] = useState('')
    const history = useHistory()


    const axiosAgents = () => {
        axios.get('https://valorant-api.com/v1/agents')
            .then(res => {
                console.log(res.data.data);
                setAgents(res.data.data)
            })
            .catch(err => {
                console.log(err);
                setAgents({ err: "Agents not found" })
            })
    }
    useEffect(() => {
        axiosAgents();
    }, [])

    const clickAgent = (id, agent) =>{
        history.push("/agents/" + id)
        console.log(agent);
    }


    return (
        <div className="page">
            <div className="main" >
                    <h1 className="title">Select Your Agent</h1>
                <div className="subhead">
                    <div className="icons">
                        {
                            Object.values(agents).map((agent, i) => {
                                return (
                                        <figure key={i}>
                                            <button  onClick={(e) => clickAgent(agent.uuid, agent)} className="iconImg"><img  src={agent.displayIconSmall} alt="" height={75} width={75}/></button>
                                            <figcaption>{agent.displayName}</figcaption>
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