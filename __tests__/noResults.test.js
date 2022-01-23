import { render, screen } from '@testing-library/react'
import NoResults from '@/components/NoResults'

describe('Nav', () => {
    it('renders a message', () => {
        render(<NoResults />)

        const heading = screen.getByRole('heading', {
            name: /No Results Found/i,
        })

        expect(heading).toBeInTheDocument()
    })
})