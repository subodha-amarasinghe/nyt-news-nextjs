import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider } from '@mui/material';
import Image from 'next/image';
import articleBlockStyles from '../styles/ArticleBlock.module.css'
import Link from 'next/link';
import emptyImage from '../public/images/img-not-found.jpg'

const Articleblock = ({ article }) => {
    return (
        <div style={{ marginBottom: '24px' }}>
            {<Link href={`/article/${article.title}`} passHref>
                <Box sx={{
                    '&:hover': {
                        backgroundColor: '#e1f5fe',
                        opacity: [0.9, 0.8, 0.7],
                    },
                    'cursor': 'pointer',
                    'padding': '8px'
                }}>

                    <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                    </Typography>
                    <Typography variant="caption" >
                        {new Date(article.updated).toDateString() + ' (' + new Date(article.updated).toLocaleTimeString() + ')'}
                    </Typography>

                    <div style={{ marginTop: '16px' }}>
                        {
                            article.media.length > 0 ?
                                // <Image
                                //     src={article.media.find(a => a.type === "image")['media-metadata'][article.media.find(a => a.type === "image")['media-metadata'].length - 1].url}
                                //     layout="fill"
                                //     bjectFit="cover"
                                //     className={articleBlockStyles.imageContainer}
                                // />
                                <div className={'imageContainer'}>
                                    {article.media && article.media.length > 0 ?
                                        <Image src={article.media.find(a => a.type === "image")['media-metadata'][article.media.find(a => a.type === "image")['media-metadata'].length - 1].url} alt="Image" width="440" height='293' layout="responsive" />
                                        : <Image src={emptyImage} alt="Image" width="440" height='293' layout="responsive" />
                                    }
                                </div>
                                //<img src={article.media[article.media.length - 1].url} alt="Article Image" />
                                : null
                        }
                        <Typography variant="body2">
                            {article.abstract}
                        </Typography>
                    </div>

                </Box>
            </Link>}
        </div>
    );
}

export default Articleblock;
