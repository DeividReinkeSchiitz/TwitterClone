import React from "react";

import {
  ImageContent,
  Icons,
  RetweetIcon,
  Status,
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dots,
  ChatIcon,
  Description,
  LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>Você retweetou</Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Deivid Reinke Schiitz</strong>
            <span>Deivid_Reinke</span>
            <Dots />
            <time> 11 de Novembro</time>
          </Header>

          <Description>Tell me what u want</Description>

          <ImageContent />
          <Icons>
            <Status>
              <ChatIcon />
              29
            </Status>
            <Status>
              <RetweetIcon />
              66
            </Status>
            <Status>
              <LikeIcon />
              9099
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
