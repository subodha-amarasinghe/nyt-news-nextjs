import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import emptyImage from '../public/images/img-not-found.jpg'
const FullArticle = (props) => {
    return (
        <div>
            <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            {props.article.headline.main}
                        </Typography>
                        <Typography variant="caption" >
                            {new Date(props.article.pub_date).toDateString() + ' (' + new Date(props.article.pub_date).toLocaleTimeString() + ')'}
                        </Typography>


                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{props.article.lead_paragraph}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {props.article.multimedia && props.article.multimedia.length > 0 ?
                            <Image src={`https://static01.nyt.com/${props.article.multimedia[0].url}`} width="440" height='293' layout="responsive" alt="Media" />
                            : <Image src={emptyImage} alt="Image" width="600" height='400' layout="responsive" />
                        }

                    </Grid>

                </Grid>
            </div>


        </div>
    );
}

export default FullArticle;
