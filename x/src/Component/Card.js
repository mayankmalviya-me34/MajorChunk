import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Cif from '../Images/c1.jpg';




console.log(Cif);

export const Card = () => {
  const navigate=useNavigate();
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          p: 9,
          width: 625,
          height: 270,
        
          
        },
      }}
    >
   

      <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}} >
      
      <CardActions>
      <Typography size="small" variant="h3" color="#ffffff" component="div" sx={{ mb:1 }}>
      BASIC INFORMATION
      </Typography>
      </CardActions>
      <Button   style={{ shadow: "#6E2DD6", borderRadius: 25, backgroundColor: "#e879f9",}} onClick={() => navigate("/details")} size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
        CAREER OBJECTIVE
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={() => navigate("/career")} size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1}}>
      EDUCATIONAL DETAILS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={() => navigate("/educationdetils")} size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
      SOFT<br/> SKILLS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/softskills")} size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1}}>
      IT<br/> SKILLS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/itskills")} size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
       INDUSTRIAL TRAINING
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/industrialtraining")} size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>




      <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1}}>
      INTRENSHIP DETAILS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/internshipdetails")} size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
        PROJECTS DETAILS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/projectdetails")} size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
      ACHIEVEMENTS DETAILS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/achievement")} size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mt: -4 }}>
       EXTRA CURRICULAR ACTIVITIES
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/extraactivity")} size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
      YOUR <br/>STRENGTHS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/yourstrenghth")} size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
      YOUR <br/>HOBBIES
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/hobbies")} size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
      AREA OF IMPROVEMENT
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/improvement")} size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}> 
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
      YOUR CERTIFICATIONS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/certificatess")} size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
      GOVERMENT IDENTIFICATION
      </Typography>
      </CardActions>
      <Button style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/govtid")} size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>
    
    <Paper elevation={3} style={{borderRadius: 50, backgroundImage:`url(${Cif})`}}>
      <CardActions>
      <Typography variant="h3" color="#ffffff" component="div" sx={{ mb: 1 }}>
     SOCIAL MEDIA DETAILS
      </Typography>
      </CardActions>
      <Button  style={{borderRadius: 25, backgroundColor: "#e879f9",}} onClick={()=>navigate("/socialmedia")} size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


      
    </Box>
  );
}













