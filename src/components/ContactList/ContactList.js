import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deletedContact } from 'components/Redux/store';

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
  const dispatch = useDispatch();

  const items = useSelector(state => state.contacts);
  const handleDelete = () => dispatch(deletedContact(items.id));
  return (
    <ContactBox>
      {items.map(item => (
        <li key={item.id}>
          <Contacts el={item} Delete={handleDelete} />
        </li>
      ))}
    </ContactBox>
  );
};
