import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/files/4d837275-42a9-4ff7-8699-cf2e6416b431.jpg";
const MASSAGE_IMG = "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/files/5f05955b-f661-4280-8595-4659bafcd154.jpg";
const HIRUDO_IMG = "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/files/78da9f2a-0e65-49dd-a210-dfb640de8985.jpg";
const PRICE_PHOTO = "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/bucket/f0772047-f61f-4ac8-8d7e-23e3497c8e08.jpg";

const GALLERY = [
  {
    url: "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/bucket/f0772047-f61f-4ac8-8d7e-23e3497c8e08.jpg",
    caption: "Выдача удостоверения выпускнику",
  },
  {
    url: "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/bucket/4da7ed81-0bbd-457a-8402-e01505b8fdf3.jpg",
    caption: "Вручение сертификата",
  },
  {
    url: "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/bucket/376189a2-806f-4ccd-bc8b-f042a1898d30.jpg",
    caption: "Практическое занятие",
  },
  {
    url: "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/bucket/788fec8c-4f8f-4b85-a64c-1fe6692253da.jpg",
    caption: "Работа с пациентом",
  },
  {
    url: "https://cdn.poehali.dev/projects/9110f643-73a0-48e7-bd16-82bb950d8c0a/bucket/c30877c0-67ce-428e-9d13-46d066e5ad67.jpg",
    caption: "Реабилитационный сеанс",
  },
];

const priceList = [
  {
    title: "Консультация / диагностика",
    items: [{ duration: null, price: "1 500 руб" }],
  },
  {
    title: "Общий разминающий массаж",
    items: [
      { duration: "40 мин", price: "1 300 руб" },
      { duration: "60 мин", price: "2 000 руб" },
    ],
  },
  {
    title: "Миофасциальный триггерный массаж",
    items: [
      { duration: "40 мин", price: "1 200 руб" },
      { duration: "60 мин", price: "1 800 руб" },
    ],
  },
  {
    title: "Висцеральный массаж",
    items: [
      { duration: "40 мин", price: "1 500 руб" },
      { duration: "60 мин", price: "2 000 руб" },
    ],
  },
  {
    title: "Локальный массаж ШВЗ/спина, ноги",
    items: [
      { duration: "30 мин", price: "850 руб" },
      { duration: "40 мин", price: "1 200 руб" },
    ],
  },
  {
    title: "Массаж Гуаша для лица и тела",
    items: [
      { duration: "30 мин", price: "850 руб" },
      { duration: "40 мин", price: "1 200 руб" },
    ],
  },
];

const services = [
  {
    id: 1,
    icon: "Hand",
    title: "Массаж",
    desc: "Общий разминающий, миофасциальный, висцеральный, локальный и массаж Гуаша. Снимаю мышечное напряжение, восстанавливаю подвижность, устраняю боль.",
    price: "от 850 руб",
    duration: "30–60 мин",
    color: "var(--clay)",
    img: MASSAGE_IMG,
  },
  {
    id: 2,
    icon: "Activity",
    title: "ЛФК",
    desc: "Лечебная физкультура для восстановления после травм и операций, при заболеваниях позвоночника и суставов. Индивидуальные программы.",
    price: "от 3 000 ₽",
    duration: "45–60 мин",
    color: "var(--moss)",
    img: HERO_IMG,
  },
  {
    id: 3,
    icon: "GraduationCap",
    title: "Обучение массажу",
    desc: "Практические курсы для начинающих и повышение квалификации для специалистов. Выдаю сертификат по окончании обучения.",
    price: "от 15 000 ₽",
    duration: "Курс 5–10 занятий",
    color: "var(--bark)",
    img: HERO_IMG,
  },
  {
    id: 4,
    icon: "Droplets",
    title: "Гирудотерапия",
    desc: "Лечение медицинскими пиявками. Улучшает кровообращение, снимает воспаление, нормализует давление. Только сертифицированные пиявки.",
    price: "от 3 500 ₽",
    duration: "40–60 мин",
    color: "var(--sage)",
    img: HIRUDO_IMG,
  },
];

