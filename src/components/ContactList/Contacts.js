import { NameContact, DeleteBtn, WrapperContact } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deletedContact } from 'components/Redux/contactsSlice';

export const Contacts = ({ el: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deletedContact(id));

  return (
    <WrapperContact>
      <NameContact>
        {name}: <span>{number}</span>
      </NameContact>
      <DeleteBtn onClick={handleDelete} type="button">
        Delete
      </DeleteBtn>
    </WrapperContact>
  );
};
