import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.textColorized};
`;

export const Subtitle = styled.h2`
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textColorized};
`;
