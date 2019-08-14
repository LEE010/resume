import React from 'react';
import SkillsList from './skills/SkillsList';

const SKILLS = [
    { 'head':'coding',
      'items':[{ 'name':'C', 'level':3 },
              { 'name':'C++', 'level':2 },
              { 'name':'Java', 'level':2 },
              { 'name':'JavaScript', 'level':3 },
              { 'name':'Python3', 'level':4 },
              { 'name':'Ruby', 'level':3 },
              { 'name':'HTML', 'level':3 },
              { 'name':'CSS', 'level':2 }] }
    ];

function Skills() {
  const skills = SKILLS.map(skill => SkillsList(skill));

  return (
    <section className='Skills' id='Skills'>
      <h1>Skills</h1>
      {skills}
    </section>
  );
}
export default Skills;
