import React from "react";

import {
  Container,
  ProfileData,
  Followage,
  CakeIcon,
  EditButton,
  Banner,
  Avatar,
  LocationIcon,
} from "./styles";
import Feed from "../Feed";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <span></span>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Deivid Reinke Schiitz</h1>
        <h2>github: @DeividReinkeSchiitz</h2>
        <p>
          Developer at <a href="https://azondd.com.br">AzonDD</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Mato Grosso, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 13 de Novembro de 2002
          </li>

          <Followage>
            <span>
              seguindo <strong>44</strong>
            </span>
            <span id="span2">
              seguidores <strong>272</strong>
            </span>
          </Followage>
        </ul>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
