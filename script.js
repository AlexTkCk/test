class Rectangle {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = 0
        this.height = 0
        this.stroke = 'none'
        this.color = 'none'
        this._createParameters()
    }

    _getRandomColor() {
        return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    }

    _createParameters() {
        this.width = Math.floor(100 + Math.random() * 100)
        this.height = Math.floor(100 + Math.random() * 100)
        this.x = Math.floor(Math.random() * (game_space_canvas.width - this.width))
        this.y = Math.floor(Math.random() * (game_space_canvas.height - this.height))
        this.color = this._getRandomColor();
        this.stroke = this._getRandomColor();
    }
    draw() {
        game_space_canvas_context.fillStyle = this.color
        game_space_canvas_context.fillRect(this.x, this.y, this.width, this.height)
    }

    collide(x, y) {
        return this.x <= x
            && x <= this.x + this.width
            && this.y <= y
            && y<= this.y + this.height
    }

    draw_in_center() {
        example_canvas_context.fillStyle = this.color
        example_canvas_context.fillRect(Math.floor(example_canvas.width / 2) - Math.floor(this.width / 2), Math.floor(example_canvas.height / 2) - Math.floor(this.height / 2), this.width, this.height)
    }
}

class Circle {
    constructor() {
        this.x = 0
        this.y = 0
        this.r = 0
        this.stroke = 'none'
        this.color = 'none'
        this._createParameters();
    }

    _getRandomColor() {
        return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    }

    _createParameters() {
        this.r = Math.floor(50 + Math.random() * 50)
        this.x = Math.floor(this.r + Math.random() * (game_space_canvas.width - 2 * this.r))
        this.y = Math.floor(this.r + Math.random() * (game_space_canvas.height - 2 * this.r))
        this.color = this._getRandomColor();
        this.stroke = this._getRandomColor();
    }

    draw_in_center() {
        example_canvas_context.beginPath()
        example_canvas_context.arc(Math.floor(example_canvas.width / 2), Math.floor(example_canvas.height / 2), this.r, 0, Math.PI * 2)
        example_canvas_context.fillStyle = this.color
        example_canvas_context.fill()
    }

    draw() {
        game_space_canvas_context.beginPath()
        game_space_canvas_context.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        game_space_canvas_context.fillStyle = this.color
        game_space_canvas_context.fill()
    }

    collide(x, y) {
        return ((x - this.x)**2 + (y - this.y)**2)**(1/2) <= this.r
    }
}

class Triangle {
    constructor() {
        this.x = 0
        this.y = 0
        this.side = 0
        this.stroke = 'none'
        this.color = 'none'
        this.type = 0
        this._createParameters();
    }

    _getRandomColor() {
        return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    }

    _createParameters() {
        this.side = Math.floor(100 + Math.random() * 100)
        this.x = Math.floor(Math.random() * (game_space_canvas.width - this.side))
        this.y = Math.floor(Math.random() * (game_space_canvas.height - this.side))
        this.color = this._getRandomColor();
        this.stroke = this._getRandomColor();
        this.type = Math.floor(Math.random() * 8)
    }

