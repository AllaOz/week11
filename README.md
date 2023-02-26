# week11

1.	2
2.	Document.getElementById(‘value’).value = ‘поменяй привет’;
3.	2? Я так подозреваю, потому что 2 раза append? Этого понятия вообще нет в лекции
4.	Когда у elem два или более потомков
5.	class.Name
6.	setAttribute(name, value) устанавливает значение атрибута
7.	let element = document.getElementById("myElement");
       element.textContent = "добавь текст";
8.	alert( document.body.innerHTML ));
9.	Объект событие – это объект event, содержит информацию и о произошедшем событии, и о «кликнутом» элементе. Свойства: target, bubbles, click, button и др
10.	BOM – Browser Object Model предоставляет доступ к navigator,screen, location, frames, history, XMLHttpRequest
DOM – Document Object Model – интерфейс позволяющий js работать с html
11.	
•	let elem = document.getElementById('age-table');
console.log(elem);
•	let labels = document.querySelectorAll('#age-table label'); 
 console.log (labels);console.log (labels);
•	let forms = document.querySelector('form[name="search-person"]');
console.log (forms)


12.	<input type="button" value="Search!" onclick="wiki()"> добавить onclick с функцией () в html
let wiki = (elem)
function elem(wiki) {
    window.location.href = 'https://ru.wikipedia.org/wiki/';
  }
![image](https://user-images.githubusercontent.com/116717324/221429775-a301cfcf-fd09-4a36-93fc-dfb27e496564.png)
