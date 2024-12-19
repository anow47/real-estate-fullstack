import { useEffect } from 'react';
import './about.css';

export default function AboutUs() {
    useEffect(() => {
        // Slide up the About section immediately on page load
        const aboutSection = document.querySelector('.about-main');
        aboutSection.classList.add('about-slide-up');

        // Scroll-triggered animation for the Offer section
        const scrollElements = document.querySelectorAll(".js-scroll");

        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;

            return (
                elementTop <=
                (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add("scrolled");
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });

            // Optionally remove scroll event listener if all elements are visible
            if (document.querySelectorAll(".js-scroll.scrolled").length === scrollElements.length) {
                window.removeEventListener("scroll", handleScrollAnimation);
            }
        };

        window.addEventListener("scroll", handleScrollAnimation);

        // Cleanup on unmount
        return () => window.removeEventListener("scroll", handleScrollAnimation);
    }, []);

    return (
        <div className="about">
            <div className="about-overlay">
                <div className="about-main flex justify-content-space-between">
                    <div className="main-container">
                        <div className="about-frame">
                            <h2 className='frame-title'>الاهـــــداف</h2>
                            <p className='frame-text'>
                                رفع ثقافة المجتمع في 
                                المجال العقاري من أجل  تحقيق رؤية المملكة 2030 بتمليك 70% من المواطنين للمسكن
                                مواكبة التحول الرقمي بأن تكون من ضمن الوسائل المؤثرة في المجال العقاري
                                تطوير وتحقيق السبل الكفيلة بضمان جودة الأداء 
                                إقامة شراكات فاعلة مع القطاعين الحكومي و الخاص في المجال العقاري 
                                تحقيق التميز في المجال العقاري وخدمة المجتمع 
                            </p>
                        </div>
                        <div className="line-seprator"></div>
                    </div>
                    <div className="main-container">
                        <h1 className="">من نحـــــن</h1>
                        <h3 className="">نحن هنا لمساعدتك على تنمية عملك</h3>
                        <div className='about-frame'>
                            <h2 className='frame-title'>الرســــالة</h2>
                            <p className='frame-text'>
                                تقديم محتوى متطور قادر على تزويد المجتمع بالثقافة 
                                و التوعية في المجال العقاري عبر بيئة
                                محفزة وبجوده مستمرة تضمن التسويق الأمثل والشراكة العامة
                            </p>
                        </div>
                    </div>
                </div>

                {/* Offer section */}
                <div className="offer">
                    <div className="offer-text flex justify-content-space-between scroll-element js-scroll fadeInUp">
                        <div>
                            <h1 className="offer-h1 scroll-element js-scroll">ما نقدمه</h1>
                            <p className="offer-p scroll-element js-scroll">
                                بعيدا بعيدا وراء كلمة الجبال
                            </p>
                        </div>
                        <p className="text-p flex align-items-center">
                            تقديم محتوى متطور قادر على تزويد المجتمع بالثقافة 
                            و التوعية في المجال العقاري عبر بيئة
                            محفزة وبجوده مستمرة تضمن التسويق الأمثل والشراكة العامة
                        </p>
                    </div>
                    <div className="offer-content flex justify-content-space-between align-items-center">
                        <div className="offer-left-text scroll-element js-scroll fadeInRight delay-1-2s">
                            <div className='about-frame'>
                                <p>
                                    رفع ثقافة المجتمع
                                    في المجال العقاري من أجل تحقيق رؤية المملكة 2030 بتمليك 70% من
                                    المواطنين للمسكن مواكبة التحول الرقمي بأن تكون من ضمن الوسائل
                                    المؤثرة في المجال العقاري تطوير وتحقيق السبل الكفيلة بضمان
                                    جودة الأداء إقامة شراكات فاعلة مع القطاعين الحكومي و الخاص في 
                                    المجال العقاري تحقيق التميز في المجال العقاري وخدمة المجتمع
                                </p>
                            </div>
                        </div>
                        <div className="offer-info flex justify-content-center scroll-element js-scroll fadeInUp">
                            <div className="about-frame">
                                <div className="text-slider">
                                    <h1 className='frame-title'>القيم الأساسية</h1>
                                    <p> العمل بنزاهة وبأعلى معايير أخلاقية ..</p>
                                    <p> صناعة محتوى بشفافية عالية ..</p>
                                    <p> توفير مجموعة خدمات ذات قيمة مضافة لعملائنا ..</p>
                                    <p>
                                        رفع ثقافة المجتمع
                                         في المجال العقاري من أجل تحقيق رؤية المملكة 2030 بتمليك 70% من
                                         المواطنين للمسكن مواكبة التحول الرقمي بأن تكون من ضمن الوسائل
                                         المؤثرة في المجال العقاري تطوير وتحقيق السبل الكفيلة بضمان
                                         جودة الأداء إقامة شراكات فاعلة مع القطاعين الحكومي و الخاص في 
                                        المجال العقاري تحقيق التميز في المجال العقاري وخدمة المجتمع
                                    </p>
                                </div>
                                <div className="bullets flex align-items-center">
                                    <button className="bullet"></button>
                                    <button className="bullet"></button>
                                    <button className="bullet"></button>
                                    <button className="bullet"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
