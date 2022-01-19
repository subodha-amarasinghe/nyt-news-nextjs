import { Grid } from '@mui/material';
import React from 'react';
import Articleblock from './ArticleBlock';

const Populararticles = ({ articles, nonOfResults }) => {
    return (
        <div>

            <Grid container spacing={4}>

                {articles.map((article, index) => (
                    <Grid item xs={12} md={6} key={`popular_${index}`} >
                        <Articleblock article={article} />
                    </Grid>
                ))}
            </Grid>

        </div>
    );
}

export default Populararticles;
