import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Base } from '@stories/MainContainer.stories';


beforeEach(cleanup)

it('renders the MainContainer with its children centered', () => {
  render(<Base />);
  expect(screen.getByText('Container 1')).toBeInTheDocument()
  expect(screen.getByText('Container 2')).toBeInTheDocument()
});