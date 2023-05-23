import PropTypes from "prop-types";

export const NameRed = ({nameNetwork}) => {
    NameRed.prototype = {
        nameNetwork: PropTypes.string.isRequired
    }

    function convertBinaryToDecimal(nameNetwork) {
        const octets = [];
        for (let i = 0; i < nameNetwork.length; i += 8) {
            const octet = nameNetwork.substr(i, 8);
            octets.push(parseInt(octet, 2));
        }
        return octets.join('.');
    }

    return (
        <th className={"h6"}
            colSpan={4}
            style={{color: "#3586FF"}}>
            {convertBinaryToDecimal(nameNetwork)}
        </th>
    )
}