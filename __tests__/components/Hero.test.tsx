import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Base } from '@stories/Hero.stories';


beforeEach(cleanup)

it('renders the Hero empty', () => {
  render(<Base title="" />);
  expect(screen.getByRole('heading')).toBeEmptyDOMElement()
});

it('renders the Hero displaying My LoL Tier List', () => {
    render(<Base {...Base.args} />);
    expect(screen.getByRole('heading')).toHaveTextContent('My LoL Tier List')
});