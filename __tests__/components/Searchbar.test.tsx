import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';
import { Base } from '@stories/Searchbar.stories';


beforeEach(cleanup)

it('renders the Searchbar Select without regions', () => {
  render(<Base regions={[]} />);
  expect(screen.getByTestId('region')).toBeEmptyDOMElement()
});

it('renders the Searchbar Selet with regions', () => {
    render(<Base {...Base.args} />);
    expect(screen.getByTestId('region')).toHaveTextContent(/LAN/i)
  });

it('renders the Searchbar Input with its placeholder', () => {
    render(<Base {...Base.args} />);
    expect(screen.getByPlaceholderText('Your Summoner Name')).toBeInTheDocument()
  });

it('renders the Searchbar Input with its value truncated to 50 characters', async () => {
    render(<Base {...Base.args} />);

    const input = await screen.findByTestId('summoner') as HTMLInputElement

    userEvent.type(input, '012345678901234567890123456789012345678901234567890123456789') //60 chars

    expect(input.maxLength).toBe(50);
    expect(input.value).toHaveLength(50)
  });