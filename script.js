const canvas = document.getElementById('shapes');
const ctx = canvas.getContext('2d');

const blueplaneImg = new Image();
blueplaneImg.src = './img/blueplane.png';

const redplaneImg = new Image();
redplaneImg.src = './img/redplane.png';

const superImg = new Image();
superImg.src = './img/super.png';

const buildingImg = new Image();
buildingImg.src = './img/building.png';

const blueplane = {
    x: 0,
    y: 80,
    width: 200,
    height: 200
  }
  
  const redplane = {
    x: 0,
    y: 280,
    width: 150,
    height: 125,
  }

  const superman = {
    x: 0,
    y: 5,
    width: 150,
    height: 150,
  }

const buildings = [
    {
        x: 80,
        y: 421,
        width: 100,
        height: 181
    },
    {
        x: 300,
        y: 421,
        width: 100,
        height: 181
    },
    {
        x: 550,
        y: 421,
        width: 100,
        height: 181
    },
    {
        x: 800,
        y: 421,
        width: 100,
        height: 181
    }
  ]
  
  // Función que pinta todos los elementos
  window.onload = function () {
    ctx.drawImage(superImg, superman.x, superman.y, superman.width, superman.height);
    ctx.drawImage(redplaneImg, redplane.x, redplane.y, redplane.width, redplane.height);
    ctx.drawImage(blueplaneImg, blueplane.x, blueplane.y, blueplane.width, blueplane.height);
    buildings.forEach(elem => {
      ctx.drawImage(buildingImg, elem.x, elem.y, elem.width, elem.height);
    })
  }

function moveElem() {
    ctx.clearRect(0, 0, 1000, 600);
    superman.x = superman.x + Math.floor(Math.random() * 30); 
    redplane.x = redplane.x + 10;
    blueplane.x = blueplane.x - 10;
    blueplane.y = Math.floor(Math.random() * 100); 
    if (superman.x > 1000 || redplane.x > 1000 ) {
        superman.x = -50;
        redplane.x = -50;
    }

    if (blueplane.x < -200) blueplane.x = blueplane.x + 1050;

    ctx.drawImage(superImg, superman.x, superman.y, superman.width, superman.height);
    ctx.drawImage(redplaneImg, redplane.x, redplane.y, redplane.width, redplane.height);
    ctx.drawImage(blueplaneImg, blueplane.x, blueplane.y, blueplane.width, blueplane.height);
    buildings.forEach(elem => {
      ctx.drawImage(buildingImg, elem.x, elem.y, elem.width, elem.height);
    })

  }
  
  // Función que arranca los movimientos
  setTimeout(function () {
    let interval = setInterval(moveElem, 100);
  }, 1000)
  
  