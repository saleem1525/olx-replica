import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


      
  
 class HomeCard extends Component {
   render(){
  return (
    <div className="row-cols-6" style={{display:"display-flex"}}>
    <Card style={{width:"80%",height:"320px" ,float:"left" , marginLeft:"3%",marginTop:"5%"}} >
      <CardActions  disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <CardActionArea>
        <CardMedia />
        <CardContent>
        <img src={this.props.image} width="100%" height="140px"/>
          <Typography gutterBottom variant="h5" component="h2">
            <h5> <b>{this.props.head}</b></h5>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}}

export default HomeCard