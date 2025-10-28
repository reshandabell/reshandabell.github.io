$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(0,700,200,20,"teal");
  createPlatform(250,600,150,20,"blue");
  createPlatform(500,500,200,20,"green");
  createPlatform(800,400,150,20,"purple");
  createPlatform(1100,300,200,20,"orange");
  createPlatform(1350,200,120,20,"red");
  createPlatform(400, 300, 200, 20, "yellow", 300, 500, 1);
  



    // TODO 3 - Create Collectables
  createCollectable("diamond", 300, 550, 0, 0);
  createCollectable("grace", 850, 370, 0.5, 0.7);
  createCollectable("max", 1150, 270, 0, 0);
  createCollectable("steve", 400, 480, 0, 1);
  createCollectable("diamond", 200, 100, 0, 0, 100, 300, 2);
  
    
    // TODO 4 - Create Cannons
  createCannon("left", 500, 1500);
  createCannon("right", 300, 2000);
  createCannon("top", 700, 2500);
  createCannon("right", 550, 1800);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
