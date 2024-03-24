import React from "react";
import './CV.scss'
import {Header} from "../Header";
import {Personal} from "../Personal";
import {Details} from "../Details";
import {cvData} from "./data";


export const CV = () => {
    return (
        <main className='cv-main'>
            <Header data={cvData.personal}/>
            <Personal data={cvData.personal}/>
            <Details data={cvData.details}/>
        </main>
    )
}
