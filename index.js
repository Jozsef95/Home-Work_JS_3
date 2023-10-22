//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

let userBirtDay= (prompt('Your birtday?','birtday'));
let userJob= (prompt('What is your Job?','Job'));
let userEyes= (prompt('Your eyes color?','eyes'));

alert(userBirtDay + " "+ userJob +" "+ userEyes);

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

let num1 = prompt('Minimum 5 number'),
    num2 = prompt('number 2'),
    num3 = prompt('number 3'),
    num4 = prompt('number 4'),  
    division = num1 / num2 + "     " + num1 / num3 + "     " + num1 / num4,
    allOfThem = division;
    alert(allOfThem);