import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 15px;
`;

const CategoryItem = styled.span<{active: boolean}>`
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  ${({active}) => active && `
    text-decoration: underline;
  `}

  &:hover {
    text-decoration: underline;
  }

`;

interface IProps {
  activeCategory: string; 
  categories: string[];
  handleClick: (event: React.SyntheticEvent, category: string) => void;
}

const Categories: React.FC<IProps> = ({ categories, handleClick, activeCategory }) => {
  const active = activeCategory.toLowerCase() === 'alle' ? true : false;
  return (
    <Wrapper>
      <CategoryItem active={active} onClick={(event) => handleClick(event, "")}>
        Alle
      </CategoryItem>
      {categories.map((category, index) => {
        const active = category.toLowerCase() === activeCategory.toLowerCase() ? true : false;
        return (
        <CategoryItem
          key={`${index}_${category}`}
          onClick={(event) => handleClick(event, category)}
          active={active}
        >
          {category}
        </CategoryItem>
      )})}
    </Wrapper>
  );
};

export default Categories;
