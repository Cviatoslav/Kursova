// Функція для побудови елемента та розміщення його в DOM
function buildElementToPage(id, elem) {                               
    const element = document.createElement('div')
    element.classList.add('element')
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
    <img src="img/${elem.pictname}" class="element-img">
    <div class="element-name">${elem.name}</div>
    <p class="element-text">Розмір екрану(дюйм): <span class="element-screen_size">${elem.screen_size}</span></p> 
    <p class="element-text">Роздільна здатність екрану: <span class="element-resolution">${elem.resolution}</span></p> 
    <p class="element-text">Частота оновлення: <span class="element-Up_frequency">${elem.Up_frequency}</span></p> 
    <p class="element-text">Кут огляду: <span class="element-Viewing_angle">${elem.Viewing_angle}</span></p> 
</div>
<div class="element-footer">
    <button class="blue-button" onclick="modifyModalToEdit(${id})">Змінити</button><span> </span>
    <button class="red-button" onclick="removeElementFromStorage(${id})">Видалити</button>
</div>

    <p></p>
    `)
    document.getElementsByClassName("displayzone")[0].appendChild(element)
}

// Зміна параметрів модалки для СТВОРЕННЯ нового елементу
function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Добавити ВР окуляри"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Створити"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Добавити зображення:"
    //  Вікриваємо модалку
    modal.open()
}

// Зміна параметрів модалки для РЕДАГУВАННЯ поточного елементу
function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Редагувати ВР окуляри"
    document.getElementById("submitbtn").innerText = "Оновити"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)
    //  Вибираємо елемент по ID з LS і парсимо в об'єкт
    let edElem = JSON.parse(localStorage.getItem(id))
    //  Встановлюємо значення полів форми
    document.getElementById("name").value = edElem.name;   
    document.getElementById("screen_size").value = edElem.screen_size;   
    document.getElementById("resolution").value = edElem.resolution;  
    document.getElementById("Up_frequency").value = edElem.Up_frequency;  
    document.getElementById("Viewing_angle").value = edElem.Viewing_angle; 
    document.getElementById("imgprev").setAttribute("src", `img/${edElem.pictname}`)
    document.getElementById("label-select-img").innerText = "Змінити зображення:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
    // document.getElementById("imgfile").value = edElem.pictname; 
    //  Вікриваємо модалку
    modal.open()
}

//  Відображення в модалці зменшеної картинки
function showPrewImg(){
    let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
    document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
    document.getElementById("label-select-img").innerText = "Змінити зображення:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
}

//Слухаємо, чи змінилося значення поля input type="file" (чи вибралася інша картинка)
document.getElementById("imgfile").addEventListener("change", showPrewImg)



function validNameAndscreen_size(){
    let valid = true;
    let showMsg = '';
    let formName = document.getElementById("name").value.trim();
    let formscreen_size = document.getElementById("screen_size").value.trim();
    let formresolution = document.getElementById("resolution").value.trim();
    if (!formName) {
        showMsg = ' Поле назви окулярів ВР порожнє!! '
        valid = false;
    }  
    if (!formscreen_size) {
        showMsg = showMsg + ' Поле розміру екрану порожнє!!'
        valid = false;
    } 
 
    if (!formresolution) {
        showMsg = showMsg + ' Поле роздільна здатність екрану порожнє!!'
        valid = false;
    } 
    if (valid) {return valid} else {alert (showMsg)}
   
}
function validImg() {
    if (document.getElementById("imgfile").value) {return true} 
    else {
        alert ("Помилка !! Зображення не вибрано")
        return false} ;
}

// Створення параметрів нового елемента та розміщення його в LS
function addElementToLocalStorage(){
            
    if (validNameAndscreen_size() && validImg()) {
        //Шукаємо максимальне значення ID,  в LS не зайняте
        let keyArr = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = Number(localStorage.key(i)) ;
            keyArr[i] = key
        }
        const freeKey = Math.max(...keyArr) + 1; 
        //Забираємо значення з форми
        let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
        // Будуємо новий елемент
        const newElement = {};
        newElement.name =  document.getElementById("name").value;   
        newElement.screen_size = document.getElementById("screen_size").value;   
        newElement.resolution = document.getElementById("resolution").value;  
        newElement.Up_frequency = document.getElementById("Up_frequency").value; 
        newElement.Viewing_angle = document.getElementById("Viewing_angle").value; 
        newElement.pictname = filename;   
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(newElement)
        // Пакуємо елемент в LS
        localStorage.setItem(`${freeKey}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
}
   
// Редагування параметрів елемента та розміщення його в LS
function editElementInLocalStorage(id) {
    if (validNameAndscreen_size()) {
        let edElem = JSON.parse(localStorage.getItem(id))
        edElem.name =  document.getElementById("name").value;   
        edElem.screen_size = document.getElementById("screen_size").value;   
        edElem.resolution = document.getElementById("resolution").value;   
        edElem.Up_frequency = document.getElementById("Up_frequency").value;  
        edElem.Viewing_angle = document.getElementById("Viewing_angle").value;  
        if (document.getElementById("imgfile").value) {
            let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
            edElem.pictname = filename; 
        }
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(edElem)
        // Пакуємо елемент в LS
        localStorage.setItem(`${id}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000) //Перезавантажуємо вікно
    }
   
}


function removeElementFromStorage(id){
    if (confirm("Ви впевнені, що хочете видалити?")) {
        localStorage.removeItem(id)
        location.reload();          
    }

} 

let keyNumbers = Object.keys(localStorage).length 

for (let k=0; k<keyNumbers; k++) {
    let keyName = localStorage.key(k)
    let row = JSON.parse(localStorage.getItem(keyName))
    buildElementToPage(keyName, row)
}
  

