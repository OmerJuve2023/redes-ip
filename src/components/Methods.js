import {IPClass} from "../models/IP.class";
import {MascaraRedClass} from "../models/MascaraRed.class";

const addIp = (num1, num2, num3, num4, e) => {
    e.preventDefault()
    return new IPClass(
        num1.current.value,
        num2.current.value,
        num3.current.value,
        num4.current.value
    )
}
const addMascaraRed = (num1, num2, num3, num4, e) => {
    e.preventDefault()
    return new MascaraRedClass(
        num1.current.value,
        num2.current.value,
        num3.current.value,
        num4.current.value
    )
}
const addForm = (object, value) => {
    const temp = [...object]
    temp.push(value)
    return temp
}
export const Methods = {
    addIp,
    addForm,
    addMascaraRed
}