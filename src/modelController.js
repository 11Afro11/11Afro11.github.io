(() => {
    var scene = document.getElementById("3dModel");
  
    var paused = true;
    
    var rotationSpeed = 0.2;
    var accel = 0.5;
    var maxSpeed = 10;
  
    var speedX = 0;
    var speedZ = 0;

    var cameraRotationX = 0;
    var cameraRotationY = 0;
  
    var upKeyPressed = false;
    var downKeyPressed = false;
    var leftKeyPressed = false;
    var rightKeyPressed = false;
  
    const update = () => {
      if (!paused) {
        requestIdleCallback(update);
      }
  
     
  /* 
      cameraRotationX = Math.max(cameraRotationX, -Math.PI / 2);
      cameraRotationX = Math.min(cameraRotationX, Math.PI / 2); */

  
      scene.style.transform =
        "rotateX(" +
        cameraRotationY.toFixed(6) +
        "deg)" +
        "rotateY(" +
        cameraRotationX.toFixed(6) +
        "deg)";
  
    };
  

  
    const mouseHandler = e => {
      cameraRotationX += e.movementX * rotationSpeed / 150;
      cameraRotationY += e.movementY * rotationSpeed / 150;
    };
  
    const start = () => {
      document.addEventListener("mousemove", mouseHandler);
      paused = false;
      update();
    };
  
    const stop = () => {
      document.removeEventListener("mousemove", mouseHandler);
      paused = true;

    };
  
    document.addEventListener("load", () => {
      start();
    });
  
    document.addEventListener("pointerlockchange", () => {
      if (document.pointerLockElement) {
        start();
      } else {
        stop();
      }
    });
    update();
  })();