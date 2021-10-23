import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Base } from '@stories/FAQ.stories';


beforeEach(cleanup)

it('renders the FAQ', () => {
  render(<Base />);
  expect(screen.getByTestId('accordion')).toBeInTheDocument()
});