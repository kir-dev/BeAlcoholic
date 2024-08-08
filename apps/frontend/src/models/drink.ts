export enum DrinkType {
  BEER = 'BEER',
  WINE = 'WINE',
  SPIRIT = 'SPIRIT',
  COCKTAIL = 'COCKTAIL',
}

export interface Drink {
  id: string;
  name: string;
  type: DrinkType;
  alcoholContent: number;
  custom: boolean;
  description?: string;
  createdAt: Date;
}
