import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import TopAcademiesCard from '../components/TopAcademiesCard'
import ParentsFeedbackCards from '../components/ParentsFeedbackCards'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <div>

        <Navbar />
        </div>

        <div>
            <Banner />
        </div>
        <TopAcademiesCard />

        <ParentsFeedbackCards />

        <Footer />
      
    </div>
  )
}

export default HomePage
