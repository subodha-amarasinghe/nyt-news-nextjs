import { render, screen } from '@testing-library/react'
import Preloader from '@/components/Preloader'

describe('Nav', () => {
    it('renders a prealoder', () => {
        const { container } = render(<Preloader />)

        // const heading = screen.getByRole('heading', {
        //     name: /No Results Found/i,
        // })

        expect(container.firstChild).toBeInTheDocument();
    })
})