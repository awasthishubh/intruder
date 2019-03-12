import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class CircularIntegration extends React.Component {

  render() {
    const { classes } = this.props;
    
    var animateClass=!this.props.done?'':' animated infinite tada'
    return (
      <div className={classes.root} style={{flexDirection:'column'}}>
        {!this.props.done?<div style={{color:'#fff',fontWeight:900,marginBottom:10,fontSize:30}}>Wait for</div>:
          <div/>}
        <div style={{margin:'auto'}} className={classes.wrapper+animateClass}>
          <Fab style={{ height: 200, width: 200, backgroundColor:'#4caf50'}}>
            <div style={{fontSize:80, color:'#fff'}}>{Math.floor(this.props.sec)}</div>
          </Fab>
          <CircularProgress 
            style={{color:'#ffeb3b'}}
            size={210} 
            className={classes.fabProgress} 
            variant="static"
            value={this.props.sec*100/20}

          />
        </div>
        <div style={{color:'#fff',fontWeight:900,marginTop:10,fontSize:30}}>
          {this.props.done?'Requesting question...':'Seconds'}
        </div>
      </div>
    );
  }
}

CircularIntegration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIntegration);