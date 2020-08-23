import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover" />
        <img
          src="https://avatars1.githubusercontent.com/u/12420237?s=460&u=f4732c620eaca4f9766f0e876cc5c6485ea2c7c0&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Natã Hermes</h1>
        <h2>Front-end developer</h2>

        <div className="separator" />

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
