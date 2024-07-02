import React from 'react'
import styled from "styled-components";
import image from "C:/Users/HP/Desktop/react-notes-app/project2/public/image12.png"
import image1 from "C:/Users/HP/Desktop/react-notes-app/project2/public/Vector.png"


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
  .row{
  display:flex;
  flex-direction:column;
  left:44px;
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
    border:1px solid;
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
    letter-spacing: 10px;;
    text-align: center;
    
    }
    .col2{
    max-width:1077px;
    backround-color:#F7CDCE;
    
    }
    .pic{
    width:626px;
    height: 100px;
    }
    .text{
    background: #292929;
    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 2px;
    text-align: center;
}
    .txt{
    font-family: Roboto;
    font-size: 50px;
    font-weight: 400;
    line-height: 58.59px;
    letter-spacing: 2px;
    text-align: center;

    }
    
`;

function Home() {

  return (
    <Container>
      <div style={{textAlign:"left",padding:"20px"}} className='col1'>
      <div className='col1'>
      <h1>Pocket Notes</h1>
    <div class='content' style={{display:"inline"}}>
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
      <Button>+</Button>

      </div>
      </div>    
    </div>
    </div>
  

   <div className='col2' style={{left:"500px",width:"1000px",height:"100vh",backgroundColor:"#F7ECDC"}}>
      <div className="content2" style={{textAlign:"center",marginTop:"30px"}}>
      <div>
        <img className='pic' src={image} alt=""></img><br></br>
        <h1 className='txt'>Pocket Notes</h1>
        <span  className='text'>Send and receive messages without keeping your phone online.<br></br>Use Pocket Notes on up to 4 linked devices and 1 mobile phones.</span><br></br>
        <div className='footer' style={{marginTop:"150px"}}>
        <img src={image1} alt=""></img>&nbsp;
        <span>end-to-end-encrypted</span>
        </div>
    </div>    
    </div>
    </div>  
    </Container>
  )
}
  

export default Home
