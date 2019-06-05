import React from "react";

export default function Act({ name, stage, date, time }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{stage}</h2>
            <h2>{date} {time}</h2>
        </div>
    );
}