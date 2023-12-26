import {
  FormGroup,
  FilterBox,
  FilterInput,
} from 'components/ContactForm/ContactForm.styled';
import { filterContact, getFilters } from 'components/Redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);

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
