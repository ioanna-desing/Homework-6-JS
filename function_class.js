// Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

// function NameOfTag(tagName,description,attrs){
//     this.tagName = tagName
//     this.description = description
//     this.attrs = attrs 
// }
//         let tag = '<h1>';
//         let deck = 'заголовок першого рівня';
//         let att = [
//                    {titleOfAttr: 'aline', actionOfAttr: 'вирівнює заголовок'}, 
//                    {titleOfAttr: 'class', actionOfAttr: 'визначає ім`я класу, яке дозволяє пов`язати тег зі стилевим оформленням.'}
//                 ]
// // let Tag = new NameOfTag('h1','заголовок першого рівня',{align:'вирівнює заголовок',class:'визначає ім`я класу, яке дозволяє пов`язати тег зі стилевим оформленням.'})
// // console.log(Tag)

// let Tag = new NameOfTag (tag,deck,att)
// console.log(Tag)

// Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//  {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
//     ]
    //   }


// function NameOfTags (tagName,action,attrs){
//     this.tagName = tagName
//     this.action = action
//     this.attrs = attrs
// }
//   let tags = new NameOfTags ('a','призначений для створення посилань',
// [{titleOfAttr:'accesskey',actionOfAttr:'Активація посилання за допомогою комбінації клавіш.'},
// {titleOfAttr:'coords',actionOfAttr:'Встановлює координати активної області.'}])
// console.log(tags);
//   let tags2 = new NameOfTags ('div','є блоковим елементом та призначений для виділення фрагменту документа з метою зміни виду змісту',
//   [{titleOfAttr:'align',actionOfAttr:'Задає вирівнювання вмісту тега <div>'},
//   {titleOfAttr:'title',actionOfAttr:'Додає підказку до вмісту.'}])
// console.log(tags2);
//   let tags3 = new NameOfTags('h1','заголовок першого рівня',[{titleOfAttr:'align',actionOfAttr:'вирівнює заголовок'},
//   {titleOfAttr:'class',actionOfAttr:'визначає ім`я класу, яке дозволяє пов`язати тег зі стилевим оформленням.'}])
// console.log(tags3)
//   let tags4 = new NameOfTags ('span','призначений для визначення строкових елементів документа',[{titleOfAttr:'hidden',actionOfAttr:'Приховує вміст елемента від перегляду.'},
//   {titleOfAttr:'id',actionOfAttr:'Вказує імя стильового ідентифікатора'}])
// console.log(tags4)
//   let tags5 = new NameOfTags ('input','є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем', 
//   [ {titleOfAttr:'accesskey',actionOfAttr:'Активація посилання за допомогою комбінації клавіш.'},
//     {titleOfAttr: 'multiple ',actionOfAttr:'Дозволяє завантажити кілька файлів одночасно.'}])
// console.log(tags5)
//   let tags6 = new NameOfTags ('form', 'встановлює форму на веб-сторінці',
//   [ {titleOfAttr:'utocomplete',actionOfAttr:'Включає автозаповнення полів форми.'},
//     {titleOfAttr: 'novalidate',actionOfAttr:'Скасовує вбудовану перевірку даних форми на коректність введення.'}])
// console.log(tags6)
//   let tags7 = new NameOfTags ('option', 'визначає окремі пункти списку, що створюється за допомогою контейнера<select>',
//   [ {titleOfAttr:'disabled',actionOfAttr:'Заблокувати для доступу елемент списку.'},
//     {titleOfAttr: 'label',actionOfAttr:'Вказівка ​​мітки пункту списку.'}])
// console.log(tags7)
//   let tags8 = new NameOfTags ('select', 'дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або множинним вибором',
//   [ {titleOfAttr:'autocomplete',actionOfAttr:'Включає автозаповнення полів форми.'},
//     {titleOfAttr: 'multiple',actionOfAttr:'Дозволяє завантажити кілька файлів одночасно.'}])
// console.log(tags8)




// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
// 

