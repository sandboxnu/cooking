import React from "react";
import styled from "styled-components";
import { RecipeGrid } from "../components/GridLayout";
import { Search } from "../components/SearchBar";

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IndexPage = () => {
  return (
    <div>
      <HeaderBar>
        <Search placeholder="h" isSmall={false}></Search>
      </HeaderBar>
      <RecipeGrid />
    </div>
  );
};
export default IndexPage;
