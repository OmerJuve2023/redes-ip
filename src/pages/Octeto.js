import React, {useState} from "react";
import {Methods} from "../components/Methods";

const Octeto = () => {

    let contador = 0
    let decimal = useState("")
    let [ip, setIp] = useState("")
    const [inputIP, setInputIP] = useState({
        input1: String,
        input2: String,
        input3: String,
        input4: String
    });
    const [showMessage, setShowMessage] = useState(false)
    const [valores, setValores] = useState({
        col1: String,
        col2: String,
        col3: String,
        col4: String,
        col5: String,
        col6: String,
        col7: String,
        col8: String
    })

    const [mascaraRed, setMascaraRed] = useState("")
    const [inputMascaraRed, setInputMascaraRed] = useState({
        input21: String,
        input22: String,
        input23: String,
        input24: String
    })

    const [nombreRedBinario, setNombreRedBinario] = useState("")
    const [showTable, setShowTable] = useState(false)

    const handleCalculateNetworkName = () => {
        const ipParts = ip.split('.').map((part) => parseInt(part, 2));
        const maskParts = mascaraRed.split('.').map((part) => parseInt(part, 2));

        // Realiza la suma lógica de cada parte de la dirección IP y la máscara de red
        const networkParts = ipParts.map((part, index) => part & maskParts[index]);

        const networkNameBinary = networkParts.map((part) => part.toString(2)).join('.');
        const networkNameDecimal = networkParts.join('.');

        setNombreRedBinario(networkNameBinary);
        /*setNetworkNameDecimal(networkNameDecimal);*/
    }


    const handleChange = async (e) => {
        setInputMascaraRed({
            ...inputMascaraRed,
            [e.target.name]: parseInt(e.target.value)
        });
        setInputIP({
            ...inputIP,
            [e.target.name]: parseInt(e.target.value)
        });
    };
    const eject = (values) => {
        contador = values
        valores.col1 = validate(contador, 128)
        valores.col2 = validate(contador, 64)
        valores.col3 = validate(contador, 32)
        valores.col4 = validate(contador, 16)
        valores.col5 = validate(contador, 8)
        valores.col6 = validate(contador, 4)
        valores.col7 = validate(contador, 2)
        valores.col8 = validate(contador, 1)
    }
    const validate = (num, valor) => {
        if (num >= valor) {
            contador -= valor
            return 1
        } else return 0
    }
    const concatenar = (termino) => {
        decimal += valores.col1 + ""
            + valores.col2 + ""
            + valores.col3 + ""
            + valores.col4 + ""
            + valores.col5 + ""
            + valores.col6 + ""
            + valores.col7 + ""
            + valores.col8 + termino
    }
    const handleSubmit = (e) => {
        decimal = ""
        e.preventDefault();
        eject(inputIP.input1)
        concatenar(".")
        eject(inputIP.input2)
        concatenar(".")
        eject(inputIP.input3)
        concatenar(".")
        eject(inputIP.input4)
        concatenar("")
        setIp(decimal)

        decimal = ""

        eject(inputMascaraRed.input21)
        concatenar(".")
        eject(inputMascaraRed.input22)
        concatenar(".")
        eject(inputMascaraRed.input23)
        concatenar(".")
        eject(inputMascaraRed.input24)
        concatenar("")
        setMascaraRed(decimal)

        setShowTable(false)
        setShowMessage(true)

        handleCalculateNetworkName()

    };
    const view = (value) => {
        eject(value)
        if (showTable) return (
            <div className={"my-5"}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">128</th>
                        <th scope="col">64</th>
                        <th scope="col">32</th>
                        <th scope="col">16</th>
                        <th scope="col">8</th>
                        <th scope="col">4</th>
                        <th scope="col">2</th>
                        <th scope="col">1</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{valores.col1}</td>
                        <td>{valores.col2}</td>
                        <td>{valores.col3}</td>
                        <td>{valores.col4}</td>
                        <td>{valores.col5}</td>
                        <td>{valores.col6}</td>
                        <td>{valores.col7}</td>
                        <td>{valores.col8}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    const enableView = () => {
        setShowTable(!showTable)
    }

    return (
        <div className="container">
            <div className={"h2"}>IP</div>
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input1"
                        value={inputIP.input1}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input2"
                        value={inputIP.input2}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input3"
                        value={inputIP.input3}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input4"
                        value={inputIP.input4}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={"h2 my-5"}>Máscara de Red</div>
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input21"
                        value={inputMascaraRed.input21}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input22"
                        value={inputMascaraRed.input22}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input23"
                        value={inputMascaraRed.input23}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input24"
                        value={inputMascaraRed.input24}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="col my-5">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Enviar
                </button>
            </div>
            <hr/>
            <button onClick={enableView} className={"btn btn-success my-5"}>
                {showTable ? "Ocultar Proceso" : "Mostrar Proceso"}
            </button>

            {showTable && (
                <div className={"h4"}>
                    IP
                </div>
            )}
            {showTable && (
                view(inputIP.input1)
            )}
            {showTable && (
                view(inputIP.input2)
            )}
            {showTable && (
                view(inputIP.input3)
            )}
            {showTable && (
                view(inputIP.input4)
            )}
            <br/>
            {showTable && (
                <div className={"h4"}>
                    Máscara de Red
                </div>
            )}
            {showTable && (
                view(inputIP.input21)
            )}
            {showTable && (
                view(inputIP.input22)
            )}
            {showTable && (
                view(inputIP.input23)
            )}
            {showTable && (
                view(inputIP.input24)
            )}
            <hr/>
            {showMessage && (
                <div className={"my-2"}>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th>IP</th>
                            <td className={"h4"}>{ip}</td>
                        </tr>
                        <tr>
                            <th>Máscara de red</th>
                            <td className={"h4"}>{mascaraRed}</td>
                        </tr>
                        <tr>
                            <th>Nombre de red</th>
                            <td className={"h4"}>{nombreRedBinario}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Octeto;