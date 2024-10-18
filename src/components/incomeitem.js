import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FaBitcoin, FaBook, FaComment, FaDollarSign, FaMoneyBillWave, FaTrashAlt, FaUserShield, FaPiggyBank } from 'react-icons/fa';
import { CiCreditCard1, CiCircleInfo, CiMedicalCase } from 'react-icons/ci';
import { GiClothes } from 'react-icons/gi';
import { IoFastFood, IoLogoYoutube } from 'react-icons/io5';
import { SiFreelancer } from 'react-icons/si';
import { RiTakeawayLine } from 'react-icons/ri';
import { TbBrandStocktwits } from 'react-icons/tb';
import { SlCalender } from "react-icons/sl";
import Button from '../components/button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type,
    transactionStatus,
    mode
}) {
    const categoryIcons = {
        income: {
            salary: <FaMoneyBillWave />,
            freelancing: <SiFreelancer />,
            investments: <TbBrandStocktwits />,
            stocks: <FaUserShield />,
            bitcoin: <FaBitcoin />,
            bank: <CiCreditCard1 />,
            youtube: <IoLogoYoutube />,
            other: <FaPiggyBank />
        },
        expense: {
            education: <FaBook />,
            groceries: <IoFastFood />,
            health: <CiMedicalCase />,
            subscriptions: <FaBook />,
            takeaways: <RiTakeawayLine />,
            clothing: <GiClothes />,
            travelling: <SiFreelancer />,
            other: <CiCircleInfo />
        }
    };

    const getCategoryIcon = () => {
        return type === 'expense' 
            ? categoryIcons.expense[category] || null 
            : categoryIcons.income[category] || null;
    };

    const dateFormat = (date) => {
        return moment(date).format('DD/MM/YYYY');
    }

    return (
        <IncomeItemStyled mode={mode} indicator={indicatorColor} status={transactionStatus}>
            <div className="icon">
                {getCategoryIcon()}
            </div>
            <div className="content">
                <h5>{title} ({transactionStatus})</h5> {/* Display transaction status */}
                <div className="inner-content">
                    <div className="text">
                        <p><FaDollarSign /> {amount}</p>
                        <p><SlCalender /> {dateFormat(date)}</p>
                        <p>
                            <FaComment />
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={<FaTrashAlt />}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'#de315c'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hoverColor={'#ff0808'}
                            hoverSize={'1.3'}
                            className="delete-button"
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    );
}

const IncomeItemStyled = styled.div`
    background: ${props => props.mode === 'credited' ? '#45c71e' : '#c43959'}; /* Green for credited, Red for debited */
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 0.5rem;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    color: #222260;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
        
        h5 {
            font-size: 1.8rem;
        }

        .text p {
            font-size: 1.3rem;
        }

        .delete-button {
            background: darkred; 
            transform: scale(1.1); 
        }
    }

    .icon {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        font-size: 1.5rem;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.4rem;

        h5 {
            font-size: 1.6rem;
            margin: 0;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                left: -1.5rem;
                top: 50%;
                transform: translateY(-50%);
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background: ${props => props.indicator}; 
            }
        }

        .text {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            align-items: center;
            flex-wrap: nowrap;

            p {
                display: flex;
                align-items: center;
                gap: 0.4rem;
                color: var(--primary-color);
                opacity: 0.8;
                font-size: 1.1rem;
                margin: 0;
                white-space: nowrap;
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }

    .btn-con {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;


export default IncomeItem;
