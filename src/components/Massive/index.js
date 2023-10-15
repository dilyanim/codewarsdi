// function filter_list(l) {
//     return l.filter(item => typeof item === 'number');
//   }
//   const result = filter_list([1, 2, 'a', 'b']);
//   console.log(result);

// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c']
// arr.push(1,2,3)
// console.log(arr);

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr= [1, 2, 3 ]
// let arr1 = [4, 5, 6]

// console.log(arr.concat(arr1));

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr);

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq']
// console.log(arr.slice(0,1));

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq']
// console.log(arr.slice(-1));

// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0,3));

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
//  console.log(arr.slice(-2));

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2,)
// console.log(arr);

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5]
//  arr.splice(0, 1, )
//  arr.splice(3 ,1)
// console.log(arr);

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr =  [1, 2, 3, 4, 5]
// arr.splice(2 , 0 , 'a' , 'b', 'c', )
// console.log(arr);

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [ 1, 2, 3, 4, 5]
// arr.splice( 1 ,0 , 'a' , 'b')
// arr.splice(6,0 , 'c')
// arr.splice(8,0,'e')
// console.log(arr);

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'
// let a = 5 , b = 5
// if(a > 4  && b < 10 || b >= 7 && b < 17){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень)
// let month = 13
// if (month >= 1 && month <= 3 ){
//     console.log("зима");
// }else if (month >= 4 && month <= 6){
//     console.log("лето");
// }else if (month >= 7 && month <= 9){
//     console.log("весна");
// }else if (month >= 10 && month <= 12){
//     console.log("осень");
// }else {
//     console.log("ERROR");
// }

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).

// let day = 3
//  if (day >= 1 && day <= 7 ){
//      console.log("week1");
// }else if (day >= 8 && day <= 15){
//      console.log("week2");
//  }else if (day >= 16 && day <= 23){
//     console.log("week3");
// }else if (day >= 23 && day <= 31){
//      console.log("week4");
//  }else {
//      console.log("ERROR");
// }

// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.

// let a = "12345"
// if (a.charAt(0) === "1"){
//     console.log("да");
// }else if(a.charAt(0)=== "2"){
//     console.log("да");
// }
// else if(a.charAt(0)=== "3"){
//     console.log("да");
// }else{
//     console.log("нет");
// }

// Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат', 'Ben'].
// Выведите все вторые строки в верхнем регистре.

// let arr = ['Аскар', 'Баяман', 'Калмамат', 'Ben']

// console.log(arr.map((el) => el.toUpperCase()));

// Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
// let arr = ['асКар', 'бЯяман', 'калМмамат']
// console.log(arr.map((el) => el.charAt(0).toUpperCase().concat(el.slice(1).toLowerCase())));

// Преобразование данных
// Создайте массив чисел и используйте метод map(), чтобы преобразовать
// числа в строковый формат с добавлением символа "$" в начале каждой строки.
//
//  let arr = [10, 20, 30, 40, 50];
// arr = arr.map((el)=> "$" + el)
// console.log(arr.join(" "));

// Поиск элемента в массиве
// Создайте массив чисел и используйте метод find(),
//  чтобы найти первый элемент, который больше  25 определенного порогового значения.
//
// let num = [10, 20, 30, 40, 50];

// Поиск элемента с использованием функции-коллбэка
// Создайте массив строк и используйте метод find(),
// чтобы найти первую строку, которая начинается с "b" определенной буквы.
// let words = ["apple", "banana", "cherry", "date"];

// Поиск элемента по индексу
// Создайте массив чисел и используйте метод find() для нахождения элемента по его индексу 2
// let numbers = [10, 20, 30, 40, 50];

// Преобразование массива в строку
// Создайте массив строк и используйте метод join(), чтобы объединить все элементы массива в одну строку с определенным разделителем.
// let fruits = ["apple", "banana", "cherry"];

// Объединение пути к файлу
// Создайте массив строк, представляющих части пути к файлу, и используйте метод join() для объединения их в один путь.
// let pathParts = ["folder", "subfolder", "file.txt"];

// Преобразование чисел в строку
// Создайте массив чисел и используйте метод join() для преобразования их в строку, разделенную запятой.
// let numbers = [1, 2, 3, 4, 5];

// Разделение строки по пробелам
// Разделите строку на массив слов, используя пробел в качестве разделителя.
// let sentence = "Это пример разделения строки на слова";

// Разделение строки по запятой
// Разделите строку, содержащую перечень элементов, разделенных запятыми, на массив элементов.
// let items = "apple, banana, cherry, date";

// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.

// let arr = [5,15,315,2,13,20,9]
// console.log(arr.reduce((acc , el) => acc + el));

// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.

// let arr = [5,15,315,2,13,20,9]
// if(arr === 2){
//      arr.reduce((acc , el) => acc * el)
// }else{
//     console.log(arr);
// }

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
//  let arr = [5,15,315,2,13,20,9]
//  console.log(arr.filter((el)=>{
//     return  el > 10
//  })
//  .reduce((acc , el)=> acc + el)

//  )

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let str = ["Аскар", "Баяман", "Калмамат"];

// console.log(str.join('').length)

// Объединение элементов массива с определенным разделителем
// Используйте метод reduce() для объединения элементов массива с определенным разделителем.
// let items = ["apple", "banana", "cherry"];

