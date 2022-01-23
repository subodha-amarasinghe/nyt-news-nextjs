import { render, screen } from '@testing-library/react'
import PopularArticles from '@/components/PopularArticles'

const tesArticlList = [
    {
        "uri": "nyt://article/0c3ea255-6ab4-5e8c-9d45-bb8d65c54ab2",
        "url": "https://www.nytimes.com/2022/01/22/world/europe/piel-island-uk.html",
        "id": 100000008078671,
        "asset_id": 100000008078671,
        "source": "New York Times",
        "published_date": "2022-01-22",
        "updated": "2022-01-23 05:50:51",
        "section": "World",
        "subsection": "Europe",
        "nytdsection": "world",
        "adx_keywords": "Landlords;Historic Buildings and Sites;Palaces and Castles;Bars and Nightclubs;Piel Island (England);England",
        "column": null,
        "byline": "By Alan Yuhas",
        "type": "Article",
        "title": "English Island Seeks a Landlord-King Who Likes Solitude, Seals and Beer",
        "abstract": "On Piel Island, winters are wet, travel is limited, and the solitary pub crowns the landlord king or queen under a shower of beer.",
        "des_facet": [
            "Landlords",
            "Historic Buildings and Sites",
            "Palaces and Castles",
            "Bars and Nightclubs"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
            "Piel Island (England)",
            "England"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "The Ship Inn and Piel Castle are the primary landmarks on Piel Island, off the northwestern coast of England. The local council is searching for a landlord to maintain the island and run the pub.",
                "copyright": "Bruce Adams/Daily Mail/Shutterstock",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2022/01/18/multimedia/00xp-piel-01/00xp-piel-01-thumbStandard-v2.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2022/01/18/multimedia/00xp-piel-01/00xp-piel-01-mediumThreeByTwo210-v2.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2022/01/18/multimedia/00xp-piel-01/00xp-piel-01-mediumThreeByTwo440-v2.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    }
];

describe('Nav', () => {
    it('renders first page articles', () => {
        const { container } = render(<PopularArticles articles={tesArticlList} />)

        // const heading = screen.getByRole('heading', {
        //     name: /No Results Found/i,
        // })

        expect(container.firstChild).toBeInTheDocument();
    })
})