    draw_in_center() {
        example_canvas_context.beginPath()
        example_canvas_context.fillStyle = this.color
        let x = Math.floor((example_canvas.width - this.side) / 2)
        let y = Math.floor((example_canvas.height - this.side) / 2)

        switch (this.type) {
            case 0:
                example_canvas_context.moveTo(x + Math.ceil(this.side / 2), y)
                example_canvas_context.lineTo(x + this.side, y + this.side)
                example_canvas_context.lineTo(x, y + this.side)
                example_canvas_context.lineTo(x + Math.ceil(this.side / 2), y)
                break
            case 1:
                example_canvas_context.moveTo(x, y)
                example_canvas_context.lineTo(x + this.side, y)
                example_canvas_context.lineTo(x + this.side, y + this.side)
                example_canvas_context.lineTo(x, y)
                break
            case 2:
                example_canvas_context.moveTo(x, y)
                example_canvas_context.lineTo(x + this.side, y + Math.ceil(this.side / 2))
                example_canvas_context.lineTo(x, y + this.side)
                example_canvas_context.lineTo(x, y)
                break
            case 3:
                example_canvas_context.moveTo(x + this.side, y)
                example_canvas_context.lineTo(x + this.side, y + this.side)
                example_canvas_context.lineTo(x, y + this.side)
                example_canvas_context.lineTo(x + this.side, y)
                break
            case 4:
                example_canvas_context.moveTo(x, y)
                example_canvas_context.lineTo(x + this.side, y)
                example_canvas_context.lineTo(x  + Math.ceil(this.side / 2), y + this.side)
                example_canvas_context.lineTo(x, y)
                break
            case 5:
                example_canvas_context.moveTo(x, y)
                example_canvas_context.lineTo(x, y + this.side)
                example_canvas_context.lineTo(x + this.side, y + this.side)
                example_canvas_context.lineTo(x, y)
                break
            case 6:
                example_canvas_context.moveTo(x + this.side, y)
                example_canvas_context.lineTo(x + this.side, y + this.side)
                example_canvas_context.lineTo(x, y + Math.ceil(this.side / 2))
                example_canvas_context.lineTo(x + this.side, y)
                break
            case 7:
                example_canvas_context.moveTo(x, y)
                example_canvas_context.lineTo(x + this.side, y)
                example_canvas_context.lineTo(x, y + this.side)
                example_canvas_context.lineTo(x, y)
                break
        }

        example_canvas_context.fill()
    }

    draw() {
        game_space_canvas_context.beginPath()
        game_space_canvas_context.fillStyle = this.color

        switch (this.type) {
            case 0:
                game_space_canvas_context.moveTo(this.x + Math.ceil(this.side / 2), this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y + this.side)
                game_space_canvas_context.lineTo(this.x + Math.ceil(this.side / 2), this.y)
                break
            case 1:
                game_space_canvas_context.moveTo(this.x, this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y)
                break
            case 2:
                game_space_canvas_context.moveTo(this.x, this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y + Math.ceil(this.side / 2))
                game_space_canvas_context.lineTo(this.x, this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y)
                break
            case 3:
                game_space_canvas_context.moveTo(this.x + this.side, this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y + this.side)
                game_space_canvas_context.lineTo(this.x + this.side, this.y)
                break
            case 4:
                game_space_canvas_context.moveTo(this.x, this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y)
                game_space_canvas_context.lineTo(this.x  + Math.ceil(this.side / 2), this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y)
                break
            case 5:
                game_space_canvas_context.moveTo(this.x, this.y)
                game_space_canvas_context.lineTo(this.x, this.y + this.side)
                game_space_canvas_context.lineTo(this.x + this.side, this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y)
                break
            case 6:
                game_space_canvas_context.moveTo(this.x + this.side, this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y + Math.ceil(this.side / 2))
                game_space_canvas_context.lineTo(this.x + this.side, this.y)
                break
            case 7:
                game_space_canvas_context.moveTo(this.x, this.y)
                game_space_canvas_context.lineTo(this.x + this.side, this.y)
                game_space_canvas_context.lineTo(this.x, this.y + this.side)
                game_space_canvas_context.lineTo(this.x, this.y)
                break
        }

        game_space_canvas_context.fill()
    }

    _area(A1, A2, A3) {
        return Math.abs((A1[0] * (A2[1] - A3[1]) + A2[0] * (A3[1] - A1[1]) + A3[0] * (A1[1] - A2[1])) / 2)
    }

