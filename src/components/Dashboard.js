import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalcontext';
import History from './history';
import { FaDollarSign } from 'react-icons/fa';
import Chart from './chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {<FaDollarSign />} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {<FaDollarSign />} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {<FaDollarSign />} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span> Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    color: rgba(34, 34, 96, 1); /* Set the text color for the entire Dashboard */
    
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        .chart-con {
            grid-column: 1 / 4;
            height: 400px;

            .amount-con {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;

                .income,
                .expense {
                    grid-column: span 2;
                }

                .income,
                .expense,
                .balance {
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;

                    p {
                        font-size: 3rem; /* Adjusted for responsiveness */
                        font-weight: 700;

                        /* Responsive font size */
                        @media (min-width: 768px) {
                            font-size: 3.5rem;
                        }
                    }
                }

                .balance {
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    p {
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4rem; /* Adjusted for responsiveness */

                        /* Responsive font size */
                        @media (min-width: 768px) {
                            font-size: 4.5rem;
                        }
                    }
                }
            }
        }

        .history-con {
            grid-column: 4 / -1;

            h2 {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                /* Responsive font size */
                font-size: 1.5rem; /* Adjusted for responsiveness */
                @media (min-width: 768px) {
                    font-size: 1.8rem;
                }
            }

            .salary-title {
                font-size: 1.2rem;

                span {
                    font-size: 1.5rem; /* Adjusted for responsiveness */
                }
            }

            .salary-item {
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    font-weight: 600;
                    font-size: 1.4rem; /* Adjusted for responsiveness */

                    /* Responsive font size */
                    @media (min-width: 768px) {
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
`;

const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  width: 90%;
  overflow: hidden;
`;

export default Dashboard;
