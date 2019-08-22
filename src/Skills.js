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
              { 'name':'C', 'level':3, 'techs':[] },
              { 'name':'C++', 'level':2, 'techs':[] },
              { 'name':'Python3', 'level':4, 'techs':[] },
              { 'name':'Java', 'level':2, 'techs':[] },
              { 'name':'Ruby', 'level':3, 'techs':[] },
              { 'name':'HTML', 'level':3, 'techs':[] },
              { 'name':'CSS', 'level':2, 'techs':[] },
              { 'name':'JavaScript', 'level':3, 'techs':[] },
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
              { 'name':'Bootstrap', 'level':3, 'techs':['HTML','CSS','JS'] },
              { 'name':'jQuery', 'level':2, 'techs':['JS'] },
              { 'name':'Sass', 'level':2, 'techs':['CSS'] }
            ]
          },
          {
            'head':'Back-end',
            'items':[
              { 'name':'Ruby on Rails', 'level':3, 'techs':['Ruby'] },
              { 'name':'Django','level':3, 'techs':['Python3'] },
              { 'name':'Spring','level':1, 'techs':['Java'] }
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
              {'name':'Numpy','level':2, 'techs':[]},
              {'name':'Pandas','level':3, 'techs':[]}
            ]
          },
          {
            'head':'Visualization',
            'items':[
              {'name':'matplotlib','level':2, 'techs':['Python3']},
              {'name':'Seaborn','level':2, 'techs':['Python3']}
            ]
          },
          {
            'head':'Machine-learning',
            'items':[
              {'name':'Scipy','level':3, 'techs':['Python3']},
              {'name':'Scikit-learn','level':2, 'techs':['Python3']}
            ]
          },
          {
            'head':'Deep-learning',
            'items':[
              {'name':'TensorFlow','level':1, 'techs':[]}
            ]
          },
        ]
      }
    ],
  },
  {
    'title':'ETC',
    'categorys':[
      {
        'category':'',
        'heads': [
          {
            'head':'',
            'items':[
              {'name':'Ubuntu','level':3, 'techs':[]},
              {'name':'Anaconda','level':3, 'techs':[]},
              {'name':'Shell Script','level':1, 'techs':[]},
              {'name':'FFmpeg','level':1, 'techs':[]},
              {'name':'SoX','level':1, 'techs':[]},
              {'name':'ImageMagick','level':1, 'techs':[]},
            ]
          }
        ]
      }
    ]
  },

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
