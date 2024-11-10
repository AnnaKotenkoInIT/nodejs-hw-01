import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const existingContacts = await readContacts();

    return `Number of contacts: ${existingContacts.length}`;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