// Сортировка строк в лексикографическом порядке
// Используйте метод sort(), чтобы отсортировать массив строк в лексикографическом порядке (по алфавиту).
// let fruits = ["banana", "apple", "cherry", "date"];

// Сортировка строк в обратном порядке
// Используйте метод sort() и функцию сравнения для отсортировки массива строк в обратном порядке
// let fruits = ["banana", "apple", "cherry", "date"];

// Проверка наличия элемента больше определенного порога
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент больше 15

// let num = [10, 5, 8, 22, 3];
// console.log(num.some((x , y ) => {
//      return y < 15
// }));

// Проверка наличия строк, содержащих определенную букву
// Используйте метод some(), чтобы проверить, есть ли в массиве строк хотя бы одна строка, содержащая определенную букву “a”

// let words = ["pple", "bnn", "cherry", "date"];
// console.log(words.some((x , y ) => {
//    return x.includes('a')
// }));

// Проверка наличия элементов, удовлетворяющих условию
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент, удовлетворяющий определенному условию.

// let numbers = [10, 5, 8, 22, 3];

// let num = [1,3,5,10,20,50,100,200,500,1000,2000,5000]
// ber = [1000]

// function arr(ber){
//    if(num === 1000){
//    return num
//   }
//     num.reduce((arr , el) => {
//          return arr * el
//     })
// }
// console.log(num);

// let str = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsam.']
// console.log(str.map((el) => {
//     el.length > 5
// }));

// function str(num){
//     return num.join('').split(' ').reduce((acc , el) => {
//        return  acc.length > el.length ? acc : el
//     }).split(' ')
// }
// console.log(str(['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsam.']));
// function palindrom(world) {
//    let res = world.replace(/[!?,. -]/g, '').toUpperCase()
//    if (res === res.split('').reverse().join('')) {
//       return true
//    }else{
//       return false
//    }
// }
// console.log(palindrom('asa'));

// function greet(language) {
//       if(language = 'english' ){
//          return  'Welcome'
//       }else if( language = 'russian' ){
//          return  "Добпро пожаловать"
//       }else if( language = 'estonian' ){
//          return  "Tere tulemast"
//       }else if( language = 'welsh' ){
//          return  " Croeso"
//       }else if( language = 'swedish' ){
//          return  "Valkommen"
//       }else if( language = 'polish' ){
//          return  "Witamy"
//       }else {
//          return 'welcome'
//       }

// }
// console.log(greet( language ='russian'));

// function greet(language) {
//   switch (language) {
//     case "english":
//       return "Welcome";
//     case "czech":
//       return "Vitejte";
//     case "danish":
//       return "Velkomst";
//     case "dutch":
//       return "Welkom";
//     case "estonian":
//       return "Tere tulemast";
//     case "finnish":
//       return "Tervetuloa";
//     case "flemish":
//       return "Welgekomen";
//     case "french":
//       return "Bienvenue";
//     case "german":
//       return "Willkommen";
//     case "irish":
//       return "Failte";
//     case "italian":
//       return "Benvenuto";
//     case "latvian":
//       return "Gaidits";
//     case "lithuanian":
//       return "Laukiamas";
//     case "polish":
//       return "Witamy";
//     case "spanish":
//       return "Bienvenido";
//     case "russian":
//       return  ;
//     case "swedish":
//       return "Valkommen";
//     case "welsh":
//       return "Croeso";
//     default:
//       return "Welcome";
//   }
// }

// console.log(greet("latvian"));

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 10;
// if (a === 10) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a=50, b=100
// if(a < b){
//     console.log('a больше b');
// }else{
//     console.log('a меньше b');
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.

// let a=2876
// if(a < 0){
//     console.log("negative");
// }else if(a > 0){
//     console.log('positive');
// }else{
//     console.log('равно');
// }

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let number=40
// if(number % 2 === 0){
//     console.log('Четное число');
// }else{
//     console.log('Нечетное число');
// }
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// let  a=10, b=2
// let ab = a / b
// if(ab / 2 === 0){
//    console.log('Четное число');
// }else{
//     console.log('Нечетное число');
// }

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let s = 5
// if(s){
//     console.log(typeof s);
// }

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// str = 'woiuygfder ITDB TECH'
// console.log(str.split(' ').map((el, idx) => {
//     if(idx === 0){
//         return el.length
//     }
//     return el
// }));

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// str = 'Максимально УЖАСНО'
// console.log(str.slice(-6));

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// str = 'Максимально УЖАСНО'
// console.log(str.slice(0,11).toUpperCase());

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',

// используя метод slice.
// str = "Максимально УЖАСНО";
// console.log(str.slice(5));
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
//  let str = "Максимально УЖАСНО";
// console.log(str.slice(12 ,13));
// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// let str = 'Максимально', str2 = 'Ужасно'
// console.log(str + ' ' + str2);

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
// let  str = 'макСИМАЛЬНО ужаСНО'
// console.log(str.slice(0 , 1));
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('а'));
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// let str = 'Максимально Ужасно'
// console.log(str.lastIndexOf('о'));

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = 'aaa  bbb ccc'
// console.log(str.substr(4,3));



    function oddOrEven(number) {
        if (number === 0) {
        return 'even';
        } else if (number % 2 === 0) {
        return 'even';
        } else {
        return 'odd';
        }
    }
    
    console.log(oddOrEven(0))