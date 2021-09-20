import useFetch from "./hooks/useFetch";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { IDataObj } from "./typings";
import ShowList from "./components/ShowList";

// https://api.jsonbin.io/b/6145c3009548541c29b44554

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #000;
    font-size: 16px;
    color: #fff;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default function App() {
  const { error, data, loading } = useFetch<IDataObj>(
    "https://api.jsonbin.io/b/6145c3009548541c29b44554"
  );

  return (
    <>
      <Reset />
      <GlobalStyles />
      {loading && "loading..."}
      {data && <ShowList topShows={data.data.page.structures.nodes} />}
      {error && error}
    </>
  );
}
