import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from './shared/Button';
import * as budgetAppActions from '../redux/budgetApp/budgetAppAction';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], removeExpense }) => {
  console.log(items);
  return (
    <Table>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <Button label="Delete" onClick={() => removeExpense(id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  ).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  items: store.budgetApp.expenses,
});
const mapDispatchToProps = dispatch => ({
  removeExpense: id => dispatch(budgetAppActions.removeExpenseAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
