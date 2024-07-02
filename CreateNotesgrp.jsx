function CreateNotesgrp() {
  return (
    <div>
        <div className='Col2' style={{width:"1072px",height:"982px",backgroundColor:"#F7ECDC"}}>
      <div className='text' style={{border: "2px solid #CCCCCC",backgroundColor:"white",width:"400px",height:"250px",top:"344px",
      marginLeft:"300px"}}>
      <h2>Create new Notes group</h2>
      <h4 style={{display:"inline-block"}}>Group Name</h4>&nbsp;
      <input style={{padding:"10px"}}type="text1" value="Enter your group name">
      </input><br></br>
      <h4>Choose colour</h4>
      <div className="dot">
      <span className="circle"style={{display:"inline-block",backgroundColor:"blue",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"purple",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"pink",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"skyblue",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle"style={{display:"inline-block",backgroundColor:"orange",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"blue",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"magenta",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
        </div>  
        </div>
        </div>      
    </div>
  )
}

export default CreateNotesgrp
