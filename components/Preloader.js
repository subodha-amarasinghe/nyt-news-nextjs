import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function Preloader() {
    return (
        <>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={4} sm={12} xs={12}>
                    <Skeleton variant="rectangular" height={200} />
                </Grid>
                <Grid item md={8}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Grid>
            </Grid>
            <br />
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={4} sm={12} xs={12}>
                    <Skeleton variant="rectangular" height={200} />
                </Grid>
                <Grid item md={8}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Grid>
            </Grid>
        </>
    );
}