import React, { Component, Fragment } from 'react';
import {
  Grid,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardHeader,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
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
    const subname = this.props.project.subname;
    const comment = this.props.project.comment.map( c => <p>{
          c.split('\n').map( line => {
            return (<span>{line}<br/></span>)
          })
        }</p>);
    const thumb = '/images/thumb/' + name +'.jpg';
    const page = this.props.project.page;
    const live = this.props.project.live;
    const code = this.props.project.code;
    const category = this.props.project.category.join(', ');
    const intro = this.props.project.intro;
    const editors = this.props.project.editor.join(', ');
    const techs = this.props.project.techs.join(', ') ;
    const roles = this.props.project.roles.join(', ');

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
          <DialogTitle id="dialog-title">{name}</DialogTitle>
          <DialogContent>
            <ProjectModalStepper name={name} page={page} />
              <Container maxWidth="md">
                <div className='dialog-content-head'>
                  <h4>Category</h4>
                  {category}
                </div>
                <div className='dialog-content-head'>
                  <h4>Intro</h4>
                  {intro}
                </div>
                <div className='dialog-content-head'>
                  <h4>Envs</h4>
                  <h5>Editor</h5>
                  {editors}
                  <h5>Tech Stack</h5>
                  {techs}
                </div>
                <div className='dialog-role'>
                  <h4>Role</h4>
                  {roles}
                </div>
                <div className='dialog-detail'>
                  <h4>Detail</h4>
                  {comment}
                </div>
              </Container>
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
