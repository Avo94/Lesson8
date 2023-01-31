let taskNumber = Number(prompt("Выберите задачу с 1-ой по 10-ую"));

//Task #1
if (taskNumber == 1) {
  let d = 7;

  console.log("Здачение: " + d);
  console.log("Квадрат значения: " + Math.pow(d, 2));
  console.log("Куб значения: " + Math.pow(d, 3));
}

//Task #2
else if (taskNumber == 2) {
  let inputNumber = Number(prompt("Введите целое число"));

  if (inputNumber > 0) {
    inputNumber = inputNumber * 2;
  }
  console.log("Итоговое значение: " + inputNumber);
}

//Task #3
else if (taskNumber == 3) {
  let firstNumber = Number(prompt("Введите первое число"));
  let secondNumber = Number(prompt("Введите второе число"));

  if (firstNumber > secondNumber) {
    console.log(firstNumber + secondNumber);
  }
  else if (firstNumber < secondNumber) {
    console.log(firstNumber * secondNumber);
  }
  else console.log("Числа одинаковые");
}

//Task #4
else if (taskNumber == 4) {
  let inputNumber = Number(prompt("Введите целое число"));

  if (inputNumber < 0) {
    console.log(Math.pow(inputNumber, 2));
  } else console.log("Ошибка");
}

//Task #5
else if (taskNumber == 5) {
  let students = Number(prompt("Введите количество учеников"));
  let chairs = Number(prompt("Введите количество стульев"));

  if (students > chairs) {
    console.log("Стельев не хватает");
  } else console.log("Стульев хватает");
}

//Task #6
else if (taskNumber == 6) {
  console.log("Старт");
  for (let i = 0; i < 9; i++) {
    console.log(i + 1);
  }
  console.log("Финиш");
}

//Task #7
else if (taskNumber == 7) {
  for (let i = 10; i < 100; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}

//Task #8
else if (taskNumber == 8) {
  let array = [4, -15, 60, -7, 2, 21, -36, 15, 0, 11, 95, -61, -13, 44, 19, 55];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 15) {
      console.log(array[i]);
    }
  }
}

//Task #9
else if (taskNumber == 9) {
  let array = [4, -15, 60, -7, 2, 21, -36, 15, 0, 11, 95, -62, -13, 44, 19, 55];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1 || array[i] % 2 == -1) {
      console.log(array[i]);
    }
  }
}

//Task #10
else if (taskNumber == 10) {
  let array = [4, -15, 60, -7, 2, 21, -36, 15, 0, 11, 95, -62, -13, 44, 19, 55];

  for (let i = 0; i < array.length; i++) {
    if (i % 3 == 0) {
      console.log(array[i]);
    }
  }
} else console.log("Ошибка!");
