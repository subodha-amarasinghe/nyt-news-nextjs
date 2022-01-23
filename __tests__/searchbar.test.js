import { render, screen } from '@testing-library/react'
import SearchBar from '@/components/SearchBar'

describe('Nav', () => {
    it('renders search bar', () => {
        const { container } = render(<SearchBar />)

        // const heading = screen.getByRole('heading', {
        //     name: /No Results Found/i,
        // })

        expect(container.firstChild).toBeInTheDocument();
    })
})