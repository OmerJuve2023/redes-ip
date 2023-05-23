import PropTypes from "prop-types";

export const NumberBits = ({clase}) => {

    NumberBits.prototype = {
        clase: PropTypes.func.isRequired
    }
    const process = (clase) => {
        const rpta = "8 bits"
        return rpta
    }

    return (
        <div>
            {process(clase)}
        </div>
    )

}