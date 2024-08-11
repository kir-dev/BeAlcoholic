/**
 * ! Executing this script will delete all data in your database and seed it with 10 drink.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { copycat } from '@snaplet/copycat';
import { createSeedClient } from '@snaplet/seed';

const main = async () => {
  const seed = await createSeedClient({ connect: true });

  await seed.$resetDatabase();

  await seed.drink((x) =>
    x(10, {
      id: ({ seed }) => copycat.uuid(seed),
      name: ({ seed }) => copycat.word(seed),
      alcoholContent: ({ seed }) => copycat.int(seed, { min: 1, max: 40 }),
      description: ({ seed }) => copycat.sentence(seed),
    })
  );

  await seed.user((x) =>
    x(10, {
      authSchId: ({ seed }) => copycat.uuid(seed),
      email: ({ seed }) => copycat.email(seed),
      firstName: ({ seed }) => copycat.firstName(seed),
      lastName: ({ seed }) => copycat.lastName(seed),
      weight: ({ seed }) => copycat.float(seed, { min: 50, max: 120 }),
      profilePictureUrl: ({ seed }) => {
        const pathNumber = copycat.int(seed, { min: 14641, max: 104521460 });
        return `https://bealcoholic/profile${pathNumber}.jpg`;
      },
    })
  );

  // eslint-disable-next-line no-underscore-dangle
  await seed._DrinkToUser((x) => x(3));

  let startDate = new Date();
  await seed.event((x) =>
    x(10, {
      id: ({ seed }) => copycat.uuid(seed),
      name: ({ seed }) => `${copycat.word(seed)} Party`,
      location: ({ seed }) => copycat.streetAddress(seed),
      description: ({ seed }) => copycat.sentence(seed),
      startDate: ({ seed }) => {
        const daysOffset = copycat.int(seed, { min: -12, max: 0 });
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + daysOffset);
        startDate = currentDate;
        return currentDate;
      },
      endDate: ({ seed }) => {
        const hoursOffset = copycat.int(seed, { min: 1, max: 24 });
        const endDate = new Date(startDate);
        endDate.setHours(Number(startDate.getHours()) + hoursOffset);
        return endDate;
      },
    })
  );

  await seed.drinkAction((x) =>
    x(10, {
      id: ({ seed }) => copycat.uuid(seed),
      price: ({ seed }) => copycat.int(seed, { min: 500, max: 10000 }),
      milliliter: ({ seed }) => copycat.int(seed, { min: 200, max: 2000 }),
      createdAt: ({ seed }) => {
        const hoursOffset = copycat.int(seed, { min: -24, max: 0 });
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + hoursOffset);
        return currentDate;
      },
    })
  );
  process.exit();
};

main();
