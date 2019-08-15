import React, { Component, Fragment } from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardHeader,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
 } from '@material-ui/core';
import '../scss/Projects.scss';
import ProjectModalStepper from './ProjectModalStepper';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      modal_open: false,
    };
  };

  handleOpen() {
    this.setState({
      modal_open: true
    });
  };

  handleClose() {
    this.setState({
      modal_open: false
    });
  };
  render() {
    const name = this.props.project.name;
    const comment = this.props.project.comment;
    const img_dir = this.props.project.img_dir;
    const page = this.props.project.page;

    return (
      <Fragment>
        <Grid item xs={12} sm={12} md={3} className='Card'>
          <Card>
            <CardActionArea onClick={this.handleOpen}>
              <CardHeader
                title={name}
                subheader="September 14, 2016"
              />
              <CardMedia
                style={{ height: 0, paddingTop: '100%'}}
                image={img_dir}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <div className='Card-buttons'>
                <Button size="small" color="primary">
                  CODE
                </Button>
                <Button size="small" color="primary">
                  PAGE
                </Button>
              </div>
            </CardActions>
          </Card>
        </Grid>

        <Dialog
          open={this.state.modal_open}
          onClose={this.handleClose}
          fullScreen={true}
          scroll='paper'
        >
          <DialogTitle id="scroll-dialog-title">{name}</DialogTitle>
          <DialogContent>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={12}>
                <ProjectModalStepper name={name} page={page} />
              </Grid>

              <Grid item xs={12}>
                <DialogContentText>
                  {comment}
                </DialogContentText>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>

        </Dialog>
      </Fragment>
    );
  }
}

export default ProjectList;
