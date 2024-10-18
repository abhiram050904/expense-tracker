import React, { useEffect } from 'react';
import styled from 'styled-components';
import Form from '../components/form';
import IncomeItem from '../components/incomeitem';
import { useGlobalContext } from '../context/globalcontext';
import { FaIndianRupeeSign } from "react-icons/fa6";

const Income = () => {
  const { addIncome, getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();
  
  useEffect(() => {
    getIncomes();
  }, [incomes]);
  
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>{<FaIndianRupeeSign />}</span><span>{totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } = income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  deleteItem={deleteIncome}
                  indicatorColor={'green'}
                  mode={'credited'}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-income {
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

  .income-content {
    display: flex;
    gap: 2rem;

    .incomes {
      flex: 1;
    }
  }
`;

const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;

  h1 {
    text-align: center; /* Center the heading */
    margin-bottom: 2rem; /* Add some margin below the heading for spacing */
    color: rgba(34, 34, 96, 1);
  }

  h2 {
    color: rgba(34, 34, 96, 1);
  }
`;

export default Income;