const reviews = [
  {
    name: "Марина К.",
    text: "После курса ЛФК прошла боль в спине, которая мучила меня три года. Очень внимательный и профессиональный подход!",
    service: "ЛФК",
    stars: 5,
  },
  {
    name: "Алексей В.",
    text: "Делаю расслабляющий массаж раз в месяц — это просто спасение от стресса. Атмосфера очень уютная, сразу чувствуешь себя лучше.",
    service: "Массаж",
    stars: 5,
  },
  {
    name: "Наталья С.",
    text: "Прошла курс гирудотерапии при варикозе. Ощутимый результат уже после 3-го сеанса. Рекомендую всем!",
    service: "Гирудотерапия",
    stars: 5,
  },
  {
    name: "Дмитрий Р.",
    text: "Обучался технике классического массажа. Очень структурированная программа, много практики. Теперь сам работаю с клиентами.",
    service: "Обучение",
    stars: 5,
  },
];

export default function Index() {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [sent, setSent] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-linen font-golos">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-linen/90 backdrop-blur-md border-b border-clay/20">
        <span className="font-cormorant text-xl font-semibold text-bark tracking-wide">
          Артамонова Екатерина
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-bark/70">
          <a href="#services" className="hover:text-moss transition-colors">Услуги</a>
          <a href="#price" className="hover:text-moss transition-colors">Прайс</a>
          <a href="#about" className="hover:text-moss transition-colors">О мастере</a>
          <a href="#gallery" className="hover:text-moss transition-colors">Галерея</a>
          <a href="#reviews" className="hover:text-moss transition-colors">Отзывы</a>
          <a href="#booking" className="hover:text-moss transition-colors">Запись</a>
        </div>
        <a href="#booking"
          className="bg-moss text-warm-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity font-golos">
          Записаться
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
          <div className="relative w-full h-full">
            <img
              src={MASSAGE_IMG}
              alt="Массаж"
              className="w-full h-full object-cover opacity-40 md:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/80 to-transparent md:via-linen/40" />
          </div>
        </div>

        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border border-clay/20 hidden md:block" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-clay/10 hidden md:block" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
          <div className="max-w-xl">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-clay/15 text-clay text-xs font-medium px-4 py-2 rounded-full mb-6">
              <span>🌿</span>
              <span>Сертифицированный мастер · Массаж и ЛФК</span>
            </div>
            <h1 className="animate-fade-up delay-100 font-cormorant text-5xl md:text-7xl font-light text-bark leading-none mb-6">
              Здоровье через<br />
              <span className="italic text-moss">прикосновение</span>
            </h1>
            <p className="animate-fade-up delay-200 text-bark/70 text-lg leading-relaxed mb-10 max-w-md">
              Массаж, ЛФК, гирудотерапия и обучение. Более 10 лет я помогаю людям обрести лёгкость в теле и покой в душе.
            </p>
            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <a href="#booking"
                className="bg-moss text-warm-white px-8 py-4 rounded-full text-base hover:opacity-90 transition-all hover:scale-105 inline-flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                Записаться на сеанс
              </a>
              <a href="#price"
                className="border border-bark/30 text-bark px-8 py-4 rounded-full text-base hover:border-moss hover:text-moss transition-all inline-flex items-center gap-2">
                <Icon name="ChevronDown" size={18} />
                Посмотреть прайс
              </a>
            </div>

            <div className="animate-fade-up delay-400 flex gap-8 mt-14">
              {[["10+", "лет опыта"], ["500+", "клиентов"], ["4", "направления"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-4xl font-semibold text-moss">{num}</div>
                  <div className="text-bark/60 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="divider-leaf font-cormorant text-clay text-lg italic mb-4">
              Что я предлагаю
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl text-bark font-light">
              Услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="group relative rounded-3xl overflow-hidden bg-warm-white border border-clay/20 hover:border-clay/40 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-white/80 to-transparent" />
                  <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    <Icon name={s.icon} size={18} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold text-bark mb-2">{s.title}</h3>
                  <p className="text-bark/65 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-moss text-lg">{s.price}</div>
                      <div className="text-bark/50 text-xs flex items-center gap-1 mt-1">
                        <Icon name="Clock" size={12} />
                        {s.duration}
                      </div>
                    </div>
                    <a href="#booking"
                      className="bg-linen border border-clay/40 text-bark text-sm px-4 py-2 rounded-full hover:bg-moss hover:text-white hover:border-moss transition-all">
                      Записаться
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE LIST */}
      <section id="price" className="py-24 px-6 md:px-12 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="divider-leaf font-cormorant text-clay text-lg italic mb-4">
              Стоимость услуг
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl text-bark font-light">
              Прайс-лист
            </h2>
          </div>

          <div className="bg-linen rounded-3xl overflow-hidden border border-clay/20 shadow-sm">
            {/* Header with photo */}
            <div className="relative h-48 md:h-64 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #c4788a 0%, #d4a0aa 40%, #e8c4c8 70%, #f0d8da 100%)"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16">
                <div>
                  <p className="font-cormorant text-white/80 text-lg italic mb-1">мастер массажа и ЛФК</p>
                  <h3 className="font-cormorant text-3xl md:text-4xl font-semibold text-white leading-tight">
                    Артамонова<br />Екатерина
                  </h3>
                </div>
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/40 shadow-lg shrink-0">
                  <img
                    src={PRICE_PHOTO}
                    alt="Екатерина Артамонова"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Wave SVG */}
              <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
                <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f3ec" />
              </svg>
            </div>

            {/* Price rows */}
            <div className="p-6 md:p-10 space-y-0">
              {priceList.map((item, idx) => (
                <div
                  key={item.title}
                  className={`py-5 flex flex-col sm:flex-row sm:items-center gap-3 ${idx < priceList.length - 1 ? "border-b border-clay/20" : ""}`}
                >
                  <div className="flex-1">
                    <span className="font-cormorant text-xl text-bark font-medium">{item.title}</span>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {item.items.map((opt) => (
                      <div key={opt.price} className="flex items-center gap-3">
                        {opt.duration && (
                          <span className="text-sm text-bark/50 flex items-center gap-1">
                            <Icon name="Clock" size={12} />
                            {opt.duration}
                          </span>
                        )}
                        <span className="font-semibold text-moss text-base whitespace-nowrap">{opt.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 md:px-10 pb-8">
              <a href="#booking"
                className="block w-full text-center bg-moss text-warm-white py-4 rounded-full font-medium text-base hover:opacity-90 transition-all hover:scale-[1.01]">
                Записаться на сеанс
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="blob-shape overflow-hidden aspect-square w-full max-w-md mx-auto">
                <img src={HERO_IMG} alt="О мастере" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 right-4 md:right-0 bg-linen border border-clay/30 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-moss rounded-full flex items-center justify-center">
                    <Icon name="Award" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-bark">Сертифицированный</div>
                    <div className="text-xs text-bark/60">специалист ЛФК и массажа</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="divider-leaf font-cormorant text-clay text-lg italic mb-4">
                О мастере
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl text-bark font-light mb-6">
                Артамонова Екатерина
              </h2>
              <p className="text-bark/70 leading-relaxed mb-6">
                Более 10 лет я посвятила изучению возможностей человеческого тела. Моя миссия — помогать людям обрести баланс через естественные методы оздоровления.
              </p>
              <p className="text-bark/70 leading-relaxed mb-8">
                Каждый сеанс — это индивидуальный подход. Я внимательно слушаю каждого клиента и составляю программу, которая подходит именно ему.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "BookOpen", text: "Высшее медицинское образование" },
                  { icon: "Star", text: "Сертификат по гирудотерапии" },
                  { icon: "Users", text: "Преподаватель курсов массажа" },
                  { icon: "Heart", text: "Специалист по реабилитации" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-clay/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={item.icon} size={14} className="text-clay" />
                    </div>
                    <span className="text-sm text-bark/70 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 md:px-12 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="divider-leaf font-cormorant text-clay text-lg italic mb-4">
              Работа и обучение
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl text-bark font-light">
              Галерея
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i === 0 ? "md:col-span-2 row-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "16/9" : "1/1" }}
                onClick={() => setGalleryOpen(i)}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {galleryOpen !== null && (
          <div
            className="fixed inset-0 z-50 bg-bark/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setGalleryOpen(null)}
          >
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={GALLERY[galleryOpen].url}
                alt={GALLERY[galleryOpen].caption}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white/80 text-center mt-3 text-sm">{GALLERY[galleryOpen].caption}</p>
              <button
                onClick={() => setGalleryOpen(null)}
                className="absolute -top-4 -right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-bark hover:bg-clay/20 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={() => setGalleryOpen((galleryOpen - 1 + GALLERY.length) % GALLERY.length)}
                  className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <Icon name="ChevronLeft" size={18} />
                </button>
                <button
                  onClick={() => setGalleryOpen((galleryOpen + 1) % GALLERY.length)}
                  className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <Icon name="ChevronRight" size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="divider-leaf font-cormorant text-clay text-lg italic mb-4">
              Что говорят клиенты
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl text-bark font-light">
              Отзывы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="bg-warm-white rounded-3xl p-8 border border-clay/20"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-clay">★</span>
                  ))}
                </div>
                <p className="text-bark/75 leading-relaxed mb-6 font-cormorant text-lg italic">
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-clay/25 rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-clay" />
                    </div>
                    <div className="text-sm font-semibold text-bark">{r.name}</div>
                  </div>
                  <span className="text-xs bg-moss/10 text-moss px-3 py-1 rounded-full">
                    {r.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 md:px-12 bg-warm-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="divider-leaf font-cormorant text-clay text-lg italic mb-4">
              Онлайн-запись
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl text-bark font-light mb-4">
              Записаться на приём
            </h2>
            <p className="text-bark/60 text-sm">
              Выберите услугу и удобное время — я свяжусь с вами для подтверждения
            </p>
          </div>

          {sent ? (
            <div className="bg-moss/10 border border-moss/30 rounded-3xl p-12 text-center animate-fade-in">
              <div className="w-16 h-16 bg-moss rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={28} className="text-white" />
              </div>
              <h3 className="font-cormorant text-3xl text-bark mb-2">Заявка отправлена!</h3>
              <p className="text-bark/65">Я свяжусь с вами в ближайшее время для подтверждения записи.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-moss underline text-sm hover:opacity-70 transition-opacity"
              >
                Записаться ещё раз
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-linen rounded-3xl p-8 md:p-10 border border-clay/20 space-y-6">
              <div>
                <label className="block text-sm font-medium text-bark mb-3">Услуга</label>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.title)}
                      className={`p-3 rounded-2xl border text-sm text-left transition-all ${
                        selectedService === s.title
                          ? "border-moss bg-moss/10 text-moss"
                          : "border-clay/30 bg-warm-white text-bark hover:border-clay"
                      }`}
                    >
                      <div className="font-medium">{s.title}</div>
                      <div className="text-xs opacity-60 mt-0.5">{s.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-bark mb-2">Дата</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-warm-white border border-clay/30 rounded-2xl px-4 py-3 text-bark focus:outline-none focus:border-moss transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-warm-white border border-clay/30 rounded-2xl px-4 py-3 text-bark placeholder-bark/40 focus:outline-none focus:border-moss transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-warm-white border border-clay/30 rounded-2xl px-4 py-3 text-bark placeholder-bark/40 focus:outline-none focus:border-moss transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-moss text-warm-white py-4 rounded-full font-medium text-base hover:opacity-90 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Icon name="CalendarCheck" size={18} />
                Отправить заявку
              </button>
              <p className="text-center text-bark/45 text-xs">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-12 border-t border-clay/20">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-cormorant text-xl font-semibold text-bark">Артамонова Екатерина</div>
            <div className="text-bark/55 text-sm mt-1">Мастер массажа и ЛФК</div>
          </div>
          <div className="flex gap-6 text-sm text-bark/60">
            <a href="#services" className="hover:text-moss transition-colors">Услуги</a>
            <a href="#price" className="hover:text-moss transition-colors">Прайс</a>
            <a href="#about" className="hover:text-moss transition-colors">О мастере</a>
            <a href="#gallery" className="hover:text-moss transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-moss transition-colors">Отзывы</a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 bg-clay/15 rounded-full flex items-center justify-center hover:bg-clay/30 transition-colors text-bark">
              <Icon name="Phone" size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-clay/15 rounded-full flex items-center justify-center hover:bg-clay/30 transition-colors text-bark">
              <Icon name="MessageCircle" size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-clay/15 rounded-full flex items-center justify-center hover:bg-clay/30 transition-colors text-bark">
              <Icon name="Instagram" size={16} />
            </a>
          </div>
        </div>
        <div className="text-center text-bark/35 text-xs mt-8">
          © 2026 Артамонова Екатерина. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
