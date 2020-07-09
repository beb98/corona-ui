import React, { useState, useEffect } from "react";
import { Stage, Layer, Image } from "react-konva";
import * as ReactBootStrap from "react-bootstrap"


const Konv =()=>{
  
  // const onMouseDown = (e) => {
  //   this.isDrag = true
  //   this.curX = this.startX = e.offsetX
  //   this.curY = this.startY = e.offsetY
  //   requestAnimationFrame(this.updateCanvas)
  // };

  // const onMouseMove = (e) => {
  //   if (! this.isDrag) return
  //   this.curX = e.offsetX
  //   this.curY = e.offsetY
  // };

  // const onMouseUp = (e) => {
  //   this.isDrag = false

  //   const rect = {
  //     x: Math.min(this.startX, this.curX),
  //     y: Math.min(this.startY, this.curY),
  //     w: Math.abs(e.offsetX - this.startX),
  //     h: Math.abs(e.offsetY - this.startY),
  //   }
  //   this.props.onSelected(rect)
  // };

  const [image, setImage] = useState(new window.Image());  
  const [file, setFile] = useState();

  const handleImage = () => {
    const img = new window.Image();
    
    img.src =
      "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
    setImage(img);
  };

  useEffect(() => {
    console.log(file)
  }, [file])


  return (
<ReactBootStrap.Form  >
            
            
  <ReactBootStrap.Form.Group controlId="formBasicPatient"   >
  <ReactBootStrap.Form.Label  style={{paddingRight:"20px", marginLeft:"20px", marginTop : "2rem"}}>OCT Scan:</ReactBootStrap.Form.Label>
<div style={{display : "flex" , justifyContent : "center" , alignItems : "center", width : "100%", marginBottom : "1rem"}}>
<ReactBootStrap.Form.File id="exampleFormControlFile1" label="Upload from PC" onChange={(e) => setFile(e.target.files[0])}/>
</div>
          <ReactBootStrap.Button variant="primary"  onClick={()=>handleImage()} style={{paddingRight:"20px", marginLeft:"20px"}}>
  Upload now
  </ReactBootStrap.Button>
  
  <ReactBootStrap.Form.Label  style={{paddingRight:"20px", marginLeft:"20px"}}>OX-Ray:</ReactBootStrap.Form.Label>

    <ReactBootStrap.Button variant="primary"  onClick={()=>handleImage()} style={{paddingRight:"20px", marginLeft:"20px"}}>
  Load from DS
  </ReactBootStrap.Button>    
  
    
  </ReactBootStrap.Form.Group>


  <ReactBootStrap.Form.Group controlId="formBasicPatient" style={{display:"flex", 
        flexDirection: "row",
        justifyContent:"center",alignItems: "center"}}
        
       >

    <Stage width={window.innerWidth} height={window.innerHeight}   >
      <Layer >
      <Image x={10} y={20} image={image}
      
      />

      </Layer>
    </Stage>
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPatient"   >
          <ReactBootStrap.Button variant="primary"  onClick={()=>handleImage()} style={{paddingRight:"20px", marginLeft:"20px"}}>
  Save
  </ReactBootStrap.Button>
  <ReactBootStrap.Button variant="primary"  onClick={()=>handleImage()} style={{paddingRight:"20px", marginLeft:"20px"}}>
  Cancel
  </ReactBootStrap.Button>
  </ReactBootStrap.Form.Group >

    </ReactBootStrap.Form >
  );
  
}
export default Konv;