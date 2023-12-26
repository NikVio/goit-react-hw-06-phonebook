import { useSelector } from 'react-redux';
import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContactsValue } from './Redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContactsValue);
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}

      <GlobalStyle />
    </div>
  );
};
