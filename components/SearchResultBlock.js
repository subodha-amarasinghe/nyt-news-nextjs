import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import searchResultStyles from '../styles/searchResultBlock.module.css'
import emptyImage from '../public/images/img-not-found.jpg'
const Searchresultblock = (props) => {
    return (
        <div>
            <Divider />
            <div className={searchResultStyles.resultblock}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={searchResultStyles.resultblockgrid}>
                    <Grid item md={4} sm={12} xs={12}>
                        <Link href={`/article/${props.article.headline.main}`} passHref>
                            <a href="#">
                                {props.article.multimedia && props.article.multimedia.length > 0 ?
                                    <Image src={`https://static01.nyt.com/${props.article.multimedia[2].url}`} alt="Image" width="600" height='400' layout="responsive" />
                                    : <Image src={emptyImage} alt="Image" width="600" height='400' layout="responsive" />
                                }
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={8}>
                        <Link href={`/article/${props.article.headline.main}`} passHref>
                            <Typography variant="h5">
                                <a href="#">{props.article.headline.main}</a>
                            </Typography>
                        </Link>
                        <Typography variant="caption" >
                            {new Date(props.article.pub_date).toDateString() + ' (' + new Date(props.article.pub_date).toLocaleTimeString() + ')'}
                        </Typography>
                        <Typography>{props.article.lead_paragraph}</Typography>
                    </Grid>
                </Grid>
            </div>


        </div>
    );
}

export default Searchresultblock;
