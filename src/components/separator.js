import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Separator = () => {
    return (
        <div style={{paddingTop:"20px", textAlign: "center"}}>
            <StaticImage src="../images/Ciara.png" alt="Separator image"/>
        </div>
    )
};

export default Separator