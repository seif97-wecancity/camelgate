

 

// if(localStorage.getItem('language') === 'ar'){
//   document.getElementById("myImg").src = "assets/img/Picture for Each/arabic.png";
//   document.getElementById("secondimg").src = "assets/img/arabic1.png";
// }


jQuery(function ($) {
 'use strict'; // 1. preloader
 
  // var cssId = true ;
  $("#lang").click(function(){
    changetoenglish();
  });
  let cssId = false;
function changetoenglish(){
  
  // cssId =! cssId ;
  
  console.log(cssId + 'iama');
  // cssId=!cssId
  var head  = document.getElementsByTagName('head')[0];

  if (localStorage.getItem('language') == 'en')
{ 
    // document.getElementById("false").remove();
    localStorage.setItem('language', 'ar');
    localStorage.setItem('check', true);
    
    let link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/css/main-rtl.css';
    link.media = 'all';
    head.appendChild(link);
    // $(".myImg").attr("src" , 'assets/img/Picture for Each/arabic.png');
    document.getElementById("pictureofsign").src = "assets/img/arabicsign.png";
    document.getElementById("myImg").src = "assets/img/Picture for Each/arabic.png";
    document.getElementById("secondimg").src = "assets/img/arabic1.png";
    setLanguage(cssId);
    
}else{
	localStorage.setItem('language', 'en');
  localStorage.setItem('check', false);

  // document.getElementById("true").remove();

  let link  = document.createElement('link');
  link.id   = cssId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'assets/css/main.min.css';
  link.media = 'all';
  head.appendChild(link);
  document.getElementById("myImg").src = "assets/img/Picture for Each/Picture for Each-01.png";
    document.getElementById("secondimg").src = "assets/img/app-mobile-image-3.png";
    document.getElementById("pictureofsign").src = "assets/img/englishsign.png";
    setLanguage(cssId);
}
	// localStorage.setItem('language', 'en');
	const language = localStorage.getItem('language');
	setLanguage(cssId);
  
}
 

const translations = {
    en:{
         //   Homepage
		home:'Home',
    About:'About Us',
    Shipping_companies:'Shipments',
    Trucking_companies:'Trucks',
    We_Developed_Digital_Logistics:"We Developed Digital Logistics",
    Logistics_operations_in_digital_technology:"Logistics operations in digital technology technique to organize and facilitate all stages of supply chains in the field of heavy transport",
    Drivers:'Drivers',
    Contact:'Contact Us',
    features:'Features',
    // lang:'اللغة العربية',
    CAMEL_GATE :'CAMEL GATE ',
    CAMEL :'Camel Gate ',
    Download_form :'Download Form ',
    Why_CAMEL_GATE_Different :'Why CAMEL GATE Different? ',
    CAMEL_GATE_works_to_save_effort_time :'CAMEL GATE works to save effort, time, cost and the safety of the flow of supply chains, relying mainly on the high programming provided by the portal through the use of the latest and most robust electronic software in cybersecuritys  ',
    Join_Us : "Join Us !",
    CAMEL_GATE_help_to_manage_everything_for_you:'CAMEL GATE help to manage everything for you !',
    Main_Work_Process:'Main Work Process',
    Main_Work_Process_Logistics_management:'Logistics management is an important component of supply chain management, as logistics focuses on moving products and materials as efficiently as possible ',
    
    How_much_does_it_cost_to_join:'How_much_does_it_cost_to_join ?',
    There_are_no_fees_for_registering_the_application:'There are no fees for registering the application',
    AVAILABLITY:'AVAILABLITY',
    We_are_availling_the_logistics:'We are availling  the logistics 24/7 for all parties around',
    AUTOMATION:'AUTOMATION',
    Bidding_and_offering_process_are_done:'Bidding and offering process are done automated features',
    STATUS_FOLLOWUP:'STATUS FOLLOWUP',
    Follow_your_logistics_with:'Follow your logistics with real-time status updates',
    BARGAIN:'BARGAIN',
    Whole_shipping_process_are_bargains:'Whole shipping process are bargains for all parties',
    Links:'Links',
    How_we_get_paid_from_shipping_companies:'How we  get paid from  shipping companies?',
    We_receive_payment_by_online_portal:'We receive payment by online portal',
    How_we__pay_for__trucks_companies:'How we  pay for  trucks companies',
    
    Shipment:'Shipment',
    Shipment_p:'Choose the perfect bidding for your shipments as per shipping prices and rates of shipping providers',
    Bidding:'Bidding',
    Bidding_p:'Track your shipment follow up status and get a delivery report, the we pay for shipping providers',
    Delivery:'Delivery',
    Delivery_p:'Track your shipment follow up status and get a delivery report, the we pay for shipping providers',
    
    // section Download Our Apps 
    Download_Apps:"Download Apps",
    Google_Play:"Google Play",
    App_Store:"App Store",

    Screenshots_Proactively_impact:"Proactively impact logistics structure via CAMEL GATE backend leadership skills and efficiently revolutionize worldwide digital logistics networks ",
    
    
    Commercial_Register:"Commercial Register ",
    Vat_Certificate:"Vat Certificate ",
    National_Address:"National Address ",
    Requested_documents_for_trucks_companies:"Requested documents for  trucks companies? ",
    Subscribe_our_Newsletter:"Subscribe our Newsletter ",
    Were_a_team_of_non_cynics_who_truly_care_for_our_work:"We’re a team of non-cynics who truly care for our work ",
    Requested_Document_for_Shipping_Companies:"Requested Document for Shipping Companies? ",
    Unlimited_number_of_shipments:"Unlimited number of shipments ",
    Download_Our_Apps_Start_work:"Start work with CAMEL GATE, and you can explore everything you need to manage your logistics  ",
    Download_Our_Apps_Start_work_span:"    Aware,  Drive Traffic, Connect",
    Download_Our_Apps:'Download Our Apps',
    We_pay_by_bank_transfer:"We pay by bank transfer? ",
    How_much_shipment_I_can_schedule:"How much shipment I can schedule? ",
    // section Frequently Asked Queries
    Frequently_Asked :'Frequently Asked Queries',
    Frequently_Asked_header:'Efficient reliable answers for all your queries, still have questions? Contact us',
    // Apps Screenshots Slider
    Screenshots:'Apps Screenshots',
    // Contact Us
    Contact_header:'Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate innovation via excellent web ',
    Headquarter:'Headquarter',
    Email_Us:'Email Us',
    Support:'Support',
    Visit_Us:'Visit Us',
    Read_to_et_started:'Ready to get started?',
    Send_Message:'Send Message',
    Apdash_Features:'CAMEL GATE Features',
    // lang:'English',
    header_Features:'Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively',
    About_head:'CAMEL GATE stages and days were not easy, since the idea began on the first of 2018, and continuously we were planning to get out to the world as best as possible ',
    About_title_1:'Platform that uses digital and electronic technology in logistics operations, to organize, facilitate, plan, implement and control the movement of goods, services or information within all stages of supply chains and between points of origin and consumption in the heavy transport specialization, starting from receiving raw materials or the final product, whether from production lines or ports, warehouses and even the receiving warehouse or the end customer',
    About_title_blockquote:'work to save effort, time, cost and the safety of the flow of supply chains, relying mainly on the high programming provided by the portal through the use of the latest and most robust electronic software in cybersecurity',
    lang:"Our vision it wasn't simple or small step to enter this field, but we're visualizing ourselves with 2030, one of eight greatest tech service companies globally if we are not leading this",
    Mission:'Mission',
    Vision:'Vision',
    About_Mission:'Transmit its identity and power from the Kingdom of Saudi Arabia and cross to the markets of the whole world, leading in the technical and logistical specialization, the first and unique in its features, competition and keeping pace with the labor market, to be one of the first users and supporters of electric truck engines',
    Goals:'Goals',
    About_Goals:'Hundreds of thousands of trucks of various types cross daily on land roads in all our target markets, so one of our most important goals to get 12% of the land transport is through the CAMEL GATE, with an annual increase 3.75% until we reach 53% by the year 2030',
    Questions_Concerns_or_Assistance:'Questions, Concerns, or Assistance? Contact us and will be ready to assist anyhow',
    shipment_head:'Finding the best price takes a lot of effort, but not anymore! With CAMEL GATE, you can track the best prices ',
    Stay_close_to_your_logistics:'Stay close to your logistics!',
    No_two_business_days_are_the_same_Markets_change:'No two business days are the same Markets change, prices change, routes and expectations change, reconciling all of these variables across multiple teams, suppliers, and boundaries is a challenge as supply chains become increasingly complex',
    You_can_schedule_shipments_anytime:'You can schedule shipments anytime and anywhere, we have made our daily operations more efficient, you can easily schedule your shipments, check the displayed prices and ratings of shipping service providers, and choose the best suitable price for you',
    Track_your_shipment_around_the_Kingdom:'Track your shipment around the Kingdom 24/7 with real-time status updates, if you have multiple shipments on the way? You can also follow it through CAMEL GATE',
    Finding_the_best_price_takes:'Finding the best price takes a lot of effort, but not anymore! With Camel Gate, you can track the best prices while scheduling shipments with complete certainty of guaranteed loading',
    All_new_is_the_solution:'All-new is the solution to better control your supply chain, always ready with real-time updates on everything you need to keep your logistics at the starting point and before shipment begins, build your supply chain based on your strategy',
    Is_designed_to_mak:'Is designed to make your life easier while shipping, you can fully manage your trucks from origin to destination with just a few clicks',
    Customer_Service:'Customer Service',
    Serving_clients_with:'Serving clients with clicks and different channels within 24/7 all over the kingdom',
    Follow_Up_Status:'Follow Up Status',
    Track_your_shipment:'Track your shipment around the Kingdom 24/7 with real-time status updates, if you have multiple shipments on the way? You can also follow it through CAMEL ',
    Registration:'Easy Registration',
    Registration_title:'It just takes one click to register in CAMEL GATE, The first step to manage your business, To make the process as smooth as possible for your shipments, trucks and drivers<',
    Advanced_Dashboards:'Advanced Dashboards',
    Advanced_Dashboards_title:'Gain access to real-time streaming shipments data, analytical tools, and advanced scheduling capabilities',
    Continuously:'Continuously Profit',
    Continuously_Schedule:'Schedule your trips for a week, two weeks or more, according to your desire and enthusiasm, and manage your own profit, the more you drive, the more you can make profits deposited automatically after ',
    Unlimited_Scheduling:'Unlimited Scheduling',
    Schedule_unlimited:'Schedule unlimited shipments anytime and anywhere, services and features in minutes and on easy terms',
    lang:'اللغة العربية',
    Looking_for_a_excellent_Business:'Looking for a excellent Business idea?',
    Give_us_a_call_or_drop_by_anytime:'Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days',
    Email:'Email:',
    Cairo_Offic:'Cairo Offic:',
    Support:'Support',
    // the driver 
    The_more_you_drive:"You're in charge, more you drive, more profits you can make",
    Drivers:'Drivers',
    You_are_exhausted_by_the_obligations:'You are exhausted by the obligations of the truck on you!',
    You_do_not_get_continuous_and_permanent_shipments:'You do not get continuous and permanent shipments, a truck driver or owning more than one truck, but you do not know how to get shipments, you can see the size of the market is large, but you do not know how to get more than a contract number of companies that own shipments',
    Now_through_Camel_Gate_you_can_schedule:'Now, through Camel Gate, you can schedule your trips for a week, two weeks or more, according to your desire and enthusiasm, you can enter to know the details of the shipment, the place of loading and unloading, as well as customer evaluations. Today, you can register for the first and unique application, its services and features in minutes and on easy terms, or contact customer service, download Camel Gate. from the App-Store, from Google-play, or by emailing technical support and the driver service of the Camel Gate',
    Drive_only_when_it_works_for_you:'Drive only when it works for you. <br> There is no office and no boss, that means you will always start and stop in your time, because with Camel Gate you are in charge, you can drive and make whatever you want.  <br> The more you drive, the more you can make more profits, in addition, profits are deposited automatically after',

    // trucks paper 
    Join_Us:'Join Us !',
    Guarantee_you_the_future:'Guarantee you the future, you can review the shipments destinations offered for shipping around your area or any region of the Kingdom ',
    Having_difficulty_finding_shipments: 'Having difficulty finding shipments! You have a shipping company; you own trucks of any kind!',
    Today_is_enough_for_you_to_bother_searching:'Today is enough for you to bother searching, whether it be recommendations of acquaintances, searching for customs brokers gathering places, or searching for companies that own shipments, CAMEL GATE connects you with shipment owners and provides you with a distinguished service and faster communication, and allows you to provide the best price for you, which guarantees you a stable income of your choice, delivers your dues immediately without delay or postponement',
    Has_also_provided_distinguished_services_for_you:'Has also provided distinguished services for you to help you reach the largest segment of companies with shipments, and in new and different cities, today CAMEL GATE is the largest platform serving the owners of shipments and truck owners and helps them manage their vehicles and shipments in a more efficient and effective way, After today, your truck will not return from its destination empty and the dues of shipment owners today will not be postponed',
    Guarantee_you_the_future: 'Guarantee you the future , you can review the destinations of the shipments offered for shipment in the areas near you or any region of the Kingdom of your choice, add a price quote for each shipment that fits your trucks, and distribute the trucks according to your business plan',
	  Track_your_trucks_around_the_Kingdom:'Track your trucks around the Kingdom 24/7 with real-time status updates',
    Is_designed_to_make_your_life_easier_while_shipping:'Is designed to make your life easier while shipping, you can fully manage your trucks from origin to destination with just a few clicks',
    We_commit_harnessing_our_full_capabilities:'We commit harnessing our full capabilities, experiences and knowledge to innovate and build a Saudi digital technology system in the logistics field that competes globally',
    // form
    Enter_Email:'EnterEmail',
    Address:'7562 Khalid Ibn Al Waleed, 3635 Al Muruj Dist., 62527 ABHA City, Aseer, Saudi Arabia',
    cairo_address:'Plot 45, The Hive Offices, Sodic Westown Hub, 38 Alex Desert Rd., Sheikh Zayed City, Giza, Egypt'

  },
    ar:{
    lang:'English',
    Unlimited_Scheduling:'جدولة غير محدودة ',
    Schedule_unlimited:'جدولة شحنات غير محدودة في أي وقت وفي أي مكان ، وخدمات وميزات في دقائق وبشروط سهلة ',
    Continuously:'ربح مستمر ',
    Continuously_Schedule:'قم بجدولة رحلاتك لمدة أسبوع أو أسبوعين أو أكثر، حسب رغبتك وحماسك، وقم بإدارة أرباحك الخاصة، فكلما زادت قيادتك، زادت أرباحك المودعة تلقائيًا بعد الشحن    ',
    Advanced_Dashboards:'لوحات تحكم متقدمة    ',
    Advanced_Dashboards_title:'الوصول إلى بيانات الشحنات وتوقيتها الفعلي بأدوات تحليلية، مع إمكانية الجدولة المتقدمة    ',
    Apdash_Features:'ميزات بوابة جمل ',
    Customer_Service:'خدمة العملاء ',
    // cards
    AVAILABLITY:'التوفر',
    We_are_availling_the_logistics:'نقدم الخدمات اللوجستية لجميع الأطراف  24 / 7',
    AUTOMATION:'التشغيل الآلي',
    Bidding_and_offering_process_are_done:'تتم عملية تقديم العطاءات والعرض بميزات آلية',
    STATUS_FOLLOWUP:'متابعة الحالة',
    Follow_your_logistics_with:'اتبع لوجيستياتك بتحديثات الحالة في الوقت الفعلي',
    BARGAIN:'الصفقة رابحة',
    Whole_shipping_process_are_bargains:'عمليات الشحن بأكملها هي صفقة رابحة للجميع ',

		Serving_clients_with:'خدمة عملاء بنقرات بسيطة وقنوات مختلفة خلال 24/7 في جميع أنحاء المملكة    ',
		Follow_Up_Status:'متابعة الحالة',
		Track_your_shipment:'تتبع شحنتك في أنحاء المملكة 24/7 مع تحديثات حالة الشحنة بتوقيتها الفعلي، إذا كان لديك شحنات متعددة في الطريق؟ يمكنك أيضًا متابعتها من خلال بوابة جمل',

		Registration:'تسجيل سهل    ',
		Registration_title:'لا يتطلب الأمر سوى نقرة واحدة للتسجيل في بوابة جمل، الخطوة الأولى لإدارة أعمالك، لجعل العملية سلسة قدر الإمكان لشحناتك وشاحناتك وسائقيك',
		home:'الرئيسية',
		home:'الرئيسية',

		home:'الرئيسية',
     About:'من نحن     ',
     features:'الميزات',
    Shipping_companies:' الشحنات ',
     Trucking_companies:'الشاحنات   ',
    //  Drivers:'السائقين',
     Drivers:'الكفو ',
     Contact:'اتصل بنا',
     CAMEL_GATE :'بوابة جمل',
     CAMEL :'بوابة جمل',
     We_Developed_Digital_Logistics:"قمنا بتطوير الخدمات اللوجستية الرقمية ",
     Logistics_operations_in_digital_technology:'عمليات لوجستية بتقنية التكنولوجيا الرقمية لتنظيم وتسهيل كافة مراحل سلاسل التوريد في مجال النقل الثقيل',
     // section main work process
     Main_Work_Process:'آليات العمل الرئيسية',
     Main_Work_Process_Logistics_management:'تعد إدارة اللوجستيات عنصرًا مهمًا في إدارة سلسلة التوريد، حيث تركز الخدمات اللوجستية على نقل المنتجات والمواد بأكبر قدر ممكن من الكفاءة     ',
     Shipment:'الشحنات ',
     Links:'الروابط ',
     Why_CAMEL_GATE_Different:'لماذا تختلف بوابة جمل؟',
     CAMEL_GATE_works_to_save_effort_time:'تعمل بوابة جمل على توفير الجهد والوقت والتكلفة وسلامة تدفق سلاسل التوريد، بالاعتماد بشكل أساسي على البرمجة العالية التي توفرها البوابة من خلال استخدام أحدث البرامج الإلكترونية وأكثرها قوة في مجال الأمن السيبراني     ',
     Shipment_p:'تقديم جدول شحنات غير محدود لتقديم العطاءات من قبل مزودي الشحن. ',
     Bidding:'المزايدة',
     Bidding_p:'اختر المزايدة المثالية لشحناتك حسب أسعار الشحن وتقييمات مزودي خدمة الشحن     ',
     Delivery:'التسليم',
     Delivery_p:'تتبع حالة شحناتك واحصل على تقرير التسليم، ثم نحن نقوم بالدفع لمزودي خدمة الشحن'     ,
     
     CAMEL_GATE_help_to_manage_everything_for_you:'تساعد بوابة جمل في إدارة كل شيء من أجلك!',
     Download_Our_Apps:'قم بتنزيل تطبيقاتنا', 
     Download_Our_Apps_Start_work:"ابدأ العمل مع بوابة جمل، ويمكنك استكشاف كل ما تحتاجه لإدارة الخدمات اللوجستية الخاصة بك  إدراك ، قيادة حركة المرور ، الاتصال", 
     Download_Our_Apps_Start_work_span:'إدراك ، قيادة حركة المرور ، الاتصال     ',
     
     Download_form:'تحميل من', 
     App_Store:'متجر التطبيقات', 
     Google_Play:'تطبيقات جوجل', 
     Join_Us : 'انضم الينا',
     Screenshots_Proactively_impact:'التأثير بشكل استباقي على الهيكل اللوجستي من خلال مهارات القيادة الخلفية لـ بوابة جمل وإحداث ثورة فعالة في الشبكات اللوجستية الرقمية في جميع أنحاء العالم', 
     How_we_get_paid_from_shipping_companies:'كيف نتلقى الدفع من شركات الشحنات؟', 
     We_receive_payment_by_online_portal:'نتلقى الدفع عن طريق بوابة الدفع الإلكتروني ', 
     How_we__pay_for__trucks_companies:'كيف ندفع لشركات الشاحنات والكفو؟', 
     We_pay_by_bank_transfer:'ندفع عن طريق التحويل المصرفي', 
     How_much_shipment_I_can_schedule:'كم عدد الشحنات التي يمكن جدولتها؟', 
     Delivery:'التسليم', 
     Unlimited_number_of_shipments:'عدد غير محدود من الشحنات', 
     Requested_Document_for_Shipping_Companies:'المستندات المطلوبة من شركات الشحنات؟', 
     Commercial_Register:'السجل التجاري', 
     National_Address:'العنوان الوطني', 
     Vat_Certificate:'شهادة ضريبة القيمة المضافة',

     Requested_documents_for_trucks_companies:'المستندات المطلوبة من شركات الشاحنات والكفو؟', 
     Driver_License:'رخصة قيادة', 
Truck_License:'رخصة شاحنة ', 
Subscribe_our_Newsletter:'اشترك في النشرة الإخبارية لدينا ', 
Were_a_team_of_non_cynics_who_truly_care_for_our_work:'نحن فريق من غير المتشككين الذين يهتمون حقًا بعملهم', 
     Vat_Certificate:'شهادة ضريبة القيمة المضافة', 

     How_much_does_it_cost_to_join:'ما هي تكلفة الانضمام لـ بوابة جمل؟    ',
     There_are_no_fees_for_registering_the_application:'لا توجد رسوم للتسجيل فالتطبيق    ',
    // section Frequently Asked Queries
    Frequently_Asked :'استفسارات متكررة',
    Frequently_Asked_header:'إجابات فعالة وموثوقة لجميع استفساراتك ، هل ما زالت لديك أسئلة؟ اتصل بنا',
         // section Download Our Apps 
      Download_Apps:"قم بتنزيل تطبيقاتنا",


         // section Screenshots Slider
    Screenshots:'لقطات من التطبيق',
    Dashboard:'لوحة القيادة',
      // Home 
      header_Features:'تقديم قيمة احترافية بموضوعية مع استعداد متنوع للويب. انقل بشكل تعاوني خدمة العملاء اللاسلكية بدون محفزات موجهة نحو الهدف للتغيير. بشكل تعاوني.',
         // Contact Us
         
         Contact_header:'انشر الأنظمة الأساسية ذات المستوى العالمي بسرعة أثناء الواجهات التعاونية. تسهيل الابتكار المؤسسي عبر الويب الممتاز',
    Headquarter:'المركز الرئيسى',
    Email_Us:'راسلنا',
    Support:' الدعم',
    Visit_Us:' زورنا',
    Send_Message:' أرسل رسالة',
    Read_to_et_started:' على استعداد للبدء؟',
    Questions_Concerns_or_Assistance:'أسئلة أو مخاوف أو مساعدة؟  اتصل بنا وستكون على استعداد للمساعدة على أي حال',
    Looking_for_a_excellent_Business:'هل تبحث عن فكرة عمل ممتازة؟',
    Give_us_a_call_or_drop_by_anytime:'',
    About_head:' لم تكن مراحل وأيام بوابة جمل بالسهلة فمنذ أن بدأت الفكرة في الأول من عام 2018 ومستمرين فالتخطيط لنخرج للعالم بأفضل ما يمكن    ',
    About_title_1:' منصة تستخدم التقنية الرقمية والإلكترونية في العمليات اللوجستية، لتنظيم وتسهيل وتخطيط وتنفيذ ومراقبة حركة السلع أو الخدمات أو المعلومات داخل جميع مراحل سلاسل الإمداد وبين نقاط المنشأ والاستهلاك في تخصص النقل الثقيل، بدءاً من استلام المواد الخام أو المنتج النهائي سواءً من خطوط الإنتاج أو الموانئ والمخازن وحتى المستودع المتلقي أو العميل النهائي    ',
    About_title_blockquote:'نعمل على توفير الجهد والوقت والتكلفة ومأمونية تدفق سلاسل الإمداد، معتمدين في الأساس على البرمجة العالية التي توفرها البوابة من خلال استخدام أحدث البرمجيات الإلكترونية وأكثرها متانه في الأمن السيبراني',
    About_Vision:' لم تكن الرؤية لنا بسيطة أو أن نكون محطة صغيرة في هذا المجال بل أننا نرى أنفسنا خلال العام 2030 م من أقوى وأكبر 8 شركات للخدمات اللوجستية التقنية على مستوى العالم إن لم نكن الأولى    ',
    Vision:'رؤيتنا',
  
    About_Mission:'أن ننتقل بهويتنا وقوتنا من المملكة العربية السعودية ونعبر إلى أسواق العالم جمعاء، رائدين الاختصاص التقني اللوجستي، ونكون البوابة الأولى والفريدة في مميزاتها ومنافستها ومواكبتها لسوق العمل، نكون من أوائل المستخدمين والداعمين لمحركات الشاحنات الكهربائية    ',
    
    Goals:'اهدافنا',
    About_Goals:'تعبر مئات الآلاف من الشاحنات بمختلف أنواعها بشكل يومي على الطرق البرية في جميع الأسواق المستهدفة لنا، لذا من أهم أهدافنا أن تكون 12 % من النقل البري عن طريق بوابة جمل بارتفاع سنوي 3.75 % حتى نصل إلى 53 % بحلول العام 2030 م    ',
   
    shipment_head:'البحث عن أفضل الأسعار يتطلب الكثير من الجهد، ولكن ليس بعد الآن! مع  بوابة جمل يمكنك تتبع أفضل الأسعار    ', 
    Stay_close_to_your_logistics:'ابق على مقربة من خدماتك اللوجستية! ', 
    No_two_business_days_are_the_same_Markets_change:'لا يوجد يومان عمل متماثلان، الأسواق تتغير، الأسعار تتغير، الطرق والتوقعات تتغير، يمثل التوفيق بين كل هذه المتغيرات عبر فرق متعددة وموردين وحدود تحديًا حيث تزداد سلاسل التوريد تعقيدًا    ', 
    You_can_schedule_shipments_anytime:'تستطيع الحجز في أي وقت وفي أي مكان تتواجد فيه، فقد جعلنا عملياتنا اليومية أكثر كفاءة، يمكنك بسهولة إضافة جدول شحناتك والتحقق من الأسعار المعروضة وتقييمات مزودي خدمة الشحن، واختيار افضل سعر مناسب لشحنتك    ', 
    Mission:'مهمتنا', 
    Track_your_shipment_around_the_Kingdom:'تابع حمولتك حول العالم على مدار الساعة طوال أيام الأسبوع مع تحديثات الحالة في الوقت الفعلي، هل لديك شحنات متعددة في الطريق؟ يمكنك تتبعها جميعا مع بوابة جمل ', 
    Finding_the_best_price_takes:'البحث عن أفضل الأسعار يتطلب الكثير من الجهد، ولكن ليس بعد الآن! مع بوابة جمل، يمكنك تتبع أفضل الأسعار أثناء التنقل مع التأكد التام من الأسعار الثابتة والتحميل المضمون    ',  
    All_new_is_the_solution:'الجديد كلياً  الحل للتحكم بشكل أفضل في سلسلة التوريد الخاصة بك، مستعدين دائمًا بتحديثات الوقت الفعلي حول كل ما تحتاجه للحفاظ على لوجستياتك في نقطة البداية وقبل الشحن، وقم ببناء سلسلة التوريد الخاصة بك بناءً على استراتيجيتك ',  
    Is_designed_to_mak:'تم تصميم بوابة جمل لجعل حياتك أسهل أثناء الشحن، يمكنك إدارة شحنتك بالكامل من الأصل إلى الوجهة ببضع نقرات فقط ', 
    Give_us_a_call_or_drop_by_anytime:'اتصل بنا أو قم بالرد في أي وقت ، ونحن نسعى للرد على جميع الاستفسارات في غضون 24 ساعة في أيام العمل',
    Email:'البريد الالكتروني',
    Cairo_Offic:'مكتب القاهرة',
    Support:'الدعم',
    // truck paper 
    Join_Us:'انضم إلينا ! ', 
    Guarantee_you_the_future:'نضمن لك المستقبل، يمكنك مراجعة وجهات الشحنات المعروضة للشحن في جميع أنحاء منطقتك أو أي منطقة من مناطق المملكة ',
    Trucks:'شاحنات',
    Having_difficulty_finding_shipments:'تواجه صعوبة في العثور على شحنات! لديك شركة شحن. كنت تملك الشاحنات من أي نوع!',
    Today_is_enough_for_you_to_bother_searching:'اليوم يكفيك  عناء البحث، سواء كان ذلك توصيات من معارفك، أو البحث عن أماكن تجمع المخلصين الجمركيين، أو البحث عن الشركات التي تمتلك شحنات، بوابة جمل تربطك بأصحاب الشحنات وتوفر لك خدمة متميزة وتواصل أسرع، وتتيح لك تقديم أفضل سعر لك، مما يضمن لك دخلا ثابتا من اختيارك،  تسليم مستحقاتك فورا دون تأخير أو تأجيل',
    Has_also_provided_distinguished_services_for_you:'كما نوفر لك خدمات مميزة تساعدك على الوصول إلى أكبر شريحة من الشركات ذات الشحنات، وفي مدن جديدة ومختلفة، اليوم يعد بوابة جمل أكبر منصة تخدم أصحاب الشحنات وأصحاب الشاحنات وتساعدهم على إدارة مركباتهم وشحناتهم بطريقة أكثر كفاءة وفعالية. بعد اليوم لن تعود شاحنتك من وجهتها فارغة ولن يتم تأجيل مستحقات أصحاب الشحنات اليوم',
    Guarantee_you_the_future : ' نضمن لك المستقبل، يمكنك مراجعة وجهات الشحنات المعروضة للشحن في المناطق القريبة منك أو أي منطقة من المملكة باختيارك',
    Track_your_trucks_around_the_Kingdom:'تتبع شاحناتك في جميع أنحاء المملكة 24/7 مع تحديثات الحالة في الوقت الفعلي',
    Is_designed_to_make_your_life_easier_while_shipping:'تم تصميمه لجعل حياتك أسهل أثناء الشحن ، يمكنك إدارة شاحناتك بالكامل من المنشأ إلى الوجهة ببضع نقرات فقط',
    // the driver
    The_more_you_drive:'أنت المسؤول، كلما زادت قيادتك، زادت قدرتك على تحقيق أرباح أكثر',
    Drivers:'الكفو',
    You_are_exhausted_by_the_obligations:'أرهقتك التزامات الشاحنة عليك!',
    You_do_not_get_continuous_and_permanent_shipments:'لا تحصل على شحنات مستمرة ودائمة, سائق شاحنة أو تمتلك أكثر من شاحنة، ولكنك لا تعرف كيفية الحصول على شحنات، يمكنك أن ترى حجم السوق كبير، لكنك لا تعرف كيف تحصل على أكثر من عقد عدد من الشركات التي تمتلك شحنات',
    Now_through_Camel_Gate_you_can_schedule:'الان مع بوابة جمل يمكنك جدولة رحلاتك لمدة اسبوع او اسبوعين او اكثر حسب رغبتك وحماستك يمكنك الدخول لمعرفة تفاصيل الشحنة ومكان التحميل والتفريغ وكذلك تقييمات العملاء. يمكنك اليوم التسجيل في التطبيق الأول والفريد من نوعه وخدماته ومميزاته في دقائق وبشروط ميسرة، أو التواصل مع خدمة العملاء، قم بتنزيل بوابة جمل. من App-Store أو Google-play أو بإرسال بريد إلكتروني إلى الدعم الفني وخدمة الكفو ببوابة جمل',
    Drive_only_when_it_works_for_you:'قم بالقيادة فقط عندما تعمل من أجلك ',
    Drive_only_when_it_works_for_you_1:' لا يوجد مكتب ولا رئيس، وهذا يعني أنك ستبدأ دائمًا وتتوقف في وقتك، لأنه مع بوابة جمل أنت المسؤول، يمكنك القيادة وصنع ما تريد.كلما زادت قيادتك، يمكنك تحقيق المزيد من الأرباح، بالإضافة إلى ذلك، يتم إيداع الأرباح تلقائيًا بعد ذلك',

    We_commit_harnessing_our_full_capabilities:'نلتزم بتسخير كامل قدراتنا وخبراتنا ومعرفتنا لابتكار وبناء نظام تقني رقمي سعودي في المجال اللوجستي ينافس عالميًا',
	//  form
  Enter_Email:'البريد الالكتروني',
  Address:'7562 خالد بن الوليد، 3635 حي المروج، 62527 ابها، عسير، المملكة العربية السعودية',
  cairo_address:'قطعة 45 ، مكاتب هايڤ ، سوديك ويست تاون هب ، 38 طريق الإسكندرية الصحراوي ، مدينة الشيخ زايد ، الجيزة ، مصر'
  }
};

const setLanguage = (language) => {
  if (language) {
    document.getElementById("false").remove();

  } else {
    document.getElementById("true").remove();

  }
  const lang =  language==true?'ar':'en';
  console.log(lang)
	const elements = document.querySelectorAll("[data-i18n]");	
	elements.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        console.log(translationKey)
        element.textContent = translations[lang][translationKey];
	});
	 
}

document.addEventListener('DOMContentLoaded', () => {
  
	const language = localStorage.getItem('language');
	setLanguage(language);
})



	// const language = localStorage.getItem('language');
  console.log(localStorage.getItem('check'))
	const language = "en";
  if  (localStorage.getItem('check')=='true'){
    	setLanguage(true);
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = true;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/css/main-rtl.css';
    link.media = 'all';
    head.appendChild(link)
    
  }else if(localStorage.getItem('check')== 'false'){
    // document.getElementById("true").remove();
   

    setLanguage(false);
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = false;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/css/main.min.css';
    link.media = 'all';
    head.appendChild(link);

  }
   else if(language=='ar')
{
	setLanguage(true);
  // document.getElementById("false").remove();

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = true;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/css/main-rtl.css';
    link.media = 'all';
    head.appendChild(link);
}else{
	setLanguage(false);

  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = false;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'assets/css/main.css';
  link.media = 'all';
  head.appendChild(link);
}
}); // JQuery end

