import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Home from '../app/page'

// Mocking next/image for testing
vi.mock('next/image', () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}))

describe('Home', () => {
  it('renders the heading', async () => {
    render(<Home />)
    const heading = await screen.findByRole('heading', { name: /to get started/i })
    expect(heading).toBeInTheDocument()
  })
})
