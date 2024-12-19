import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
    const updateYear = new Date().getFullYear()
    return (
        <footer className="App-footer">
            <div className="footer-top">
                <div className='categories'>
                    <h4 className='footer-title'>الخدمات</h4>
                    <Link to='/projects'>مشاريع عقارية</Link>
                    <Link to='/auctions'>مزادات عقارية</Link>
                    <Link to='/services'>خدماتنا</Link>
                    <Link to='/about'>من نحن</Link>
                </div>
                <div className='contacts'>
                    <h4 className='footer-title'>تواصل معنا</h4>
                    <p>
                        هل لديك سؤال؟ تواصل معنا على مواقع التواصل الاجتماعي او اتصل بنا على رقم الجوال
                        (1 86 7443 5859 +) 
                    </p>
                    <div className="socials">
                        <div className='icon-container'>
                            <i className="zmdi zmdi-facebook"></i>
                        </div>
                        <div className='icon-container'>
                            <i className="zmdi zmdi-instagram"></i>
                        </div>
                        <div className='icon-container'>
                            <i className="zmdi zmdi-youtube-play"></i>
                        </div>
                        <div className='icon-container'>
                            <i className="zmdi zmdi-twitter"></i>
                        </div>
                        <div className='icon-container'>
                            <i className="zmdi zmdi-whatsapp"></i>
                        </div>
                    </div>
                </div>
                <div className="subscribe">
                    <h4 className='footer-title'>اشتراك في النشرة الأخبارية</h4>
                    <div className='wrap-input trans-04'>
                        <input type="text" placeholder="البريد الالكتروني" className='subscribe-input'/>
                        <div className='focus-input'></div>
                    </div>
                    <button type="submit" className="sub-btn">اشتراك</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright ©{updateYear} Real Estate - جميع الحقوق محفوظة</p>
            </div>
        </footer>
    )
}