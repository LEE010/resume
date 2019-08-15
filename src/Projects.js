import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectList from './projects/ProjectList';
import './scss/Projects.scss'

const projects= [ {
  'name':'Deep-Studio',
  'img_dir': require ('./img/sample.png'),
  'page': 31,
  'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
,{
  'name':'Pommelier',
  'img_dir': require ('./img/sample.png'),
  'page': 13,
  'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
,{
  'name':'DSC2019',
  'img_dir': require ('./img/sample.png'),
  'page': 3,
  'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
,{
  'name':'minor-market',
  'img_dir': require ('./img/sample.png'),
  'page': 10,
  'comment':'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
,
];

function Projects() {
  const project_list = projects.map(
    project => (<ProjectList key={'project-'+project.name} project={project}/>)
  );
  return (
    <section id='Projects' className='Projects'>
      <h1>projects</h1>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {project_list}
        </Grid>
    </section>
  );

}
export default Projects;
