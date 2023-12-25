import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const items = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filters);

  const getVisibleContacts = () => {
    if (filter === '') {
      return items;
    }

    return items.filter(contact =>
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
