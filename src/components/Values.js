import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Value from './Value';
import * as budgetAppSelectors from '../redux/budgetApp/budgetAppSelectors';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, totalExpenses, balance }) => {
  return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={totalExpenses} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  totalExpenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
const mapStateToProps = store => ({
  balance: budgetAppSelectors.getBalance(store),
  totalExpenses: budgetAppSelectors.getTotalExpenses(store),
  budget: budgetAppSelectors.getBudget(store),
});

export default connect(mapStateToProps, null)(Values);
