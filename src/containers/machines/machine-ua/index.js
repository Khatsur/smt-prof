import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/smt/smt-printing.png'
import image2 from '../../../data/images/bg/machines/smt/smt-pp.png'
import image3 from '../../../data/images/bg/machines/smt/smt-reflow.png'
import image4 from '../../../data/images/bg/machines/smt/smt-spi.png'
import image5 from '../../../data/images/bg/machines/smt/smt-aoi.png'
import image6 from '../../../data/images/bg/machines/smt/smt-conveyer.png'
import image7 from '../../../data/images/bg/machines/cleaning/pcb-cleaning.png'
import image8 from '../../../data/images/bg/machines/cleaning/stencil-cleaning.png'
import image9 from '../../../data/images/bg/machines/cleaning/pallete-cleaning.png'
import image10 from '../../../data/images/bg/machines/tht/insertion.png'
import image11 from '../../../data/images/bg/machines/tht/selective.png'
import image12 from '../../../data/images/bg/machines/tht/wave.png'
import image13 from '../../../data/images/bg/machines/coating/selective-coating.png'
import image14 from '../../../data/images/bg/machines/coating/dip-coating.png'
import image15 from '../../../data/images/bg/machines/coating/spray-coating.png'
import image16 from '../../../data/images/bg/machines/wire/cutting.png'
import image17 from '../../../data/images/bg/machines/wire/striping.png'
import image18 from '../../../data/images/bg/machines/wire/crimping.png'
import image19 from '../../../data/images/bg/machines/cutting/blade-cutting.jpg'
import image20 from '../../../data/images/bg/machines/cutting/router-cutting.jpg'
import image21 from '../../../data/images/bg/machines/cutting/laser-cutting.jpg'
import image22 from '../../../data/images/bg/machines/storage/stock-storage.jpg'
import image23 from '../../../data/images/bg/machines/storage/components-storage.jpg'
import image24 from '../../../data/images/bg/machines/storage/paste-storage.jpg'
import image25 from '../../../data/images/bg/machines/filtration/filtration-small.jpg'
import image26 from '../../../data/images/bg/machines/filtration/filtration-big.jpg'
import image27 from '../../../data/images/bg/machines/filtration/filtration-laser.jpg'
import image28 from '../../../data/images/bg/machines/dispensing/dispensing-automatic.jpg'
import image29 from '../../../data/images/bg/machines/dispensing/dispensing-semi-automatic.jpg'
import image30 from '../../../data/images/bg/machines/dispensing/dispensing-manual.jpg'
import image31 from '../../../data/images/bg/machines/coating/curing.jpg'
import image32 from '../../../data/images/bg/machines/coating/curing-con.jpg'
import image33 from '../../../data/images/bg/lines/janets-300x300.jpg'
import image34 from '../../../data/images/bg/lines/tracemonitor-300x300.jpg'
import image35 from '../../../data/images/bg/lines/ifs-nx-300x300.jpg'
import image36 from '../../../data/images/bg/machines/coating/coating-aoi.jpg'

