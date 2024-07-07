# Student Eligibility Report Form


This is a Next.js application for a Student Eligibility Report Form.

## Getting Started

First, install the dependencies:

``bash
npm install
# or
yarn install

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Open http://localhost:3000 with your browser to see the result.

## JSON Server
To run the mock API server:

Install json-server globally:
npm install -g json-server.
json-server --watch db.json --port 3001

The server will run on http://localhost:3001.
## Running Tests
To run the tests:

npm test
# or
yarn test

## Running Tests

This project uses Jest and React Testing Library for unit testing. To run the tests, follow these steps:

1. Make sure you have all dependencies installed:
npm install

2. Run the test command:
npm test

This will run all test files with the `.test.ts` or `.test.tsx` extension.

3. To run tests in watch mode (tests will re-run automatically when files change):
npm test -- --watch