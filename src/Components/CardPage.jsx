import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Header from "./Header.jsx";
import Footer from "./Footer";
import mapImg from "../images/map.jpg"



// ___CROSUAL___
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 850,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    display: 'block',
    maxWidth: 850,
    overflow: 'hidden',
    width: '100%',
  },
}));





// ___CROSUAL___
function SwipeableTextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <Col sm={8}>
            <div className={classes.root}>
              <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
              </Paper>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {tutorialSteps.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img className={classes.img} src={props.image1} />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper style={{ marginLeft: '650px' }}
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
              />
            </div>
            <div style={{ border: '1px solid grey', borderRadius: '6px' }}>
              <div style={{ display: 'inline-flex' }}>
                <div style={{ margin: '30px' }}>
                  <img style={{ width: '60px', height: '50px' }} src={props.image1} alt="" />
                </div>
                <div style={{ margin: '30px' }}>
                  <img style={{ width: '60px', height: '50px' }} src={props.image2} alt="" />
                </div>
                <div style={{ margin: '30px' }}>
                  <img style={{ width: '60px', height: '50px' }} src={props.image3} alt="" />
                </div>
                <div style={{ margin: '30px' }}>
                  <img style={{ width: '60px', height: '50px' }} src={props.image4} alt="" />
                </div>
              </div>
            </div>
            <div style={{ border: '1px solid grey', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px' }, { margin: '10px' }}>
                <h3>Details</h3>
                <div style={{ display: 'inline-flex', color: 'gray' }}>
                  <p>Condition</p>
                  <p style={{ marginLeft: '130px' }}>{props.Text1}</p>
                  <p style={{ marginLeft: '130px' }}>{props.Text2}</p>
                  <p style={{ marginLeft: '130px' }}>{props.Text3} </p>
                </div>
                <p>___________________________________________________</p>
              </div>
              <div style={{ fontSize: '0.6em' }, { margin: '10px' }}>
                <h3>Description</h3>
                <div style={{ color: 'gray' }}>
                
                  <p>{props.description1}</p>
                </div>
              </div>
              <div style={{ color: 'gray', margin: '10px' }}>
                <p>{props.description2}
                </p>
                <p>{props.description3}</p>
              </div>
            </div>
          </Col>

          <Col sm={4}>
            <div style={{ border: '1px solid grey', borderRadius: '6px' }}>
              <div style={{ display: 'inline-flex' }}>
            <h1 style={{ margin: '20px' }}>{props.price}</h1>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </div>
              <div style={{ marginLeft: '20px', color: 'gray' }}>
                <p style={{ fontSize: '1.3em' }}>{props.productName}</p>
                <div style={{ fontSize: '0.8em', marginBottom: '15px' }}>
                  <span>{props.productDetails}</span>
                  <span style={{ marginLeft: '110px' }}>{props.date}</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '10px' }}>
              <div style={{ border: '1px solid grey', borderRadius: '6px' }}>
                <h4 style={{ margin: '20px', color: 'gray' }}>Seller description</h4>
                <h5 style={{ marginLeft: '50px' }}>{props.sellerName}</h5>
                <p style={{ fontSize: '0.8em', marginLeft: '50px', color: 'gray' }}>Member {props.dateIssue}</p>
                <Button style={{ width: '320px', fontSize: '0.8em', border: '1px solid grey', borderRadius: '6px', margin: '10px', color: 'white', backgroundColor: 'DarkSlateGray' }}> <b> Chat with seller </b> </Button>
              </div>
            </div>
            <div style={{ marginTop: '10px' }}>
              <div style={{ border: '1px solid grey', borderRadius: '6px' }}>
                <h5 style={{ margin: '15px' }}><b> Posted in</b> </h5>
                <p style={{ fontSize: '0.8em', marginLeft: '15px', color: 'gray' }}>{props.address}</p>
                <img style={{ width: '320px', height: '160px', margin: '15px', marginTop: '5px' }} src={mapImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default SwipeableTextMobileStepper;
