import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import CustomerRating from '../components/customerRating/CustomerRating'
import ManagePayment from '../components/Payment/ManagePayment'
import CreditDetail from '../components/Credit/CreditDetail'
import Analysis from '../components/Analysis/Analysis'
import Features from '../components/Features/Features'
import CustomerReview from '../components/customerReview/CustomerReview'
import WorkTool from '../components/WorkTool/WorkTool'


function Home() {
  

  return (
    <>
     <Navbar/>
     <Banner/>
     <CustomerRating/>
     <ManagePayment/>
     <CreditDetail/>
     <Analysis/>
     <Features/>
     <CustomerReview/>
     <WorkTool/>
    </>
  )
}

export default Home
