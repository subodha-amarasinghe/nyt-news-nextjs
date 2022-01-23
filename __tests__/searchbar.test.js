import { render, screen } from '@testing-library/react'
import SearchBar from '@/components/SearchBar'

it('check if search bar displays', () => {
    const { getByTestId } = render(<SearchBar term='' />);
    const nameInput = getByTestId('searchInput');

    expect(nameInput).toHaveValue('');
});