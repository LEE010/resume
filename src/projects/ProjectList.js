import React, { Component, Fragment } from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardHeader,
  Button,
  Modal
 } from '@material-ui/core';
import '../scss/Projects.scss'

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      // height: 0,
      // width: 0,
      modal_open: false,
    };

    // window.addEventListener("resize", this.update);
  };

  // componentDidMount() {
  //   this.update();
  // };

  // update = () => {
  //   this.setState({
  //     height: window.innerHeight,
  //     width: window.innerWidth
  //   });
  // };

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

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modal_open}
          onClose={this.handleClose}
        >
          <div>
            <h2 id="simple-modal-title">{name}</h2>
            <p id="simple-modal-description">
              {comment}
            </p>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default ProjectList;
