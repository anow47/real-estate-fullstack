import './services.css'
import img1 from '../images/services/f-icon-1.png.webp'
import img2 from '../images/services/f-icon-2.png.webp'
import img3 from '../images/services/f-icon-3.png.webp'
import img4 from '../images/services/f-icon-4.png.webp'
import img5 from '../images/services/f-icon-5.png.webp'
import img6 from '../images/services/f-icon-6.png.webp'
export default function Services() {
      // Array of service data
      const servicesData = [
        {
            img: img1,
            title: "ادارة الحملات الاعلانية الممولة",
            description: "نقدم لكم خدمة ادارة الحملات الاعلانية الممولة و ذلك باقل التكاليف مع اعلى النتائج",
            link: "#"
        },
        {
            img: img2,
            title: "الاعلان في وسائل التواصل الاجتماعي",
            description: " محترفون في اشهار اعلانك الي اكبر عدد ممكن من الفئة المستهدفة",
            link: "#"
        },
        {
            img: img3,
            title: "التغطية الاعلامية عبر سناب شات",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        },
        {
            img: img4,
            title: "التصوير الاحترافي",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        },
        {
            img: img5,
            title: "ادارة الحملات الاعلانية الممولة",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        },
        {
            img: img6,
            title: "التخزين السحابي",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        }
    ];
    return(
        <div classNameName="services">
            <section className="banner_area">
                <div className="container">
                    <div className="banner_inner_text">
                        <h2>خدماتنا</h2>
                        <p>: القي نظرة الي ما هو أفضل ما نقوم به</p>
                    </div>
                </div>
            </section>
            <section className="service_feature">
                <div className="container">
                    <div className="row feature_inner">
                        {servicesData.map((service, index) => (
                            <div className="col-lg-4 col-sm-6" key={index}>
                                <div className="feature_item">
                                    <div className="f_icon">
                                        <img src={service.img} alt={service.title} />
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                    <a className="more_btn" href={service.link}>قراءة المزيد</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}