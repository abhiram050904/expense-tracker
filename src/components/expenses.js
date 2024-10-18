import React, { useEffect } from 'react';
import styled from 'styled-components';
import Form from '../components/expenseform';
import Incomeitem from '../components/incomeitem';
import { useGlobalContext } from '../context/globalcontext';
import { FaIndianRupeeSign } from "react-icons/fa6";
const Expense = () => {
  const { getExpenses, expenses, deleteExpense, totalExpenses } = useGlobalContext();
  
  useEffect(() => {
    getExpenses();
  }, []); // Fetch expenses on component mount only
  
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-expense">
          Total Expense: <span>{<FaIndianRupeeSign/>}{totalExpenses()}</span>
        </h2>
        <div className="expense-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="expenses">
            {expenses?.map(expense => {
              const { _id, title, amount, date, category, description, type } = expense;
              return (
                <Incomeitem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-red)"
                  deleteItem={deleteExpense}
                  mode={'debited'}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
};

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;

    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: rgba(3, 255, 24);
    }
  }

  .expense-content {
    display: flex;
    gap: 2rem;

    .expenses {
      flex: 1;
    }
  }
`;

const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;
  overflow:hidden;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: rgba(34, 34, 96, 1);
  }

  h2 {
    color: rgba(34, 34, 96, 1);
  }
`;

export default Expense;
