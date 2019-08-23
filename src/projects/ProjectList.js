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
import TagChips from '../TagChips'

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
    const subname = this.props.project.subname;
    const comment = this.props.project.comment.map( c => <p>{
          c.split('\n').map( line => {
            return (<span>{line}<br/></span>)
          })
        }</p>);
    const thumb = this.props.project.thumb;
    const page = this.props.project.page;
    const live = this.props.project.live;
    const code = this.props.project.code;
    // const tags = this.props.project.tags.map( tag => {tag} ) ;

    return (
      <Fragment>
        <Grid item xs={12} sm={12} md={6} className='Card'>
          <Card>
            <CardActionArea onClick={this.handleOpen}>
              <CardHeader
                title={name}
                subheader={subname}
              />
              <CardMedia
                style={{ height: 0, paddingTop: '100%'}}
                image={ thumb }
                title={name}
              />
            </CardActionArea>
            <CardActions>
              <div className='Card-buttons'>
                <Button size="small" component='a' href={ live }>
                  live
                </Button>
                <Button size="small" component='a' href={ code }>
                  code
                </Button>
              </div>
            </CardActions>
          </Card>
        </Grid>

        <Dialog
          open={this.state.modal_open}
          onClose={this.handleClose}
          maxWidth='lg'
          fullWidth={true}
          scroll='paper'
        >
          <DialogTitle id="scroll-dialog-title">{name}</DialogTitle>
          <DialogContent>
            <ProjectModalStepper name={name} page={page} />
            <DialogContentText>
              {comment}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>

        </Dialog>
      </Fragment>
    );
  }
}

export default ProjectList;
