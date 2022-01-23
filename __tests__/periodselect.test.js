import { render, screen } from '@testing-library/react'
import PeriodSelector from '@/components/PeriodSelector'

it('check if Select Box displays', () => {
    const { getByTestId } = render(<PeriodSelector d='1' />);
    const nameInput = getByTestId('selectInput');

    expect(nameInput).toHaveValue('1');
});