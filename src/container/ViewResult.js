import {ValoresClass} from "../models/Valores.class";
import PropTypes from "prop-types";

export const ViewResult = ({values}) => {
    ViewResult.prototype = {
        value: PropTypes.instanceOf(ValoresClass).isRequired
    }

    let contador = 0
    const eject = (value) => {
        contador = value
        value.col1 = validate(contador, 128)
        value.col2 = validate(contador, 64)
        value.col3 = validate(contador, 32)
        value.col4 = validate(contador, 16)
        value.col5 = validate(contador, 8)
        value.col6 = validate(contador, 4)
        value.col7 = validate(contador, 2)
        value.col8 = validate(contador, 1)
    }
    const validate = (num, valor) => {
        if (num >= valor) {
            contador -= valor
            return 1
        } else return 0
    }
    return (
        <div>

        </div>
    )

}