

# Img Position



This project is for **educational** porpuses only. 

Site published at: https://belute.github.io/Img_Position_js/


## Project features


-   CSS
-   JS
-   HTML

## Authors

Justinas: [Github](https://github.com/Belute)

## Code sample



```css
body,
body * {
    margin: 0;
    padding: 0;
    vertical-align: top;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
}

```
```js
let test = document.getElementById("img");
let test1 = document.getElementById("text1");
let test2 = document.getElementById("text2");
let test3 = document.getElementById("text3");

document.getElementById("btn").onclick = function () {
    test.style.left = "170px";
};

```
```html
     <div class="container">
        <!-- <p>Keisti paveikslėlio poziciją:</p> -->
        <button class="buttons1" id="btn">Kairėje</button>
        <button class="buttons" id="btn1">Dešinėje</button>
        <button class="buttons" id="btn2">Paslėpti</button>
        <button class="buttons" id="btn3">Nukelti po pastraipomis</button>
        <button class="buttons" id="btn4">Atstatyti</button>
        <img id=img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkheLZ2SoIt4lV-dkg2FToFIK2RDMDrloL9g&usqp=CAU"></img>
        <p id=text1 class="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem corporis sapiente magnam eos quod voluptatum! Dolor vel delectus quasi earum cupiditate! Voluptates, saepe nostrum. Porro, odit quo quas possimus debitis aut, magni incidunt voluptatum aliquid alias ad quidem accusantium totam quis unde harum. Voluptatibus cum, iure obcaecati dolorem odio a beatae officiis rerum magni esse reiciendis consequatur quos pariatur quas neque rem? Quo cum reprehenderit voluptas temporibus voluptatum, saepe amet non autem ratione exercitationem dolore obcaecati delectus beatae earum natus! Possimus nostrum, ullam nesciunt numquam omnis sapiente perspiciatis dolore corporis voluptatibus ex amet reiciendis cum eaque doloremque incidunt harum?</p>
        <p id=text2 class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias pariatur facere vitae iusto doloremque fugiat consequatur placeat ab velit laboriosam, veritatis architecto expedita maxime amet, iure aliquid, id ratione beatae. Incidunt soluta debitis perspiciatis quod temporibus dicta architecto ratione eius a iure vel, dolorum beatae id placeat ipsa facere reiciendis molestias pariatur commodi quae deleniti esse modi nam nesciunt! Voluptatem expedita praesentium reiciendis exercitationem. Deleniti obcaecati enim, tempora inventore quo pariatur dolores eum ducimus assumenda magnam corrupti explicabo impedit! Consectetur nemo, alias officia eos modi, numquam qui quam minus magni esse, iste officiis soluta voluptates ab consequuntur fuga eius voluptatum!</p>
        <p id=text3 class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ut atque distinctio, quas perferendis nam cum velit deserunt minima doloribus laudantium nesciunt voluptatum veritatis mollitia voluptatibus dolor exercitationem expedita, reiciendis cupiditate necessitatibus, cumque numquam aut! Saepe officiis ea eius omnis amet. Vitae laudantium ut maxime cum repellat rerum harum delectus. Sunt officia quibusdam et eveniet officiis, molestiae doloribus culpa sed quasi numquam velit maxime praesentium veritatis error, ex quae natus. Eum, labore eaque! Unde, dolorum odio deleniti magnam quaerat dolore autem incidunt nemo molestias. Dignissimos commodi iste consectetur, quibusdam nam ea minus culpa sed aperiam ipsa repellendus, tempora dolor ex!</p>

    </div>
```
