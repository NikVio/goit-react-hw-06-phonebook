import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
//import { deletedContact } from 'components/Redux/store';

// export const ContactList = ({ items, onDelete }) => {
//   return (
//     <ContactBox>
//       {items.map(item => (
//         <li key={item.id}>
//           <Contacts el={item} Delete={onDelete} />
//         </li>
//       ))}
//     </ContactBox>
//   );
// };

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

  const visibleContacts = getVisibleContacts();

  //const handleDelete = () => dispatch(deletedContact(items.id));
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
