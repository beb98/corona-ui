
import React from 'react';
import * as ReactBootStrap from "react-bootstrap"

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      x: -1,
      y: -1,
      w: -1,
      h: -1
    }
  }
  
  onSelected = (rect) => {
    this.setState({
      selected: true,
      ...rect
    })
  };
  
  getSelectionStr() {
    if (this.state.selected) {
      const state = this.state
      return `x: ${state.x}, y: ${state.y}, w: ${state.w}, h: ${state.h}`
    }
    return 'No Selection';
  }
  
  render() {
    return (
      <div>
        <Rector width="640" height="480" onSelected={this.onSelected}/>
        <div>
          {this.getSelectionStr()}
        </div>
      </div>
    )
  }
}
export default Demo;
class Rector extends React.Component {
  static defaultProps = {
    width: 320,
    height: 200,
    strokeStyle: '#F00',
    lineWidth: 1,
    onSelected: () => {},
  };
    
  canvas = null;
  ctx = null;
  isDirty = false;
  isDrag = false;
  startX = -1;
  startY = -1;
  curX = -1;
  curY = -1;

  constructor(props) {
    super(props);
    this.state={imgUrl:""}
  }
  
  componentDidMount(props) {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.strokeStyle = this.props.strokeStyle
    this.ctx.lineWidth = this.props.lineWidth
    this.addMouseEvents()
    this.setState({imgUrl:"https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"});
  }

  updateCanvas = () => {
    if (this.isDrag) {
      requestAnimationFrame(this.updateCanvas)
    }
    if (! this.isDirty) {
      return
    }
    
    this.ctx.clearRect(0, 0, this.props.width, this.props.height)
    if (this.isDrag) {      
      const rect = {
        x: this.startX,
        y: this.startY,
        w: this.curX - this.startX,
        h: this.curY - this.startY,
      }
      this.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h)  
    }  
    this.isDirty = false
  };

  componentWillUnmount() {
    this.removeMouseEvents()
  }

  addMouseEvents() {
    document.addEventListener('mousedown', this.onMouseDown, false);
    document.addEventListener('mousemove', this.onMouseMove, false);
    document.addEventListener('mouseup', this.onMouseUp, false);
  }
  removeMouseEvents() {
    document.removeEventListener('mousedown', this.onMouseDown, false);
    document.removeEventListener('mousemove', this.onMouseMove, false);
    document.removeEventListener('mouseup', this.onMouseUp, false);
  }

  onMouseDown = (e) => {
    this.isDrag = true
    this.curX = this.startX = e.offsetX
    this.curY = this.startY = e.offsetY
    requestAnimationFrame(this.updateCanvas)
  };

  onMouseMove = (e) => {
    if (! this.isDrag) return
    this.curX = e.offsetX
    this.curY = e.offsetY
    this.isDirty = true
  };
  
  onMouseUp = (e) => {
    this.isDrag = false
    this.isDirty = true
    
    const rect = {
      x: Math.min(this.startX, this.curX),
      y: Math.min(this.startY, this.curY),
      w: Math.abs(e.offsetX - this.startX),
      h: Math.abs(e.offsetY - this.startY),
    }
    this.props.onSelected(rect)
  };
  
  render() {
    console.log('render')
    return <canvas width={this.props.width} height={this.props.height}  style={{ border: "1px solid blue"}}
    ref={(c) => {this.canvas=c}} componentDidMount={this.props.imgUrl} />
  }
}

