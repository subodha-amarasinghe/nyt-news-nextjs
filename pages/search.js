import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { Container } from '@mui/material';
import Searchbar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';


const Search = (props) => {
    console.log("results===>>", props)
    const [state, setState] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setState({ results: props.results })
    }, [props]);
    return (
        <>
            <Container>
                <div style={{ padding: '8px', marginBottom: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={8} sm={8} xs={12}>
                            <Typography variant="h6">Search Results</Typography>
                        </Grid>
                        <Grid item md={4} sm={4} xs={12}>
                            <Searchbar />
                        </Grid>
                    </Grid>
                </div>


                <SearchResults articles={state && state.results} />


            </Container>
        </>

    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${context.query.term}&api-key=${process.env.NYT_API_KEY}`)
    const articles = await res.json()

    return {
        props: articles ? {
            results: articles.response.docs,
            copyright: articles.copyright,
        } : {}
    }
}



export default Search