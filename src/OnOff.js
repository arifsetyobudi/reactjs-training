import { useEffect, useState } from "react";

function OnOff(props) {
    // if (props.on) {
    //     return (
    //         <div style={{ color: "green" }}>
    //             It's on
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div style={{ color: "#FF0000" }}>
    //             It's Off
    //         </div>
    //     )
    // }

    return (
        props.on &&
        <div style={{ color: "green" }}>
            It's on
            </div>
    )
}

export default OnOff;