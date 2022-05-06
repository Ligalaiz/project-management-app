# Система управления проектами

**Система управления проектами** – приложение помогающее достичь поставленные задачи отдельному человеку в команде или группе разработчиков.

## Теоретическая справка

На рынке существует множество конкурентов нашему будущему приложению. Хоть это и не страшит,мы решили изучить их, прежде чем делать своё. Из самых главных конкурентов отдел маркетинга выделил: Trello, Jira, Redmine, Битрикс24, Яндекс Трекер, Asana, GanttPro, Github projects.

## Формирование команд

- задание выполняется в команде, количество участников команды - до трех человек
- команды могут формироваться по желанию студентов или рандомно
- организация командной работы описана в Документации

## Прототипы приложения

Итоговый набор инструментов на ваш собственный вкус.

## Backend

Вы команда front-end разработчиков. Backend вам будет предоставлен.

Однако:

- Backend надо будет самостоятельно задеплоить для демонстрации работы вашего приложения.
- При разработке приложения вы можете запускать backend в удобной вам среде, например локальная машина.

## Структура приложения

В не зависимости от типа приложения, в нём должно быть:

- приветственная страница
- пользовательский логин
- страница управления проектами
- страница управления проектом
- дополнительный функционал(например, возможность посмотреть все таски выбранного пользователя), дополнительный функционал обсудите со своим тимлидом/ментором

## Требования к репозиторию

- название репозитория: **project-management-app**, название ветки, в которую мержится разработка - **develop**, ветка **master** пустая, содержит только README.md
- история коммитов должна отображать процесс разработки приложения.
- демо-версия приложения размещается на `gh-pages`, `netlify`, `heroku` либо на другом подобном хостинге.
- после окончания разработки или при наступлении дедлайна, создайте pull request из ветки разработки в ветку `master`. **Мержить Pull Request не нужно**
- репозиторий, в котором велась работа над проектом, нужно сделать публичным.

### Gitflow, workflow

Вы вольны выбирать самостоятельный путь развития проекта и репозитория. Здесь указаны ссылки на описание и разбор популярных практик.

