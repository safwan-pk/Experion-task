import React from "react";

function Icon({ name, width = 24, height = 24, color = "currentColor" }) {
    return (
        <svg width={width} height={height} fill={color}>
            <use href={`#icon-${name}`} />
        </svg>
    );
}

export default Icon;
