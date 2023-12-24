import {
  FormGroup,
  FilterBox,
  FilterInput,
} from 'components/ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'components/Redux/store';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);

  return (
    <FilterBox>
      <FormGroup>
        Find contacts by name{' '}
        <FilterInput
          type="text"
          value={filter}
          onChange={evt => dispatch(filterContact(evt.target.value))}
        />
      </FormGroup>
    </FilterBox>
  );
};
