//import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

//const LS_KEY = 'contact';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem(LS_KEY);
  //   const parsedContacts = JSON.parse(savedContacts);
  //   if (savedContacts !== null) {
  //     return parsedContacts;
  //   }
  //   return [...initialItems];
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const updateFilter = newFilter => {
  //   setFilter(newFilter);
  // };

  // const addContact = newContact => {
  //   const add = {
  //     ...newContact,
  //     id: nanoid(),
  //   };

  //   const checkContact = contacts.some(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (checkContact) {
  //     alert(`${newContact.name} is already in contacts`);
  //   } else {
  //     setContacts(prevContacts => {
  //       return [...prevContacts, { ...add }];
  //     });
  //   }
  // };

  // const deleteContact = itemId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(item => item.id !== itemId)
  //   );
  // };

  // const visibleContacts = contacts.filter(item => {
  //   const hasFilter = item.name
  //     .toLowerCase()
  //     .includes(filter.toLowerCase().trim());
  //   return hasFilter;
  // });

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />

      {/* <Filter filter={filter} onUpdateFilter={updateFilter} />
      {visibleContacts.length > 0 && (
        <ContactList items={visibleContacts} onDelete={deleteContact} />
      )} */}

      <GlobalStyle />
    </div>
  );
};
