import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
    it('renders a heading', () => {
        render(<Nav />)

        const heading = screen.getByRole('heading', {
            name: /NYT/i,
        })

        expect(heading).toBeInTheDocument()
    })
})