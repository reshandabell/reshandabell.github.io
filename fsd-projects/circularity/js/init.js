var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;       // This will hold a single circle at a time when we create or update it
        var circles = []; // This array will store all circle objects so we can loop through them


        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
        // Draw a random circle on the canvas
        circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);

        // Give it a random velocity so it moves across the screen
        physikz.addRandomVelocity(circle, canvas, 5, 5);

        // Add the circle to the view so it's visible
        view.addChild(circle);

        // Store the circle in the circles array for later use
        circles.push(circle);
        }


        // TODO 3 : Call the drawCircle() function
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();


        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 100; i++) {
            drawCircle();
            }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);

            // TODO 8 / TODO 9 : Iterate over the array
           for (var i = 0; i < circles.length; i++) {
             // Code to update each circle will go here in the next step
            }
            for (var i = 0; i < circles.length; i++) {
            physikz.updatePosition(circles[i]);       // Move the circle
            game.checkCirclePosition(circles[i]);     // Keep it on the screen
        }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // Right boundary (already done in TODO 5)
            if (circle.x > canvas.width) {
             circle.x = 0;
            }

            // Left boundary
            if (circle.x < 0) {
             circle.x = canvas.width;
            }

            // Bottom boundary
            if (circle.y > canvas.height) {
              circle.y = 0;
            }

            // Top boundary
            if (circle.y < 0) {
            circle.y = canvas.height;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
