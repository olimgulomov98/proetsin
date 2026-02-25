"use client";
import Image from "next/image";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PROETSIN® таблетки №60",
  description:
    "Комбинированный растительный препарат с секретолитическим и противовоспалительным действием для лечения острого и хронического риносинусита.",
  image: "https://proetsin.uz/proetsin.webp",
  brand: {
    "@type": "Brand",
    name: "Spring Pharmaceutic",
  },
  manufacturer: {
    "@type": "Organization",
    name: 'ООО "SPRING PHARMACEUTIC"',
    address: {
      "@type": "PostalAddress",
      addressCountry: "UZ",
      addressRegion: "Наманганская область",
      addressLocality: "Касансайский район",
      streetAddress: "Кукимбой, Навбахор МСГ, улица Булак, дом 129",
    },
    telephone: "+998996942363",
    email: "spring_pharmaceutic@gmail.com",
    sameAs: [
      "https://www.instagram.com/springpharmaceutic/",
      "https://www.facebook.com/spring.pharm.3/",
      "https://t.me/SpringPharmaceutic",
    ],
  },
  category: "Фитопрепараты, оториноларингология",
  url: "https://proetsin.uz",
};

const medicalPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Проецин® — инструкция по медицинскому применению",
  description:
    "Подробная инструкция по медицинскому применению препарата Проецин® (таблетки №60). Показания, противопоказания, дозировка, побочные действия.",
  url: "https://proetsin.uz",
  lastReviewed: "2026-02-19",
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "article",
  },
  specialty: {
    "@type": "MedicalSpecialty",
    name: "Оториноларингология",
  },
  about: {
    "@type": "Drug",
    name: "Проецин®",
    activeIngredient:
      "горечавка желтая, первоцвет, щавель, бузина, вербена лекарственная",
    drugClass: {
      "@type": "DrugClass",
      name: "Фитопрепараты",
    },
    prescriptionStatus: "OTC",
    administrationRoute: "Перорально",
    dosageForm: "Таблетки, покрытые оболочкой",
    maximumIntake: {
      "@type": "MaximumDoseSchedule",
      doseValue: 6,
      doseUnit: "таблеток",
      frequency: "в сутки (для взрослых)",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Для чего применяется Проецин®?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Проецин® применяется при остром и хроническом синусите (риносинусите), сопровождающемся образованием вязкого секрета. Подходит для взрослых и детей от 6 лет и старше.",
      },
    },
    {
      "@type": "Question",
      name: "Как принимать Проецин®?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Принимают внутрь 3 раза в сутки. Дети 6-11 лет — 1 таблетка за раз (3 таблетки в сутки). Дети от 12 лет и взрослые — 2 таблетки за раз (6 таблеток в сутки). Курс лечения 7-14 дней.",
      },
    },
    {
      "@type": "Question",
      name: "Продается ли Проецин® по рецепту?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, препарат Проецин® отпускается без рецепта.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли давать Проецин® детям?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Проецин® можно давать детям от 6 лет и старше. Для детей в возрасте от 0 до 6 лет безопасность и эффективность не установлены.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="xl:max-w-[1110px] my-0 mx-auto w-[90%]">
        {/* ===== HEADER ===== */}
        <header className="h-[80px] flex items-center justify-between">
          <a href="#" aria-label="Proetsin® — Bosh sahifa">
            <svg
              width="300"
              height="140"
              viewBox="0 0 500 140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Proetsin® логотипи"
            >
              <rect width="500" height="160" fill="white" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="72"
                fontWeight="700"
                fill="#4CAF50"
                letterSpacing="2"
              >
                Proetsin
              </text>
              <text
                x="415"
                y="55"
                fontFamily="Arial"
                fontSize="24"
                fill="#4CAF50"
              >
                ®
              </text>
            </svg>
          </a>
          <nav aria-label="Контакт">
            <h3 className="text-[11px] md:text-[18px] md:block font-medium">
              <a href="tel:+998996942363">Tel: +998 99 694 23 63</a>
            </h3>
          </nav>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main className="mt-[50px]">
          <article itemScope itemType="https://schema.org/Drug">
            <h1 className="font-semibold text-center text-4xl font-roboto">
              « PROETSIN ® »
            </h1>

            {/* Product Images */}
            <div className="flex justify-center flex-wrap md:flex-nowrap md:items-end">
              <Image
                src="/proetsin.webp"
                alt="Проецин® таблетки №60 — растительный препарат при синусите"
                width={600}
                height={600}
                className="hidden md:block"
                priority
              />
              <Image
                src="/proetsin.webp"
                alt="Проецин® таблетки №60 — растительный препарат при синусите"
                width={300}
                height={300}
                className="block md:hidden"
                priority
              />
            </div>

            {/* Instruction Title */}
            <h2 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
              ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ Проецин® таблетки №60
            </h2>

            <div className="text-[14px] md:text-[16px] font-roboto font-light text-justify leading-relaxed max-w-[700px] px-4 md:px-6">
              {/* Trade Name */}
              <section className="mb-4" aria-label="Торговое название">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Торговое название: Проецин® .
                  </span>{" "}
                </strong>
              </section>

              {/* Composition */}
              <section className="mb-4" aria-label="Форма выпуска и состав">
                <p className="font-roboto text-[14px] md:text-[16px]">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">
                      Форма выпуска, упаковка и состав препарата Проецин®
                    </span>
                  </strong>{" "}
                </p>
              </section>

              <section className="mb-4" aria-label="Состав препарата">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Состав препарата:</span>
                </strong>
                <p className="mt-2 font-medium">
                  Таблетки, покрытые оболочкой зеленого цвета, круглые,
                  двояковыпуклые, с гладкой поверхностью; на изломе видны три
                  слоя: внутренний — от светло-коричневого с зеленоватым оттенком
                  до коричневого цвета, допустимы белые вкрапления; средний —
                  белого цвета; наружный — зеленого цвета.
                </p>
                <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                  <thead>
                    <tr className="bg-[#f5f5f5]">
                      <th className="border border-slate-300 text-left px-3 py-2">
                        Измельченное лекарственное растительное сырье
                      </th>
                      <th className="border border-slate-300 text-center px-3 py-2">
                        1 таб.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        горечавки желтой корни (Gentianae luteae radicibus)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        6 мг
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        первоцвета цветки (Primulae flores)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        18 мг
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        щавеля трава (Rumicis herbae)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        18 мг
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        бузины черной цветки (Sambuci nigrae flores)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        18 мг
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        вербены лекарственной трава (Verbenae officinale herbae)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        18 мг
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-medium">
                  Вспомогательные вещества: желатин, лактозы моногидрат, крахмал
                  картофельный, кремния диоксид коллоидный безводный, сорбитол,
                  стеариновая кислота, сополимер бутилметакрилата основной,
                  кальция карбонат (Е170), клещевины обыкновенной семян масло
                  (касторовое масло), хлорофиллина медный комплекс (Е141)
                  (хлорофиллина медный комплекс, глюкозы сироп), декстрин, глюкоза
                  жидкая, индигокармина лак алюминиевый (Е132) (индигокармин,
                  алюминия гидроксид), магния оксид, крахмал кукурузный, воск
                  горный гликолевый, рибофлавин (Е101), шеллак, сахароза, тальк,
                  титана диоксид (Е171).
                </p>
                <p className="mt-2 font-medium">
                  20 шт. — блистеры (3) — пачки картонные.
                </p>
              </section>

              {/* Pharmacological Group */}
              <section className="mb-4" aria-label="Клинико-фармакологическая группа">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Клинико-фармакологическая группа:{" "}
                  </span>
                  <span className="text-[#0C54A0] underline">
                    Комбинированный препарат растительного происхождения с
                    секретолитическим, секретомоторным, противовоспалительным и
                    противовирусным действием
                  </span>
                </strong>
              </section>

              <section className="mb-4" aria-label="Фармако-терапевтическая группа">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Фармако-терапевтическая группа:{" "}
                  </span>
                  <span className="text-[#0C54A0] underline">
                    Другие препараты для лечения простудных заболеваний
                  </span>
                </strong>
              </section>

              {/* Pharmacological Action */}
              <section className="mb-4" aria-label="Фармакологическое действие">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Фармакологическое действие
                  </span>
                </strong>
                <p className="mt-2 font-medium font-semibold">
                  Механизм действия и фармакодинамические свойства
                </p>
                <p className="mt-2 font-medium">
                  Фармакологические свойства обусловлены биологически активными
                  веществами, входящими в состав препарата.
                </p>
                <p className="mt-2 font-medium">
                  Проецин® оказывает секретолитическое, секретомоторное,
                  противовоспалительное, противоотечное, умеренное
                  антибактериальное и противовирусное действие. Способствует
                  оттоку экссудата из придаточных пазух носа и верхних дыхательных
                  путей, предупреждая развитие осложнений.
                </p>
              </section>

              {/* Indications */}
              <section className="mb-4" aria-label="Показания">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Показания препарата Проецин®
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Взрослым и детям от 6 лет и старше при:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                  <li>
                    остром и хроническом синусите (риносинусите), сопровождающемся
                    образованием вязкого секрета.
                  </li>
                </ul>
              </section>

              {/* Dosage */}
              <section className="mb-4" aria-label="Режим дозирования">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Режим дозирования.</span>
                </strong>
                <p className="mt-2 font-medium">
                  Принимают внутрь, не разжевывая, запивая небольшим количеством
                  воды, независимо от приема пищи.
                </p>
                <p className="mt-2 font-medium">
                  Рекомендуемая доза: 3 раза/сут (утром, днем и вечером) в
                  соответствии с приведенной ниже таблицей.
                </p>
                <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                  <thead>
                    <tr className="bg-[#f5f5f5]">
                      <th className="border border-slate-300 px-3 py-2 text-left font-semibold">
                        Возраст
                      </th>
                      <th className="border border-slate-300 px-3 py-2 text-center font-semibold">
                        Разовая доза
                      </th>
                      <th className="border border-slate-300 px-3 py-2 text-center font-semibold">
                        Суточная доза
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        Дети в возрасте от 6 до 11 лет
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        1 таблетка
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        3 таблетки
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        Дети в возрасте старше 12 лет и взрослые
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        2 таблетки
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        6 таблеток
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-medium mt-2">
                  Длительность курса лечения составляет 7-14 дней. Увеличение
                  продолжительности и проведение повторных курсов лечения возможно
                  по рекомендации врача.
                </p>
                <p className="mt-2 font-medium">
                  Необходимо проинформировать пациента о том, что, если через 7-14
                  дней лечения улучшения не наступает или симптомы усугубляются,
                  или появляются новые симптомы, необходимо проконсультироваться с
                  врачом.
                </p>
                <p className="mt-2 font-medium font-semibold">Дети</p>
                <p className="font-medium">
                  Безопасность и эффективность у детей в возрасте от 0 до 6 лет на
                  настоящий момент не установлены. Данные отсутствуют.
                </p>
              </section>

              {/* Side Effects */}
              <section className="mb-4" aria-label="Побочное действие">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Побочное действие</span>
                </strong>
                <p className="mt-2 font-medium">
                  <span className="font-medium">
                    Со стороны иммунной системы:
                  </span>{" "}
                  нечасто — местные аллергические реакции (кожная сыпь,
                  покраснение кожи, зуд); неизвестно — системные аллергические
                  реакции (ангионевротический отек, отек лица).
                </p>
                <p className="mt-2 font-medium">
                  <span className="font-medium">
                    Со стороны дыхательной системы, органов грудной клетки и
                    средостения:
                  </span>{" "}
                  неизвестно — одышка.
                </p>
                <p className="mt-2 font-medium">
                  <span className="font-medium">Со стороны ЖКТ:</span> нечасто —
                  тошнота, боль в эпигастральной области.
                </p>
              </section>

              {/* Adverse Reactions Reporting */}
              <section className="mb-4" aria-label="Сообщение о нежелательных реакциях">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Сообщение о подозреваемых нежелательных реакциях
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Важно сообщать о подозреваемых нежелательных реакциях после
                  регистрации лекарственного препарата с целью обеспечения
                  непрерывного мониторинга соотношения «польза-риск»
                  лекарственного препарата.
                </p>
              </section>

              {/* Contraindications */}
              <section className="mb-4" aria-label="Противопоказания">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Противопоказания к применению
                  </span>
                </strong>
                <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                  <li>
                    повышенная чувствительность к активным компонентам препарата
                    и/или к любому из вспомогательных веществ, входящих в состав
                    препарата.
                  </li>
                </ul>
              </section>

              {/* Pregnancy */}
              <section className="mb-4" aria-label="Применение при беременности">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Применение при беременности и кормлении грудью
                  </span>
                </strong>
                <p className="mt-2 font-semibold">Беременность</p>
                <p className="font-medium">
                  Применение препарата при беременности возможно только по
                  назначению врача.
                </p>
                <p className="mt-2 font-semibold">
                  Период грудного вскармливания
                </p>
                <p className="font-medium">
                  Препарат не рекомендуется принимать в период грудного
                  вскармливания (в связи с отсутствием опыта его клинического
                  применения).
                </p>
                <p className="mt-2 font-semibold">Фертильность</p>
                <p className="font-medium">
                  Данные о влиянии препарата на фертильность отсутствуют.
                </p>
              </section>

              {/* Children */}
              <section className="mb-4" aria-label="Применение у детей">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Применение у детей</span>
                </strong>
                <p className="mt-2 font-medium">
                  Противопоказан детям в возрасте до 6 лет (из-за недостаточности
                  клинических данных).
                </p>
              </section>

              {/* Special Instructions */}
              <section className="mb-4" aria-label="Особые указания">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Особые указания</span>
                </strong>
                <p className="mt-2 font-medium">
                  Необходимо проинформировать пациента о том, что, если через 7-14
                  дней лечения улучшения не наступает или симптомы усугубляются,
                  или появляются новые симптомы, необходимо проконсультироваться с
                  врачом.
                </p>
                <p className="mt-2 font-medium">
                  В случае, если у пациента появились носовые кровотечения,
                  лихорадка, сильные головные или лицевые боли, гнойные выделения
                  из носа, нарушение зрения, асимметрия средней части лица или
                  глаз или онемение лица, необходимо обратиться за консультацией к
                  врачу, поскольку перечисленные симптомы считаются серьезными для
                  всех форм риносинуситов, что требует проведения обследования и
                  срочного лечения.
                </p>
                <p className="mt-2 font-medium">
                  Пациентам с гастритом и другими заболеваниями
                  желудочно-кишечного тракта в фазе обострения и пациентам с
                  чувствительным желудком рекомендуется принимать препарат
                  Проецин® с осторожностью, желательно после еды, запивая стаканом
                  воды.
                </p>
                <p className="mt-2 font-semibold font-medium">
                  Вспомогательные вещества
                </p>
                <p className="font-medium">
                  Пациентам с редкой наследственной непереносимостью фруктозы,
                  непереносимостью галактозы, дефицитом лактазы,
                  глюкозо-галактозной мальабсорбцией или сахаразо-изомальтазной
                  недостаточностью не следует принимать препарат, таблетки,
                  покрытые оболочкой. Возможен прием препарата в лекарственных
                  формах капли для приема внутрь или сироп, которые не содержат
                  вышеуказанных сахаров.
                </p>
                <p className="mt-2 font-semibold font-medium">
                  Информация для пациентов с сахарным диабетом:
                </p>
                <p className="font-medium">
                  одна таблетка, покрытая оболочкой, содержит 0.01 ХЕ.
                </p>
                <p className="mt-2 font-semibold font-medium">
                  Влияние на способность к управлению транспортными средствами и
                  механизмами
                </p>
                <p className="font-medium">
                  При применении в рекомендуемых дозах препарат Проецин® не
                  оказывает влияния на способность к выполнению потенциально
                  опасных видов деятельности, требующих повышенной концентрации
                  внимания и быстроты психомоторных реакций (управление
                  транспортными средствами, работа с движущимися механизмами,
                  работа диспетчера и оператора).
                </p>
              </section>

              {/* Overdose */}
              <section className="mb-4" aria-label="Передозировка">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Передозировка.</span>
                </strong>
                <p className="mt-2 font-medium">
                  До настоящего времени случаи передозировки при применении
                  препарата не зарегистрированы.
                </p>
                <p className="mt-2 font-medium">
                  Симптомы: возможно усиление выраженности дозозависимых побочных
                  эффектов.
                </p>
                <p className="mt-2 font-medium">
                  Лечение: проведение симптоматической терапии.
                </p>
              </section>

              {/* Drug Interactions */}
              <section className="mb-4" aria-label="Лекарственное взаимодействие">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Лекарственное взаимодействие.
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Комбинация с антибактериальными лекарственными средствами
                  возможна и целесообразна.
                </p>
                <p className="mt-2 font-medium">
                  Взаимодействие с другими лекарственными средствами до настоящего
                  времени неизвестно.
                </p>
              </section>

              {/* Storage */}
              <section className="mb-4" aria-label="Условия хранения">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Условия хранения препарата.
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Препарат следует хранить в недоступном для детей месте при
                  температуре не выше 25°С.
                </p>
              </section>

              {/* Shelf Life */}
              <section className="mb-4" aria-label="Срок годности">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Срок годности препарата.</span>
                </strong>
                <p className="mt-2 font-medium">Срок годности — 2 года.</p>
                <p className="mt-2 font-medium">
                  Не применять по истечении срока годности.
                </p>
              </section>

              {/* Sales Conditions */}
              <section className="mb-4" aria-label="Условия реализации">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Условия реализации</span>
                </strong>
                <p className="mt-2 font-medium">
                  Препарат отпускают без рецепта.
                </p>
              </section>

              {/* Manufacturer */}
              <section className="mb-4 mt-4" aria-label="Производитель">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Производитель:</span>
                </strong>
                <p className="mt-2 font-medium">
                  ООО &quot;SPRING PHARMACEUTIC&quot; СП Великобритания.
                </p>
              </section>

              <section className="mb-4" aria-label="Адрес производителя">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Местонахождение производителя и адрес места осуществления
                    деятельности:
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Республика Узбекистан, Наманганская область, Касансайский район,
                  Кукимбой, Навбахор МСГ, улица Булак, дом 129. Тел.:{" "}
                  <a href="tel:+998996942363" className="underline">+998996942363</a>
                </p>
              </section>

              {/* ===== FOOTER ===== */}
              <footer className="mb-5" aria-label="Контактная информация и социальные сети">
                <nav aria-label="Социальные сети">
                  <a
                    href="https://www.instagram.com/springpharmaceutic/"
                    className="flex gap-3 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram — @springpharmaceutic"
                  >
                    <Image
                      src="/Instagram-Logo.wine.svg"
                      className="w-[30px] h-[30px]"
                      alt="Instagram логотипи"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                    @springpharmaceutic
                  </a>
                  <a
                    href="https://www.facebook.com/spring.pharm.3/"
                    className="flex gap-3 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook — Spring Pharm"
                  >
                    <Image
                      src="/Facebook-f_Logo-Blue-Logo.wine.svg"
                      className="w-[30px] h-[30px]"
                      alt="Facebook логотипи"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                    Spring Pharm
                  </a>
                  <a
                    href="https://t.me/SpringPharmaceutic"
                    className="flex gap-3 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram — Spring_Pharmaceutic"
                  >
                    <Image
                      src="/telegram.webp"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] ml-1"
                      alt="Telegram логотипи"
                      loading="lazy"
                    />
                    Spring_Pharmaceutic
                  </a>
                  <a
                    href="mailto:spring_pharmaceutic@gmail.com"
                    className="flex gap-3 items-center mb-3"
                    aria-label="Email — spring_pharmaceutic@gmail.com"
                  >
                    <Image
                      src="/email-svgrepo-com.svg"
                      className="w-[25px] h-[25px]"
                      alt="Email иконаси"
                      width={25}
                      height={25}
                      loading="lazy"
                    />
                    spring_pharmaceutic@gmail.com
                  </a>
                </nav>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href="/instruction_ru.docx"
                    className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
                    download
                    aria-label="Скачать инструкцию на русском языке (DOCX)"
                  >
                    СКАЧАТЬ ИНСТРУКЦИЮ
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="white"
                      aria-hidden="true"
                    >
                      <g id="Interface / Download">
                        <path
                          id="Vector"
                          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </footer>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
