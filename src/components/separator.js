import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Separator = () => {
    return (
        <div style={{display: "flex",
                    justifyContent: "center",}}>
            <StaticImage src="../images/Ciara.png" alt="Separator image"/>
        </div>
    )
};

export default Separator