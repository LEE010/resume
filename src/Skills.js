import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillsCategory from './skills/SkillsCategory';

const SKILLS = [
  {
    'title':'Coding',
    'categorys':[
      {
        'category':'',
        'heads': [
          {
            'head':'',
            'items':[
              { 'name':'C', 'level':3 },
              { 'name':'C++', 'level':2 },
              { 'name':'Java', 'level':2 },
              { 'name':'JavaScript', 'level':3 },
              { 'name':'Python3', 'level':4 },
              { 'name':'Ruby', 'level':3 },
              { 'name':'HTML', 'level':3 },
              { 'name':'CSS', 'level':2 }
            ]
          }
        ]
      }
    ]
  },
  {
    'title':'Framework & Libs',
    'categorys':[
      {
        'category':'Web',
        'heads': [
          {
            'head':'Front-end',
            'items':[
              { 'name':'Bootstrap', 'level':3 },
              { 'name':'jQuery', 'level':2 },
              { 'name':'Sass', 'level':2 }
            ]
          },
          {
            'head':'Back-end',
            'items':[
              { 'name':'Ruby on Rails', 'level':3 },
              { 'name':'Django','level':3 },
              { 'name':'Spring','level':1 }
            ]
          }
        ]
      },
      {
        'category':'AI·Bigdata',
        'heads':[
          {
            'head':'Preprocessing',
            'items':[
              {'name':'Numpy','level':2},
              {'name':'Pandas','level':3}
            ]
          },
          {
            'head':'Visualization',
            'items':[
              {'name':'matplotlib','level':2},
              {'name':'Seaborn','level':2}
            ]
          },
          {
            'head':'Machine-learning',
            'items':[
              {'name':'Scipy','level':3},
              {'name':'Scikit-learn','level':2}
            ]
          },
          {
            'head':'Deep-learning',
            'items':[
              {'name':'TensorFlow','level':1}
            ]
          },
        ]
      },
      {
        'category':'ETC',
        'heads':[{
          'head':'',
          'items':[
            {'name':'Ubuntu','level':3},
            {'name':'Anaconda','level':3},
            {'name':'Shell Script','level':1},
            {'name':'FFmpeg','level':1},
            {'name':'SoX','level':1},
            {'name':'ImageMagick','level':1},
          ]
        }]
      }
    ],
  }
];
function SkillCategorys(skill) {
  const category_list = skill.categorys.map(category => SkillsCategory(category))

  return(
    <div key={'skills-'+ skill.title}>
      <h2>{skill.title}</h2>
      {category_list}
    </div>
  )
}
function Skills() {
  const skills = SKILLS.map(skill => SkillCategorys(skill));

  return (
    <section className='Skills' id='Skills'>
      <h1>Skills</h1>
      {skills}
    </section>
  );
}
export default Skills;
