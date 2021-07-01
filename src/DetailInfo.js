import PropTypes from 'prop-types';

export function DetailInfo(props) {
    return (
        <div style={{ textAlign: "left" }}>
            Address : {props.address}<br />
            Phone : {props.phone}<br />
            Age : {props.age}
        </div>
    );
}


DetailInfo.propTypes = {
    address: PropTypes.string,
    phone: PropTypes.string,
    age: PropTypes.number
};