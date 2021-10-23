import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Base } from '@stories/MainLayout.stories';
import * as nextRouter from 'next/router';


beforeEach(cleanup)

it('renders the MainLayout with the Header at the top', () => {
    const useRouterSpied: jest.SpyInstance<any, []> = jest.spyOn(nextRouter, 'useRouter')
    useRouterSpied.mockImplementation(() => ({ pathname: '/' }))
    render(<Base />);
    expect(screen.getByText('Container')).toBeInTheDocument()
});

afterEach(() => {    
    jest.clearAllMocks();
});