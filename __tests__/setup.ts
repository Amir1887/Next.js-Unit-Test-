import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'
import { TextEncoder, TextDecoder } from 'util'

// --- 1. Basic Configuration ---
// defines how long to wait for async operations
// tells Testing Library which attribute to use for test IDs
// useful when querying elements during tests using getByTestId
configure({
  asyncUtilTimeout: 5000,
  testIdAttribute: 'data-testid',
})

// --- 2. Environment Setup ---
// Polyfill for Next.js environment
// Mock browser APIs that aren't available in Jest
// This prevents common test failures due to missing browser features as they aren't available in Jest


// encoding and decoding text, Working with JSON encoding/decoding
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// ResizeObserver is a browser API that watches for changes to an element's size (NOT available in Jest)
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


// Mock window.matchMedia (Mocks the matchMedia API, which is often used in media queries for responsive design)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// --- 3. Custom Test Utilities ---
// Type definitions for our utilities 
interface CustomMatchers<R = unknown> {
  toBeWithinRange(floor: number, ceiling: number): R;
  toBeValidEmail(): R;
}

declare global { 
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

// expect.extend: Adds the custom matchers to Jest’s expect object so they can be used in tests.
// Custom matcher for checking if a number is within a range
expect.extend({
  toBeWithinRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      }
    }
  },
  
  // Custom matcher for validating email format
  toBeValidEmail(received: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const pass = emailRegex.test(received)
    return {
      message: () => 
        pass
          ? `expected ${received} not to be a valid email`
          : `expected ${received} to be a valid email`,
      pass,
    }
  },
})

// --- 4. Mock Data Factories ---
//  utility functions for generating mock data for tests.
// They help you create mock users and posts for testing purposes with customizable overrides (like changing a user’s name or age).
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

export const createMockUser = (overrides?: Partial<User>): User => ({
  id: Math.random().toString(36).substring(7),
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  ...overrides,
})

export const createMockPost = (overrides?: Partial<Post>): Post => ({
  id: Math.random().toString(36).substring(7),
  title: 'Test Post',
  content: 'This is a test post content',
  authorId: 'default-author-id',
  ...overrides,
})

// --- 5. Error Handlers ---
// custom error class for handling errors related to unhandled promise rejections during testing.
class TestError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TestError'
  }
}

// Global error handler for unhandled promises, which can be helpful in identifying failing tests during the development process.
const originalConsoleError = console.error
console.error = (...args: any[]) => {
  if (
    /Warning: ReactDOM.render is no longer supported/i.test(args[0]) ||
    /Warning: Using UNSAFE_componentWillMount/i.test(args[0])
  ) {
    return
  }
  originalConsoleError.call(console, ...args)
}

process.on('unhandledRejection', (error: Error) => {
  throw new TestError(`Unhandled promise rejection: ${error.message}`)
})

// --- 6. Test Helpers ---
// waits for an element to be removed from the DOM
// waitForElementToBeRemoved helper is particularly useful for testing animations or transitions
export const waitForElementToBeRemoved = async (element: Element | null) => {
  if (!element) return

  await new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      if (!document.contains(element)) {
        observer.disconnect()
        resolve(true)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}

// --- 7. Cleanup Utilities ---
afterEach(() => {
  // Clean up any mounted components, Helps maintain test isolation
  jest.clearAllMocks()
  localStorage.clear()
  sessionStorage.clear()
})