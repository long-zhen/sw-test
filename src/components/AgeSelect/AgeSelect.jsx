import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bulma-components';

export const AGE_BREAKPOINTS = [0, 18, 35, 45, 55, 65];

const AgeSelect = ({ label, value, onChange }) => {
  const options = AGE_BREAKPOINTS.map((age, index) => (
    <Button
      key={age}
      renderAs="span"
      onClick={() => onChange(age, index)}
      color={value === age ? 'info' : undefined}
    >
      {AGE_BREAKPOINTS[index + 1]
        ? `${age}-${AGE_BREAKPOINTS[index + 1]}`
        : `${age}+`}
    </Button>
  ));

  return (
    <Form.Field>
      <Form.Label>{label}</Form.Label>
      <Form.Control>
        <div className="buttons has-addons">{options}</div>
      </Form.Control>
    </Form.Field>
  );
};

AgeSelect.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

AgeSelect.defaultProps = {};

export default AgeSelect;
