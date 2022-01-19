import { Typography } from '@mui/material';
import React from 'react';
import noresultStyles from '../styles/NoResults.module.css'
const Noresults = () => {
    return (
        <div className={noresultStyles.centerbox}>
            <Typography variant="h2">No Results Found</Typography>
        </div>
    );
}

export default Noresults;
