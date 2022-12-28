
import React,{useState} from 'react';
import './App.css'
export default function Task(){

  
  let[firstname,setFirstname]=useState('')
  let[lastname,setLastname]=useState('')
  let[email,setEmail]=useState('')
  let[password,setPassword]=useState('')
  let[alldata,setAlldata]=useState([])
  let[search,setSearch]=useState('')
  let [a,setA]=useState([])
  
  return(
    <div id='container'>
      <center>
      <input id='searchinput' type='text' placeholder='search' onChange={(f)=>{
        setSearch(f.target.value)
      }}></input>
      
      <button id='search' onClick={()=>{
         let c=[]
          alldata.filter((val)=>{
            if(val.firstname1===search){

              c.push(val)
            }
            setA(c)
          })
        }}>search</button>
       

    <br></br>
      <input  id='firstname'type='text' placeholder='enter firstname' onChange={(a)=>{
        setFirstname(a.target.value)
      }}/>
      <input  id='lastname' type='text' placeholder='enter lastname' onChange={(a)=>{
        setLastname(a.target.value)
      }}/>
      <input id='email' type='email' placeholder='enter email' onChange={(a)=>{
        setEmail(a.target.value)
      }}/>
      <input  id='password'type='password' placeholder='enter password' onChange={(a)=>{
        setPassword(a.target.value)
      }}/>
      <button id='submit' onClick={()=>{
        let obj={
          firstname1:firstname,
          lastname1:lastname,
          email1:email,
          password1:password
        }
        setAlldata([...alldata,obj])
        // setSearch("") 
      }}>submit</button>
      
      {
        search.length<3?alldata.map((item,index)=>{
          return(
            <div>
              <table>
                <tr>
                  <td>{item.firstname1}</td>
                  <td>{item.lastname1}</td>
                  <td>{item.email1}</td>
                  <td>{item.password1}</td>
                </tr>
            </table>
          </div>
        )
        }):a.map((item,index)=>{
          return(
            <div>
              <table>
                <tr>
                  <td>{item.firstname1}</td>
                  <td>{item.lastname1}</td>
                  <td>{item.email1}</td>
                  <td>{item.password1}</td>
                </tr>
            </table>
          </div>
        )
        })
      }
       </center>
    </div>
  )
}
