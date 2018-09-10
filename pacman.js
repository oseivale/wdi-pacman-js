// Setup initial game stats
var score = 0;
var lives = 2;
var powerPellet = 4;

ghosts = [inky, blinky, pinky, clyde];

// Define your ghosts here
var inky = {
  name: 'Inky',
  menu_option: 1,
  color: 'Red',
  character_trait: 'Shadow',
  edible: false
};

var blinky = {
  name: 'Blinky',
  menu_option: 2,
  color: 'Cyan',
  character_trait: 'Speedy',
  edible: false
};

var pinky = {
  name: 'Pinky',
  menu_option: 3,
  color: 'Pink',
  character_trait: 'Bashful',
  edible: false
};

var clyde = {
  name: 'Clyde',
  menu_option: 4,
  color: 'Orange',
  character_trait: 'Pokey',
  edible: false
};


// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('Score: ' + score + '     Lives: ' + lives + '\n\n\nPower-Pellets: '+powerPellet);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  console.log('(d) Eat Dot');
  console.log('(p) Eat Power-Pellet');
  console.log('(1) Eat Inky');
  console.log('(2) Eat Blinky');
  console.log('(3) Eat Pinky');
  console.log('(4) Eat Clyde');
  console.log('(q) Quit');

}

  function eatPowerPellet(key){
        score += 50;
        ghosts.edible = true;
        powerPellet--
        if(powerPellet > 0){
          console.log('Pac-Man has eaten a power pellet!');
        } else if(powerPellet <= 0){
          console.log('Warning: No Power-Pellets left!');
        }
      }


  function eatGhost(ghost){
  // for (var i = 0; i <= ghosts.length; i++){
    if (ghosts.edible === false) {
      console.log('\nedible');
    } else {
      loseLife();
      switch (ghost) {
        case ghosts[0]:
          console.log(ghosts.name +' has been eaten, and his personality is '+ghosts.character_trait);
          break;
        case ghosts[1]:

          break;
        case ghosts[2]:

          break;
        case ghosts[3]:

          break;
        default:

      }
    }
  }
// }


function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}


// Menu Options
function eatDot() {
  console.log('\nChomp!');
  score += 10;
}

function loseLife(){
  if(lives > 0 ){
    lives--
  } else if(lives <= 0){
    process.exit();
    console.log('\nYou are dead!');
  }
}

// process.exit();



// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case '1':
      eatGhost();
      break;
    case '2':
      eatGhost();
      break;
    case '3':
      eatGhost();
      break;
    case '4':
      eatGhost();
      break;
    case 'd':
      eatDot();
      break;
    case 'p':
      eatPowerPellet();
      break;
    default:
      console.log('\nInvalid Command!');
  }
}


//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!\n');
});
