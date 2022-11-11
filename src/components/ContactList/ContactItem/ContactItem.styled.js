import styled from 'styled-components';

export const ContactDetail = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  &:hover > span,
  &:focus > span {
    text-decoration: line-through;
  }
`;

export const DeleteButton = styled.button`
  margin-left: ${p => p.theme.space[5]}px;

  height: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[6]}px;

  color: inherit;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accentBlue};
  border: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverBlue};
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;
