let networkNameBinary
let networkNameDecimal
const ejectValues = (values, valores, contador) => {
    valores.col1 = validate(contador, 128, values)
    valores.col2 = validate(contador, 64, values)
    valores.col3 = validate(contador, 32, values)
    valores.col4 = validate(contador, 16, values)
    valores.col5 = validate(contador, 8, values)
    valores.col6 = validate(contador, 4, values)
    valores.col7 = validate(contador, 2, values)
    valores.col8 = validate(contador, 1, values)
    return valores
}

const validate = (num, valor) => {
    if (num >= valor) {
        num -= valor
        return 1
    } else return 0
}

const calculateNameIP = (ip, mascaraRed) => {
    const ipParts = ip.split('.').map((part) => parseInt(part, 2));
    const maskParts = mascaraRed.split('.').map((part) => parseInt(part, 2));
    // Realiza la suma lógica de cada parte de la dirección IP y la máscara de red
    const networkParts = ipParts.map((part, index) => part & maskParts[index]);
    networkNameBinary = networkParts.map((part) => part.toString(2)).join('.');
    networkNameDecimal = networkParts.join('.');
}
const IpDecimal = (ip, mascarared) => {
    calculateNameIP(ip, mascarared)
    return networkNameDecimal
}
const IpBinario = (ip, mascarared) => {
    calculateNameIP(ip, mascarared)
    return networkNameBinary
}
export const Methods = {
    ejectValues,
    IpBinario,
    IpDecimal,
    validate
}