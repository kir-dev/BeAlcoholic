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

### How to use Snaplet seeding

You can use the seeding script to populate your database with realistic mock data using the Snaplet Seed library and its `copycat` function.

1. Prerequisites:

Make sure you have Snaplet Seed and Copycat installed:

```bash
npm install @snaplet/seed @snaplet/copycat
```

Your Prisma schema should be up-to-date and reflect the database structure.
Run the Inicialization command:

```bash
npx @snaplet/seed init prisma/seed
```

2. Customization:

- Adapt the copycat functions within the script to generate data that aligns with your specific application's needs. You can use a wide variety of built-in functions or create custom ones.
  Adjust the number of records created for each model (e.g., x(10) creates 10 records) to match your desired dataset size.
  Modify the generated data to mach your needs with the copycat functions (e.g.,

```bash
await seed.drinkAction((x) =>
    x(10, {
      id: ({ seed }) => copycat.uuid(seed),
      price: ({ seed }) => copycat.int(seed, { min: 500, max: 10000 }),
      milliliter: ({ seed }) => copycat.int(seed, { min: 200, max: 2000 }),
      },
    })
  );
```

)

3. Execution:

Save the script as a .ts file (e.g., seed.ts).
Run the script using a TypeScript runner:

```bash
 yarn tsx seed.ts
```

Or you can include it into package.json:

```bash
  "prisma": {
    "seed": "tsx prisma/seed/seed.ts"
  },
```

Then run the command:

```bash
yarn prisma db seed
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
