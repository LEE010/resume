import React, { Component, Fragment } from "react";
import { Modal, makeStyles, Button} from '@material-ui/core';

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      height: 0,
      width: 0,
      open: false,
    };

    window.addEventListener("resize", this.update);
  };

  componentDidMount() {
    this.update();
  };

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  handleOpen() {
    this.setState({
      open: true
    });
  };

  handleClose() {
    this.setState({
      open: false
    });
  };

  render() {

    return (
      <Fragment>
        <Button size="small" color="primary" onClick={this.handleOpen}>
          SHOW
        </Button>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>

        </Modal>


      </Fragment>
    );
  }
}

export default ProjectModal;
