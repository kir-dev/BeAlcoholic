# NestJS + NextJS Starter Project by Kir-Dev

This is a starter project for a fullstack application using NestJS and NextJS.
It includes a basic setup for a NestJS as backend and a NextJS as frontend,
including shadcn/ui, ESLint, Prettier, and GitHub Actions.

## Getting Started

### Prerequisites

- Node.js 20
- Yarn 1.22

### Installation

You only need to install dependencies in the root directory.

```bash
yarn install
```

### Linter and Formatter Configuration

It is a must to use ESLint and Prettier in this project.

Set up ESLint and Prettier in your IDE and check `fix on save` or `format on save` options.

You can run the following commands to check linting and formatting issues.

```bash
yarn lint
# or
yarn lint:fix
```

```bash
yarn format:check
# or
yarn format
```

### Development

You can run the backend and frontend separately.

```bash
yarn start:backend # Starts on http://localhost:3001
```

```bash
yarn start:frontend # Starts on http://localhost:3000
```

### After Development

You can build the frontend and run the application.

```bash
yarn build:frontend
```

Or build the backend.

```bash
yarn build:backend
```

There are recommended GitHub Actions workflows for this setup, which will fail if one of the following commands fails:

```bash
yarn lint
```

```bash
yarn format:check
```

```bash
yarn build:backend
```

## Happy Coding!



