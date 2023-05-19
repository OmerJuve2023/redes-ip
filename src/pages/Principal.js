import React, {useState} from "react";
import {FormRed} from "../container/FormRed";
import {Methods} from "../components/Methods";
import {findAllByDisplayValue} from "@testing-library/react";

export const Principal = () => {
    const [ips, setIps] = useState([])
    const [mascaraRedes, setMascaraRedes] = useState([])

    function addIP(ip) {
        Methods.addForm(ips, ip)
    }

    function addMascaraRed(mascaraRed) {
        Methods.addForm(mascaraRedes, mascaraRed)
    }

    return (
        <div className={"container"}>
            <FormRed addFormRed={addIP} addFormMascaraRed={addMascaraRed}/>
            <div>

            </div>
        </div>

    )
}