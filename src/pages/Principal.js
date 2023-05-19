import React, {useState} from "react";
import {FormRed} from "../container/FormRed";
import {Methods} from "../components/Methods";

export const Principal = () => {
    const [ips, setIps] = useState([])
    const [mascaraRedes, setMascaraRedes] = useState([])
    const [showMessage, setShowMessage] = useState(false)
    const [showTable, setShowTable] = useState(false)

    function addIP(ip) {
        setIps(Methods.addForm(ips, ip))
    }

    function addMascaraRed(mascaraRed) {
        setMascaraRedes(Methods.addForm(mascaraRedes, mascaraRed))
    }

    return (
        <div className={"container"}>
            <FormRed addFormRed={addIP} addFormMascaraRed={addMascaraRed}/>
            <div>

            </div>
        </div>

    )
}