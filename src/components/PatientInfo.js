import React, {useEffect, useState} from "react"
import * as ReactBootStrap from "react-bootstrap"
import { makeStyles } from "@material-ui/core/styles";
import {Card , Grid , Typography ,Button} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import { Stage, Layer, Image } from "react-konva";
import { TextField } from '@material-ui/core';
import { useToasts } from "react-toast-notifications";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const PatientInfo = () => {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');
    const [stage, setStage] = React.useState('');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const handleStageChange = (event) => {
      setStage(event.target.value);
    };

    const currencies = [
      {
        value: '1',
        label: 'Condition 1',
      },
      {
        value: '2',
        label: 'Condition 2',
      },
      {
        value: '3',
        label: 'Condition 3',
      }
    ];

    const stages = [
      {
        value: '1',
        label: 'Stage 1',
      },
      {
        value: '2',
        label: 'Stage 2',
      },
      {
        value: '3',
        label: 'stage 3',
      }
    ];
    


  const [image, setImage] = useState(new window.Image());  
  const [file, setFile] = useState();
  const [mask, setMask] = useState('');

  const {addToast} = useToasts();

  const handleImage = () => {
    const img = new window.Image();
    
    img.src =
      "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
    setImage(img);
  };

  useEffect(() => {
    console.log(file)
  }, [file])

  const submit = () => {  
    if (!mask) {
      addToast("Mask can not be empty" , {appearance : "error" , autoDismiss : true})
      return;
    } 

    if (!file) {
      addToast("File can not be empty" , {appearance : "error" , autoDismiss : true})
      return;
    }

    if (mask.length < 6) {
      addToast("Mask should be at least 6 characters" , {appearance : "error" , autoDismiss : true})
      return;
    }

    if (!file.name.includes('pdf')) {
      addToast("Please upload PDF file" , {appearance : "error" , autoDismiss : true})
      return;
    }


    let formdata = new FormData();
    formdata.append('mask' , mask)
    formdata.append('preScannedImage' , file, file.name)

    fetch('http://52.14.177.116:3000/patients/create' , {
      method : "post",
      headers : {
        "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFiZG8iLCJuYW1lIjoiYWJkdWwiLCJlbWFpbCI6ImVuZy5hYmR1bC5hemVlbUBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIwLTA3LTA5VDE1OjQzOjI1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA3LTA5VDE1OjQzOjI1LjAwMFoifSwiaWF0IjoxNTk0MzA5ODI5LCJleHAiOjE1OTY5MDE4Mjl9.OEpzpJJ_TXz8h5pvrooIcXb1rKPMlrPctiU6tK_XBcs"
      },
      body : formdata
    })
    .then(response => {
      addToast("Uploaded successfully " , {appearance : "success" , autoDismiss : true})
    })
    .catch((e) => {
      if (e.response.data[0]) {
        e.response.data[0].errors.forEach((err) => {
          addToast(e.message , {appearance : "error" , autoDismiss : true})
        })
      }
    })

  }

    return (
      <React.Fragment>
      <div style={{ width : '800px' , margin:'100px auto 0 auto'}}>
        <Card style={{padding : '15px'}}>
          <form>
            <Grid container justify="space-between" spacing={2}>
              <Grid item lg={12}>
                <Typography variant="h5">Patient Information</Typography>
              </Grid>
              <Grid item lg={6}>
                  <TextField 
                  fullWidth
                   id="outlined-basic" 
                   value={mask}
                   onChange={(e) => setMask(e.target.value)}
                   label="Patient Mask" 
                   placeholder="enter patient mask"
                   variant="outlined"
                    />
              </Grid>
              <Grid item lg={6}>
              <TextField
                  fullWidth
                  id="outlined-select-currency-native"
                  select
                  label="Condition"
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your condition"
                  variant="outlined"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

              </Grid>

              <Grid item lg={6}>
              <TextField
                  fullWidth
                  id="outlined-select-currency-native"
                  select
                  label="Stage"
                  value={stage}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your stage"
                  variant="outlined"
                >
                  {stages.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

              </Grid>
              <Grid item lg={6}>
                  <TextField 
                  fullWidth
                   id="outlined-basic" 
                   label="Refont" 
                   placeholder="enter Refont"
                   variant="outlined"
                    />
              </Grid>
              

            </Grid>
          </form>
        </Card>

      </div>

<ReactBootStrap.Form  >
            
            
<ReactBootStrap.Form.Group controlId="formBasicPatient"   >
<ReactBootStrap.Form.Label  style={{paddingRight:"20px", marginLeft:"20px", marginTop : "2rem"}}>OCT Scan:</ReactBootStrap.Form.Label>
<div style={{display : "flex" , justifyContent : "center" , alignItems : "center", width : "100%", marginBottom : "1rem"}}>
<ReactBootStrap.Form.File id="exampleFormControlFile1" label="Upload from PC" onChange={(e) => setFile(e.target.files[0])}/>
</div>
        <ReactBootStrap.Button variant="primary"  onClick={submit} style={{paddingRight:"20px", marginLeft:"20px"}}>
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

  {/* <Stage width={window.innerWidth} height={window.innerHeight}   >
    <Layer >
    <Image x={10} y={20} image={image}
    
    />

    </Layer>
  </Stage> */}
  </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form >
</React.Fragment>
    )
}

export default PatientInfo

