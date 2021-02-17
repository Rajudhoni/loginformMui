import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FacebookIcon from '@material-ui/icons/Facebook';
import SmsIcon from '@material-ui/icons/Sms';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
    paperStyle:{padding: 20, height: '80vh', width: 300, margin: '20px auto' },
    avatar:{backgroundColor: "#1bbd7e"} ,
    margin: {margin: theme.spacing(2)},
    fpasswd: {color: 'red'},
    button: {margin: theme.spacing(1)},
  


  }));


const Login = () => {
    const classes = useStyles();
    return(
        <Grid >
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align="center">
                        <Avatar className={classes.avatar}><LockIcon /></Avatar>
                        <h2>Sign In</h2>
                </Grid>
                {/* <label></label> */}
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Email or Phone"
                    placeholder="*Email or Phone Number*"
                    fullWidth
                    required
                   
                    
                  />
                  <div className={classes.margin} />
                  <Button variant="contained" color="primary" fullWidth>
                           Login
                  </Button>
                  <Typography variant="h6" align="right" className={classes.fpasswd}>Forgot Password</Typography>
                  <div className={classes.margin} />
                  <Grid align="center">
                        <h4>Or</h4>
                        <h3>SignUp With</h3>
                </Grid>



                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                 >
                 
                        
                        <Button variant="contained" size="small" 
                                color="secondary"  
                                startIcon={<MailOutlineIcon/>}
                                style={{backgroundColor: "#e66357"}}
                         >
                                Gmail
                        </Button>
                       
                       
                        <Button variant="contained" 
                                size="small" color="primary" 
                                startIcon={<FacebookIcon />} 
                                // style={{width:"105px"}}
                        >
                                Facebook
                        </Button>
                      

                     
                        <Button variant="contained" size="small"  startIcon={<SmsIcon />} >
                                SMS
                        </Button>
                       
                    
                </Grid>
                <br></br>
                <hr></hr>
                <Grid align="center">
                        
                        <h3>New to ECorfy</h3>
                </Grid>
                <Button variant="contained" color="primary" fullWidth>
                          Create Your ECorfy Account
                  </Button>

               
                   
            </Paper>
           

        </Grid>
    )
}

export default Login;