// import Landing from '../components/Landing'
import video from '../images/hero-video.mp4';
import { Link } from 'react-router-dom'
import './home.css'
import '../pages/settings.css'
import secImg1 from '../images/auctions.webp'
import secImg2 from '../images/growth.webp'
import secImg3 from '../images/architecture.webp'

function HomeContent() {
    return(
        <div className='home'>
            <div className="hero">
                <video autoPlay muted loop className='hero-video'>
                    <source src={video} type='video/mp4' />
                </video>
                <h1 className='hero_title'>القي نظرة الي ما هو أفضل ما نقوم به</h1>
                <a href="#next" class="mouse smoothscroll">
                    <span class="mouse-icon">
                        <span class="mouse-wheel"></span>
                    </span>
                </a>
            </div>
            {/* <Landing /> */}
            <section className="home_feature" id='next'>
                <div className="container">
                    <div className="row feature_inner">
                        <Link to="/auctions" className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={secImg1} alt="" />
                                </div>
                                <div class="content-frame-link">
                                    <span className='span-name'>مزادات عقارية</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/auctions"  className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={secImg3} alt="" />
                                </div>
                                <div class="content-frame-link">
                                    <span className='span-name'>خدماتنا</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/auctions"  className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={secImg2} alt="" />
                                </div>
                                <div class="content-frame-link">
                                    <span className='span-name'>مشاريع عقارية</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomeContent;