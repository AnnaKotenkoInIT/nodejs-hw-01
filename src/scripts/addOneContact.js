import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const addContact = createFakeContact();

    existingContacts.push(addContact);
    await writeContacts(existingContacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
