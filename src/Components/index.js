import React from 'react';
import styled, { keyframes } from 'styled-components';

const getSlide = (childIndex, reverse) => keyframes`
  from {
    transform: translateX(${childIndex * 100}%);
  }
  to {
    transform: translateX(${(reverse ? -100 : 100) + 100 * childIndex}%);
  }
`;

const UsersWrapper = styled.section`
  white-space: nowrap;
  overflow: hidden;
  padding: 0.5rem 0;
  display: flex;
`;

const UsersSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  position: relative;
  background-color: rgba(50, 49, 102, 0.3);
  border-radius: 25px;
`;

const UsersSlider = styled.span`
  display: inline-block;
  animation: ${({ offset, reverse }) => getSlide(offset || 0, reverse)} 15s linear infinite;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;

  ${UsersWrapper} {
    flex-direction: ${({ reverse }) => (reverse ? 'row' : 'row-reverse')};
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const CompanyLogo = styled.span`
  position: relative;
  height: ${(p) => p.height || '3rem'};
  margin: 0 1rem;
  bottom: ${(p) => p.bottom || 0};
  transition: opacity 125ms ease-in-out;

  svg {
    height: 100%;
    max-width: 128px;
  }

  &:hover {
    opacity: 1;
  }
`;

const SortedLogos = ({ users }) => (
  <UsersWrapper>
    {/* TODO: remove this check after adding missing logos */}
    {users.map(
      ({ key, logo: Logo }) =>
        Logo && (
          <CompanyLogo key={key}>
            <Logo />
          </CompanyLogo>
        )
    )}
  </UsersWrapper>
);

const UsersLogos = ({ users, reverse }) => {
  return (
    <UsersSliderContainer>
      <UsersSlider offset={-1} reverse={reverse}>
        <SortedLogos users={users} />
      </UsersSlider>
      <UsersSlider offset={0} reverse={reverse}>
        <SortedLogos users={users} />
      </UsersSlider>
      <UsersSlider offset={1} reverse={reverse}>
        <SortedLogos users={users} />
      </UsersSlider>
    </UsersSliderContainer>
  );
};

export default UsersLogos;
