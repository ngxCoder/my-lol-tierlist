import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Base } from '@stories/Container.stories';


beforeEach(cleanup)

it('renders the Container with its children centered', () => {
  render(<Base />);
  expect(screen.getByText('Container')).toBeInTheDocument()
});