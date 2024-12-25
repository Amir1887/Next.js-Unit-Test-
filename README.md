## Next.js Testing Project
A comprehensive Next.js application demonstrating testing best practices using Jest and React Testing Library. This project serves as both a reference implementation and a learning resource for writing effective tests in Next.js applications.

## Features
This project demonstrates testing best practices for:

- Unit testing with Jest
- Component testing with React Testing Library
- Form validation and user input handling
- Async operations and API mocking
- Custom test utilities and helpers
- TypeScript integration
- Test coverage reporting

- 
## Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Git

1.Clone the repository:
```bash
 git clone [https://github.com/yourusername/testing-nextjs.git](https://github.com/Amir1887/Next.js-Unit-Test-.git)
cd testing-nextjs
```

2.Install dependencies:
```bash
npm install
```
3.Run the development server:
```bash
npm run dev
```
4.Open http://localhost:3000 in your browser to see the application.

## Testing
## Running Tests
This project includes several testing scripts:
- Run all tests:
```bash
npm test
```
- Run tests in watch mode (recommended during development):
 ```bash
  npm run test:watch
```
-Generate test coverage report:
```bash
npm run test:coverage
```
## Test Structure
__tests__/
├── setup.ts                 # Global test configuration
├── components/             
│   ├── Counter.test.tsx    # Component tests
│   └── UserForm.test.tsx
└── utils/
    └── calculator.test.ts  # Utility function tests

## Testing Utilities
The project includes several testing utilities and helpers:

## 1.Custom Matchers

- toBeWithinRange: Check if a number is within a specified range
- toBeValidEmail: Validate email format
    ```bash
  expect(user.age).toBeWithinRange(18, 65)
  expect(user.email).toBeValidEmail()
  ```
## 2.Mock Data Factories

- createMockUser: Generate test user data
- createMockPost: Generate test post data
   ```bash
     const testUser = createMockUser({ age: 25 })
     const testPost = createMockPost({ authorId: testUser.id })
  ```
## Project Structure
├── components/             # React components
│   ├── Counter.tsx
│   └── UserForm.tsx
├── utils/                 # Utility functions
│   └── calculator.ts
├── __tests__/            # Test files
├── jest.config.js        # Jest configuration
└── tsconfig.json         # TypeScript configuration


## Key Components
## Counter Component
A simple counter component demonstrating state management and event handling:
```bash
    import { Counter } from '@/components/Counter'
  
  // Example usage
  <Counter initialValue={0} />
```
## UserForm Component
A form component showcasing input handling and validation:
```bash
    import { UserForm } from '@/components/UserForm'
  
  // Example usage
  <UserForm onSubmit={handleSubmit} />
```

## Best Practices Demonstrated

## 1.Component Testing

- Rendering components
- User interaction simulation
- State changes verification
- Form submission handling


## 2.Utility Testing

- Pure function testing
- Error handling
- Edge cases


## 3.Mock Usage

- API call mocking
- Browser API simulation
- Event handling



## 4.Environment Setup
The project includes comprehensive environment setup for testing:

## 1.Browser API Mocks

- ResizeObserver
- window.matchMedia
- TextEncoder/TextDecoder


## 2.Error Handling

- Custom error classes
- Unhandled promise rejection handling
- Console error filtering



## Contributing

- Fork the repository
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- Next.js team for the fantastic framework
- Jest team for the testing framework
- Testing Library team for the excellent testing utilities
- The open source community for continuous inspiration

## Contact
Amir Adel - @Amir1887
Project Link: [https://github.com/yourusername/testing-nextjs](https://github.com/Amir1887/Next.js-Unit-Test-)
