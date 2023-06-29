
// Неважлива фенкція. Служить для полегшеного запуску процесу демонстрації проекту
function prepare(){
    let startArray = [
        {name: "VR HTC Vive Pro 2 Full Kit", screen_size: "3", resolution: "4896 x 2448",Up_frequency: "120 герц",Viewing_angle: "120", pictname: "Gogle-VR-HTC-Vive-Pro-2-Full-Kit.jpg"},
        {name: "VR OCULUS Quest 2 128GB", screen_size:"3.2", resolution: "3664 x 1920",Up_frequency: "90 герц",Viewing_angle: "100", pictname: "Gogle-VR-OCULUS-Quest-2-128GB-front-zestaw.jpg"},
        {name: "VR SONY PlayStation", screen_size:"1.7", resolution: "2000 x 2040",Up_frequency: "90 герц",Viewing_angle: "110", pictname: "Gogle-VR-SONY-PlayStation-VR2-zestaw1.jpg"},
        {name: "VR PICO 4 128GB", screen_size:"2", resolution: "4320 x 2160",Up_frequency: "90 герц",Viewing_angle: "100", pictname: "Gogle-VR-PICO-4-128GB-front.jpg"},
        {name: "VR OCULUS Meta Quest Pro", screen_size:"3.2", resolution: "3600 x 1920",Up_frequency: "90 герц",Viewing_angle: "110", pictname: "Gogle-VR-OCULUS-Meta-Quest-Pro-256GB-front.jpg"},
        {name: "VR PICO Neo 3 Link 256GB", screen_size:"5.5", resolution: "3664 x 1920",Up_frequency: "120 герц",Viewing_angle: "90", pictname: "Gogle-VR-PICO-Neo-3-Link-256GB-front.jpg"},
    ]
    
    localStorage.clear() //Очищуємо LocalStorage
    
    //Додаємо нові елементи в LocalStorage
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  //Перезавантажуємо вікно
}