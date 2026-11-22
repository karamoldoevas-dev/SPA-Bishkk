/* ÉLORA SPA — translations & content data
   Languages: ru (default), ky, en */

const IMG = (id, w = 800, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/* ---------- Services ---------- */
const SERVICES = [
  {
    id: 's1', img: '1519823551278-64ac92734fb1', min: 60, price: 3500,
    name: { ru: 'Расслабляющий массаж', ky: 'Эс алдыруучу массаж', en: 'Relaxing Massage' },
    desc: {
      ru: 'Мягкие, обволакивающие техники снимают напряжение в теле и возвращают глубокое чувство покоя.',
      ky: 'Жумшак, бир калыптагы кыймылдар денедеги чыңалууну жоюп, терең тынчтык сезимин кайтарат.',
      en: 'Slow, enveloping techniques release tension from the body and restore a deep sense of calm.'
    }
  },
  {
    id: 's2', img: '1544161515-4ab6ce6db874', min: 75, price: 4200,
    name: { ru: 'Аромамассаж', ky: 'Ароматерапиялык массаж', en: 'Aromatherapy Massage' },
    desc: {
      ru: 'Индивидуально подобранная композиция эфирных масел гармонизирует тело и настроение.',
      ky: 'Сизге атайын тандалган эфир майларынын курамы дене менен маанайды шайкеш келтирет.',
      en: 'A blend of essential oils, chosen just for you, brings body and mood back into balance.'
    }
  },
  {
    id: 's3', img: '1600334089648-b0d9d3028eb2', min: 90, price: 5200,
    name: { ru: 'Массаж горячими камнями', ky: 'Ысык таш менен массаж', en: 'Hot Stone Massage' },
    desc: {
      ru: 'Тёплые базальтовые камни глубоко прогревают мышцы и снимают накопленную усталость.',
      ky: 'Жылуу базальт таштары булчуңдарды терең жылытып, топтолгон чарчоону басат.',
      en: 'Warm basalt stones melt deep muscle tension and ease accumulated fatigue.'
    }
  },
  {
    id: 's4', img: '1570172619644-dfd03ed5d881', min: 60, price: 3800,
    name: { ru: 'Уход за лицом', ky: 'Бет терисин кароо', en: 'Facial Treatments' },
    desc: {
      ru: 'Профессиональный уход на косметике премиум-класса: очищение, питание и сияние кожи.',
      ky: 'Премиум косметика менен кесипкөй кам көрүү: тазалоо, азыктандыруу жана жаркыраган тери.',
      en: 'Professional care with premium cosmetics: deep cleansing, nourishment and a natural glow.'
    }
  },
  {
    id: 's5', img: '1590439471364-192aa70c0b53', min: 90, price: 4500,
    name: { ru: 'Скраб и обёртывание', ky: 'Скраб жана ороо', en: 'Body Scrub & Body Wrap' },
    desc: {
      ru: 'Мягкое обновление кожи и питательное обёртывание для гладкости и упругости.',
      ky: 'Терини жумшак жаңылоо жана жылмакай, ийкемдүү болушу үчүн азыктандыруучу ороо.',
      en: 'Gentle exfoliation followed by a nourishing wrap for smooth, supple skin.'
    }
  },
  {
    id: 's6', img: '1596178060671-7a80dc8059ea', min: 60, price: 3200,
    name: { ru: 'Турецкий хаммам', ky: 'Түрк хаммамы', en: 'Turkish Hammam' },
    desc: {
      ru: 'Тёплый мрамор, пенный массаж и традиционный пилинг кесе — древний ритуал очищения.',
      ky: 'Жылуу мрамор, көбүк массажы жана салттуу кесе-пилинг — тазалануунун байыркы ритуалы.',
      en: 'Warm marble, foam massage and traditional kese exfoliation — an ancient purifying ritual.'
    }
  },
  {
    id: 's7', img: '1583416750470-965b2707b355', min: 120, price: 2500,
    name: { ru: 'Сауна и паровая', ky: 'Сауна жана буу бөлмөсү', en: 'Sauna & Steam Room' },
    desc: {
      ru: 'Финская сауна и мягкий пар с травяными ароматами для детокса и восстановления.',
      ky: 'Чөп жыттары аралашкан фин саунасы жана жумшак буу — детокс жана калыбына келүү үчүн.',
      en: 'A Finnish sauna and gentle herbal steam to detoxify, warm and restore.'
    }
  },
  {
    id: 's8', img: '1540555700478-4be289fbecef', min: 120, price: 11000, forTwo: true,
    name: { ru: 'SPA-ритуал для двоих', ky: 'Экөө үчүн SPA-ритуал', en: 'Couples SPA Ritual' },
    desc: {
      ru: 'Приватная VIP-комната, синхронный массаж, хаммам и чайная церемония для двоих.',
      ky: 'Жеке VIP-бөлмө, синхрондук массаж, хаммам жана экөө үчүн чай аземи.',
      en: 'A private VIP suite, side-by-side massage, hammam and a tea ceremony for two.'
    }
  },
  {
    id: 's9', img: '1630595633877-9918ee257288', min: 360, price: 15000,
    name: { ru: 'SPA на целый день', ky: 'Толук күндүк SPA', en: 'Full Day SPA Experience' },
    desc: {
      ru: 'Шесть часов заботы: хаммам, массаж, уход за лицом, бассейн и лёгкий обед.',
      ky: 'Алты саат кам көрүү: хаммам, массаж, бетти кароо, бассейн жана жеңил түшкү тамак.',
      en: 'Six hours of care: hammam, massage, facial, pool access and a light lunch.'
    }
  }
];

/* ---------- Packages ---------- */
const PACKAGES = [
  {
    id: 'p1', name: 'Serenity', price: 7900,
    tag: { ru: 'Индивидуально', ky: 'Жекече', en: 'Individual' },
    dur: { ru: '3 часа', ky: '3 саат', en: '3 hours' },
    items: {
      ru: ['Хаммам с пенным массажем', 'Расслабляющий массаж, 60 мин', 'Бассейн и сауна', 'Травяной чай и десерт'],
      ky: ['Көбүк массажы менен хаммам', 'Эс алдыруучу массаж, 60 мүн', 'Бассейн жана сауна', 'Чөп чайы жана десерт'],
      en: ['Hammam with foam massage', 'Relaxing massage, 60 min', 'Pool & sauna access', 'Herbal tea & dessert']
    }
  },
  {
    id: 'p2', name: 'Together', price: 16500, forTwo: true, featured: true,
    tag: { ru: 'Для двоих', ky: 'Экөө үчүн', en: 'For couples' },
    dur: { ru: '3 часа', ky: '3 саат', en: '3 hours' },
    items: {
      ru: ['Приватная VIP-комната', 'Синхронный аромамассаж, 75 мин', 'Хаммам для двоих', 'Чайная церемония и фрукты'],
      ky: ['Жеке VIP-бөлмө', 'Синхрондук ароматерапиялык массаж, 75 мүн', 'Экөө үчүн хаммам', 'Чай аземи жана жемиштер'],
      en: ['Private VIP suite', 'Side-by-side aromatherapy massage, 75 min', 'Hammam for two', 'Tea ceremony & fresh fruit']
    }
  },
  {
    id: 'p3', name: 'Weekend Escape', price: 19500,
    tag: { ru: 'Выходные', ky: 'Дем алыш', en: 'Weekend' },
    dur: { ru: '2 дня', ky: '2 күн', en: '2 days' },
    items: {
      ru: ['Два визита: суббота и воскресенье', 'Массаж горячими камнями, 90 мин', 'Уход за лицом, 60 мин', 'Скраб и обёртывание', 'Безлимитная термальная зона'],
      ky: ['Эки жолу келүү: ишемби жана жекшемби', 'Ысык таш менен массаж, 90 мүн', 'Бет терисин кароо, 60 мүн', 'Скраб жана ороо', 'Чексиз термалдык зона'],
      en: ['Two visits: Saturday & Sunday', 'Hot stone massage, 90 min', 'Facial treatment, 60 min', 'Body scrub & wrap', 'Unlimited thermal area']
    }
  },
  {
    id: 'p4', name: 'Signature Day', price: 18000,
    tag: { ru: 'Целый день', ky: 'Толук күн', en: 'Full day' },
    dur: { ru: '6 часов', ky: '6 саат', en: '6 hours' },
    items: {
      ru: ['Хаммам, скраб и обёртывание', 'Массаж на выбор, 90 мин', 'Премиальный уход за лицом', 'Бассейн, сауна и лаунж', 'Лёгкий обед от шефа'],
      ky: ['Хаммам, скраб жана ороо', 'Каалаган массаж, 90 мүн', 'Премиум бетти кароо', 'Бассейн, сауна жана лаунж', 'Шефтен жеңил түшкү тамак'],
      en: ['Hammam, scrub & wrap', 'Massage of your choice, 90 min', 'Premium facial', 'Pool, sauna & lounge', 'Light lunch by our chef']
    }
  }
];

/* ---------- Gallery ---------- */
const GALLERY = [
  // Order matters: it tiles a 4 × 4 grid exactly on desktop (wide = 2 cols, tall = 2 rows, xtall = 3 rows)
  { img: '1560750588-73207b1ef5b8', cls: 'g-wide', cap: { ru: 'Лаунж у бассейна', ky: 'Бассейн жанындагы лаунж', en: 'Poolside lounge' } },
  { img: '1582719478250-c89cae4dc85b', cls: 'g-tall', cap: { ru: 'Массажные кабинеты', ky: 'Массаж бөлмөлөрү', en: 'Massage suites' } },
  { img: '1620733723572-11c53f73a416', cls: '', cap: { ru: 'Свечи и ароматы', ky: 'Шамдар жана жыттар', en: 'Candles & scents' } },
  { img: '1572331165267-854da2b10ccc', cls: '', cap: { ru: 'Бассейн с подогревом', ky: 'Жылытылган бассейн', en: 'Heated swimming pool' } },
  { img: '1583416750470-965b2707b355', cls: '', cap: { ru: 'Финская сауна', ky: 'Фин саунасы', en: 'Finnish sauna' } },
  { img: '1515377905703-c4788e51af15', cls: 'g-xtall', cap: { ru: 'Эфирные масла', ky: 'Эфир майлары', en: 'Essential oils' } },
  { img: '1505577058444-a3dab90d4253', cls: 'g-wide', cap: { ru: 'Хаммам', ky: 'Хаммам', en: 'Hammam' } },
  { img: '1552693673-1bf958298935', cls: 'g-tall', cap: { ru: 'Кабинет косметолога', ky: 'Косметолог бөлмөсү', en: 'Beauty treatment room' } },
  { img: '1600210492486-724fe5c67fb0', cls: 'g-wide', cap: { ru: 'Зона отдыха', ky: 'Эс алуу зонасы', en: 'Relaxation lounge' } }
];

/* ---------- UI strings ---------- */
const I18N = {
  ru: {
    'meta.title': 'ÉLORA SPA — Пространство вашего спокойствия | Бишкек',
    'meta.description': 'ÉLORA SPA — премиальный SPA и wellness-центр в центре Бишкека. Массаж, хаммам, уход за лицом, SPA-программы для двоих. Онлайн-запись.',
    'a11y.skip': 'Перейти к содержанию',
    'nav.home': 'Главная', 'nav.about': 'О нас', 'nav.services': 'Услуги', 'nav.gallery': 'Галерея',
    'nav.prices': 'Цены', 'nav.contact': 'Контакты', 'nav.book': 'Записаться', 'nav.menu': 'Меню',

    'hero.eyebrow': 'Бишкек · SPA & Wellness',
    'hero.title': 'Пространство вашего спокойствия',
    'hero.text': 'Бутик-спа в самом сердце Бишкека, где время замедляется. Авторские ритуалы, тёплый свет и тишина — только для вас.',
    'hero.cta1': 'Смотреть услуги',
    'hero.cta2': 'Записаться на приём',
    'hero.hours': 'Ежедневно 09:00 – 22:00',
    'hero.scroll': 'Листайте',

    'about.eyebrow': 'О нас',
    'about.title': 'Философия <em>тишины</em>',
    'about.lead': 'ÉLORA — премиальный wellness-центр, созданный как убежище от городского ритма. Здесь каждая деталь — от света до текстуры полотенец — продумана ради вашего покоя.',
    'about.text': 'Мы соединяем восточные традиции омовения с современными европейскими техниками ухода. Каждый ритуал начинается с беседы: мастер узнаёт ваше самочувствие и подбирает программу именно для вас.',
    'about.badge': 'лет опыта у каждого мастера',
    'about.alt1': 'Гостья отдыхает в каменной ванне у панорамного окна',
    'about.alt2': 'Флакон эфирного масла в мягком солнечном свете',
    'about.stat1': 'сертифицированных мастеров',
    'about.stat2': 'пространства покоя',
    'about.stat3': 'без выходных',
    'about.f1t': 'Наша философия',
    'about.f1d': 'Забота без спешки: мы оставляем время между сеансами, чтобы вы никогда не встретили очередь.',
    'about.f2t': 'Профессиональные мастера',
    'about.f2d': 'Сертифицированные терапевты с опытом от 7 лет, прошедшие обучение в Турции, Таиланде и на Бали.',
    'about.f3t': 'Индивидуальный подход',
    'about.f3d': 'Программа, сила давления и аромат подбираются лично для вас после короткой консультации.',
    'about.f4t': 'Атмосфера покоя',
    'about.f4d': 'Приглушённый свет, натуральные материалы, тишина и тёплые ароматы — с первой минуты.',
    'about.f5t': 'Премиальная косметика',
    'about.f5d': 'Только профессиональные органические линии из Франции и Италии и масла холодного отжима.',
    'about.f6t': 'Приватность и комфорт',
    'about.f6d': 'Отдельные кабинеты, VIP-комнаты для двоих и полная конфиденциальность каждого гостя.',

    'quote.text': 'Настоящая роскошь — это время, которое вы посвящаете себе.',
    'quote.author': 'Философия ÉLORA',

    'services.eyebrow': 'Ритуалы и услуги',
    'services.title': 'Искусство <em>заботы</em>',
    'services.text': 'Девять авторских ритуалов — от классического массажа до целого дня в SPA. Каждый начинается с травяного чая и завершается отдыхом в лаунже.',
    'services.book': 'Записаться',

    'gallery.eyebrow': 'Галерея',
    'gallery.title': 'Пространство <em>ÉLORA</em>',
    'gallery.text': '1 200 квадратных метров тишины: термальная зона, бассейн, приватные кабинеты и лаунж.',
    'gallery.open': 'Открыть фото',
    'gallery.close': 'Закрыть', 'gallery.prev': 'Предыдущее фото', 'gallery.next': 'Следующее фото',

    'prices.eyebrow': 'Программы и цены',
    'prices.title': 'SPA-<em>программы</em>',
    'prices.text': 'Готовые программы, в которых мы собрали самое любимое нашими гостями. Все цены указаны в сомах и включают травяной чай, халат и тапочки.',
    'prices.popular': 'Выбор гостей',
    'prices.choose': 'Выбрать программу',
    'prices.duration': 'Длительность',
    'prices.note': 'Подарочные сертификаты доступны на любую сумму и любую программу.',

    'price.forTwo': 'за двоих',
    'currency': 'сом',
    'unit.min': 'мин',

    'booking.eyebrow': 'Онлайн-запись',
    'booking.title': 'Забронируйте <em>время для себя</em>',
    'booking.text': 'Оставьте заявку — администратор перезвонит в течение 15 минут, чтобы подтвердить визит.',
    'booking.call': 'Предпочитаете позвонить?',
    'booking.whatsapp': 'Написать в WhatsApp',
    'booking.note': 'Пожалуйста, приходите за 15 минут до начала ритуала. Бесплатная отмена — не позднее чем за 12 часов.',

    'form.name': 'Имя и фамилия', 'form.namePh': 'Айгерим Асанова',
    'form.phone': 'Телефон', 'form.service': 'Услуга', 'form.date': 'Дата', 'form.time': 'Время',
    'form.message': 'Пожелания', 'form.optional': '(необязательно)',
    'form.messagePh': 'Например: предпочитаю мастера-женщину, аллергия на цитрусовые, особый повод…',
    'form.selectService': 'Выберите услугу', 'form.selectTime': 'Выберите время',
    'form.groupServices': 'Услуги', 'form.groupPackages': 'Программы',
    'form.submit': 'Забронировать',
    'form.consent': 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных.',
    'err.required': 'Пожалуйста, заполните это поле',
    'err.name': 'Введите имя — минимум 2 буквы',
    'err.phone': 'Введите корректный номер, например +996 555 123 456',
    'err.service': 'Выберите услугу или программу',
    'err.date': 'Выберите дату не раньше сегодняшней (до 90 дней вперёд)',
    'err.time': 'Выберите время',
    'err.timePast': 'Это время уже прошло — выберите другое',

    'success.title': 'Спасибо, {name}!',
    'success.text': 'Ваша заявка принята. Администратор позвонит на номер {phone} в течение 15 минут, чтобы подтвердить визит.',
    'success.whatsapp': 'Подтвердить в WhatsApp',
    'success.new': 'Новая запись',
    'success.waMsg': 'Здравствуйте! Хочу подтвердить запись в ÉLORA SPA: {service}, {date} в {time}. Имя: {name}, телефон: {phone}.',
    'wa.default': 'Здравствуйте! Хочу записаться в ÉLORA SPA.',

    'contact.eyebrow': 'Контакты',
    'contact.title': 'Как нас <em>найти</em>',
    'contact.text': 'Мы находимся в центре Бишкека, в нескольких минутах от площади Ала-Тоо. Для гостей — бесплатная охраняемая парковка.',
    'contact.addressLabel': 'Адрес',
    'contact.address': 'пр. Чуй, 125, Бишкек, Кыргызстан',
    'contact.addressShort': 'пр. Чуй, 125, Бишкек',
    'contact.phoneLabel': 'Телефон',
    'contact.hoursLabel': 'Часы работы',
    'contact.hours': 'Понедельник – воскресенье, 09:00 – 22:00',
    'contact.call': 'Позвонить',
    'contact.whatsapp': 'WhatsApp',
    'contact.directions': 'Проложить маршрут',
    'contact.mapTitle': 'Карта: ÉLORA SPA, пр. Чуй, 125, Бишкек',

    'footer.desc': 'Бутик-спа в центре Бишкека. Авторские ритуалы, приватность и тишина — пространство, где время принадлежит вам.',
    'footer.nav': 'Навигация', 'footer.services': 'Услуги', 'footer.contact': 'Контакты',
    'footer.rights': 'Все права защищены.', 'footer.top': 'Наверх'
  },

  ky: {
    'meta.title': 'ÉLORA SPA — Сиздин тынчтык мейкиндигиңиз | Бишкек',
    'meta.description': 'ÉLORA SPA — Бишкектин борборундагы премиум SPA жана wellness-борбор. Массаж, хаммам, бетти кароо, экөө үчүн SPA-программалар. Онлайн жазылуу.',
    'a11y.skip': 'Мазмунга өтүү',
    'nav.home': 'Башкы бет', 'nav.about': 'Биз жөнүндө', 'nav.services': 'Кызматтар', 'nav.gallery': 'Галерея',
    'nav.prices': 'Баалар', 'nav.contact': 'Байланыш', 'nav.book': 'Жазылуу', 'nav.menu': 'Меню',

    'hero.eyebrow': 'Бишкек · SPA & Wellness',
    'hero.title': 'Сиздин тынчтык мейкиндигиңиз',
    'hero.text': 'Бишкектин так жүрөгүндөгү бутик-спа — бул жерде убакыт жайлайт. Авторлук ритуалдар, жылуу жарык жана жымжырттык — сиз үчүн гана.',
    'hero.cta1': 'Кызматтарды көрүү',
    'hero.cta2': 'Убакытка жазылуу',
    'hero.hours': 'Күн сайын 09:00 – 22:00',
    'hero.scroll': 'Ылдый',

    'about.eyebrow': 'Биз жөнүндө',
    'about.title': 'Тынчтыктын <em>философиясы</em>',
    'about.lead': 'ÉLORA — шаардын ызы-чуусунан баш калкалоочу жай катары түзүлгөн премиум wellness-борбор. Бул жерде ар бир деталь — жарыктан баштап сүлгүлөрдүн текстурасына чейин — сиздин тынчтыгыңыз үчүн ойлонулган.',
    'about.text': 'Биз чыгыштын жуунуу салттарын заманбап европалык кам көрүү ыкмалары менен айкалыштырабыз. Ар бир ритуал маектен башталат: адис сиздин абалыңызды билип, программаны так сизге ылайыктап тандайт.',
    'about.badge': 'ар бир адистин тажрыйбасы',
    'about.alt1': 'Конок панорамалык терезенин жанындагы таш ваннада эс алууда',
    'about.alt2': 'Жумшак күн нурундагы эфир майынын шишеси',
    'about.stat1': 'сертификатталган адис',
    'about.stat2': 'тынчтык аянты',
    'about.stat3': 'дем алышсыз',
    'about.f1t': 'Биздин философия',
    'about.f1d': 'Шашылбаган кам көрүү: кезекке туш болбошуңуз үчүн сеанстардын ортосунда убакыт калтырабыз.',
    'about.f2t': 'Кесипкөй адистер',
    'about.f2d': 'Түркия, Таиланд жана Балиде окуган, 7 жылдан ашык тажрыйбасы бар сертификатталган терапевттер.',
    'about.f3t': 'Жеке мамиле',
    'about.f3d': 'Кыскача кеңешмеден кийин программа, басым күчү жана жыт сизге жекече тандалат.',
    'about.f4t': 'Тынч атмосфера',
    'about.f4d': 'Күңүрт жарык, табигый материалдар, жымжырттык жана жылуу жыттар — биринчи мүнөттөн тартып.',
    'about.f5t': 'Сапаттуу каражаттар',
    'about.f5d': 'Франция менен Италиянын кесипкөй органикалык линиялары жана муздак ыкма менен сыгылган майлар гана.',
    'about.f6t': 'Купуялык жана ыңгайлуулук',
    'about.f6d': 'Өзүнчө бөлмөлөр, экөө үчүн VIP-бөлмөлөр жана ар бир коноктун толук купуялуулугу.',

    'quote.text': 'Чыныгы кымбаттык — өзүңүзгө арнаган убакыт.',
    'quote.author': 'ÉLORA философиясы',

    'services.eyebrow': 'Ритуалдар жана кызматтар',
    'services.title': 'Кам көрүү <em>өнөрү</em>',
    'services.text': 'Классикалык массаждан толук күндүк SPAга чейин тогуз авторлук ритуал. Ар бири чөп чайы менен башталып, лаунжда эс алуу менен аяктайт.',
    'services.book': 'Жазылуу',

    'gallery.eyebrow': 'Галерея',
    'gallery.title': '<em>ÉLORA</em> мейкиндиги',
    'gallery.text': '1 200 чарчы метр тынчтык: термалдык зона, бассейн, жеке бөлмөлөр жана лаунж.',
    'gallery.open': 'Сүрөттү ачуу',
    'gallery.close': 'Жабуу', 'gallery.prev': 'Мурунку сүрөт', 'gallery.next': 'Кийинки сүрөт',

    'prices.eyebrow': 'Программалар жана баалар',
    'prices.title': 'SPA-<em>программалар</em>',
    'prices.text': 'Коноктордун эң жакшы көргөндөрүн бириктирген даяр программалар. Бардык баалар сом менен көрсөтүлгөн жана чөп чайын, халат менен тапочканы камтыйт.',
    'prices.popular': 'Коноктордун тандоосу',
    'prices.choose': 'Программаны тандоо',
    'prices.duration': 'Узактыгы',
    'prices.note': 'Белек сертификаттары каалаган сумма жана каалаган программа үчүн жеткиликтүү.',

    'price.forTwo': 'экөө үчүн',
    'currency': 'сом',
    'unit.min': 'мүн',

    'booking.eyebrow': 'Онлайн жазылуу',
    'booking.title': 'Өзүңүз үчүн <em>убакыт брондоңуз</em>',
    'booking.text': 'Өтүнмө калтырыңыз — администратор келүүңүздү ырастоо үчүн 15 мүнөттүн ичинде кайра чалат.',
    'booking.call': 'Чалганды артык көрөсүзбү?',
    'booking.whatsapp': 'WhatsApp аркылуу жазуу',
    'booking.note': 'Ритуал башталаардан 15 мүнөт мурун келиңиз. Акысыз жокко чыгаруу — кеминде 12 саат мурун.',

    'form.name': 'Аты-жөнүңүз', 'form.namePh': 'Айгерим Асанова',
    'form.phone': 'Телефон номери', 'form.service': 'Кызмат', 'form.date': 'Күнү', 'form.time': 'Убактысы',
    'form.message': 'Кошумча каалоолор', 'form.optional': '(милдеттүү эмес)',
    'form.messagePh': 'Мисалы: аял адисти каалайм, цитруска аллергиям бар, өзгөчө майрам…',
    'form.selectService': 'Кызматты тандаңыз', 'form.selectTime': 'Убакытты тандаңыз',
    'form.groupServices': 'Кызматтар', 'form.groupPackages': 'Программалар',
    'form.submit': 'Азыр брондоо',
    'form.consent': 'Баскычты басуу менен жеке маалыматтарыңызды иштетүүгө макулдук бересиз.',
    'err.required': 'Бул талааны толтуруңуз',
    'err.name': 'Атыңызды жазыңыз — кеминде 2 тамга',
    'err.phone': 'Туура номер жазыңыз, мисалы +996 555 123 456',
    'err.service': 'Кызматты же программаны тандаңыз',
    'err.date': 'Бүгүндөн баштап күн тандаңыз (90 күнгө чейин)',
    'err.time': 'Убакытты тандаңыз',
    'err.timePast': 'Бул убакыт өтүп кетти — башкасын тандаңыз',

    'success.title': 'Рахмат, {name}!',
    'success.text': 'Өтүнмөңүз кабыл алынды. Администратор ырастоо үчүн 15 мүнөттүн ичинде {phone} номерине чалат.',
    'success.whatsapp': 'WhatsApp аркылуу ырастоо',
    'success.new': 'Жаңы жазылуу',
    'success.waMsg': 'Саламатсызбы! ÉLORA SPAга жазылуумду ырастагым келет: {service}, {date}, саат {time}. Атым: {name}, телефон: {phone}.',
    'wa.default': 'Саламатсызбы! ÉLORA SPAга жазылгым келет.',

    'contact.eyebrow': 'Байланыш',
    'contact.title': 'Бизди кантип <em>табасыз</em>',
    'contact.text': 'Биз Бишкектин борборундабыз, Ала-Тоо аянтынан бир нече мүнөттүк аралыкта. Коноктор үчүн акысыз кайтарылган унаа токтотуучу жай бар.',
    'contact.addressLabel': 'Дарек',
    'contact.address': 'Чүй проспекти, 125, Бишкек, Кыргызстан',
    'contact.addressShort': 'Чүй пр., 125, Бишкек',
    'contact.phoneLabel': 'Телефон',
    'contact.hoursLabel': 'Иш убактысы',
    'contact.hours': 'Дүйшөмбү – жекшемби, 09:00 – 22:00',
    'contact.call': 'Чалуу',
    'contact.whatsapp': 'WhatsApp',
    'contact.directions': 'Жол көрсөтүү',
    'contact.mapTitle': 'Карта: ÉLORA SPA, Чүй проспекти, 125, Бишкек',

    'footer.desc': 'Бишкектин борборундагы бутик-спа. Авторлук ритуалдар, купуялык жана тынчтык — убакыт сизге таандык мейкиндик.',
    'footer.nav': 'Навигация', 'footer.services': 'Кызматтар', 'footer.contact': 'Байланыш',
    'footer.rights': 'Бардык укуктар корголгон.', 'footer.top': 'Жогору'
  },

  en: {
    'meta.title': 'ÉLORA SPA — Your Space of Peace | Bishkek',
    'meta.description': 'ÉLORA SPA is a premium spa and wellness centre in central Bishkek. Massage, hammam, facials and couples rituals. Book online.',
    'a11y.skip': 'Skip to content',
    'nav.home': 'Home', 'nav.about': 'About Us', 'nav.services': 'Services', 'nav.gallery': 'Gallery',
    'nav.prices': 'Prices', 'nav.contact': 'Contact', 'nav.book': 'Book', 'nav.menu': 'Menu',

    'hero.eyebrow': 'Bishkek · Spa & Wellness',
    'hero.title': 'Your Space of Peace',
    'hero.text': 'A boutique spa in the heart of Bishkek, where time slows down. Signature rituals, warm light and quiet — reserved for you.',
    'hero.cta1': 'Explore Our Services',
    'hero.cta2': 'Book an Appointment',
    'hero.hours': 'Daily 09:00 – 22:00',
    'hero.scroll': 'Scroll',

    'about.eyebrow': 'About us',
    'about.title': 'A philosophy of <em>stillness</em>',
    'about.lead': 'ÉLORA is a premium wellness sanctuary created as a refuge from the rhythm of the city. Every detail — from the light to the texture of the linen — is considered for your peace of mind.',
    'about.text': 'We bring together Eastern bathing traditions and modern European techniques. Every ritual begins with a conversation: your therapist learns how you feel and tailors the programme to you.',
    'about.badge': 'years of experience, every therapist',
    'about.alt1': 'A guest relaxing in a stone bathtub beside a panoramic window',
    'about.alt2': 'A bottle of essential oil in soft sunlight',
    'about.stat1': 'certified therapists',
    'about.stat2': 'of tranquil space',
    'about.stat3': 'open every day',
    'about.f1t': 'Our philosophy',
    'about.f1d': 'Unhurried care: we leave time between sessions so you never meet a queue.',
    'about.f2t': 'Expert therapists',
    'about.f2d': 'Certified therapists with 7+ years of experience, trained in Türkiye, Thailand and Bali.',
    'about.f3t': 'Individual approach',
    'about.f3d': 'Programme, pressure and aroma are chosen for you after a short consultation.',
    'about.f4t': 'A calming atmosphere',
    'about.f4d': 'Soft light, natural materials, silence and warm scents from the very first minute.',
    'about.f5t': 'High-quality products',
    'about.f5d': 'Only professional organic lines from France and Italy, and cold-pressed oils.',
    'about.f6t': 'Privacy & comfort',
    'about.f6d': 'Private treatment rooms, VIP suites for two and complete confidentiality for every guest.',

    'quote.text': 'True luxury is the time you give to yourself.',
    'quote.author': 'The ÉLORA philosophy',

    'services.eyebrow': 'Rituals & services',
    'services.title': 'The art of <em>care</em>',
    'services.text': 'Nine signature rituals — from classic massage to a full day at the spa. Each begins with herbal tea and ends with rest in the lounge.',
    'services.book': 'Book',

    'gallery.eyebrow': 'Gallery',
    'gallery.title': 'Inside <em>ÉLORA</em>',
    'gallery.text': '1,200 square metres of quiet: a thermal area, pool, private treatment rooms and lounge.',
    'gallery.open': 'Open photo',
    'gallery.close': 'Close', 'gallery.prev': 'Previous photo', 'gallery.next': 'Next photo',

    'prices.eyebrow': 'Packages & prices',
    'prices.title': 'Spa <em>packages</em>',
    'prices.text': 'Curated programmes that bring together our guests’ favourites. All prices are in Kyrgyz som and include herbal tea, robe and slippers.',
    'prices.popular': 'Guest favourite',
    'prices.choose': 'Choose package',
    'prices.duration': 'Duration',
    'prices.note': 'Gift certificates are available for any amount and any programme.',

    'price.forTwo': 'for two',
    'currency': 'KGS',
    'unit.min': 'min',

    'booking.eyebrow': 'Online booking',
    'booking.title': 'Reserve <em>time for yourself</em>',
    'booking.text': 'Send a request and our concierge will call you back within 15 minutes to confirm your visit.',
    'booking.call': 'Prefer to call?',
    'booking.whatsapp': 'Message on WhatsApp',
    'booking.note': 'Please arrive 15 minutes before your ritual. Free cancellation up to 12 hours in advance.',

    'form.name': 'Full name', 'form.namePh': 'Aigerim Asanova',
    'form.phone': 'Phone number', 'form.service': 'Service', 'form.date': 'Date', 'form.time': 'Time',
    'form.message': 'Additional message', 'form.optional': '(optional)',
    'form.messagePh': 'E.g. preferred therapist, allergies, a special occasion…',
    'form.selectService': 'Select a service', 'form.selectTime': 'Select a time',
    'form.groupServices': 'Services', 'form.groupPackages': 'Packages',
    'form.submit': 'Book Now',
    'form.consent': 'By booking you agree to the processing of your personal data.',
    'err.required': 'Please fill in this field',
    'err.name': 'Please enter your name — at least 2 letters',
    'err.phone': 'Enter a valid number, e.g. +996 555 123 456',
    'err.service': 'Please choose a service or package',
    'err.date': 'Choose a date from today, up to 90 days ahead',
    'err.time': 'Please choose a time',
    'err.timePast': 'This time has already passed — please choose another',

    'success.title': 'Thank you, {name}!',
    'success.text': 'Your request has been received. Our concierge will call {phone} within 15 minutes to confirm your visit.',
    'success.whatsapp': 'Confirm via WhatsApp',
    'success.new': 'New booking',
    'success.waMsg': 'Hello! I would like to confirm my booking at ÉLORA SPA: {service}, {date} at {time}. Name: {name}, phone: {phone}.',
    'wa.default': 'Hello! I would like to book a visit to ÉLORA SPA.',

    'contact.eyebrow': 'Contact',
    'contact.title': 'How to <em>find us</em>',
    'contact.text': 'We are in central Bishkek, a few minutes from Ala-Too Square. Complimentary secure parking for guests.',
    'contact.addressLabel': 'Address',
    'contact.address': '125 Chuy Avenue, Bishkek, Kyrgyzstan',
    'contact.addressShort': '125 Chuy Avenue, Bishkek',
    'contact.phoneLabel': 'Phone',
    'contact.hoursLabel': 'Opening hours',
    'contact.hours': 'Monday – Sunday, 09:00 – 22:00',
    'contact.call': 'Call us',
    'contact.whatsapp': 'WhatsApp',
    'contact.directions': 'Get directions',
    'contact.mapTitle': 'Map: ÉLORA SPA, 125 Chuy Avenue, Bishkek',

    'footer.desc': 'A boutique spa in central Bishkek. Signature rituals, privacy and quiet — a space where time belongs to you.',
    'footer.nav': 'Navigate', 'footer.services': 'Services', 'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.', 'footer.top': 'Back to top'
  }
};
