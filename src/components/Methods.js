import {IPClass} from "../models/IP.class";

const addIp = (num1, num2, num3, num4, e) => {
    e.preventDefault()
    return new IPClass(
        num1.current.value,
        num2.current.value,
        num3.current.value,
        num4.current.value
    )
}
const addForm = (object, value) => {
    const temp = [...object]
    return temp.push(value)
}
export const Methods = {
    addIp,
    addForm
}