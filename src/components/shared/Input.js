import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

const Input = ({ type, value, onChange, name }) => (
  <StyledInput type={type} value={value} onChange={onChange} name={name} />
);

Input.defaultProps = {
  type: ' text',
  value: 0,
  name: '',
  onChange: () => null,
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
export default Input;
