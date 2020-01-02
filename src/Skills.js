import React from 'react';
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
              { 'name':'C', 'level':5, 'techs':[] },
              { 'name':'C++', 'level':3, 'techs':[] },
              { 'name':'Python3', 'level':6.5, 'techs':[] },
              { 'name':'Java', 'level':4, 'techs':[] },
              { 'name':'Ruby', 'level':5, 'techs':[] },
              { 'name':'HTML', 'level':6, 'techs':[] },
              { 'name':'CSS', 'level':5, 'techs':[] },
              { 'name':'JavaScript', 'level':5, 'techs':[] },
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
              { 'name':'Bootstrap', 'level':5, 'techs':['HTML','CSS','JS'] },
              { 'name':'jQuery', 'level':3, 'techs':['JS'] },
              { 'name':'React', 'level':3, 'techs':['JS'] }
            ]
          },
          {
            'head':'Back-end',
            'items':[
              { 'name':'Ruby on Rails', 'level':5, 'techs':['Ruby'] },
              { 'name':'Django','level':5, 'techs':['Python3'] },
              { 'name':'Spring','level':1, 'techs':['Java'] }
            ]
          }
        ]
      },
      {
        'category':'AI·Bigdata',
        'heads':[
          // {
          //   'head':'Preprocessing',
          //   'items':[
          //     {'name':'Numpy','level':2, 'techs':[]},
          //     {'name':'Pandas','level':3, 'techs':[]}
          //   ]
          // },
          // {
          //   'head':'Visualization',
          //   'items':[
          //     {'name':'matplotlib','level':2, 'techs':['Python3']},
          //     {'name':'Seaborn','level':2, 'techs':['Python3']}
          //   ]
          // },
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
              {'name':'TensorFlow 1.-','level':1, 'techs':[]}
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
              {'name':'Ubuntu','level':5, 'techs':[]},
              // {'name':'Anaconda','level':3, 'techs':[]},
              {'name':'Shell Script','level':1, 'techs':[]},
              // {'name':'FFmpeg','level':1, 'techs':[]},
              // {'name':'SoX','level':1, 'techs':[]},
              // {'name':'ImageMagick','level':1, 'techs':[]},
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
