import { ContactDetail, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <ContactDetail key={id}>
        <span>
          {name}: {number}
        </span>
        <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton>
      </ContactDetail>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
