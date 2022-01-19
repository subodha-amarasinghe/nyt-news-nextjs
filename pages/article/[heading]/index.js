import { Container } from '@mui/material';
import Head from 'next/head'
import FullArticle from '../../../components/FullArticle';

const Article = (props) => {
    return (
        <div>
            <Head>
                <title>Search News</title>
                <meta name='keywords' content="web, development, programming" />
            </Head>

            <Container>
                <FullArticle article={props.results[0]} />
            </Container>
        </div>
    )
}

export default Article;

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(context.query.heading)}&api-key=${process.env.NYT_API_KEY}`)
    const articles = await res.json()

    return {
        props: articles ? {
            results: articles.response.docs,
            copyright: articles.copyright,
        } : {}
    }
}