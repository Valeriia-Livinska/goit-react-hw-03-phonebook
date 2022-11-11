import styled from 'styled-components';

export const Form = styled.form`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;

  width: 100%;

  border-top: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};
  border-bottom: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};
`;

export const Input = styled.input`
  margin-left: ${p => p.theme.space[3]}px;

  height: ${p => p.theme.space[5]}px;
  width: 200px;

  border: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.medium} ${p => p.theme.colors.accentBlue};
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-top: ${p => p.theme.space[5]}px;

  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;

  color: inherit;
  text-transform: uppercase;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accentPink};
  border: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverPink};
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;
