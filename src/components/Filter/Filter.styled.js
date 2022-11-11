import styled from 'styled-components';

export const Input = styled.input`
  margin-top: ${p => p.theme.space[3]}px;

  height: ${p => p.theme.space[4]}px;
  width: 200px;

  border: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  outline: transparent;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.medium} ${p => p.theme.colors.accentBlue};
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;
