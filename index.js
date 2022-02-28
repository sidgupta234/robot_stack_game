const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// canvas.width = innerWidth
// canvas.height = innerHeight

canvas.width = 1024
canvas.height = 768
robot_jump = 128

console.log(canvas.width)
console.log(canvas.height)
var squares = []
var moves_history = []

function sleep(delay) {
    setTimeout(() => { console.log("World!"); }, delay);
}

function draw_square(x, y, color, width, height, c){
    c.fillStyle = color;
    c.fillRect(x, y, width, height);
}

function draw_squares(block_width = 128){
    // Allowwing first block width row for stack details representation
    for(j=1; j<20; j++){
        for (i=0; i<20; i++){
            draw_square(block_width*i+i, block_width*j+j, "red", block_width, block_width, c);
        }
    }
}
class Player {
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.radius = 30
    }

    draw(){
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        c.fillStyle = 'yellow'
        c.fill()
        c.closePath()
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const player = new Player({
        position:{
            x:64,
            y:192
        },
        velocity: {
            x:0,
            y:0
        }

    }
)

// function animate(){
//     requestAnimationFrame(animate)
    // c.clearRect(0, 0, canvas.width, canvas.height)
    // draw_squares()
    // player.update()
// }

// animate()

//requestAnimationFrame(animate)
draw_squares()
player.update()

addEventListener('keypress', ({key}) =>{
    c.clearRect(0, 0, canvas.width, canvas.height)
    draw_squares()

    switch (key){
        case 'q':
            player.update()
            break
            
        case 'w':
            player.velocity.y = -robot_jump
          // await sleep(1000)
            moves_history.push('w')
            player.update()
            break

        case 'a':
            player.velocity.x = -robot_jump
            moves_history.push('a')
            player.update()
            break

        case 's':
            player.velocity.y = robot_jump
            moves_history.push('s')
            player.update()
            break

        case 'd':
            player.velocity.x = robot_jump
            moves_history.push('d')
            player.update()
            break 

    }
    console.log(moves_history)
    // console.log(player.velocity)
})

addEventListener('keyup', ({key}) =>{
    c.clearRect(0, 0, canvas.width, canvas.height)
    draw_squares()

    switch (key){
        case 'w':
            player.velocity.y = 0
            player.update()

            break

        case 'a':
            player.velocity.x = 0
            player.update()

            break

        case 's':
            player.velocity.y = 0
            player.update()

            break

        case 'd':
            player.velocity.x = 0
            player.update()

            break 
    }
//     /* console.log(player.velocity) */

})
// class Square {
//     constructor({ position }) {
//         this.position = position
//         this.width = 40
//         this.height = 40
//     }

//     draw(){
//         c.fillStyle = 'blue'
//         c.fillRect(this.position.x, this.position.y,
//             this.width, this.height)
//     }
// }

// const boundary = new Square({
//     position: {
//         x: 0,
//         y: 0
//     }
// })

// boundary.draw()