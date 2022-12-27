import TopHeader from '../TopHeader'
import BannerContainer from '../BannerComponent'
import ManageIt from '../ManageItComponent'
import EasySolutions from '../EasySolutions'
import Offering from '../Offering'
import BusinessBanner from '../BusinessBanner'
import TestimonialComponent from '../TestimonialComponent'
import OurLatestProjects from '../OurLatestProjects'
import TechServices from '../TechServices'
import Achivements from '../Achivements'
import HelpingBusiness from '../HelpingBusiness'
import NewsAndProjects from '../NewsAndProjects'
import Footer from '../Footer'
import CopyRights from '../CopyRights'
import Header from '../Header'

import './index.css'

const HomePage = () => (
  <>
    <div className="main-container-2">
      <TopHeader />
      <Header />
    </div>
    <BannerContainer />
    <div className="main-main-div">
      <div className="manage-container easy-solutions-div-home">
        <ManageIt />
      </div>
    </div>
    <div className="main-main-div">
      <div className="manage-container easy-solutions-div-home">
        <EasySolutions />
      </div>
    </div>
    <div>
      <div className="offer-banner-div">
        <div className="manage-container">
          <Offering />
        </div>
      </div>
      <BusinessBanner />
      <div className="main-main-div">
        <div className="test-container">
          <div className="test-manage-container">
            <TestimonialComponent />
            <hr className="hr-line" />
            <OurLatestProjects />
          </div>
        </div>
      </div>
      <div className="main-main-div">
        <div className="manage-container">
          <TechServices />
        </div>
      </div>
      <div className="main-container achivements-banner-div">
        <div className="manage-container">
          <Achivements />
        </div>
      </div>
      <div className="helping-div">
        <HelpingBusiness />
      </div>
      <div className="main-main-div">
        <div className="news-component">
          <NewsAndProjects />
        </div>
      </div>
      <div>
        <div className="main-main-div footer-main-div">
          <div className="footer-component">
            <Footer />
          </div>
        </div>
      </div>
      <CopyRights />
    </div>
  </>
)

export default HomePage
