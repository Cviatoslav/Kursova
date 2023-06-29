// Задання вихідних параметрів (title, [x], content) конфігурації модалки 
const modal = $.modal({
    title: ' options',
    closable: true,
    content: `
      <div class="modal-form">
  <label for="name">Назва ВР окулярів:</label><br>
  <input type="text" id="name" name="name" class="modal-form-field" placeholder="Введіть назву ВР окулярів..."/><br><br>

  <label for="screen_size">Розмір екрану(дюйм):</label><br>
  <input type="text" id="screen_size" name="screen_size" class="modal-form-field" placeholder="Введіть розмір екрану(дюйм)..."/><br><br>

  <label for="resolution">Роздільна здатність екрану:</label><br>
  <input type="text" id="resolution" name="resolution" placeholder="Введіть роздільну здатність екрану..." class="modal-form-field"><br><br>

  <label for="Up_frequency">Частота оновлення:</label><br>
  <select class="modal-form-field" name="Up_frequency" id="Up_frequency">
    <option value="90 герц">90 герц</option>
    <option value="120 герц">120 герц</option>
  </select>
  <br><br>

  <label for="Viewing_angle">Кут огляду:</label><br>
  <select class="modal-form-field" name="Viewing_angle" id="Viewing_angle">
    <option value="90">90</option>
    <option value="100">100</option>
    <option value="110">110</option>
    <option value="120">120</option>
  </select>
  <br><br>

  <div id="img-prev-section">
    <img id="imgprev" src="">
  </div>

  <label for="file" id="label-select-img">Вибери зображення:</label><br>
  <input type="file" id="imgfile" name="imgfile"><br><br>

  <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
</div>

    `,
    width: '500px'
})



