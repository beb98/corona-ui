import React,{useEffect} from 'react'
import * as ReactBootStrap from "react-bootstrap"
import logo from '../logo.svg';


const PatientData = () => {
    
        
    
    return (
        <div>
            <label >Patient ID</label>
            <input type="text" />

            <ReactBootStrap.Table striped bordered hover>
            <label >Patient Name</label>
            <ReactBootStrap.Button >New Patient</ReactBootStrap.Button>

    <tr>
    <label >Patient ID</label>
            <input type="text" />
      <td>
         Patient Name ID:
      </td>
      <td>
         123
      </td>
      <tr>
      <td colspan="2">History</td>
  <td>&nbsp;</td>
  </tr>
  <tr>
  <td>Condition:</td>
  <td>
  <ReactBootStrap.Dropdown>
  <ReactBootStrap.Dropdown.Toggle variant="success" id="dropdown-basic">
    Select
  </ReactBootStrap.Dropdown.Toggle>

  <ReactBootStrap.Dropdown.Menu>
    <ReactBootStrap.Dropdown.Item href="#/action-1">Condition1</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-2">Condition 2</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-3">Condition 3</ReactBootStrap.Dropdown.Item>
  </ReactBootStrap.Dropdown.Menu>
</ReactBootStrap.Dropdown>



  </td>
  </tr>
  <tr>
  <td>Stage:</td>
  <td>
  <ReactBootStrap.Dropdown>
  <ReactBootStrap.Dropdown.Toggle variant="success" id="dropdown-basic">
    Select
  </ReactBootStrap.Dropdown.Toggle>

  <ReactBootStrap.Dropdown.Menu>
    <ReactBootStrap.Dropdown.Item href="#/action-1">Stage 1</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-2">Stage 2</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-3">Stage 3</ReactBootStrap.Dropdown.Item>
  </ReactBootStrap.Dropdown.Menu>
</ReactBootStrap.Dropdown>
  </td>
  </tr>
  <tr>
  <td>Refont:</td>
  <td>
  <input type="text" />

  </td>
  </tr>
  </tr>
  <tr>
  <td> <ReactBootStrap.Button >Upload from Pc</ReactBootStrap.Button> <br/>OCT Scan</td>
    <td> <ReactBootStrap.Button >Load from DS </ReactBootStrap.Button> <br/>OX-Ray Scan</td>
    </tr>
  <tr>
      <td colspan="2">
     

      </td>
      <td>&nbsp;</td>
  </tr>
  <tbody>

  </tbody>
  </ReactBootStrap.Table>  
  
 

 


    </div>
    )
}

export default PatientData
