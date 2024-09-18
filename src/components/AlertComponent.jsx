/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function AlertComponent({ type, message, delay }) {
    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = (e) => {
        const alertElement = e.target.parentElement.parentElement;
        alertElement.classList.add("fadeAlert");
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
    }

    useEffect(() => {
        delay && setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }, []);

    return ((showAlert && <div className={`alert alert-${type}`}>
        <div className="alert-close">
            <span className="mr-1">{message}</span>
            <button onClick={closeAlert} style={{ background: "transparent" }}>X</button>
        </div>
    </div>
    ))
}