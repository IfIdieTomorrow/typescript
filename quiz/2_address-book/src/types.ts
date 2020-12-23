export interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum Phonetype {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}
