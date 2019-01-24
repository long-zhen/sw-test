import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bulma-components';
import range from 'lodash/range';

const HourSelect = ({ label, max, onChange, ...otherProps }) => {
  const hours = range(1, max + 1);

  return (
    <Form.Field>
      <Form.Label>{label}</Form.Label>
      <Form.Control>
        <Form.Select
          {...otherProps}
          onChange={e => onChange(Number(e.target.value))}
        >
          <option value={0}> - </option>
          {hours.map(hour => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </Form.Select>
      </Form.Control>
    </Form.Field>
  );
};

HourSelect.propTypes = {
  max: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

HourSelect.defaultProps = {
  max: 24,
};

export default HourSelect;
