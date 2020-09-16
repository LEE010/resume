import React from 'react';
import ExperienceItem from './experience/ExperienceItem'
import { Paper } from '@material-ui/core';
import { Timeline }  from 'vertical-timeline-component-for-react';

const EXPS = [
  {
    'rank':0,
    'name':'부스트캠프 - 챌린지',
    'subname':'웹 풀스택',
    'date':'2020/07/27 - 2020/08/21',
    'content':'커넥트 제단에서 진행한 부스트캠프 챌린지 과정에 참여하여 활동하였습니다.',
    'tags':[
      'JS','ES6','CS 기본기'
      // 'BigQuery','DataFlow','DataLab',
    ],
    'urls':[]
  },
  {
    'rank':0,
    'name':'부스트 코딩뉴비 챌린지',
    'subname':'Leader newbie',
    'date':'2020/07/10 - 2020/08/28',
    'content':'Edwith의 [부스트코스] 모두를 위한 컴퓨터 과학(CS50 2019)을 기반으로 하는 온라인 스터디 프로그램에 리더로 참여하여 활동하였습니다.',
    'tags':[
      'C','CS 기본기',
    ],
    'urls':[]
  },
  {
    'rank':0,
    'name':'N Tech Service',
    'subname':'UI개발 인턴',
    'date':'2020/01/06 - 2020/02/29',
    'content':'N Tech Service의 UI개발 인턴에 참여하여 HTML, CSS 등 마크업 관련 교육을 받았습니다.',
    'tags':[
      'HTML','CSS'
      // 'BigQuery','DataFlow','DataLab',
    ],
    'urls':[]
  },
  {
    'rank':0,
    'name':'Google Study Jam',
    'subname':'머신러닝 심화반',
    'date':'2019/06 - 2019/07',
    'content':'구글 클라우드 플랫폼을 활용하여, 데이터 수집, 저장, 전처리, 모델구현, 학습, 배포, 갱신 등 머신러닝 활용 서비스의 전반적인 흐름에 대해 학습하였습니다.',
    'tags':[
      'GCP', 'Machine Learning','TF',
      // 'BigQuery','DataFlow','DataLab',
    ],
    'urls':[]
  },
  {
    'rank':1,
    'name':'Data Science Compatition 2019',
    'subname':'서울대학교 통계연구소',
    'date':'2019/04 - 2019/05',
    'content':'2019년 4월부터 5월까지 1개월간 온라인 강의 수강후, "데이터에서 스토리 탐색하기"를 주제로 주어진 주식 데이터를 이용하여 "주가등락률로 살펴보는 AI 취업 전망" 을 결과물로 제출하였습니다.',
    'tags':[
      'Data Analysis',
      // 'Bigdata','ML','Statistics',
      // 'Scipy','Sklearn','Numpy','Pandas',
      // 'Matplotlib','Seaborn','JupyterNotebook',
      // 'Linux','Anaconda',
    ],
    'urls':[
      {
        'name':'RESULT',
        'url':'#Projects',
      }
    ]
  },
  {
    'rank':2,
    'name':'Posco 청년 AI·Big Data Academy',
    'subname':'포스코 인재창조원, 포항공과대학교 정보통신연구소',
    'date':'2019/01 - 2019/04',
    'content':'2019년 1월부터 3개월간 포항에서 숙식하며 Python3 기반으로 통계, 빅데이터, 머신러닝, 딥러닝을 학습였습니다. 빅데이터와 AI에 대해 각각 팀 프로젝트를 수행하였고, AI프로젝트에서 "우수상"을 수상하였습니다.',
    'tags':[
      'Data Analysis','Machine Learning','Deep Learning',
      // 'AI', 'Bigdata', 'Statistics','Algorithm',
      // 'ML','Python3','Numpy','Pandas',
      // 'Matplotlib','Seaborn','JupyterNotebook',
      // 'Linux','Anaconda','Scipy','Sklearn',
      // 'Deep Learning','TF','NLP','DNN','FNN','CNN',
      // 'ResNet','RNN','LSTM','GAN',
    ],
    'details':[
      {
        'name':'AI 개인과제 - FNN',
        'imgs':'/images/experience/study-jam',
        'comment':'',
      },
      {
        'name':'AI 개인과제 - CNN',
        'imgs':'/images/experience/study-jam',
        'comment':'',
      },
      {
        'name':'AI 개인과제 - ResNet',
        'imgs':'/images/experience/study-jam',
        'comment':'',
      },
      {
        'name':'AI 개인과제 - GAN',
        'imgs':'/images/experience/study-jam',
        'comment':'',
      },
      {
        'name':'BigData 개인 프로젝트 - "공기 좋은곳에 살고싶어요."',
        'imgs':'/images/experience/study-jam',
        'comment':'',
      },
    ],
    'urls':[
      {
        'name':'CODE',
        'url':'https://github.com/LEE010/Posco-Ai-Bigdata',
      }
    ]
  },
  {
    'rank':3,
    'name':'Data Science Compatition 2018',
    'subname':'서울대학교 통계연구소',
    'date':'2018/07 - 2018/08',
    'content':'2018년 7월부터 8월까지 1개월간 온라인 강의 수강 후, UCI의 "Wine Quality Data Set" 을 이용하여 "성분분석으로 보는 와인 품질과 품종의 관계"를 주제로 데이터분석을 했습니다. ',
    'tags':[
      'Data Analysis',
      // 'Bigdata', 'ML','Statistics',
      // 'Python3','Numpy','Pandas','Sklearn',
      // 'Linux','Anaconda','Jupyter'
    ],
    'details':[
      {
        'name':'성분분석으로 보는 와인 품질과 품종의 관계',
        'imgs':'/images/DSC2018/',
        'comment':'',
      }
    ],
    'urls':[
      {
        'name':'CODE',
        'url':'https://github.com/LEE010/dsc2018',
      }
    ]
  },
  {
    'rank':4,
    'name':'멋쟁이 사자처럼',
    'subname':'학교 운영진',
    'date':'2018/01 - 현재',
    'content':'학교 교육운영진으로 활동하며 동아리원의 교육을 전담하였습니다.\
    실제 창업을 목표로 "마이너 콘텐츠 플리마켓, minor-market"을 기획, 설계, 구현하였고,\
    멋쟁이 사자처럼 6기 해커톤에서 알까기 알고리즘을 만들어 대결하는 "알까고"에 참여하여 준우승 하였습니다.',
    'tags':[
      'Ruby on Rails','Django','Bootstrap'
      // 'Web', 'Html',
      // 'CSS','JS','jQuery','AWS','EC2',
      // 'C9','S3','RestAPI','Python3',
    ],
    'details':[
      {
        'name':'활동 사진',
        'imgs':'',
        'comment':'',
      },
      {
        'name':'알까고',
        'imgs':'',
        'comment':'',
      }
    ],
    'urls':[
      {
        'name':'Alggago',
        'url':'https://github.com/LEE010/alggago',
      }
    ]
  },
  // {
  //   'rank':5,
  //   'name':'건설현장 일용직 근무',
  //   'subname':'배관공',
  //   'date':'2016/06 - 2017/08',
  //   'tags':[ '노가다','배관','용접','준기공' ],
  //   'content':'약 1년 6개월간 삼정보일러와 삼성 고덕 반도체 건설현장에서 배관공으로 일용직 근무를 하였습니다.',
  //   'details':[],
  //   'urls':[]
  // },
  {
    'rank':6,
    'name':'평택대학교',
    'subname':'정보통신학',
    'date':'2012/03 - 2019/01',
    'tags':[
      'Computational Thinking','Computer Science', 'Algorithm',
      'OS', 'DB', 'Security','SW Engineering',
      // 'C','C++','Java','linux',
    ],
    'content':'평택대학교에서 정보통신학을 전공하며 관련 과목에서 좋은 성적으로 졸업하였습니다.',
    'details':[
      {
        'name':'g',
        'imgs':'/images/experience/study-jam',
        'comment':'',
      }
    ],
    'urls':[
      {
        'name':'Security Programing',
        'url':'https://github.com/LEE010/InformationProtectionPrograming',
      }
    ]
  },
];

function Experience() {
  const timeline_items = EXPS.map(exp => ExperienceItem(exp));
    return (
      <section id='Experience'>
        <h2>Experience</h2>
          <Paper>
            <Timeline lineColor={'#ddd'}>
              { timeline_items }
            </Timeline>
          </Paper>
      </section>
    );
  }

export default Experience;
