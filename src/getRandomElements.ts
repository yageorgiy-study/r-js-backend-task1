/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 * 
 * Примечание: если array.length < numOfItems возвращаем 
 * array.length случайных элементов.
 * 
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */
function getRandomElements(array: string[], numOfItems: number): string[] {
    return shuffle(array).slice(0, numOfItems);
}

/**
 * Функция перетасовки элементов массива
 * 
 * @param array - входной массив (с элементами любого типа)
 * @return перетасованный случайным образом массив эоементов
 */
function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // Пока есть элементы для перетасовки
    while (currentIndex > 0) {
  
      // Выбрать оставшийся элемент для перетасовки
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Поменять элемент местами с текущим элементом
      [array[currentIndex], array[randomIndex]] = 
      [array[randomIndex],  array[currentIndex]];
    }
  
    return array;
  }

export default getRandomElements;