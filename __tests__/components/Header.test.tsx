import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AtHome, Outside } from '@stories/Header.stories';
import * as nextRouter from 'next/router';


beforeEach(() => {
    cleanup()
})

it('renders the Header displaying just  ngxCoder', () => {

    const useRouterSpied: jest.SpyInstance<any, []> = jest.spyOn(nextRouter, 'useRouter')
    useRouterSpied.mockImplementation(() => ({ pathname: '/outside' }))

    render(<Outside />);

    expect(screen.getByTestId('home')).toHaveTextContent('My LOL Tier List')
    expect(screen.getByTestId('ngxCoder')).toHaveTextContent('by ngxCoder')
});

it('renders the Header displaying just ngxCoder', () => {

    const useRouterSpied: jest.SpyInstance<any, []> = jest.spyOn(nextRouter, 'useRouter')
    useRouterSpied.mockImplementation(() => ({ pathname: '/' }))

    render(<AtHome />);

    expect(screen.getByTestId('ngxCoder')).toHaveTextContent('by ngxCoder')
});

afterEach(() => {    
jest.clearAllMocks();
});