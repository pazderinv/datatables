/*
DataTables - плагин для JavaScript библиотеки jQuery, использующий стили css фреймворка Bootstrap, 
с помощью данного плагина можно легко добавить элементы управления для любой html таблицы, 

В этом примере рассмотрены некоторые возможности DataTables:
- Сортировка по нескольким колонкам
- Поиск данных в таблице
- Постраничная навигация
- Выбор количества строк на одной странице
- Локализация интерфейса

Дополнительные материалы:
- https://datatables.net/download/ - скачать DtataTables
- https://datatables.net/plug-ins/i18n/ - плагин для локализации
- http://live.datatables.net/lakilaxu/1/edit - онлайн-редактор для живого тестирования DtataTables
- https://getbootstrap.com/docs/5.1/getting-started/introduction/ - стартовый шаблон Bootstrap
- Скачать файлы примера



*/


$(document).ready( function () {
            let table = $('#table_id').DataTable({
              //Подключение перевода некоторых фраз и сообщений 
              //с помощью параметров при инициализации Datatables
               language: {
                    "sLengthMenu": "_MENU_",
                    "zeroRecords": "Записи отсутствуют.",
                    "emptyTable": "В таблице отсутствуют данные",
                    "infoFiltered": "(из _MAX_ записей)",
                    "info": "Записи с _START_ до _END_ из _TOTAL_",
                    "infoEmpty": "",
                    "search": "Поиск",
                    "paginate": {
                        "first": "Первая",
                        "previous": "<",
                        "next": ">",
                        "last": "Последняя"
                    },
                },
              
              // Подключение плагина перевода через CDN
              // language: {
              //     url: 'https://cdn.datatables.net/plug-ins/1.11.0/i18n/ru.json'
              // }

              //Отключение сортировки у колонок по которым не нужна сортировка 
              "columnDefs": [
                        { "orderable": false, "targets": [5, 6, 7 ] } // Applies the option to all columns
                    ],


                //Отображение выпадающего списка с количеством отображаемых строк на одной странице
                "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "Все"]],

                //Скрытие постраничной навигации при инициализации DataTables 
                //если число страниц равно 1
                "initComplete": function() {
                  if (this.api().page.info().pages === 1) {
                    $('#order_table_paginate').hide();
                  }
                },
               
            });

            //Скрытие/Отображение постраничной навигации при изменении количества 
            //записей в выпадающем списке
            $('#order_table_length select').on('change', function(e){
              if (table.page.info().pages === 1) {
                $('#order_table_paginate').hide();
              } else {
                $('#order_table_paginate').show();
              }
            });

            //Обработка события сортировки
            table.on('order.dt', function(e){
              console.log(e.isTarget);
            });

        } );