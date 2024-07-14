let player; // 360 | 455
let jumpForce = 0; // Прыжок
let movement = 0; // Движение игрока
let ground; // Земля, то на чём стоит квадрат
let platform; // Выступ на который можно прыгнуть


function setup() {
    createCanvas(720, 480);
    player = createVector(width / 2, height - 50); // Позиция по осям
    platform = createVector(580, 400); // Позиция по осям (580 - Горизонталь 400 - Вертикаль)
    ground = height - 50;
}

function draw() {
    background('SlateGrey');
    rectMode(CENTER);
    fill('red') // Выше игрока цвет
    rect(player.x, player.y, 50, 50); // Размеры игрока
    fill('yellow') // Выше платформы цвет
    rect(platform.x, platform.y, 150, 10); // Размеры платформы


    player.y += jumpForce; // Задаём прыжок игроку
    player.x += movement;

    if (player.y >= ground) {
        jumpForce = 0;
    } else if (
        player.x + 25 >= platform.x - 75 &&
        player.x - 25 <= platform.x + 75 &&
        player.y + 25 >= platform.y - 10 &&
        player.y + 25 <= platform.y + 10
    ) {
        jumpForce = 0;
        player.y = platform.y - 30;
    } else {
        jumpForce += 0.5;
    }



    if (keyIsDown(32) && (player.y >= ground || player.y == platform.y - 30)) { // 32 - это номер кнопки пробел
        jumpForce = - 12;
    }

    if (keyIsDown(LEFT_ARROW)) {
        movement = - 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        movement = + 5;
    } else {
        movement = 0;
    }
}












