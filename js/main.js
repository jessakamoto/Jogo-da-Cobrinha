let canvas=document.getElementById("snake");
let context=canvas.getContext("2d"); //renderiza o desenho que vai acontecer no canvas
let box=32; //tamanho do box do jogo
let snake = []; //criação do array da cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
} 
let direction = "right"; //movimentação da cobrinha

//função que começa o canvas

function criarBG(){
    context.fillStyle="lightgreen"; //definição de cor do canvas inicial
    context.fillRect(0, 0, 16 * box, 16 *box); // desenha o retangulo onde vai acontecer o jogo e trabalha com 4 parâmetros (x,y, altura e largura)
}

//criação da cobrinha, vai ser um array de coordenadas 
function criarCobrinha(){
    for(i=0; i< snake.length; i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//criação de função que atualiza automaticamente o movimento do jogo

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //condicionais para os lados 

    if(direction == "right") snakeX += box; //se direção for igual a direita, acrescenta um quadrado a mais
    if(direction =="left") snakeX -=box; //para esquerda, ele diminui pois é um plano caretesiano
    if(direction =="up") snakeY -=box;
    if(direction == "down") snakeY += box;

    //função que retira o ultimo elemento do array da cobrinha

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = serInterval(iniciarJogo, 100); //renovar a cada 100 milisegundos sem travar. 

