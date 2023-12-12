import {
  StyledHeader,
  StyledForm,
  StyledButton,
  StyledSearch,
  StyledInput,
} from './Searchbar.styled';

export const Searchbar = ({ handleChangeQuery, handleSubmit }) => {
  return (
    <StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledButton type="submit">
          <StyledSearch />
        </StyledButton>

        <StyledInput
          onChange={handleChangeQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
