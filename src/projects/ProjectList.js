import React, { Component, Fragment } from 'react';
import { Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, CardHeader } from '@material-ui/core';
import ProjectModal from './ProjectModal';
import '../scss/Projects.scss'
class ProjectList extends Component {
    render() {
      const name = this.props.name;
      const comment = this.props.comment;
      const img_dir = this.props.img;

      return (
        <Fragment>
          <Grid item xs={12} sm={12} md={3} className='Card'>
            <Card>
              <CardActionArea>
                <CardHeader
                  title={name}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  style={{ height: 0, paddingTop: '100%'}}
                  image={img_dir}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {comment}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ProjectModal/>
              </CardActions>
            </Card>
          </Grid>
        </Fragment>
      );
    }
}

export default ProjectList;
