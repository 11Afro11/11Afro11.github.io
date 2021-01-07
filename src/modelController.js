(() => {
    var scene = document.getElementById("3dModel");
  
    var paused = true;
  
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
  
     
  
      cameraRotationX = Math.max(cameraRotationX, -Math.PI / 2)*50;
      cameraRotationX = Math.min(cameraRotationX, Math.PI / 2)*50;

  
      scene.style.transform =
        "rotateX(" +
        cameraRotationX.toFixed(6) +
        "deg)" +
        "rotateY(" +
        cameraRotationY.toFixed(6) +
        "deg)";
  
    };
  

  
    const mouseHandler = e => {
      cameraRotationY += e.movementX / 150;
      cameraRotationX -= e.movementY / 150;
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
  
    document.addEventListener("click", () => {
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