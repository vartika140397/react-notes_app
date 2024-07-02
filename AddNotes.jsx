import React from 'react'
import styled from "styled-components";
const Button = styled.button`
background-color:black;
color:white;
padding:20px;
border:1 px solid black;

margin-left:120px;
border-radius:50%;
font-size:40px;
line-height:20px;
border: 1px solid transparent;
transition: 0.4s background ease in;
width:68px;
height:68px;

&:hover{
background-color:white;
border:1px solid black;
color:black;
transition: 0.3s background ease-in;
}
`;
const Container=styled.div`

box-sizing:border-box;
max-width:1512px;
height:100vh;
display:flex;
text-align:center;
  .col1{
  max-width:435px;
  height:100vh;
  
}
  .circle{
  height:35px;
  width:35px;
  
  
  border:1px solid transparent;
  border-radius:50%;
  
  }
  .row{
  display:flex;
  flex-direction:column;
  left:44px;
  }
  .note{
  font-family: Roboto;
  font-size: 20.67px;
  font-weight: 500;
  line-height: 24.22px;
  letter-spacing: 0.02em;
  text-align: left;

  
  }
    
  }
  .col1 {
    h1{
  
    font-family:Roboto;
    font-weight:500;
    line-height:40px;
    }
    }
    .content{
    display:flex;
    flex-direction:column;
    max-width:485px;
    margin-left:auto;
    margin-right:auto;
    }
    .content{
    h1{
    border:1px solid transpanparent;
    border-radius:50%;
    text-align:center;
    line-height:70px;
    font-weight:200;
    color:white; 
    width:68px;
    height:68px;
    padding:10px;
    display:inline;
    }
    .span{
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 10px;
    text-align: center;
    
    }
  
    .pic{
    width:626px;
    height: 100px;
    }
    
    
`;

const AddNotes = ({toggle}) => {
  return (
    <Container>
      <div style={{textAlign:"left",padding:"20px"}} className='col1'>
      <div className='col1'>
      <h1>Pocket Notes</h1>
    <div className='content' style={{display:"inline"}}>
    <div className='row' style={{display:"inline"

    }}>
      <h1 style={{backgroundColor:"#0047FF",left:"44px;"}}>CU</h1>
      <span className='note'>Cuvette Notes</span><br></br>
      <h1 style={{backgroundColor:"#B38BFA",left:"44px;"}}>MG</h1>
      <span className='note'>My Personal grp</span> <br></br>
      <h1 style={{backgroundColor:"#FFC0C0",left:"44px;"}}>JS</h1>
      <span className='note'>Javascript grp</span><br></br>
      <h1 style={{backgroundColor:"#43E6FC",left:"44px;"}}>HT</h1>
      <span className='note'>HTML grp</span><br></br>
      <h1 style={{backgroundColor:"#F19576",left:"44px;"}}>CS</h1>
      <span className='note'>CSS Notes</span><br></br>
      <h1 style={{backgroundColor:"#6691FF",left:"44px;"}}>SQ</h1>
      <span className='note'>SQL Notes</span><br></br>
      <h1 style={{backgroundColor:"#FF66F0",left:"44px;"}}>PY</h1>
      <span className='note'>Python Notes</span><br></br>
      <Button onClick={toggle}>+</Button>
      </div>
      </div>
      </div> 
      </div>
      <div className='Col2' style={{width:"1000px",height:"100vh",backgroundColor:"#F7ECDC"}}>
      <div className='text' style={{border: "2px solid #CCCCCC",backgroundColor:"white",width:"400px",height:"250px",top:"344px",
      marginLeft:"300px",marginTop:"200px"}}>
      <h2>Create new Notes group</h2>
      <h4 style={{display:"inline-block"}}>Group Name</h4>&nbsp;
      <input style={{padding:"10px",border: "1px solid #CCCCCC"}}type="text1" value="Enter your group name">
      </input><br></br>
      <h4>Choose colour</h4>
      <div className="dot">
      <span className="circle"style={{display:"inline-block",backgroundColor:"blue",border:"1px solid transparent",borderRadius:"50%"}} ></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"purple",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"pink",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"skyblue",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle"style={{display:"inline-block",backgroundColor:"orange",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"blue",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
      <span className="circle" style={{display:"inline-block",backgroundColor:"magenta",border:"1px solid transparent",borderRadius:"50%"}}></span>&nbsp;
        </div>  
        </div>
              
        </div>
    </Container> 
  )
}
export default AddNotes;
