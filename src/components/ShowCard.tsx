import React, { useState } from "react";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { ISubNode } from "../typings";

const Wrapper = styled.div<{imageUrl: string}>`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  width: 450px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  padding: 5px;
`;

const Title = styled(Highlighter)`
  font-weight: 700;
`;

const Subtitle = styled(Highlighter)`
  font-size: 15px;
  padding-top: 5px;
`;

interface IProps {
  showInfo: ISubNode;
  searchText: string;
}

const ShowCard: React.FC<IProps> = ({ showInfo, searchText }) => {
  const { title, subtitle, art } = showInfo;

  return (
    <Wrapper imageUrl={art.url}>
      <TextWrapper>
        <Title searchWords={searchText.split(' ')} textToHighlight={title} />
        <Subtitle searchWords={searchText.split(' ')} textToHighlight={subtitle} />
      </TextWrapper>
    </Wrapper>
  );
};

export default ShowCard;