    collide(x, y) {
        let A = [x, y]
        let A1, A2, A3;
        switch (this.type) {
            case 0:
                A1 = [this.x + Math.ceil(this.side / 2), this.y];
                A2 = [this.x + this.side, this.y + this.side];
                A3 = [this.x, this.y + this.side];
                break
            case 1:
                A1 = [this.x, this.y];
                A2 = [this.x + this.side, this.y];
                A3 = [this.x + this.side, this.y + this.side];
                break
            case 2:
                A1 = [this.x, this.y];
                A2 = [this.x + this.side, this.y + Math.ceil(this.side / 2)];
                A3 = [this.x, this.y + this.side];
                break
            case 3:
                A1 = [this.x + this.side, this.y];
                A2 = [this.x + this.side, this.y + this.side];
                A3 = [this.x, this.y + this.side];
                break
            case 4:
                A1 = [this.x, this.y];
                A2 = [this.x + this.side, this.y];
                A3 = [this.x  + Math.ceil(this.side / 2), this.y + this.side];
                break
            case 5:
                A1 = [this.x, this.y];
                A2 = [this.x, this.y + this.side];
                A3 = [this.x + this.side, this.y + this.side];
                break
            case 6:
                A1 = [this.x + this.side, this.y];
                A2 = [this.x + this.side, this.y + this.side];
                A3 = [this.x, this.y + Math.ceil(this.side / 2)];
                break
            case 7:
                A1 = [this.x, this.y];
                A2 = [this.x + this.side, this.y];
                A3 = [this.x, this.y + this.side];
                break
        }

        console.log(A1, A2, A3)
        return this._area(A, A1, A2) + this._area(A, A2, A3) + this._area(A, A1, A3) - this._area(A1, A2, A3) <= 2
    }
}

function create_figure() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return new Rectangle();
        case 1:
            return new Circle();
        case 2:
            return new Triangle();
    }
}

function clear_canvases(){
    game_space_canvas_context.clearRect(0, 0, game_space_canvas.width, game_space_canvas.height)
    example_canvas_context.clearRect(0, 0, example_canvas.width, example_canvas.height)
}

function loose(){
    clear_canvases()
    timer_value = 3
    clearInterval(timer)
    begin_button.classList.toggle('active')
    alert('Loh!')
    timer_text.textContent = '0'
    game_space_canvas.classList.toggle('active')
    score_value = 0;
    score_text.textContent = '0';
}

function update_time(){
    timer_text.textContent = (timer_value--).toString();
}

function update_score(){
    score_text.textContent = (++score_value).toString();
}

function create_figures() {
    clear_canvases()

    let figures_amount = 5 + Math.floor(Math.random() * 5)

    for (let i = 0; i < figures_amount; i++){
        main_figure = create_figure(i);
        main_figure.draw(game_space_canvas_context)
    }

    main_figure.draw_in_center()

}


const game_space = document.getElementById('game_space')
const example_screen = document.getElementById('example_screen')
const game_space_canvas = document.getElementById('game_space_canvas')
const game_space_canvas_context = game_space_canvas.getContext('2d')
const example_canvas = document.getElementById('example_canvas')
const example_canvas_context = example_canvas.getContext('2d')
const color_picker = document.querySelector('.color_picker')
const begin_button = document.querySelector('.begin_button')
let timer;
let timer_value = 3;
const timer_text = document.querySelector('.timer_text')
const score_text = document.querySelector('.score')
let score_value = 0;
game_space_canvas.width = game_space.offsetWidth
game_space_canvas.height = game_space.offsetHeight
example_canvas.width = example_screen.offsetWidth
example_canvas.height = example_screen.offsetHeight
let main_figure;

begin_button.addEventListener('click', () => {
    create_figures()

    begin_button.classList.toggle('active')
    game_space_canvas.classList.toggle('active')

    update_time();
    timer = setInterval(() =>{
        if (timer_value >= 0) {
            update_time();
        } else {
            loose()
        }
    }, 500)
})

game_space_canvas.addEventListener('click', (e) => {
    if (main_figure.collide(e.offsetX, e.offsetY)) {
        create_figures();
        timer_value = 3;
        update_time();
        update_score();
    } else {
        loose()
    }
})

color_picker.addEventListener('change', () => {
    game_space.style.background = color_picker.value;
})