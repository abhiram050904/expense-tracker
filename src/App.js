import React, { useState } from 'react';
import styled from 'styled-components';
import bg from './images/bg2.jpg';
import Navigation from './components/navigation';
import Dashboard from './components/Dashboard';
import Transactions from './components/transactions';
import Income from './components/income';
import Expenses from './components/expenses';

const App = () => {
  const [active, setactive] = useState(0);

  const displaydata = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppDesign bg={bg} className='app'>
      <MainLayout>
        <Navigation active={active} setactive={setactive} />
        <main>
          {displaydata()}
        </main>
      </MainLayout>
    </AppDesign>
  );
};

const AppDesign = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

const MainLayout = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  gap: 2rem;
  color: #f7add6;
  `;


export default App;
