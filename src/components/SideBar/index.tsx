import React, { useState } from "react";
import { CSSProperties } from "styled-components";
import StickyBox from "react-sticky-box";

import {
  Container,
  Body,
  SearchInput,
  SearchWrapper,
  SearchIcon,
} from "./styles";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

const SideBar: React.FC = () => {
  const [searchWrapperStyle, setSearchWrapperStyle] = useState<CSSProperties>(
    {}
  );
  const [searchIconStyle, setSearchIconStyle] = useState({});

  const searchFocused = () => {
    setSearchWrapperStyle({
      border: "solid 1px var(--twitter)",
    });
    setSearchIconStyle({
      fill: "var(--twitter)",
    });
  };

  const searchBlurred = () => {
    setSearchWrapperStyle({});
    setSearchIconStyle({});
  };

  return (
    <Container>
      <SearchWrapper style={searchWrapperStyle}>
        <SearchIcon style={searchIconStyle} />
        <SearchInput
          placeholder="Buscar no Twitter"
          onFocus={searchFocused}
          onBlur={searchBlurred}
        />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Maybe you like"
            elements={[
              <FollowSuggestion />,
              <FollowSuggestion />,
              <FollowSuggestion />,
            ]}
          />

          <List
            title="Maybe you like"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Maybe you like"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Maybe you like"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
