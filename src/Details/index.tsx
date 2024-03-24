import React from "react";
import './Details.scss';
import {CVDetails, Experience} from "../types";

interface Props {
    data: CVDetails;
}


export const Details = ({data: {experience, education}}: CVDetails) => {
    return (
        <section className='cv-details'>
            <h2>Experience</h2>
            <ul>
                {experience.map((experience)=>(
                    <li key={experience.year}>
                        <strong>{experience.year}</strong> - {experience.description}
                    </li>)
                )}
            </ul>
            <h2>Education</h2>
            <ul>
                {education.map((education, index)=>(
                    <li key={index}>{education}</li>
                ))}
            </ul>
        </section>
    )
}
