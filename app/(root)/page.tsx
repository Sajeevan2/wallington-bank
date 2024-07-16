import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Ian',lastName:'Cooper',email:'ianCooper@hotmail.co.uk'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.userName || 'GUEST'}
              subtext= "Access and mange your account and transactions efficiently."
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:2320.87},{currentBalance:188.90}]}
      />
    </section>
  )
}

export default Home
