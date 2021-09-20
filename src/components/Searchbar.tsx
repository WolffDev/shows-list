import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 100%; */
  margin: 50px auto 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
`;

const Input = styled.input`
  min-width: 350px;
  max-width: 100%;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  border: none;
  font-size: 20px;
`;

interface IProps {
  handleSearch: (searchInput: string) => void;
}

const SearchBar: React.FC<IProps> = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <Wrapper>
      <Input
        tabIndex={0}
        placeholder="Søg efter noget spændende"
        type="search"
        value={searchText}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default SearchBar;
