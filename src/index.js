module.exports = function check(str, bracketsConfig) {
	// Если длинная строки четная, то функция не выполняется
	if (str.length % 2 !== 0) false;
	// Преобразовываем строку в массив
	let arr = [...str];
	// Проходимся по массиву из строк
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			//Втрой цикл проходит по массиву из шаблона
			const symbol = bracketsConfig[j];
			// Получаем массив с шаблоном

			if (arr[i] === symbol[0] && arr[i + 1] === symbol[1]) {
				// если элемент равен элементу первому из шаблона и 2 элемент в строке равен 2 элементу из шаблона
				// то вырезаем из строки
				//arr.splice(i, 2);
				arr.splice(i, 2);
				i = -1;
			}
		}
	}
	// Если все подходящие элементы вырезаны из строки то вернется true, если нет false
	return arr.length === 0;
};
