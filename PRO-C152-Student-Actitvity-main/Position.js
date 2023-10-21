// Registering component in box-component.js
AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
  
      var pos=this.el.getAttribute("postion")
      pos.y=this.data.moveY
        this.data.moveY = this.data.moveY + 0.005;
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    },
});
      
    AFRAME.registerComponent("camera-zoom-out", {
        schema: {
          moveZ: { type: "number", default: 10 },
        },
      
        tick: function () {
      
          var pos=this.el.getAttribute("postion")
          pos.z=this.data.moveZ
            this.data.moveZ = this.data.moveZ + 0.005;
            this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
        }
    })

    AFRAME.registerComponent("fall-down", {
        schema: {
          moveY: { type: "number", default: 0 },
        },
      
        tick: function () {
            
    window.addEventListener("click",(e)=>{
        this.data.moveY = this.data.moveY - 0.005;
      })
      
          var pos=this.el.getAttribute("postion")
          pos.y=this.data.moveY
            this.data.moveY = this.data.moveY + 0.005;
            this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
        }
    })


  