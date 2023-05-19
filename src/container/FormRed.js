import React, {useRef} from "react";
import PropTypes from "prop-types";

export const FormRed = ({addFormIP, addFormMascaraRed}) => {
    FormRed.prototype = {
        addFormRed: PropTypes.func.isRequired,
        addFormMascaraRed: PropTypes.func.isRequired
    }

    const num01 = useRef(String)
    const num02 = useRef(String)
    const num03 = useRef(String)
    const num04 = useRef(String)

    const num05 = useRef(String)
    const num06 = useRef(String)
    const num07 = useRef(String)
    const num08 = useRef(String)

    function addFormRedHandle(e) {
        addFormIP(num01, num02, num03, num04, e)
        addFormMascaraRed(num05, num06, num07, num08, e)
    }

    return (
        <div>
            <div className={"h2"}>IP</div>
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        ref={num01}
                        required
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        ref={num02}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        ref={num03}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        ref={num04}
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
                        ref={num05}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input22"
                        ref={num06}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input23"
                        ref={num07}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="input24"
                        ref={num08}
                    />
                </div>
            </div>

            <div className="col my-5">
                <button className="btn btn-primary"
                        style={{width: "20%", height: "20%"}}
                        onClick={addFormRedHandle}>
                    Enviar
                </button>
            </div>
            <hr/>
        </div>
    )
}