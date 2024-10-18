import React from 'react';
import styled from 'styled-components';
import avatar from '../images/avatar.jpeg';
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";

const Navigation = ({ active, setactive }) => {
  return (
    <NavStyled>
      <div className='user-icon'>
        <img src={avatar} alt='Avatar' />
        <div className='text'>
          <h2>Abhiram</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className='menu-items'>
        <li className={active === 1 ? 'active' : ''} onClick={() => setactive(1)}>
          <RxDashboard /><span>DASHBOARD</span>
        </li>
        <li className={active === 2 ? 'active' : ''} onClick={() => setactive(2)}>
          <GrTransaction /><span>TRANSACTIONS</span>
        </li>
        <li className={active === 3 ? 'active' : ''} onClick={() => setactive(3)}>
          <HiOutlineCurrencyRupee /><span>INCOMES</span>
        </li>
        <li className={active === 4 ? 'active' : ''} onClick={() => setactive(4)}>
          <FaWallet /><span>EXPENSES</span>
        </li>
      </ul>
    </NavStyled>
  );
}

const NavStyled = styled.div`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 80%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  .user-icon {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #FFFFFF;
      padding: .2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }

    h2 {
      color: rgba(34, 34, 96, 1);
    }

    p {
      color: rgba(34, 34, 96, .6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: .4rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all .4s ease-in-out;
      color: rgba(34, 34, 96, .6);
      padding-left: 1rem;
      position: relative;
      padding: 0.5rem;
      border-radius: 8px;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all .4s ease-in-out;
      }

      &:hover {
        background: rgba(34, 34, 96, 0.1);
        color: rgba(34, 34, 96, 1);
        transform: scale(1.05);
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    background: rgba(34, 34, 96, 0.2);

    i {
      color: rgba(34, 34, 96, 1) !important;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }

    transform: scale(1.1);
  }
`;

export default Navigation;