const BoxSection = ({ sectionTitleStyle, machine, linkStyle, sectionBottomStyle }) => {
    let boxContents = [];
    let description = "";
    let subtitle = "";
    let title = "";
    if (machine === "smt") {
    boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Принтери паяльної пасти',
            desc: 'Устаткування для нанесення паяльної пасти через металевий трафарет на контактні площадки друкованих плат.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Машини для встановлення SMD',
            desc: 'Обладнання для автоматичного встановлення електронних компонентів SMD на друковані плати. Машини для роботи в лінії і окремо.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Печі оплавлення паяльної пасти',
            desc: 'Паяльні печі для конвекційного плавлення паяльної пасти. Окреме обладнання та конвеєрні печі для роботи в лінії.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/печі-паяльні'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Інспекція нанесення пасти - SPI',
            desc: 'Автоматична оптична інспекція нанесення паяльної пасти на контактні площадки друкованих плат. Машини для 3D вимірювання.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/інспекція-паяльної-пасти'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Інспекція після пайки - AOI',
            desc: 'Автоматична оптична інспекція якості монтажу електронних компонентів після оплавлення паяльної пасти. 3D AOI.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/автоматична-оптична-інспекція'
        },
        {
            id: 6,
            imageSrc: image6,
            title: 'Переміщення друкованих плат',
            desc: 'Конвеєри для переміщення плат у виробничій лінії. Пристрої завантаження і вивантаження плат. Конвеєри та буфери.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/переміщення-друкованих-плат'
        }
    ];
     description = "Поверхневий монтаж або технологія поверхневого монтажу (SMT) - це сукупність технологічних процесів монтажу електронних компонентів SMD на поверхню друкованих плат. Технологія включає в себе три основні процеси. Нанесення паяльної пасти на контактні площадки друкованих плат через металевий трафарет або за допомогою дозатора. Встановлення електронних компонентів використовуючи спеціальні автоматичні машини з вакуумним захопленням електронних компонентів. Оплавлення паяльної пасти з встановленими компонентами SMD в спеціальній паяльний печі."; 
     subtitle = "Устаткування для SMT";
     title = "Автоматизація складання плат<br><span>Поверхневий монтаж</span>";
} else if (machine === "cleaning") {
     boxContents = [
        {
            id: 1,
            imageSrc: image7,
            title: 'Обладнання для миття плат',
            desc: 'Обладнання для автоматичного миття плат, електронних блоків. Машини для струменевого і ультразвукового очищення друкованих плат.',
            path: '/ua/обладнання-для-монтажу/обладнання-для-миття/відмивання-друкованих-плат'
        },
        {
            id: 2,
            imageSrc: image8,
            title: 'Обладнання для миття трафаретів',
            desc: 'Обладнання для автоматичної мийки трафаретів для нанесення паяльної пасти. Струменеві повністю автоматичні машини.',
            path: '/ua/обладнання-для-монтажу/обладнання-для-миття/відмивання-трафаретів'
        },
        {
            id: 3,
            imageSrc: image9,
            title: 'Обладнання для миття устаткування',
            desc: 'Обладнання для миття технологічного устаткування: палети для хвилі, палети для нанесення покриттів і частин машин.',
            path: '/ua/обладнання-для-монтажу/обладнання-для-миття/миття-палет-кареток'
        }
    ];
     description = "Обладнання для відмивання друкованих плат і трафаретів застосовують для очищення після паяння від залишків флюсів та інших забруднень з друкованих плат і залишків паяльної пасти з апертур трафаретів. Як правило, обладнання для відмивання друкованих плат використовується для виробів, що вимагають підвищеної надійності в експлуатації і працюють в несприятливих кліматичних умовах: автомобільна електроніка, системи життєзабезпечення, військова техніка, медична техніка, промислова автоматика і д.р. За принципом роботи обладнання для відмивання друкованих плат ділиться на ультразвукове і струминне.";
     subtitle = "Обладнання для миття плат і трафаретів";
     title = "Автоматизація процесів чищення<br><span>Плати, трафарети, палети</span>";
} else if (machine === "tht") {
    boxContents = [
        {
            id: 1,
            imageSrc: image10,
            title: 'Встановлення в отвори плат',
            desc: 'Обладнання для автоматичного встановлення електронних компонентів в отвори друкованих плат. Обрізка і загинання виводів.',
            path: '/ua/обладнання-для-монтажу/монтаж-в-отвори/установник-компонентів-в-отвори'
        },
        {
            id: 2,
            imageSrc: image11,
            title: 'Машини для селективного паяння',
            desc: 'Обладнання для селективного паяння електронних компонентів монтованих в отвори друкованих плат. Машини для лінії і окремі.',
            path: '/ua/обладнання-для-монтажу/монтаж-в-отвори/селективне-паяння'
        },
        {
            id: 3,
            imageSrc: image12,
            title: 'Машини для паяння хвилею припою',
            desc: 'Обладнання для паяння електронних компонентів монтованих в отвори друкованих плат хвилею розплавленого припою.',
            path: '/ua/обладнання-для-монтажу/монтаж-в-отвори/пайка-хвилею-припою'
        }
    ];
    description = "Монтаж електронних компонентів в отвори друкованих плат (THT) - це класична технологія монтажу електронних компонентів, яка активно застосовується до сьогоднішнього часу. Монтаж в отвори має два основних технологічних процесів. Встановлення електронних компонентів в отвори друкованих плат. Для автоматизації процесів встановлення компонентів застосовуються спеціальні автоматичні машини. Групова пайка на машині пайки хвилею припою або селективна пайка на автоматичній машині для селективного паяння.";
     subtitle = "Обладнання для монтажу в отвори - THT";
     title = "Автоматизація складання  плат<br><span>Монтаж в отвори плат</span>";
} else if (machine === "coating") {
    boxContents = [
        {
            id: 1,
            imageSrc: image13,
            title: 'Селективне нанесення',
            desc: 'Обладнання для селективного нанесення вологозахисних покриттів на друковані плати. Машини для роботи в лінії і настільні',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/селективний-вологозахист'
        },
        {
            id: 2,
            imageSrc: image14,
            title: 'Нанесення зануренням',
            desc: 'Обладнання для нанесення захисних покриттів методом занурення. Безпечне виконання. Машини з пневматичним приводом.',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/вологозахист-зануренням'
        },
        {
            id: 3,
            imageSrc: image15,
            title: 'Ручне нанесення покриття',
            desc: 'Бюджетні рішення для нанесення вологозахисних покриттів на електронні блоки. Системи для ручного нанесення розпиленням.',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/нанесення-захисних-покриттів'
        },
        {
            id: 4,
            imageSrc: image31,
            title: 'Полімеризація покриттів',
            desc: 'Устаткування для затвердіння захисних покриттів в УФ та ІЧ печах конвеєрного типу. Машини для роботи у складі лінії',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/обладнання-для-полімеризації'
        },
        {
            id: 5,
            imageSrc: image32,
            title: 'Конвеєри для лінії',
            desc: 'Обладнання для переміщення плат у лінії для нанесення захисного покриття. Конвеєри мають спеціальне виконання для роботи зі шкідливими речовинами.',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/конвеєри-захисних-покриттів'
        },
        {
            id: 6,
            imageSrc: image36,
            title: 'Оптична інспекція',
            desc: 'Обладнання для автоматичної оптичної інспекції нанесення захисних покриттів на плати',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/інспекція-нанесення-захисних-покриттів'
        }
    ];
    description = "Існує безліч виробів електроніки, які експлуатуються в різних несприятливих умови. Це не обов'язково тропічні країни. Під капотом нашого автомобіля стає все більше електроніки, а умови роботи схожі з польотом в космос. Не залежно від умов електроніка має працювати надійно і довго. Для захисту електронних збірок застосовують різні покриття в залежності від вимог до експлуатації. Плати можуть покриватися цілком або частково. Можуть покриватися окремі чутливі компоненти. Основний ринок застосування захисних покриттів це: автомобільна електроніка, оборонна промисловість, авіабудування, LED дисплеї і освітлення, альтернативні джерела електроенергії.";
     subtitle = "Обладнання для нанесення захисних покриттів";
     title = "Автоматизація процесів нанесення<br><span>Захист електроніки</span>";
} else if (machine === "wire") {
    boxContents = [
        {
            id: 1,
            imageSrc: image16,
            title: 'Різання та зачищення проводу і кабелю',
            desc: 'Обладнання для мірного нарізання, чищення проводів і кабелів. Різання, чищення верхнього покриття кабелів і покриття внутрішніх проводів.',
            path: '/ua/обладнання-для-монтажу/обробка-проводу/обладнання-різання-зачищення-проводів'
        },
        {
            id: 2,
            imageSrc: image17,
            title: 'Зняття ізоляції проводу і кабелю',
            desc: 'Обладнання для чищення проводів. Чищення верхнього покриття кабелів і покриття внутрішніх проводів. Чищення коаксіальних і силових кабелів.',
            path: '/ua/обладнання-для-монтажу/обробка-проводу/машини-зняття-ізоляції'
        },
        {
            id: 3,
            imageSrc: image18,
            title: 'Обтискання  контактів',
            desc: 'Обладнання для пресування контактів (терміналів). Автоматичне і  напів-автоматичне обладнання для кремпування контактів.',
            path: '/ua/обладнання-для-монтажу/обробка-проводу/обладнання-обжимання-контактів'
        }
    ];
    description = "Виробництво електроніки поки не змогло уникнути проводового монтажу, який важко автоматизувати. Особливо багато часу займають технологічні процеси підготовки проводів та кабелів: різка дроту, чищення ізоляції, пресування контактів, лудіння виводів. Ці операції не жадаю високої кваліфікації, але займають істотно час і впливають на собівартість виробу. Застосування простих недорогих пристроїв знижує час підготовки проводів та покращують якість заготовок. Устаткування окупає себе за кілька місяців і не вимагає спеціального обслуговування і умов експлуатації.";
     subtitle = "Обладнання для оброблення проводу";
     title = "Автоматизація процесів різання і чищення<br><span>Оброблення проводів і кабелів</span>";
}else if (machine === "cutting") {
    boxContents = [
        {
            id: 1,
            imageSrc: image19,
            title: 'Настільні установки для розділення групових панелей',
            desc: 'Настільне обладнання для розділення попередньо скрайбованих групових панелей друкованих плат. Для роботи поза лінією',
            path: '/ua/обладнання-для-монтажу/розділення-групових-панелей/пристрої-розділення-друкованих-плат'
        },
        {
            id: 2,
            imageSrc: image20,
            title: 'Фрезерне обладнання для розділення друкованих плат',
            desc: 'Автоматичне та напів-автоматичне  обладнання для розділення групових друкованих плат. Машини для роботи в лінії та окремо.',
            path: '/ua/обладнання-для-монтажу/розділення-групових-панелей/обладнання-розділення-друкованих-плат'
        },
        {
            id: 3,
            imageSrc: image21,
            title: 'Системи розділення групових плат лазером',
            desc: 'Автоматичне обладнання для розділення друкованих плат складної форми, гнучких друкованих плат та інших складних задач.',
            path: '/ua/обладнання-для-монтажу/розділення-групових-панелей/розділення-групових-заготовок-лазером'
        }
    ];
    description = "Для забезпечення максимальної продуктивності обладнання для монтажу застосовують групові панелі (мультипліковані плати). Самі плати в груповий панелі можуть розмежовуватися різними способами: скрайбування, перемички, перфорація або іншим способом, який не зменшує жорсткості плати. Застосування групових панелей вимагає додаткового технологічного процесу і створення робочого місця. Поділ групових друкованих плат - це серйозний і відповідальний процес. Правильний підбір обладнання дозволяє знизити рівень браку і зменшити в цілому витрати на виробництво виробів.";
     subtitle = "Обладнання для розділення групових плат";
     title = "Автоматизація процесів розділення<br><span>Збільшення продуктивності</span>";
}else if (machine === "storage") {
    boxContents = [
        {
            id: 1,
            imageSrc: image22,
            title: 'Автоматизовані склади компонентів',
            desc: 'Автоматизовані системи для управління комплектацією електронних компонентів і іншими частинами',
            path: '/ua/обладнання-для-монтажу/автоматизовані-системи-зберігання/автоматизовані-склади-компонентів'
        },
        {
            id: 2,
            imageSrc: image23,
            title: 'Шафи сухого зберігання',
            desc: 'Обладнання для сухого зберігання і сушіння електронних компонентів і друкованих плат',
            path: '/ua/обладнання-для-монтажу/автоматизовані-системи-зберігання/шафи-сухого-зберігання'
        },
        {
            id: 3,
            imageSrc: image24,
            title: 'Зберігання паяльної пасти',
            desc: 'Обладнання для зберігання паяльної пасти з підтримкою необхідної температури і вологості',
            path: '/ua/обладнання-для-монтажу/автоматизовані-системи-зберігання/зберігання-паяльної-пасти'
        }
    ];
    description = "Інтелектуальне управління складом електронних компонентів стає все більш важливим фактором успіху в виробничих процесах складання електроніки. Управління зберіганням забезпечує оптимальну продуктивність випуску готових виробів. Автоматизовані склади електронних компонентів забезпечують високу гнучкість і ефективність при комплектуванні виробів і швидкий перехід на випуск нового продукту, мінімізуючи витрати часу і людський фактор. Ефективна система керування зберіганням економить час і гроші протягом всього виробничого процесу. Обладнання включає в себе широкий спектр різних рішень для автоматизації комплектування та зберігання електронних компонентів. Устаткування має модульну конструкцію і можливість нарощування. Інтелектуальна інтеграція з існуючими системами зберігання.";
    subtitle = "Автоматизовані системи зберігання компонентів і матеріалів"
    title = "Автоматизація управлінням комплектацією<br><span>Збільшення ефективності виробництва</ span>"
}else if (machine === "filtration") {
    boxContents = [
        {
            id: 1,
            imageSrc: image25,
            title: 'Бюджетні автономні витяжки із фільтрацією',
            desc: 'Локальні витяжні системи з фільтрацією повітря для оснащення до 1-3 робочих місць для ручного монтажу',
            path: '/ua/обладнання-для-монтажу/системи-уловлювання-диму/уловлювання-диму-для-паяння'
        },
        {
            id: 2,
            imageSrc: image26,
            title: 'Багатомісні димоуловлювальні системи',
            desc: 'Багатомісні димоуловлювальні системи для оснащення виробничої ділянки ручного монтажу компонентів',
            path: '/ua/обладнання-для-монтажу/системи-уловлювання-диму/витяжки-для-паяння'
        },
        {
            id: 3,
            imageSrc: image27,
            title: 'Димоуловлювальні системи для лазерних верстатів',
            desc: 'Інтелектуальні очисні системи для уловлювання шкідливих речовин і фільтрації при лазерній обробці матеріалів',
            path: '/ua/обладнання-для-монтажу/системи-уловлювання-диму/витяжки-для-лазерних-верстатів'
        }
    ];
    description = "Для підприємств, що займаються виробництвом прототипів, підприємств дрібносерійного виробництва та майстерень, не завжди є можливість інвестувати у кошти в дорогу витяжну вентиляцію. Автономні фільтруючі системи дозволяють вирішити завдання відведення шкідливих речовин, що виникають під час паяння та забезпечити охорону здоров'я персоналу. Автономні витяжні системи затримую механічні частинки та шкідливі гази, забезпечуючи механічне та хімічне очищення повітря в робочій зоні монтажників застосовуючи комбіновані фільтри з триступеневою системою фільтрації.";
    subtitle = "Системи уловлювання диму"
    title = "Безпечне виробництво<br><span>Охорона праці</span>"
}else if (machine === "dispensing") {
    boxContents = [
        {
            id: 1,
            imageSrc: image28,
            title: 'Автоматичні дозатори',
            desc: 'Автоматичні дозатори для нанесення паяльної пасти та клею та інших матеріалів. Для роботи в лінії та окремо.',
            path: '/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автоматичний-дозатор'
        },
        {
            id: 2,
            imageSrc: image29,
            title: 'Напів автоматичні дозатори',
            desc: 'Напів автоматичні дозатори для нанесення паяльної пасти та клею на друковані плати. Настільне виконання',
            path: '/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автомат-дозування'
        },
        {
            id: 3,
            imageSrc: image30,
            title: 'Ручні дозатори пасти та клею',
            desc: 'Ручні пристрої для нанесення паяльної пасти та клею на контактні площадки друкованих плат. Проста експлуатація',
            path: '/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/ручні-дозатори'
        }
    ];
    description = "Дозатори паяльної пасти та клею застосовуються як обладнання для поверхневого монтажу SMT. В умовах дрібносерійного багатономенклатурного виробництва монтажу друкованих плат використовують дозатори паяльної пасти, як окрему машину для економії коштів і часу на виготовлення трафаретів. Дозатори клею застосовують в умовах серійного і багатосерійного виробництв для технології змішаного монтажу для фіксації SMD під час паяння хвилею припою. Дозатори паяльної пасти та клею на порядок підвищують гнучкість виробництва та рекомендуються для контрактних виробників електроніки. Застосування автоматичних дозаторів не обмежується лише SMT. Машини використовують для процесів герметизації механічних частин, заповнювання, нанесення термопаст та ін.";
    subtitle = "Нанесення матеріалів"
    title = "Автоматичне дозування <span>Автоматизація процесів</span>"
}else if (machine === "software") {
    boxContents = [
        {
            id: 1,
            imageSrc: image33,
            title: 'Програмні рішення для SMT',
            desc: 'Підготовка та оптимізація програм для встановлення компонентів. Управління виробничими лініями. Візуалізація виробничих показників',
            path: '/ua/комплексні-рішення/програмне-забезпечення/janets'
        },
        {
            id: 2,
            imageSrc: image34,
            title: 'Програмне забезпечення для аналізу',
            desc: 'Виявлення та усунення виробничих відхилень. Ранній аналіз даних щодо надійності процесів. Візуалізація стану лінії',
            path: '/ua/комплексні-рішення/програмне-забезпечення/trace-monitor'
        },
        {
            id: 3,
            imageSrc: image35,
            title: 'Система підготовки живильників',
            desc: 'Відстеження компонентів (traceability). Програмна інтеграція всіх систем, що беруть участь у підготовці (склад, візки з живильниками, окремі живильники)',
            path: '/ua/комплексні-рішення/програмне-забезпечення/ifs-nx'
        }
    ];
    description = "Комплексні програмні рішення для забезпечення всього циклу виробництва електронних виробів – від надходження комплектації та матеріалів до відвантаження готової продукції до замовника. Автоматичний облік та зберігання електронних компонентів, підготовка програм та управління виробничими лініями, повне відстеження комплектації та матеріалів, управління якістю та багато інших корисних функцій.";
    subtitle="Програмні рішення"
    title="Автоматизація виробництва<br><span>Підтримка Industry 4.0</span>"
}

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle={subtitle}
                            title={title}
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>{description}</h6>
                <Row className="gutter-xl-70">
                    {
                        boxContents.map(boxContent => {
                            return (
                                <Col lg={4} md={6} className="box-item" key={`box-image-${boxContent.id}`}>
                                    <BoxLargeImage 
                                        title={boxContent.title}
                                        desc={boxContent.desc}
                                        imageSrc={boxContent.imageSrc}
                                        path={boxContent.path}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </SectionWrap>
    )
}


BoxSection.propTypes = {
    sectionTitleStyle: PropTypes.object,
    linkStyle: PropTypes.object,
    sectionBottomStyle: PropTypes.object
}

BoxSection.defaultProps = {
    sectionTitleStyle: {
        mb: '30px',
        responsive: {
            medium: {
                mb: '17px'
            }
        }
    },
    linkStyle: {
        fontSize: '18px',
        fontWeight: 500,
        lineheight: 1.40,
        color: 'primary',
        layout: 'underline',
        hover: {
            layout: 2
        }
    },
    sectionBottomStyle: {
        mt: '40px',
        align: 'center'
    }
}

export default BoxSection;