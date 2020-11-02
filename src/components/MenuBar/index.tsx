import React from "react";

import {
  ProfileIcon,
  FavoriteIcon,
  EmailIcon,
  BellIcon,
  Container,
  Logo,
  MenuButton,
  HomeIcon,
  LogoContainer,
  TweetButton,
  BotSide,
  Avatar,
  ProfileData,
  ExitButton,
} from "./styles";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <MenuButton>
        <HomeIcon />
        <span>Página inicial</span>
      </MenuButton>

      <MenuButton>
        <BellIcon />
        <span>Notificações</span>
      </MenuButton>

      <MenuButton>
        <EmailIcon />
        <span>Mensagem</span>
      </MenuButton>

      <MenuButton>
        <FavoriteIcon />
        <span>Favoritados</span>
      </MenuButton>

      <MenuButton className="active">
        <ProfileIcon />
        <span>Perfil</span>
      </MenuButton>

      <TweetButton>
        <span>Twittar</span>
      </TweetButton>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Deivid Reinke Schiitz</strong>
          <span>Deivid_Reinke</span>
        </ProfileData>
        <ExitButton />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
