import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function ModalImgs(name, page) {
  const imgs = [];

  for(var i = 1; i <= page+1; i++) {
    imgs.push('images/projects/'+name+'/'+i+'.jpg')
  };
  return(imgs)
};

class ProjectModalStepper extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      activeStep: 0,
    };

  };

  handleNext() {
    if (this.state.activeStep === this.props.page -1 ){
      this.setState({
        activeStep: 0,
      });
    } else {
      this.setState({
        activeStep: this.state.activeStep + 1,
      });
    }
  }

  handleBack() {
    if (this.state.activeStep === 0){
      this.setState({
        activeStep: this.props.page - 1,
      });
    } else {
      this.setState({
        activeStep: this.state.activeStep -1,
      });
    }
  }
  render() {
    const name = this.props.name;
    const page = this.props.page
    const project_imgs = ModalImgs(name,page);

    return (
      <>
        <img
          src={project_imgs[this.state.activeStep]}
          alt={name+'-modal-img-'+this.state.activeStep}
          style={ {width:'100%'} }
        />
        <MobileStepper
          steps={page}
          position="static"
          variant="text"
          activeStep={this.state.activeStep}
          nextButton={
            <Button size="small" onClick={this.handleNext}>
              Next
              {<KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack}>
              {<KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </>
    );
  }
}
export default ProjectModalStepper
