import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
export default () => {


    return (
        <div className="page">
            <div className="main">
                <h1 className="title">Leaderboard</h1>
                <div className="subhead">
                    <h3 style={{ color: "white" }}>Top 500 Players</h3>
                </div>

            </div>
        </div>
    )
}