interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum Phonetype {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

export { Contact, Phonetype, PhoneNumberDictionary };