// class TagsName {
//     constructor(titleOfTag,action,attrs){
//         this.titleOfTag = titleOfTag;
//         this.action = action
//         this.attrs = attrs
//         }
// }
// let tags1 = new TagsName ('a','призначений для створення посилань',
//   [ {titleOfAttr:'accesskey',actionOfAttr:'Активація посилання за допомогою комбінації клавіш.'},
//     {titleOfAttr:'coords',actionOfAttr:'Встановлює координати активної області.'}])
// console.log(tags1);
// let tags2 = new TagsName ('div','є блоковим елементом та призначений для виділення фрагменту документа з метою зміни виду змісту',
//   [ {titleOfAttr:'align',actionOfAttr:'Задає вирівнювання вмісту тега <div>'},
//     {titleOfAttr:'title',actionOfAttr:'Додає підказку до вмісту.'}])
// console.log(tags2)
// let tags3 = new TagsName('h1','заголовок першого рівня',
//   [ {titleOfAttr:'align',actionOfAttr:'вирівнює заголовок'},
//     {titleOfAttr:'class',actionOfAttr:'визначає ім`я класу, яке дозволяє пов`язати тег зі стилевим оформленням.'}])
// console.log(tags3)
//   let tags4 = new TagsName ('span','призначений для визначення строкових елементів документа',
//   [ {titleOfAttr:'hidden',actionOfAttr:'Приховує вміст елемента від перегляду.'},
//     {titleOfAttr:'id',actionOfAttr:'Вказує імя стильового ідентифікатора'}])
// console.log(tags4)
// let tags5 = new TagsName ('input','є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем', 
//   [ {titleOfAttr:'accesskey',actionOfAttr:'Активація посилання за допомогою комбінації клавіш.'},
//     {titleOfAttr: 'multiple ',actionOfAttr:'Дозволяє завантажити кілька файлів одночасно.'}])
// console.log(tags5)
// let tags6 = new TagsName ('form', 'встановлює форму на веб-сторінці',
//   [ {titleOfAttr:'utocomplete',actionOfAttr:'Включає автозаповнення полів форми.'},
//     {titleOfAttr: 'novalidate',actionOfAttr:'Скасовує вбудовану перевірку даних форми на коректність введення.'}])
// console.log(tags6)
// let tags7 = new TagsName ('option', 'визначає окремі пункти списку, що створюється за допомогою контейнера<select>',
//   [ {titleOfAttr:'disabled',actionOfAttr:'Заблокувати для доступу елемент списку.'},
//     {titleOfAttr: 'label',actionOfAttr:'Вказівка ​​мітки пункту списку.'}])
// console.log(tags7)
// let tags8 = new TagsName ('select', 'дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або множинним вибором',
//   [ {titleOfAttr:'autocomplete',actionOfAttr:'Включає автозаповнення полів форми.'},
//     {titleOfAttr: 'multiple',actionOfAttr:'Дозволяє завантажити кілька файлів одночасно.'}])
// console.log(tags8)


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car =
// { 
//     model : 'Mercedes A-Class (W177) 220d',
//     producer :'Mercedes-Benz',
//     yearOfIssue :2010,
//     maxSpeed : 200,
//     tankVolume : 43,
//     driver : { name:'kolya', age: 34},
//     drive : function(){
//     console.log (`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info: function(){
//         console.log(`${this.model} ${this.producer} ${this.yearOfIssue} ${this.maxSpeed} ${this.tankVolume}`)
//     },
//     increaseMaxSpeed : function (newSpeed){
//         this.maxSpeed = newSpeed;
//     },
//     changeYear: function(newValue){
//         this.yearOfIssue = newValue;
//     },
//        addDriver : function(driver){
//       this.driver = driver;
//        },
// }

