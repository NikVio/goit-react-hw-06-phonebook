import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContactsValue } from 'components/Redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContactsValue);

  const filter = useSelector(state => state.filters);

  const getVisibleContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactBox>
      {visibleContacts.map(item => (
        <li key={item.id}>
          <Contacts el={item} />
        </li>
      ))}
    </ContactBox>
  );
};
