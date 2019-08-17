import React from 'react';
import ExperienceItem from './experience/ExperienceItem'
import { Paper } from '@material-ui/core';
import { Timeline }  from 'vertical-timeline-component-for-react';

const EXPS = [
  {
    'rank':0,
    'name':'Google Study Jam',
    'subname':'머신러닝 심화반',
    'date':'2019/06 - 2019/07',
    'content':'가나다라마바사 아자차카타파하',
    'details':[
      {
        'name':'',
        'imgs':'/images/experience/study-jam',
        'comment':'아야여어오요우유으이',
        'details':[
          {
            'name':'a',
            'imgs':'/images/experience/study-jam',
            'comment':'아야여어오요우유으이',
          }
        ]
      }
    ]
  },
  {
    'rank':1,
    'name':'Data Science Compatition 2019',
    'subname':'데이터에서 스토리 탐색하기',
    'date':'2019/04 - 2019/05',
    'content':'가나다라마바사 아자차카타파하',
    'details':[
      {
        'name':'b',
        'imgs':'/images/experience/study-jam',
        'comment':'아야여어오요우유으이',
      }
    ]
  },
  {
    'rank':2,
    'name':'Posco 청년 AI·Big Data Academy',
    'subname':'포스코 인재창조원, 포항공과대학 정보통신연구소',
    'date':'2019/01 - 2019/04',
    'content':'가나다라마바사 아자차카타파하',
    'details':[
      {
        'name':'c',
        'imgs':'/images/experience/study-jam',
        'comment':'아야여어오요우유으이',
      }
    ]
  },
  {
    'rank':3,
    'name':'Data Science Compatition 2018',
    'subname':'머신러닝 심화반',
    'date':'2018/07 - 2018/08',
    'content':'가나다라마바사 아자차카타파하',
    'details':[
      {
        'name':'d',
        'imgs':'/images/experience/study-jam',
        'comment':'아야여어오요우유으이',
      }
    ]
  },
  {
    'rank':4,
    'name':'멋쟁이 사자처럼',
    'subname':'학교 운영진',
    'date':'2018/01 - 현재',
    'content':'가나다라마바사 아자차카타파하',
    'details':[
      {
        'name':'e',
        'imgs':'/images/experience/study-jam',
        'comment':'아야여어오요우유으이',
      }
    ]
  },
  {
    'rank':5,
    'name':'건설현장 일용직 근무',
    'subname':'배관공',
    'date':'2016/06 - 2017/08',
    'content':'가나다라마바사 아자차카타파하',
    'details':[
      {
        'name':'f',
        'imgs':'/images/experience/study-jam',
        'comment':'아야여어오요우유으이',
      }
    ]
  },
  {
    'rank':6,
    'name':'평택대학교',
    'subname':'정보통신학',
    'date':'2012/03 - 2019/01',
    'content':'가나다라마바사 아자차카타파하',
    'details':[
      {
        'name':'g',
        'imgs':'/images/experience/study-jam',
        'comment':'아야여어오요우유으이',
      }
    ]
  },
];
function Experience() {
  const timeline_items = EXPS.map(exp => ExperienceItem(exp));
    return (
      <section id='Experience'>
        <h1>Experience</h1>
          <Timeline lineColor={'#ddd'}>
            { timeline_items }
          </Timeline>
      </section>
    );
  }

export default Experience;
