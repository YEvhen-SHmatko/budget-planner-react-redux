import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import shortid from 'shortid';
// import * as budgetAppActions from '../redux/budgetApp/budgetAppAction';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

class App extends Component {
  static propTypes = {
    budget: PropTypes.number.isRequired,
    expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  // state = {
  //   budget: 0,
  //   expenses: [],
  // };

  // saveBudget = value => {
  //   this.setState({ budget: value });
  // };

  // addExpense = ({ name, amount }) => {
  //   const expense = {
  //     id: shortid.generate(),
  //     name,
  //     amount: Number(amount),
  //   };

  //   this.setState(state => ({
  //     expenses: [expense, ...state.expenses],
  //   }));
  // };

  // removeExpense = id => {
  //   this.setState(state => ({
  //     expenses: state.expenses.filter(expense => expense.id !== id),
  //   }));
  // };

  render() {
    const { expenses, budget } = this.props;
    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    return (
      <Container>
        <BudgetForm onSave={this.saveBudget} />
        <Values budget={budget} expenses={totalExpenses} balance={balance} />
        <ExpenseForm onSave={this.addExpense} />
        {expenses.length > 0 && (
          <ExpensesTable items={expenses} onRemove={this.removeExpense} />
        )}
      </Container>
    );
  }
}
const mapStateToProps = store => ({
  expenses: store.budgetApp.expenses,
  budget: store.budgetApp.budget,
});

export default connect(mapStateToProps, null)(App);
