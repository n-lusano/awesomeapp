// src/components/Pokemon.js
import React from "react";
import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="card Pokemon shadow-sm mb-4">
      <div className="card-body pb-0">
        <h4 className="card-title">{props.name}</h4>
        <h6 className="card-subtitle mb-3 text-info">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities:
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item text-secondary">{ability}</li>;
        })}
      </ul>
    </div>
  );
}
