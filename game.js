// document.addEventListener("mousemove", (event) => {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;
//   console.log(`Mouse position: (x= ${mouseX}, y= ${mouseY})`);
// });

class Map extends React.Component{
  constructor(props){
    super(props)
    this.state={
      map: "Maps/FirstStage/HOPONRUST.png"
    }
  }
  render(){
    return(
      <div id="canvas" style={{backgroundImage: `url(${this.state.map})`}}>
        <img style={{height: "200px"}} src={"Images/Bosses/Xanafin.png"}></img>
      </div>
    )
  }
}

class Stats extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: "",
      level: 1,
      xp: 0,
      gold: 0,
      stage: 1
    }
  }

  componentDidMount(){
    this.setName()
  }
  setName(){
    const name=prompt("Enter your name")
    this.setState({
      name: name
    })
  }
  render(){
    return(
      <div id="stats">
        <div id="stats-container">
          <p className="stat"><span className="stat-label">Name:</span> {this.state.name}</p>
          <p className="stat"><span className="stat-label">Level:</span> {this.state.level}</p>
          <p className="stat"><span className="stat-label">XP:</span> {this.state.xp}</p>
          <p className="stat"><span className="stat-label">Gold:</span> {this.state.gold}</p>
        </div>
      </div>
    )
  }
}


class Character extends React.Component{
  constructor(props){
    super(props)
    this.state={
      character: "Images/Character/standDown.png",
      characterX: 900,
      characterY: 400,
      velocityRight: 3,
      velocityLeft: -3,
      velocityUp: -3,
      velocityDown: 3,
      isWPressed: false,
      isSPressed: false,
      isAPressed: false,
      isDPressed: false
    }
  }
  componentDidMount(){
    /*       key down event            */
    // W event
    addEventListener("keydown", (event)=>{
      if(event.key==="w" || event.key==="z"){
        this.setState({
          character: "Images/Character/walkUp.png",
          isWPressed: true
        })
      }
        // A event
      if(event.key==="a" || event.key==="q"){
        this.setState({
          character: "Images/Character/walkLeft.png",
          isAPressed: true
        })
      }
        // S event
      if(event.key==="s"){
        this.setState({
          character: "Images/Character/walkDown.png",
          isSPressed: true
        })
      }
       // D event
      if(event.key==="d"){
        this.setState({
          character: "Images/Character/walkRight.png",
          isDPressed: true
        })
      }
    })
    /*          key up event              */
    addEventListener("keyup", (event)=>{
      if(event.key==="w" || event.key==="z"){
        this.setState({
          isWPressed: false
        })
      }
        // A event
      if(event.key==="a" || event.key==="q"){
        this.setState({
          isAPressed: false
        })
      }
        // S event
      if(event.key==="s"){
        this.setState({
          isSPressed: false
        })
      }
       // D event
      if(event.key==="d"){
        this.setState({
          isDPressed: false
        })
      }
    })
    setInterval(()=>{
      var characterX=this.state.characterX
      var characterY=this.state.characterY
      
      if(this.state.isWPressed && this.state.characterY>-10){
        characterY+=this.state.velocityUp
      }
      if(this.state.isSPressed && this.state.characterY<805){
        characterY+=this.state.velocityDown
      }
      if(this.state.isAPressed && this.state.characterX>300){
        characterX+=this.state.velocityLeft
      }
      if(this.state.isDPressed && this.state.characterX<1462){
        characterX+=this.state.velocityRight
      }
      this.setState({
        characterX: characterX,
        characterY: characterY
      })
    },16)
  }
  render(){
    return(
      <div style={{height: "0px", width: "0px"}}>
        <img style={{height: "100px", transform: `translateX(${this.state.characterX}px) translateY(${this.state.characterY}px)`}} src={this.state.character}></img>
      </div>
    )
  }
}

var App=()=>(
  <div>
    <Character/>
    <Map/>
    <Stats/>
  </div>
)

ReactDOM.render(<App/>,document.getElementById("app"))