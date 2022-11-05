# Welcome to Checkers-Game (react-only)

## Setup:

Open your terminal, and run ```npm i checkers-game```

In the component where you want the checkers board, add:

```import { Board } from 'checkers-game';```

## Styling: 
<br>

### <b>boardStyle</b>
<br>

All styles will live in this object:

``` <Board boardStyle={{  text: 'no-text', boardTheme: 'b/w' }}/> ```

<br>

### <b>boardTheme</b>
<br>
This option is quite simple, you can either have the default (wood) or "b/w" (black and white)

``` <Board boardStyle={{ boardTheme: 'b/w' }}/> ```

<br>

### <b>border</b>

<br>

"border" holds two possible border customization options. Size and color.

``` <Board boardStyle={{ border: { borderColor: 'white', borderSize: '10px' } }}/> ```

If you only specify a color, size will default to 3. If you only specify a size, color will default to white.

<br>

### <b>boardTiles</b>

<br>

boardTiles contains 4 seperate properties:

```p1``` - The color that lights up when selecting a player 1 piece. <br>
```p2``` - The color that lights up when selecting a player 2 piece. <br>
```diag1``` - The first diagonal. <br>
```diag2``` - The second diagonal. <br>

These can all be set with valid css colors.

``` <Board boardStyle={{ boardTiles: { p1: 'orange', p2: 'blue', diag1: 'blue', diag2: 'green'} }}/> ```

<br>

### <b>p1/p2</b>

<br>

p1 & p2 are the player 1 and player 2 checkers piece colors respectively.

These colors have 3 options: black/brown/red

``` <Board boardStyle={{ p1: 'black', p2: 'brown' }}/> ```

Ensure to note the difference between p1/p2 in the boardTiles object and in the boardStyle object.

<br>

### <b>text</b>

<br>

text is a pretty simple one. By default there is text that shows both players piece count and turn.

If you don't want this, simply use: 

``` <Board boardStyle={{ text: 'no-text' }}/> ```

<br>

## <b>Upcoming features:</b>

<br>

1. <s>Custom theming</s>
2. Websocket compatibility
3. Ability to play Chess & Checkers by clicking a button to switch

Any questions feel free to reach out:

LinkedIn: https://www.linkedin.com/in/austin-westbury/
GitHub: https://www.github.com/TrueAndTrue/