import React from "react";

function Summary({ text }) {
    if (!text) {
        return null;
    }

    return (
        <div className="card">
            <h3 className="card-header">
                <i className="fa-solid fa-user-tie me-2" aria-hidden="true"/> Professional Summary
            </h3>
            <div className="card-body">
                <p className="card-text mb-0">{text}</p>
            </div>
        </div>
    );
}

export default Summary;
