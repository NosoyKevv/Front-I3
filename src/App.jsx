import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import ContentHeader from './components/Content/ContentHeader'
import Profile from './components/Profile/Profile'
import "./App.css"

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard-content">
        <Content />
        <ContentHeader />
        <Profile />
      </div>
    </div>
  )
}

export default App
