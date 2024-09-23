import { DrinkType } from './drink';
import { EventDetails } from './event';

export const events: EventDetails[] = [
  {
    id: 'tesztevent',
    name: 'Pöci',
    location: 'Budapest, Irinyi József u. 42, 1117 (8. floor)',
    ownerId: 'string',
    startDate: '2022-01-01T22:30:00.000Z',
    endDate: '2022-01-02T04:00:00.000Z',
    description:
      'We are going to play a turn-based strategy game played with 20 forint coins, during which wearing a tie is mandatory.',
    createdAt: new Date('2024-08-08T12:13:40.444Z'),
    owner: {
      authSchId: 'string',
      email: 'john.smith@example.com',
      firstName: 'Sámuel',
      lastName: 'Fekete',
      isAdmin: false,
      profilePictureUrl: 'string',
      createdAt: new Date('2024-08-08T12:13:40.444Z'),
    },
    drinkActions: [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 450,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123456789',
          name: 'Soproni meggy',
          type: DrinkType.SPIRIT,
          alcoholContent: 4.5,
          custom: false,
          description: 'A beer that doesnt really taste like beer.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Sámuel',
          lastName: 'Fekete',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
      {
        id: '123e4567-e89b-12d3-a456-42661417403430',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 1050,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123454789',
          name: 'Simonyito',
          type: DrinkType.WINE,
          alcoholContent: 4.8,
          custom: false,
          description: 'Delicious cocktail that tastes just like Simonyi.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Charles',
          lastName: 'Simonyi',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
    ],
  },
  {
    id: 'tesztevent2',
    name: 'Szopola',
    location: 'Budapest, Irinyi József u. 42, 1117 (8. floor)',
    ownerId: 'string',
    startDate: new Date('2022-01-03T22:30:00.000Z'),
    endDate: new Date('2022-01-04T04:00:00.000Z'),
    description: 'We are going to play a turn-based strategy game played with pingpong balls.',
    createdAt: new Date('2024-08-08T12:13:40.444Z'),
    owner: {
      authSchId: 'string',
      email: 'john.smith@example.com',
      firstName: 'Máté',
      lastName: 'Várallyay',
      isAdmin: false,
      profilePictureUrl: 'string',
      createdAt: new Date('2024-08-08T12:13:40.444Z'),
    },
    drinkActions: [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 450,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123456789',
          name: 'Dreher',
          type: DrinkType.BEER,
          alcoholContent: 5,
          custom: false,
          description: 'A beer that doesnt really taste like beer.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Sámuel',
          lastName: 'Fekete',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
      {
        id: '123e4567-e89b-12d3-a456-42661417403430',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 1050,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123454789',
          name: 'Kir Koktél',
          type: DrinkType.COCKTAIL,
          alcoholContent: 70,
          custom: false,
          description: 'Delicious cocktail that tastes just like Kir-Dev.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Charles',
          lastName: 'Simonyi',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
    ],
  },
  {
    id: 'tesztevent3',
    name: 'Schörpong',
    location: 'Budapest, Irinyi József u. 42, 1117 (8. floor)',
    ownerId: 'string',
    startDate: new Date('2022-01-06T22:30:00.000Z'),
    endDate: new Date('2022-01-07T04:00:00.000Z'),
    description:
      'Ragadd meg a pingpong labdát, célozz a poharakra és dobd be a tökéletes ívet! A Sörpong Liga várja a lelkes csapatokat, hogy összemérjék erejüket és pontosságukat ebben az izgalmas sportágban. A szabályok egyszerűek: dobd a labdát az asztal túloldalán lévő poharakba. Ha betalálsz, az ellenfélnek meg kell innia a pohár tartalmát. Az a csapat nyer, amelyik először kiüríti az összes ellenfél poharát. Gyere el és bizonyítsd be, hogy te vagy a sörpong bajnoka!',
    createdAt: new Date('2024-08-08T12:13:40.444Z'),
    owner: {
      authSchId: 'string',
      email: 'john.smith@example.com',
      firstName: 'Levente',
      lastName: 'Farkasházi',
      isAdmin: false,
      profilePictureUrl: 'string',
      createdAt: new Date('2024-08-18T12:13:40.444Z'),
    },
    drinkActions: [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 450,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123456789',
          name: 'Dreher',
          type: DrinkType.BEER,
          alcoholContent: 5,
          custom: false,
          description: 'A beer that doesnt really taste like beer.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Sámuel',
          lastName: 'Fekete',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
      {
        id: '123e4567-e89b-12d3-a456-42661417403430',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 1050,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123454789',
          name: 'Soproni',
          type: DrinkType.BEER,
          alcoholContent: 5,
          custom: false,
          description: 'Delicious cocktail that tastes just like Kir-Dev.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Charles',
          lastName: 'Simonyi',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
      {
        id: '123e4567-e89b-12d3-a456-42661417403430',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 1050,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123454789',
          name: 'Kőbányai',
          type: DrinkType.BEER,
          alcoholContent: 5,
          custom: false,
          description: 'Delicious cocktail that tastes just like Kir-Dev.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Charles',
          lastName: 'Simonyi',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
      {
        id: '123e4567-e89b-12d3-a456-42661417403430',
        drinkId: '123e4567-e89b-12d3-a456-426614174001',
        eventId: '123e4567-e89b-12d3-a456-426614174002',
        price: 1050,
        milliliter: 500,
        hasEffect: false,
        createdAt: new Date('2024-07-27T15:31:11.763Z'),
        userId: '123e4567-e89b-12d3-a456-426614174003',
        drink: {
          id: 'aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123454789',
          name: 'Soproni Meggy',
          type: DrinkType.BEER,
          alcoholContent: 5,
          custom: false,
          description: 'Delicious cocktail that tastes just like Kir-Dev.',
          createdAt: new Date('2024-08-08T12:24:59.402Z'),
        },
        user: {
          authSchId: 'string',
          email: 'john.smith@example.com',
          firstName: 'Charles',
          lastName: 'Simonyi',
          isAdmin: false,
          profilePictureUrl: '',
          createdAt: new Date('2024-08-08T12:13:40.444Z'),
        },
      },
    ],
  },
];