- [Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html)
- [Рабочий процесс Gitflow Workflow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Стратегия ветвления ThreeFlow](https://habr.com/ru/company/infopulse/blog/345826/)
- [GitLab Flow VS Git flow VS GitHub flow](https://yapro.ru/article/6172)
- [Секретная ссылка к знаниям](https://www.google.com/search?q=gitflow+%D0%B0%D0%BB%D1%8C%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%82%D0%B8%D0%B2%D1%8B)

## Технические требования

- Локализация (минимум 2 языка). В приложении должна быть возможность смены языка по нажатию на ползунок в header
- семантическая вёрстка
- работа приложения проверяется в браузере Google Chrome последней версии
- необходимо использовать React(Gatsby, NextJS, Remix, etc. не запрещены)
- React 18 + suspense feature.
- Приватные роуты, 404, error boundary
- Использование jQuery в основном коде приложения не допускается.
- можно использовать create-react-app, css фреймворки, любые js библиотеки, любые библиотеки компонент, html и css препроцессоры
- нужно использовать TypeScript
- необходимо использовать бэкенд для корректной работы приложения и осуществления взаимодействия между несколькими пользователями

## Требования к оформлению приложения

- Вы не ограничены в творчестве, но ограничены возможностями пользователя
- качественное приложение характеризуется проработанностью деталей, вниманием к типографике (не больше трёх шрифтов на странице, размер шрифта не меньше 14 рх, оптимальная [контрастность шрифта и фона](https://snook.ca/technical/colour_contrast/colour.html)), тщательно подобранным контентом
- вёрстка адаптивная. Минимальная ширина страницы, при которой проверяется корректность отображения приложения - 320рх
- интерактивность элементов, с которыми пользователи могут взаимодействовать, изменение внешнего вида самого элемента и состояния курсора при наведении, использование разных стилей для активного и неактивного состояния элемента, плавные анимации
- единство стилей всех страниц приложения - одинаковые шрифты, стили кнопок, отступы, одинаковые элементы на всех страницах приложения имеют одинаковый внешний вид и расположение. Цвет элементов и фоновые изображения могут отличаться. В этом случае цвета используются из одной палитры, а фоновые изображения из одной коллекции.

## Описание функциональных блоков

Перед описанием функционала приложения нужно определить некоторые понятия:

- Пользователь(член команды) может ставить задачи, выполнять задачи, просматривать задачи, удалять собственные задачи, быть ответственным (виноватым) в чужих задачах.

### Welcome page(route)

- На приветственной странице должны отображаться общие сведения о команде, проекте, курсе.
- В верхнем правом углу должны быть доступны 2 кнопки log in и sign up.
- При наличии неистёкшего токена пользователь автоматически должен быть перенаправлен на главный роут приложения.
- При истечении срока жизни токена - пользователь автоматически должен быть перенаправлен на "Welcome page".
- Нажатие на кнопку Login / Sign up автоматически перенаправляет нас на роут с формой для Login / Sign up.

### Header

- На всех роутах доступных при наличии токена должен присутствовать sticky header ( момент, когда он становится sticky (при наличии на странице скролла) должен быть анимирован (например его цвет может потемнеть или высота слегка уменьшится)).
- В хэдере должны быть кнопки: edit profile, logout, create new board, тогглер локализации.
  Edit profile должен отправлять нас на роут с формой для edit profile. Требования к форме такие же как и ко всем формам в приложении. Должна быть кнопка удаления юзера. В случае этого действия => "confirmation modal" => пользователя должно разлогинить и пользователь должен быть удалён из базы данных.
- Логаут - логаутит.
- create new board - открывает модальное окно с формой для создания борды.
- Требования к форме такие же как и ко всем формам в приложении.

### Footer

- footer со ссылками на гитхабы авторов приложения, год создания приложения. footer отображается на всех страницах приложения.

### Login / Sign up

- Поля форм должны быть реализованы в соответствии с api backend приложения. Должна быть реализована валидация.
- Ошибки со стороны BE - (Not found, unhandled rejection, etc) должны отображаться пользователю в user-friendly формате (toast, pop-up или что-то подобное, на ваше усмотрение).
- При успешном логине пользователь должен быть перенаправлен на "Main route"

### Main route

- Отображает борды списком.
- Борды отображаются с маленьким превью из доступной информации (title, description, etc). По клику на элемент переходим на board item (Board route). Также должна присутствовать кнопка для удаления борды.
- При попытке удаления борды мы должны получить confirmation modal в котором должны подтвердить серёзность наших намерений. confirmation modal должен быть универсальным компонентом (одним на всё приложение).
- глобальный поиск(опционально. Пример доп. функционала.): поиск таска по номеру таска, названию, пользователям, которые в нём участвуют и по тексту описания задачи.

### Board route

- Должны присутствовать кнопки для создания колонки.
- Если к борде привязана хотябы одна колонка - отображаем также и кнопку создания таски.
- Для создания колонки и таска используется форма отображаемая в модальном окне.
- Требования к модальному окну и формам описаны ранее.
- Таск не может быть НЕ привязан к колонке.
- Мы можем создать несколько колонок. Мы можем создать неограниченное количество тасок. При переполнении количеством тасок колонки - скролл внутри колонки.
- Страница на данном роуте не должна иметь вертикального скролла.
- С помощью drag-n-drop мы можем менять колонки местами.
- С помощью drag-n-drop мы можем менять очерёдность тасок в рамках колонки.
- С помощью drag-n-drop мы можем менять принадлежность таски к колонке.
- ❗ Рекомендуется использовать существующую библиотеку из React-экосистемы для реализации функционала drag-n-drop ❗.
- По клику на таск открываем модальное окно с формой edit task. Требования к форме и окну как везде.
- На таске должна присутствовать кнопка delete task. При нажатии: confirmation modal -> удаление.
- Вверху колонки должен быть title. При нажатии на него он из текста должен превращаться в input, слева от которого будут кнопки cancel и submit. После ввода текста в input и нажатия submit - title колонки должен поменяться.
- На колонке должна присутствовать кнопка delete. По нажатию - confirmation modal - при апруве - удаление.
- Должна быть кнопка "вернуться" для возвращения к main route
- ВНИМАНИЕ! Удаление колонки автоматически удаляет привязанные к ней таски из BD.

### Welcome route

- [ ] На приветственной странице должны отображаться общие сведения о команде, проекте, курсе.
- [ ] В верхнем правом углу должны быть доступны 2 кнопки log in и sign up.
- [ ] При наличии неистёкшего токена пользователь автоматически должен быть перенаправлен на главный роут приложения.
- [ ] При истечении срока жизни токена - пользователь автоматически должен быть перенаправлен на "Welcome page".
- [ ] Нажатие на кнопку Login / Sign up автоматически перенаправляет нас на роут с формой для Login / Sign up.

### Login / Sign up

- [ ] Логин/log out есть на всех страницах
- [ ] Поля форм должны быть реализованы в соответствии с api backend приложения. Должна быть реализована валидация.
- [ ] При успешном логине пользователь должен быть перенаправлен на "Main route"

### Main route

- [ ] Функционал создания борды
- [ ] Отображает борды списком.
- [ ] Борды отображаются с маленьким превью из доступной информации (title, description, etc). По клику на элемент переходим на board item (Board route). Также должна присутствовать кнопка для удаления борды.
- [ ] При попытке удаления борды мы должны получить confirmation modal в котором должны подтвердить серёзность наших намерений. confirmation modal должен быть универсальным компонентом (одним на всё приложение).
- [ ] Реализован функционал редактирования профиля пользователя.

### Board route

- [ ] Должны присутствовать кнопки для создания колонки.
- [ ] Если к борде привязана хотябы одна колонка - отображаем также и кнопку создания таски.
- [ ] Для создания колонки и таска используется форма отображаемая в модальном окне.
- [ ] При переполнении количеством тасок колонки - скролл внутри колонки.
- [ ] Страница на данном роуте не должна иметь скролла.
- [ ] С помощью drag-n-drop мы можем менять колонки местами.
- [ ] С помощью drag-n-drop мы можем менять очерёдность тасок в рамках колонки.
- [ ] С помощью drag-n-drop мы можем менять принадлежность таски к колонке.
- [ ] по клику на таск открываем модальное окно с формой edit task. Требования к форме и окну как везде.
- [ ] на таске должна присутствовать кнопка delete task. При нажатии: confirmation modal -> удаление.
- [ ] вверху колонки должен быть title. При нажатии на него он из текста должен превращаться в input, слева от которого будут кнопки cancel и submit. После ввода текста в input и нажатия submit - title колонки должен поменяться.
- [ ] на колонке должна присутствовать кнопка delete. По нажатию - confirmation modal - при апруве - удаление.

### Общие требования

- [ ] Ошибки со стороны BE - (Not found, unhandled rejection, etc) должны отображаться пользователю в user-friendly формате (toast, pop-up или что-то подобное, на ваше усмотрение).
- [ ] Локализация
- [ ] Backend задеплоен
- [ ] sticky-Header
- [ ] глобальный поиск (либо другой соразмерный по трудозатратам доп функционал): поиск таска по номеру таска, названию, пользователям, которые в нём участвуют и по тексту описания задачи.

### Штрафы

- [ ] Присутствие дефолтной реактовской favicon
- [ ] Присутствие ошибок и ворнингов в консоли
- [ ] Наличие в консоли результатов выполнения console.log

## Полезные ресурсы

- [Управление проектами](https://ru.wikipedia.org/wiki/%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%D0%BC%D0%B8)
- [Что такое проект?](<https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_(%D0%B2_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8)>)
- [Kanban](<https://en.wikipedia.org/wiki/Kanban_(development)>)
