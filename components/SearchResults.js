import { Grid } from '@mui/material';
import React from 'react';
import Articleblock from './ArticleBlock';
import Noresults from './NoResults';
import Searchresultblock from './SearchResultBlock';

const SearchResults = (props) => {
    console.log("props", props)
    return (
        <div>
            {/* {articles ?

                <Grid container spacing={4}>
                    {articles.map((article, index) => (
                        <Searchresultblock article={article} />
                    ))}

                </Grid>
                : <div>Loading ...</div>
            } */}
            {props && props.articles && props.articles.length > 0 ?
                < div >
                    {props && props.articles && props.articles.map((article, index) => (
                        <Searchresultblock article={article} key={index} />
                    ))}

                </div>
                : <Noresults />
            }

        </div >
    );
}

export default SearchResults;