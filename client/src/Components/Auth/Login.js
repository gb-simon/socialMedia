import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles } from '@material-ui/core/styles'


const styles = {
      textField: {
             width:"100%",
             marginBottom: 5
      },
      btnBlock: {
            textAlign: 'center',
            marginBottom: 10,
            marginTop: 20
      }
}

class Login extends Component {
      constructor (props) {
            super(props)
            this.state = {
                  login: '',
                  password:'',
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)

      }
      handleChange (e) {
            this.setState({ [e.target.name]: e.target.value })
      }
      handleSubmit (e) {
            e.preventDefault()
            const userData = {
                  login: this.state.login,
                  password: this.state.password,

            }
            console.log(userData)
      }
      render () {
            const { classes } = this.props;
            return (
                  <div>
                  <Paper style= {{padding: 15}}>
                          <from onSubmit={this.handleSubmit}>                            
                          <TextField 
                                type="Login"
                                label="Login"
                                name="login"
                                value={this.state.login}
                                onChange={this.handleChange}
                                className={classes.textField}
                          />
                          <TextField 
                                label="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className={classes.textField}
                          />
                          <div className= "btnBlock">
                                <Button variant="outlined" type="submit"> Submit </Button>   
                           
                          </div>
                          </from>
                    </Paper>          </div>
            )
      }
}

export default withStyles (styles)(Login)




