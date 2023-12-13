import { useState } from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledButton,
  StyledSearch,
  StyledInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  // const handleChangeQuery = e => {
  //   setQuery(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setImages([]);
  //   setPage(1);
  //   setIsNewSearch(true);
  // };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledButton type="submit">
          <StyledSearch />
        </StyledButton>

        <StyledInput
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
export default Searchbar;
