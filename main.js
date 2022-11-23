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

// Задание 3
// Реализовать класс Employee, описывающий работника, и со-
// здать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы
// со списком работников банка. Массив работников необходимо
// передавать через конструктор, а получать html код с помощью
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml().

// class Employee {
//     constructor (name, age, post, salary) {
//         this.name = name;
//         this.age = age;
//         this.post = post;
//         this.salary = salary;
//     }
// }

// class EmpTable {
//     constructor () {

//     }
// }
/*Реализовать класс Employee, описывающий работника, и со- здать массив работников банка.
Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. 
Массив работников необходимо передавать через конструктор, а получать html код с помощью метода getHtml().
Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().*/

class Employee {
    constructor(name, surname, salary) {
      this.name = name;
      this.surname = surname;
      this.salary = salary;
    }
  }
  
  let employers = [
    new Employee("John1", "Doe1", "5000"),
    new Employee("John2", "Doe2", "2000"),
    new Employee("John3", "Doe3", "3000")
  ];
  
  class EmpTable {
    constructor(arr) {
      this.arr = arr;
    }
  
    getHtml() {
      let table = "<table>";
      for (let i = 0; i < this.arr.length; i++) {
        table += "<tr>";
  
        for (let key in this.arr[i]) {
          // key eto name surname salary
          table += "<td>" + this.arr[i][key] + "</td>";
          console.log(this.arr[i][key]);
        }
  
        table += "</tr>";
      }
      table += "</table>";
      return table;
    }
  }
  
  /*Реализовать класс StyledEmpTable, который наследуется от класса EmpTable. 
  Добавить метод getStyles(), который возвращает строку со стилями для таблицы
   в тегах style. 
  Переопределить метод getHtml(), который добавляет стили к тому, что возвращает метод getHtml() 
  из родительского класса.
  Создать объект класса StyledEmpTable и 
  вывести на экран результат работы метода getHtml().*/
  
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