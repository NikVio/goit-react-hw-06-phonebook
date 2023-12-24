import { NameContact, DeleteBtn, WrapperContact } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deletedContact } from 'components/Redux/store';

export const Contacts = ({ el: { name, number, id } }) => {
  const dispatch = useDispatch();
  //const items = useSelector(state => state.contacts);
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
