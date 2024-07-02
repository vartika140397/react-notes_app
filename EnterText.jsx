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
  width:600px;
  height:100vh;
  
}
  .circle{
  height:35px;
  width:35px;  
  border:1px solid transparent;
  border-radius:50%;
  }
  .left{
  font-family: Roboto;
  font-size: 18.63px;
  font-weight: 100;
  line-height: 18.2px;
  letter-spacing: 0.02em;
  text-align: left;
  }
  .left1{
  font-family: Roboto;
  font-size: 18.63px;
  font-weight: 100;
  line-height: 18.2px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-top:50px;
  
  
  }
  .right{
  font-family: Roboto;
  font-size: 18.63px;
  font-weight: 100;
    line-height: 18.2px;
    letter-spacing: 0.02em;
    text-align: left;

  
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
    .note{
  font-family: Roboto;
  font-size: 20.67px;
  font-weight: 500;
  line-height: 24.22px;
  letter-spacing: 0.02em;
  text-align: left;
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
    
`;

const EnterText = () => {
  return (
    <Container>

      <div style={{textAlign:"left",padding:"20px"}} className='col1'>
      <h1>Pocket Notes</h1>
    <div className='content' style={{display:"inline"}}>
    <div className='row' style={{display:"flexbox"

    }}>
      <h1 style={{backgroundColor:"#0047FF"}}>CU</h1>
      <span className='note'>Cuvette Notes</span><br></br>
      <h1 style={{backgroundColor:"#B38BFA"}}>MG</h1>
      <span className='note'>My Personal grp</span> <br></br>
      <h1 style={{backgroundColor:"#FFC0C0"}}>JS</h1>
      <span className='note'>Javascript grp</span><br></br>
      <h1 style={{backgroundColor:"#43E6FC"}}>HT</h1>
      <span className='note'>HTML grp</span><br></br>
      <h1 style={{backgroundColor:"#F19576"}}>CS</h1>
      <span className='note'>CSS Notes</span><br></br>
      <h1 style={{backgroundColor:"#6691FF"}}>SQ</h1>
      <span className='note'>SQL Notes</span><br></br>
      <h1 style={{backgroundColor:"#FF66F0"}}>PY</h1>
      <span className='note'>Python Notes</span><br></br>
      <Button>+</Button>
      </div>
      </div>
      </div>

      <div style={{backgroundColor:"#F7ECDC"}}>
      <div className='col2' style={{width:"900px",height:"100px",backgroundColor:"#E8E8E8"}}>
      <div className="content2" style={{textAlign:"left",marginTop:"10px"}}>
      <h1 style={{display:"inline-block",textAlign:"left",border:"1px solid transparent",borderRadius:"50%",width:"68px",height:"68px",backgroundColor:"#0047FF",color:"white",lineHeight:"60px"}}>CU</h1>
      <h1 style={{display:"inline-block"}}>Cuvette Notes</h1>
      </div>
      <div className="cont1">
        <div className='article' style={{backgroundColor:"#F7ECDC"}}>
        <div style={{textAlign:"left"}}>
        <span>10:10 Am</span><br></br>
        <div style={{textAlign:"left"}}>
        <span style={{display:"flex",flexDirection:"column",textAlign:"center",fontSize:"17px"}}>
          Another productive way to use this tool to begin a daily writing routine. One way is to<br></br>
          generate a random paragraph with the intention to try to rewrite it while still keeping the<br></br>
          original meaning. The purpose here is to just get the writing started so that when the writer goes<br></br> onto their day's writing projects, words are already flowing from their fingers.
        </span>
        </div>
        <span>9 March 2023</span>
        </div>
        </div>
        <br></br>
        <div className='article' style={{backgroundColor:"#F7ECDC"}}>
        <div style={{textAlign:"left"}}>
        <span>10:30 Am</span><br></br>
        <div style={{textAlign:"left"}}>
        <span style={{display:"flex",flexDirection:"column",textAlign:"center",fontSize:"17px"}}>
        It's not only writers who can benefit from this free online tool. If you're a programmer who's<br></br>
        working on a project where blocks of text are needed, this tool can be a great way to get<br></br>
        that. It's a good way to test your programming and that the tool being created is working
        well.  
        </span>
        </div>
        <span>9 March 2023</span>
        </div>
        </div>
        <br></br>
        <div className='article' style={{backgroundColor:"#F7ECDC"}}>
        <div style={{textAlign:"left"}}>
        <span>10:38 Am</span><br></br>
        <div style={{textAlign:"left"}}>
        <span style={{display:"flex",flexDirection:"column",textAlign:"center",fontSize:"17px"}}>
        When first building this generator we thought about using computers to generate the<br></br>
        paragraphs, but they weren't very good and many times didn't make any sense at all. We<br></br>
         therefore took the time to create paragraphs specifically for this generator to make it the<br></br>
        best that we could.
        </span>
        </div>
        <span>9 March 2023</span>
        </div>
        </div>
        <br></br>
        <input style={{width:"800px",height:"100px"}} type='text' value="Enter the text here"></input>
        </div>
        </div>
        </div>
        
    
    



      </Container>
     )
    }

  export default EnterText
