import PropTypes from 'prop-types';

export function DetailInfo(props) {
    return (
        <div style={{ textAlign: "left" }}>
            Address : {props.address}<br />
            Phone : {props.phone}<br />
            Age : {props.age}<br /><br />
            <span style={{ fontStyle: "italic" }}>If there is any props with invalid value, a error/warning will be shown in the Javascript console</span>
        </div>
    );
}


DetailInfo.propTypes = {
    address: PropTypes.string,
    phone: PropTypes.string,
    age: PropTypes.number
};