// console.log(car.drive())
// console.log(car.info())
// console.log(car.increaseMaxSpeed(300))
// console.log(car.changeYear(2000))
// console.log(car.addDriver(driver))

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// function ArrayCars(model,producer,yearOfIssue,maxSpeed,tankVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.yearOfIssue = yearOfIssue;
//     this.maxSpeed = maxSpeed;
//     this.tankVolume = tankVolume;
//     this.drive = function (msg) {
//         console.log (`${msg} ${this.maxSpeed}`);
//         }
//     this.info = function (){
//         console.log(`${this.model} ${this.producer} ${this.yearOfIssue} ${this.maxSpeed} ${this.tankVolume}`)
//     }   
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function(newValue){
//         this.yearOfIssue = newValue
//     }
//     this.addDriver = function(driver){
//         console.log(driver)
//     }
// }

// let cars = new ArrayCars('bmv','BMW',3545,200,45)
// console.log(cars)
// console.log(cars.drive(`їдемо зі швидкістю`))
// console.log(cars.info())
// console.log(cars.increaseMaxSpeed('20km/h'))
// console.log(cars.changeYear('2000year'))
// console.log(cars.addDriver({name:'Nik', age:40}))




// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// class ArrayCars{
//     constructor (model,produce,yearOfIssue,maxSpeed,tankVolume,fn){
//         this.model = model;
//         this.produce = produce;
//         this.yearOfIssue = yearOfIssue;
//         this.maxSpeed = maxSpeed;
//         this.tankVolume = tankVolume;
//         this.info = fn;
//         this.drive = fn;
//         this.increaseMaxSpeed = fn;
//         this.changeYear = fn;
//         }
//     }

// let newCars = new ArrayCars('bmv','BMW',3545,200,45, function(){
//     console.log(`${this.model} ${this.producer} ${this.yearOfIssue} ${this.maxSpeed} ${this.tankVolume}`)}
//     )
// console.log(newCars)

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella{
//     constructor (name,age,size){
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }

// let cinda1 = new Cinderella( 'lilia',24,37);
// let cinda2 = new Cinderella('olga',18,39); 
// let cinda3 = new Cinderella ('vika',17,37);
// let cinda4 = new Cinderella('lida',16,34);
// let cinda5 = new Cinderella('maria',19,35);
// let cinda6 = new Cinderella('nastya',20,37);
// let cinda7 = new Cinderella('sofia',21,36);
// let cinda8 = new Cinderella('nina',22,38);
// let cinda9 = new Cinderella('karina',23,37);
// let cinda10 = new Cinderella('ira',25,35);
// let prince = new Cinderella ('robert',28,36)
// let arrayGirls = [ cinda1,cinda2,cinda3,cinda4,cinda5,cinda6,cinda7,cinda8,cinda9,cinda10]
// let myPrincess = null;
// for ( let girl of arrayGirls){
//     if (girl.size === prince.size){
//         myPrincess = girl
//     }
// }
// console.log(myPrincess)




// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить.

// function ArrayCinderellas(name,age,size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
// let cinda1 = new ArrayCinderellas( 'lilia',24,37);
// let cinda2 = new ArrayCinderellas('olga',18,39); 
// let cinda3 = new ArrayCinderellas ('vika',17,37);
// let cinda4 = new ArrayCinderellas('lida',16,34);
// let cinda5 = new ArrayCinderellas('maria',19,35);
// let cinda6 = new ArrayCinderellas('nastya',20,37);
// let cinda7 = new ArrayCinderellas('sofia',21,36);
// let cinda8 = new ArrayCinderellas('nina',22,38);
// let cinda9 = new ArrayCinderellas('karina',23,37);
// let cinda10 = new ArrayCinderellas('ira',25,35);
// let arrayGirls = [cinda1,cinda2,cinda3,cinda4,cinda5,cinda6,cinda7,cinda8,cinda9,cinda10]


// function Prince(name,age,size,fn) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
//     this.find = function find(arr) {
//         let myPrincess = null;
//         for ( let girl of arr){
//             if (girl.size === prince.size){
//                 myPrincess = girl
//             }
//         }
//             if(myPrincess){
//                 console.log (myPrincess.name)
//             }
//         }  
        
//     }

// let prince = new Prince('robert',28,36)
// console.log(prince.find(arrayGirls))
