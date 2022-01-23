import { Typography, Grid, Divider } from '@mui/material';
import Populararticles from '../components/PopularArticles';
import { Container } from '@mui/material';
import Searchbar from '../components/SearchBar';
import PeriodSelector from '../components/PeriodSelector';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import Preloader from '../components/Preloader';
import SearchResults from '../components/SearchResults';
export default function Home({ results, nonOfResults, apiKey }) {
  const router = useRouter()
  const { d } = router.query
  const [days, setDays] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDays(d && [1, 7, 30].indexOf(parseInt(d)) > -1 ? d : 1);
    setLoading(true)
  }, [d]);

  useEffect(() => {
    if (results) {
      setLoading(false)
    }
  }, [results]);


  // Get Search results from web browser's http request using search term
  useEffect(() => {
    async function handleSearch() {
      if (searchTerm === '') {
        setSearchResults(null)
      } else {
        setLoading(true)
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${apiKey}`)
        const articles = await res.json()
        // console.log("articles===>>", articles)
        setSearchResults(articles && articles.response && articles.response.docs ? articles.response.docs : [])
        setLoading(false)
      }
    }
    handleSearch()
  }, [searchTerm, apiKey]);


  const handleChangeDays = (val) => {
    setDays(val ? val : 1)
    setSearchResults(null)
    setSearchTerm('')
  }

  const handleChangeSearchKey = (val) => {
    setSearchTerm(val)
  }

  return (
    <>
      <Container>

        <div style={{ padding: '8px', marginBottom: '20px' }}>
          <Grid container spacing={2}>
            <Grid item md={4} sm={8} xs={12}>
              <Typography variant="h6">Most popular articles</Typography>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <PeriodSelector days={parseInt(days)} handleChangeDays={handleChangeDays} />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Searchbar handleChangeSearchKey={handleChangeSearchKey} searchTerm={searchTerm} />
            </Grid>
          </Grid>
        </div>
        <Divider />
        {loading ?
          <Preloader />
          : searchResults && searchTerm !== '' ?
            <SearchResults articles={searchResults} />
            : results ?
              <Populararticles articles={results} nonOfResults={nonOfResults} />
              : <Preloader />
        }



      </Container>
    </>

  )
}



// Get Most Popular results from server side props
export async function getServerSideProps(context) {
  let days = context.query.d && [1, 7, 30].indexOf(parseInt(context.query.d)) > -1 ? context.query.d : 1;
  const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${days}.json?api-key=${process.env.NYT_API_KEY}`)
  const articles = await res.json()

  return {
    props: {
      results: articles.results,
      nonOfResults: articles.num_results,
      copyright: articles.copyright,
      apiKey: process.env.NYT_API_KEY
    }
  }
}