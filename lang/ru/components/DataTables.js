export default {
  header: 'Таблица данных',
  headerText: 'Компонент `v-data-table` используется для отображения табличных данных. Особенности включают сортировку, поиск, разбиение на страницы, встроенное редактирование, всплывающие подсказки и выбор строк.',
  components: ['v-data-table', 'v-edit-dialog'],
  examples: [{
    standard: {
      header: 'Cтандарт',
      desc: 'Стандартная таблица данных содержит данные без дополнительной функциональности. Вы можете отказаться от улучшения таблиц, которые позволяют вам управлять разбиением на страницы, информации с помощью подсказки `hide-actions`.'
    },
    noData: {
      header: 'Слоты: нет данных/нет результатов',
      desc: 'Слоты `no-data` и` no-results` могут отображать пользовательский HTML, если в таблице нет данных или нет отфильтрованных данных'
    },
    headers: {
      header: 'Слоты: элементы и заголовки',
      desc: 'Слоты `items` и `headers` могут принимать либо коллекцию тегов <kbd>td/th</kbd>, либо если вы хотите управлять всей строкой, тегом <kbd>tr</kbd>.'
    },
    headerCell: {
      header: 'Слоты: headerCell',
      desc: 'Если вы хотите применить некоторую общую разметку или эффект для каждой из ячеек заголовка, вы можете использовать слот `headerCell`. В этом примере используется для применения всплывающей подсказки к каждому заголовку.'
    },
    footer: {
      header: 'Слоты: нижний колонтитул',
      desc: 'Существует также слот `footer` , когда вы хотите добавить дополнительную функциональность в таблицы, например, для фильтрации столбцов или поиска.'
    },
    expand: {
      header: 'Слоты: expand',
      desc: 'Компонент `v-data-table` также поддерживает расширяемые строки, используя слот` expand`. Вы можете использовать свойство `expand` для предотвращения развернутых строк от закрытия при нажатии на другую строку.'
    },
    select: {
      header: 'Выбираемые строки',
      desc: 'Выбираемые строки позволяют выполнять действие по определенным или всем строкам.'
    },
    search: {
      header: 'Поиск с помощью настраиваемого текста страницы',
      desc: 'В таблице данных содержится подсказка `search`, которая позволяет фильтровать ваши данные.'
    },
    customIcons: {
      header: 'Custom icons',
      desc: 'Previous/next pagination icons and sort icon can be customized with **prev-icon**, **next-icon** and **sort-icon** props.'
    },
    paginate: {
      header: 'Внешняя разбивка на страницы',
      desc: 'Пагинация может управляться извне с помощью свойства `pagination`. Помните, что вы должны применять модификатор `.sync`.'
    },
    sort: {
      header: 'Внешняя сортировка',
      desc: 'Сортировка также может управляться извне с помощью свойства `pagination`. Помните, что вы должны применять модификатор `.sync`. Вы также можете использовать свойства, чтобы установить отсортированный по умолчанию столбец.'
    },
    server: {
      header: 'Разбивка по страницам и сортировка на стороне сервера',
      desc: 'Если вы загружаете данные из бэкэнд и хотите разбивать страницы и сортировать результаты перед их отображением, вы можете использовать свойство `total-items`. Определение этого свойства отключит встроенную сортировку и разбивку на страницы, и вместо этого вам придется использовать свойство `pagination` для прослушивания изменений. Используйте `loading` для отображения индикатора выполнения при извлечении данных.'
    },
    headerless: {
      header: 'Таблицы без заголовка',
      desc: 'Установка свойства `hide-headers` создает таблицу без заголовка.'
    },
    editdialog: {
      header: 'Встроенное редактирование',
      desc: 'Компонент `v-edit-dialog` используется для встроенного редактирования в таблицах данных. You can block closing the dialog when clicked outside by adding the **persistent** prop.'
    },
    crud: {
      header: 'Действия CRUD',
      desc: 'таблица данных с действиями CRUD с использованием компонента `v-dialog` для редактирования каждой строки'
    }
  }],
  props: {
    'v-edit-dialog': {
      cancelText: 'Устанавливает текст по умолчанию для кнопки отмены при использовании **large** ',
      lazy: 'Mixins.Bootable.props.lazy',
      large: 'Прикрепляет кнопку отправки и отмены к диалоговому окну',
      saveText: 'Устанавливает текст по умолчанию для кнопки сохранения при использовании **large**',
      transition: 'Mixins.Transitionable.props.transition'
    },
    'v-data-table': {
      headerText: 'При использовании объекта, текстовое значение для заголовка',
      headers: 'Массив заголовков',
      hideHeaders: 'Скрыть заголовки таблиц'
    }
  },
  scopedSlots: {
    'v-data-table': {
      headerCell: 'Слот для настройки ячеек заголовка',
      headers: 'Слот для настройки всего заголовка'
    }
  }
}
