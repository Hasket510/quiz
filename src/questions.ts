import { EPics } from './assets/Pic'

export const questions = {
	warcraft: [
		{
			question:
				'Warcraft III помнят многие, Warcraft II — избранные, а оригинал на своих системниках застали и вовсе единицы. Слабо вспомнить, каким было полное название первой части?',
			variants: [
				'Warcraft: Of Orcs and Men',
				'Warcraft: Orcs and Humans',
				'Warcraft: Of Blood and Honor',
				'Warcraft. Просто Warcraft.',
			],
			correct: 1,
			pic: EPics.warCraftQuestion1,
		},
		{
			question:
				'Голливудский фильм Warcraft посмотрели даже те, кто игровой вселенной сроду не увлекался. А знаете ли вы, с событиями какой части сериала связан сюжет экранизации?',
			variants: ['Первой', 'Второй', 'Третьей', 'World of Warcraft'],
			correct: 0,
			pic: EPics.warCraftQuestion2,
		},
		{
			question:
				'В одной из кат-сцен Warcraft III: Reign of Chaos явившийся в Лордерон пророк предложил спасти народ от надвигающейся угрозы именно таким образом:',
			variants: [
				'Уничтожить ледяной меч Фростморн',
				'Убить Короля-Лича Нер’зула',
				'Увести королевство людей на запад',
				'Подготовиться к войне, пока не поздно',
			],
			correct: 2,
			pic: EPics.warCraftQuestion3,
		},
		{
			question:
				'Впрочем, не послушали пророка ещё и потому, что проблем хватало и без него. Помимо странных перемещений орков, на королевство обрушилась и другая напасть, а именно...',
			variants: [
				'Песчаная буря',
				'Гражданская война',
				'Лазутчики гноллов',
				'Странная чума',
			],
			correct: 3,
			pic: EPics.warCraftQuestion4,
		},
		{
			question:
				'Blizzard — большие любители пасхалок: персонажей их вселенных в Warcraft III можно встретить немало. Есть среди них и герой фильма, не имеющий отношения к франшизам. О какой ленте идёт речь?',
			variants: [
				'Бойцовский клуб',
				'Конан-Варвар',
				'Властелин колец',
				'Зловещие мертвецы',
			],
			correct: 0,
			pic: EPics.warCraftQuestion5,
		},
		{
			question:
				'Пройти The Frozen Throne на высоком уровне сложности удалось не всем. Зато тех, кто выдержал это испытание, ждал приятный сюрприз, а именно...',
			variants: [
				'Получение всех чит-кодов для игры',
				'Оригинальный видеоклип с участием Артаса',
				'Набор уникальных обоев рабочего стола',
				'Новая тема оформления главного меню',
			],
			correct: 1,
			pic: EPics.warCraftQuestion6,
		},
		{
			question:
				'«Долгоиграющие» релизы встретишь нечасто — но иногда разработчики поддерживают своё детище удивительно долго. Последний официальный патч для третьего «Варкрафта» был выпущен в...',
			variants: ['2012 году', '2014 году', '2016 году', '2018 году'],
			correct: 3,
			pic: EPics.warCraftQuestion7,
		},
		{
			question:
				'Локализация Warcraft III настолько хороша, что даже сегодня даст фору многим конкурентам. Но одна часто повторяющаяся фраза была настолько навязчивой, что давно стала мемом. Это, конечно же...',
			variants: [
				'...Во имя правосудия!',
				'...А я ещё живой! Я розовый и тёплый!',
				'...Нужно построить зиккурат!',
				'...Они не уйдут!',
			],
			correct: 2,
			pic: EPics.warCraftQuestion8,
		},
		{
			question:
				'К слову о мемах. Знаменитый чит-код для Reign of Chaos, дающий мгновенную победу, отсылает к одному из первых интернет-мемов. Впервые это словосочетание появилось в...',
			variants: [
				'Command & Conquer: Red Alert',
				'Dune 2000',
				'Zero Wing',
				'Jagged Alliance',
			],
			correct: 2,
			pic: EPics.warCraftQuestion9,
		},
		{
			question:
				'В финале The Frozen Throne перед игроком появляется… Правильно, трон, вокруг которого и закручен сюжет кампании. Но интересует главного героя не он, а спрятанный внутри артефакт. Имя ему...',
			variants: [
				'Корона Неруба',
				'Шлем Короля-лича',
				`Посох Гул'дана`,
				'Щит Саргераса',
			],
			correct: 1,
			pic: EPics.warCraftQuestion10,
		},
	],
	diablo: [
		{
			question:
				'Как и полагается, начнём с азов. Сколько классов было в самой первой игре, без всяких дополнений и прочей мишуры?',
			variants: [
				'Всего два — воин и маг',
				'Только три — воин, маг и вор',
				'Целых четыре — воин, маг, вор и монах',
				'Нет, на старте в первой дьябле вообще был только один персонаж!',
			],
			correct: 1,
			pic: EPics.diabloQuestion1,
		},
		{
			question:
				'Вы играете в первую часть, и вам попался предмет с подписью золотого цвета. Что это значит и что с ним лучше сделать?',
			variants: [
				'Пусть лежит, где лежал. Это никому не нужный хлам',
				'Это магический предмет, можно выгодно перепродать, например',
				'Сразу хватать! Это уникальный предмет, обязательно пригодится',
				'В первой Diablo таких предметов не было',
			],
			correct: 2,
			pic: EPics.diabloQuestion2,
		},
		{
			question:
				'А кстати, вспомните, как назывался город, в котором разворачивается действие игры?',
			variants: ['Тристан', 'Тристрам', 'Тринидад', 'Троицк'],
			correct: 1,
			pic: EPics.diabloQuestion3,
		},
		{
			question:
				'Будем потихоньку переходить ко второй части. Найдёте лишнего в этом списке?',
			variants: ['Амазонка', 'Варвар', 'Монах', 'Паладин'],
			correct: 2,
			pic: EPics.diabloQuestion4,
		},
		{
			question: 'Для чего нужен хорадрический куб в Diablo II?',
			variants: [
				'Для повышения характеристик персонажа',
				'Для изменения характеристик персонажа',
				'Для случайного получения новых предметов',
				'Для крафта новых предметов из уже имеющихся',
			],
			correct: 3,
			pic: EPics.diabloQuestion5,
		},
		{
			question:
				'Если засунуть в этот куб том городского портала (Tome of Town Portal) и ногу Вирта (Wirt’s Leg), то можно попасть…в. Сколько классов было в самой первой игре, без всяких дополнений и прочей мишуры?',
			variants: [
				'...на секретный уровень с коровами',
				'...на секретный уровень с медведями',
				'...на секретный уровень с котиками',
				'...никуда, нет никаких секретных уровней',
			],
			correct: 0,
			pic: EPics.diabloQuestion6,
		},
		{
			question:
				'Вспомним заодно и о демоне, в честь которого названа игра — Диабло. Он лишь одно из трёх воплощений Изначального Зла, с которыми вам предстоит сразиться в Diablo II. Других двух зовут…',
			variants: [
				'Азазель и Мефистофель',
				'Баал и Мефисто',
				'Люцифер и Вельзевул',
				'Шуб-Ниггурат и Азатот',
			],
			correct: 1,
			pic: EPics.diabloQuestion7,
		},
		{
			question:
				'Потихоньку подбираемся к третьей части. Кто из персонажей может выпускать на врагов ядовитых жаб, трупных пауков, зомби-псов и прочую вудуистскую нечисть?',
			variants: [
				'Конечно же, Некромант из нового DLC!',
				'А вот и нет, речь идёт о Чародее!',
				'На самом деле это Колдун!',
				'В Diablo III вообще нет персонажа с такими способностями!',
			],
			correct: 2,
			pic: EPics.diabloQuestion8,
		},
		{
			question:
				'А ещё Diablo III есть свой секретный уровень «Чудо-страна» (Whimsyshire), c разноцветными единорогами. Знаете, как туда попасть?',
			variants: [
				'Ну вот, опять вы какие-то несуществующие уровни придумываете!',
				'Этот уровень есть, и чтобы туда попасть, нужно купить специальный посох и кликнуть на него правой кнопкой мыши',
				'Много-много-много раз щелкнуть на скелет коровы в окрестностях руин',
				'Сначала собрать пять реагентов, найти рецепт, скрафтить посох, и прийти с ним к скелету коровы на дороге между руинами Тристрама и Новым Тристрамом',
			],
			correct: 3,
			pic: EPics.diabloQuestion9,
		},
		{
			question:
				'И под конец — небольшой вопрос на общую эрудицию. В третьей части Монах может взять себе оружие «Коготь Логана», нечто вроде кастета с тремя стальными шпорами. Это — явная отсылка…',
			variants: [
				'К главному герою Call of Duty: Ghosts, его тоже зовут Логан',
				'К герою книги «Побег Логана» и одноимённого фильма',
				'К Росомахе из «Людей-Икс», его зовут Логан и у него такие же когти',
				'К Логану Феллу из сериала «Дневники Вампира»',
			],
			correct: 2,
			pic: EPics.diabloQuestion10,
		},
	],
	starcraft: [
		{
			question:
				' Последние приготовления по освобождению Айура... Варп-платформы наполнены верными его сынами и готовы к искривлению пространства, Иерарх Артанис стоит перед воинами и даёт последние напутствия. Свет кхалы сияет как никогда...',
			variants: [
				'Появляется флот смерти талдаримов. Завязывается кровавое побоище',
				'"Копьё Адуна" испускает на поверхность нуль-излучение и поверхность родины перворождённых очищается от зергов',
				'Появляется Зератул и требует приостановить вторжение',
				'Вершитель Селендис бросается на Артаниса и убивает его',
			],
			correct: 2,
			pic: EPics.starCraftQuestion1,
		},
		{
			question: 'Как был побеждён ультралиск из трейлера Legacy of the void?',
			variants: [
				'Он был зафотонен пробкой, призвавшей пилон',
				'Прямым попаданием орбитального удара с "Копья Адуна"',
				'Его затянуло в воронку',
				'Он поскользнулся на слизи и съехал в каньон',
			],
			correct: 2,
			pic: EPics.starCraftQuestion2,
		},
		{
			question: 'Какой фразой Зератула завершается первый трейлер этой части:',
			variants: [
				'"...Эн таро Тассадар"',
				'"... за Айур!"',
				'"... во имя делаамов!"',
				'"... ненавижу порталы!"',
			],
			correct: 1,
			pic: EPics.starCraftQuestion3,
		},
		{
			question: 'Что из нижеперечисленного НЕ входит в арсенал "Копья Адуна":',
			variants: [
				'"Портальный резонанс"',
				'"Орбитальная бомбардировка"',
				'"Остановка времени"',
				'"Солнечное копьё"',
			],
			correct: 0,
			pic: EPics.starCraftQuestion4,
		},
		{
			question: 'Как называется личный звездолёт Зератула?',
			variants: [
				'"Чёрная жемчужина"',
				'"Корсар"',
				'"Искатель пустоты"',
				'"Негоциатор"',
			],
			correct: 2,
			pic: EPics.starCraftQuestion5,
		},
		{
			question:
				'В каком титуле находилась Талис на момент пролога Lecacy of the Void',
			variants: ['Вершитель', 'Прелат', 'Претор', 'Высшая посвящённая'],
			correct: 2,
			pic: EPics.starCraftQuestion6,
		},
		{
			question: 'На сколько подчастей был разделён аддон Нова: незримая война?',
			variants: ['9', '5', '3', '2'],
			correct: 2,
			pic: EPics.starCraftQuestion7,
		},
		{
			question:
				'По традиции, у каждой группировки, за которую играет игрок есть "флагман". Как называется космический корабль, который предоставлен Нове и её войскам?',
			variants: ['"Горгон"', '"Гиперион"', '"Грифон"', '"Норад IV"'],
			correct: 2,
			pic: EPics.starCraftQuestion8,
		},
		{
			question:
				'На какой из планет в сюжете "Незримой войны" произошло столкновение всех трёх рас в лице войск Джи`нары, войск Новы и "Защитников человечества"?',
			variants: [
				'курортная планета Тирадор IX',
				'столица доминиона Корхал',
				'ремесленная планета малый Джаарбан',
				'родина протосов Айур',
			],
			correct: 0,
			pic: EPics.starCraftQuestion9,
		},
		{
			question: 'Чем завершается сюжет "Незримая война"?',
			variants: [
				'Нова выходит замуж за Валериана и становится императрицей доминиона',
				'Аларак посылает флот смерти на Корхал, начинается полномасштабная война',
				`Нова нарушает приказ Валериана и сбегает со всем отрядом в неизвестном направлении`,
				'Девис умирает после ареста в зале суда',
			],
			correct: 2,
			pic: EPics.starCraftQuestion10,
		},
	],
}
