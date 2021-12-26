import React from "react";

const ProgressBar = (props) => {
    const { completed } = props;
    const bgcolor = "#001632";

    const containerStyles = {
        height: 30,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 25,
    };

    const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: "inherit",
        textAlign: "right",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
    };

    const labelStyles = {
        padding: 5,
        color: "white",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
