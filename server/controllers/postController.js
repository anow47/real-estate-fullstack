const listingsData = [
    {
      id: 1,
      title:'مشروع دقة فيلا',
      img: require('../images/Listings/دقة-فيلا-1.jpg'),
      images: [require('../images/Listings/دقة-فيلا-1.jpg'), require('../images/Listings/دقة-فيلا-2.jpg'), require('../images/Listings/دفيلا-3.jpg')],
      region: 'الرياض',
      description: 'مجمع سكني يتكون من عدة مباني في  حي الملقا في شمال الرياض',
      lat: 24.7032, // Riyadh latitude
      lng: 46.7153, // Riyadh longitude
      detailsUrl: "https://drive.google.com/file/d/1kFynLiAv2G93avePq8QGvvZGTVbAS2PL/view?usp=drive_link",
      conatctUrl: "https://wa.me/+966536748000",
    },
    {
      id: 2,
      title: 'مشروع ديم',
      img: require('../images/Listings/مشروع ديم1.png'),
      images: [require('../images/Listings/مشروع ديم1.png'), require('../images/Listings/مشروع ديم2.png'), require('../images/Listings/مشروع ديم3.png')],
      region: 'القادسية الرياض',
      description: 'مشروع ديم في حي القادسية مشروع مميز و فريد من نوعه ضمان شامل لمدة سنة ضمان على الهيكل الإنشائي 10 سنوات',
      lat: 24.7242,
      lng: 46.6353,
      detailsUrl: "#https://deemresidence.com/",
      conatctUrl: "https://api.whatsapp.com/send?phone=966557464000",
    },
    {
      id: 3,
      title:'مشروع ديار 22',
      img: require('../images/Listings/ديار-22.jpg'),
      images: [require('../images/Listings/ديار-22.jpg'), require('../images/Listings/ديار-221.jpg'), require('../images/Listings/ديار222.jpg')],
      region: 'النرجس الرياض',
      description: 'مشروع سكني يتكون من مبني واحد يوجد فيه 14 شقة',
      lat: 24.7332,
      lng: 46.7153,
      detailsUrl: "https://drive.google.com/file/d/1nhn7zUVLI3KM-ZBFuHi24HjK3C_NyCyO/view",
      conatctUrl: "https://api.whatsapp.com/send/?phone=966920022828",
    },
    {
      id: 4,
      title:'مشروع خوالد 09',
      img: require('../images/Listings/خوالد.jpg'),
      images: [require('../images/Listings/خوالد.jpg'), require('../images/Listings/خوالد-2.jpg'), require('../images/Listings/خوالد-3.jpg')],
      region: 'الياسمين الرياض',
      description: 'مشروع خوالد 09 يقع في شمال الرياض في حي الياسمين يتكون من 138 وحدة عقارية متاح منها الان 65 وحدة',
      lat: 24.7432,
      lng: 46.7253,
      detailsUrl: "https://aqarek.com.sa/ords/r/aqarek/aqarek-web/project-landing-page?p8_project_id=AAAT18AANAABafjAAB&code=",
      conatctUrl: "https://api.whatsapp.com/send/?phone=%2B966920034909&text&type=phone_number&app_absent=0",
    },
    {
      id: 5,
      title:'ديار 17',
      img: require('../images/Listings/ديار 17-1.jpg'),
      images: [require('../images/Listings/ديار 17-1.jpg'), require('../images/Listings/ديار 17-2.jpg'), require('../images/Listings/ديار 17-3.jpg'), require('../images/Listings/ديار 17-4.jpg')],
      region: 'قرطبة الرياض',
      description: 'ديار 17 مشروع سكني يتكون من 2 مبني بعدد 45 شقة بحي قرطبة في مدينة الرياض',
      lat: 24.7832,
      lng: 46.7953,
      detailsUrl: "https://diaar.sa/project_name/%d8%af%d9%8a%d8%a7%d8%b1-17/",
      conatctUrl: "920022828",
    },
    {
      id: 6,
      title: 'مشروع رسن 2',
      img: require('../images/Listings/مشروع-رسن-2.png'),
      images: [require('../images/Listings/مشروع-رسن-22.png'), require('../images/Listings/مشروع-رسن-2.png')],
      region: 'الرياض',
      description: 'مشروع رسن 2 مشروع مميز في حي القادسية شرق الرياض يضم شقق متعددة و بضمانات طويلة المدي',
      lat: 24.7136,
      lng: 46.6753,
      detailsUrl: "https://drive.google.com/file/d/1IRSxZticgbOwhRQr0l38uzjbFQ--j4SO/view?usp=sharing",
      conatctUrl: "https://api.whatsapp.com/send?phone=966537871453",
    },
]

// export const listing = (req, res) => {
//     const id = parseInt(req.params.id);
//     const data = listingsData.find(item => item.id === id);
//     res.json(data);
// };
