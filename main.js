// Задание 1
// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■■ поле, которое хранит цвет маркера;
// ■■ поле, которое хранит количество чернил в маркере (в про-
// центах);
// ■■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.

/*
class Marker {
    constructor(color, quantityOfInk) {
        this.color = color;
        this.quantityOfInk = quantityOfInk;
    }
    PrintText(text) {
        let outputText = '';
        for (let i = 0; i < text.length; i++) {
            if (this.quantityOfInk === 0) {
                document.write("You don't have enough ink to print full text. Fill it!");
                break;
            }
            outputText += text[i];
            if (text[i] != ' ')
                this.quantityOfInk -= 0.5;
        }
        const outputHtml = `<p style="color: ${this.color};">${outputText}</p>`;
        document.body.insertAdjacentHTML('beforeend', outputHtml);
    }
}

class RefuelingMarker extends Marker {
    FillInk(quantityOfInk) {
        if (this.quantityOfInk + quantityOfInk > 100)
            document.write("There is too much ink! Try another quantity!");
        else
            this.quantityOfInk += quantityOfInk;
    }
}

const marker1 = new Marker('blue', 100);
marker1.PrintText('Сквозь волнистые туманы Пробирается луна, На печальные поляны Льет печально свет она.');
marker1.PrintText('Сквозь волнистые туманы Пробирается луна, На печальные поляны Льет печально свет она.');
marker1.PrintText('Сквозь волнистые туманы Пробирается луна, На печальные поляны Льет печально свет она.');

const marker2 = new RefuelingMarker('violet', 70);
marker2.PrintText('Сквозь волнистые туманы Пробирается луна, На печальные поляны Льет печально свет она.');
marker2.PrintText('Сквозь волнистые туманы Пробирается луна, На печальные поляны Льет печально свет она.');
marker2.FillInk(50);
marker2.PrintText('Сквозь волнистые туманы Пробирается луна, На печальные поляны Льет печально свет она.');
*/

// Задание 2
// Реализуйте класс ExtendedDate, унаследовав его от стандарт-
// ного класса Date и добавив следующие возможности:
// ■■ метод для вывода даты (числа и месяца) текстом;
// ■■ метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если буду-
// щая или текущая, то true);
// ■■ метод для проверки – високосный год или нет;
// ■■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов.

/*
class ExtendedDate extends Date {
  constructor(date) {
    super();
    this.date = new Date(date);
  }
  PrintTextDate() {
    let resultDigit = "";
    let textDate = this.date.toLocaleDateString();
    let months = [
      "Января", "Февраля", "Марта", "Апреля", "Мая",
      "Июня", "Июля", "Августа", "Сентября",
      "Октября", "Ноября", "Декабря"
    ];
    let dig1 = ["первое", "второе", "третье",
      "четвёртое", "пятое", "шестое", "седьмое",
      "восьмое", "девятое", "десятое"
    ];
    let dig2 = ["один", "две", "три", "четыр",
      "пят", "шест", "сем", "восем", "девят"
    ];
    let dig3 = ["двадцать", "тридцать"];
    let dig4 = ["двадцатое", "тридцатое"];
    if (this.date.getDate() < 11)
      resultDigit = dig1[this.date.getDate() - 1];
    else if (this.date.getDate() < 20)
      resultDigit = dig2[this.date.getDate() - 11] + "надцатое";
    else if (this.date.getDate() === 20 ||
      this.date.getDate() === 30)
      resultDigit = dig4[textDate[0] - 2];
    else if (this.date.getDate() <= 31)
      resultDigit = dig3[textDate[0] - 2] +
        " " + dig1[textDate[1] - 1];
    return (
      "Дата: " +
      resultDigit.slice(0, 1).toUpperCase() +
      resultDigit.slice(1) +
      " " +
      months[this.date.getMonth()] +
      " " +
      this.date.getFullYear()
    );
  }
  CheckDate() {
    return this.date > Date.now() ? "Это будущая дата" : "Это прошедшая дата";
  }
  CheckLeapYear() {
    let year = this.date.getFullYear();
    if (year % 4 === 0 && year % 100 !== 0
      || year % 400 === 0)
      return "Да, это високосный год";
    else
      return "Нет, это не високосный год";
  }
  NextDate() {
    this.date.setDate(this.date.getDate() + 1);
    return "Завтра: " + this.PrintTextDate().replace("Дата:", "");
  }
}
let date1 = new ExtendedDate("11.24.2020");
document.write(date1.PrintTextDate());
document.write('<br></br>');
document.write(date1.CheckDate());
document.write('<br></br>');
document.write(date1.CheckLeapYear());
document.write('<br></br>');
document.write(date1.NextDate());
*/

// Задание 3
// Реализовать класс Employee, описывающий работника, и со-
// здать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы
// со списком работников банка. Массив работников необходимо
// передавать через конструктор, а получать html код с помощью
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml().

class Employee {
  constructor(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
  }
}

let employers = [
  new Employee("Egor", "Sitkov", "65000"),
  new Employee("Elena", "Fadeeva", "72000"),
  new Employee("Timofey", "Retunskikh", "62000"),
  new Employee("Elena", "Ponomareva", "82000"),
  new Employee("Alexey", "Batyuk", "162000")
];

class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }

  getHtml() {
    let table = "<table>";
    for (let i = 0; i < this.arr.length; i++) {
      table += "<tr>";
      for (let key in this.arr[i]) { // key - это имя фамилия зарплата
        table += "<td>" + this.arr[i][key] + "</td>";
        //console.log(this.arr[i][key]);
      }
      table += "</tr>";
    }
    table += "</table>";
    return table;
  }
}

// Задание 4
// Реализовать класс StyledEmpTable, который наследуется от
// класса EmpTable. Добавить метод getStyles(), который возвращает
// строку со стилями для таблицы в тегах style. Переопределить
// метод getHtml(), который добавляет стили к тому, что возвращает
// метод getHtml() из родительского класса.
// Создать объект класса StyledEmpTable и вывести на экран
// результат работы метода getHtml().

class StyledEmpTable extends EmpTable {
  getStyles() {
    return "<style> table{border:1px solid grey; padding: 15px} td{border-bottom: 1px solid red} </style>";
  }
  getHtml() {
    return this.getStyles() + super.getHtml();
  }
}

let newTable = new StyledEmpTable(employers);
document.write(newTable.getHtml());