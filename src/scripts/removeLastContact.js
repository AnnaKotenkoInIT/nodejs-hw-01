import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();

    if (!existingContacts.length) return;

    existingContacts.pop();
    await writeContacts(existingContacts);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
