import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import ProjectList from './projects/ProjectList';

class Projects extends Component {
  static defaultProps = {
    projects: [ {
      'name':'Deep-Studio',
      'img_dir': require ('./img/sample.png'),
      'page': 31,
      'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    ,{
      'name':'Pommelier',
      'img_dir': require ('./img/sample.png'),
      'page': 12,
      'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    ,{
      'name':'DSC2019',
      'img_dir': require ('./img/sample.png'),
      'page': 12,
      'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    ,{
      'name':'minor-market',
      'img_dir': require ('./img/sample.png'),
      'page': 12,
      'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    ,
      ]
    }
    render() {
      const { projects } = this.props;
      const project_list = projects.map(
        project => (<ProjectList key={'project-'+project.name} name={project.name} comment={project.comment} img={project.img_dir}/>)
      );
      return (
        <section>
          <Typography variant='h1'>PROJECTS</Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {project_list}
            </Grid>
        </section>
      );
    }
}
export default Projects;
