import { cleanup, render, screen } from '@testing-library/react'
import { Hero } from 'components/Hero'
 
 describe('Hero', () => {

  beforeAll(() => {

  })

  beforeEach(() => {

  })

  it('should renders empty string when title is empty string', () => {
    render(<Hero title="" />)

    const heading = screen.findAllByRole('heading', {
      name: '2'
    })
    expect(heading).toHaveTextContent('')
  })

  it('should renders My LoL Tier List when title is My Lol Tier List', () => {
    render(<Hero title="My LoL Tier List" />)

    const heading = screen.getByRole('heading', {
      name: /My LoL Tier List/i,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/My LoL Tier List/i)
  })

  afterEach(() => {

  })

  afterAll(() => {

  })
  
 })