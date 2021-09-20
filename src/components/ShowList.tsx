import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { ITopNode, ISubNode } from "../typings";
import SearchBar from "./Searchbar";
import Categories from "./Categories";
import ShowCard from "./ShowCard";

const ListWrapper = styled.div`
  margin: 15px;
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(450px,1fr));
  justify-items: center
`;

interface IProps {
  topShows: ITopNode[];
}

const ShowList: React.FC<IProps> = ({ topShows }) => {
  const initialShows: ISubNode[] = useMemo(
    () =>
      topShows
        .map((shows) =>
          shows.entities.nodes.map(({ title, subtitle, art }) => {
            return {
              title,
              subtitle,
              art
            };
          })
        )
        .reduce((acc, val) => acc.concat(val), []),
    [topShows]
  );
  const categories = useMemo(() => topShows.map((shows) => shows.title), [
    topShows
  ]);
  const [filteredShows, setFilteredShows] = useState<ISubNode[]>(initialShows);
  const [searchText, setSearchText] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState('alle');

  const handleSearch = (searchInput: string) => {
    if (searchInput.trim() === "") {
      setFilteredShows(initialShows);
      setSearchText("");
      setActiveCategory('alle');
      return;
    }
    const filteredArray = initialShows.filter(
      (show) =>
        show.subtitle.toLowerCase().includes(searchInput.toLowerCase()) ||
        show.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredShows(filteredArray);
    setActiveCategory('alle');
    setSearchText(searchInput);
  };

  const handleCategoryClick = (
    event: React.SyntheticEvent,
    category: string
  ) => {
    event.stopPropagation();
    if (category === "") {
      setSearchText("");
      setActiveCategory('alle');
      setFilteredShows(initialShows);
      return;
    }
    const [filteredArray] = topShows.filter((show) => show.title === category);
    setActiveCategory(category.toLowerCase());
    setFilteredShows(filteredArray.entities.nodes);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <Categories categories={categories} handleClick={handleCategoryClick} activeCategory={activeCategory} />

      <ListWrapper>
        {filteredShows.map((show, index) => (
          <ShowCard
            showInfo={show}
            key={`${index}_${show.title}`}
            searchText={searchText}
          />
        ))}
      </ListWrapper>
    </>
  );
};

export default ShowList;
