import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button type="button" className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button type="button">
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button type="button">
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/12420237?s=460&u=f4732c620eaca4f9766f0e876cc5c6485ea2c7c0&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
