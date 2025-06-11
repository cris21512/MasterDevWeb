import React, { useEffect, useRef} from "react";


const FrameworkCard = ({name, logo, color, }) => {
    const cardRef = useRef(null);

    return(
        <div ref={cardRef} className="framework-card" style={{ boxShadow: color || '#181818'}}>
            <a className="framework-card-link">
                <img src={logo} alt={name} className="framework-card-image" />
            </a>
        </div>
    );
};

export default FrameworkCard;