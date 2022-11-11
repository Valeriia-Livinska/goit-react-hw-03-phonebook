import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { Box } from 'components/Box';


export const Filter = ({ value, onChange }) => {
  return (
    <Box flexDirection="column" alignItems="center" mb={5}>
      <label>Find contacts by name</label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
