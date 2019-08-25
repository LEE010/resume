import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectList from './projects/ProjectList';
import './scss/Projects.scss'

const projects = [
  {
    'name':'Deep-Studio',
    'subname':'포스코 청년 AI·Big data Academy',
    'live': 'https://deep-studio.herokuapp.com',
    'code': 'https://github.com/LEE010/DeepStudioCatalog',
    'page': 31,
    'intro':'얼굴 합성과, 음성 합성 Deep Learning을 활용하여 영상 속 등장 인물을 다른 인물로 교체 하여 새로운 영상물을 만드는 프로젝트',
    'category':['Deep Learning','Text To Speech',],
    'editor':['Atom','Jupyter Notebook'],
    'techs':[
      'Shell Script','Ubuntu: 16.04',
      'Python: 3.6.8','Tensor Flow: 1.3.0',
      'FFmpeg-python: 1.4', 'SoX: 14.4.2',
      'beautifulsoup: 4.6.0',
      '...',
    ],
    'roles':[
      '영상, 음성, 문자 데이터 전처리','Tacotron-2 하이퍼 파라미터 튜닝 및 학습','Django 웹 구현'
    ],
    'comment':[
      '포스코 청년 AI·Big data Academy의 AI 과정 최종 팀 프로젝트로 \
      Face Swap과 Text To Speech를 이용해 영상과 음성을 합성하여 원하는 인물로 바꾸는 프로젝트를 수행했습니다.'
      ,
      '영상과 음성을 나누어 결과물을 마지막에 결합하는 방식으로 진행되었고,\
      음성팀에 속해 데이터 수집과 전처리를 주 역할로 DeepMind에서 만든 오픈소스 Tacotron-2를\
      이용하여 모델 학습과 음성 합성을 수행하였습니다. 그리고 마지막으로 만들어진 결과물을 보여줄 카탈로그 웹을 Django로 구현하였습니다.'
      ,
      'Tacotron-2는 Tacotron를 이용해 만든 1차 결과물 만들고 WaveNet을\
      이용하여 사람 목소리처럼 자연스럽게 만들어 주는 과정으로 구성되어 있는데,\
      Tacotron에서 Character Embedding을 이용해 학습이 이루어져 여러 번의 전처리 과정이 필요합니다.'
      ,
      '이에 따라 Beautiful soup를 이용해 웹 크롤링하여 JTBC 뉴스룸 손석희 앵커의 "앵커브리핑" 영상과\
      POSTECH의 MOOC에서 프로젝트 지도교수님인 윤은영 교수님의 강의 영상 등을 수집했습니다.\
      또한 수집한 영상을 Ffmpeg를 이용해 음성 파일을 분리하고 공백을 제거하여 목소리가 포함된 부분만 추출하였습니다.\
      그리고 추출된 음성을 Clova Speech Recognition API를 이용하여 텍스트를 음성과 매칭 하고,\
       이 텍스트의 숫자나 영어로 표현된 문자들을 한국어 발음으로 바꿔주는 코드를 작성했습니다.'
      ,
      '마지막으로 Django 웹에 만들어진 결과물 카탈로그를 만들었습니다.\
      하지만 카탈로그만으로 시선을 끌기에 2% 부족하다는 생각을 하게 되었고,\
      웹 상에서 음성 합성을 체험하면 좋을것 같다는 결론을 내렸습니다.\
      이에 따라 웹 서버에서 오픈소스를 작동 시키는 방법을 찾게 되었고,\
      서버에서 python os 패키지의 system을 이용해 오픈소스를 작동시켜 입력받은 텍스트를\
      Tacotron을 이용해 음성을 생성하게 구현 하였습니다.'
      ,
      'Tacotron-2 학습 과정에서 Out of memory 에러가 지속적으로 발생하여\
      확인 해 본 결과 음성파일이 약 15초 이상의 길이일 경우 발생한다는 사실을 파악했습니다.\
      이에 팀원과 논의하고 고민한 결과 음원 파일이 44.1khz sampling rate로 높은 품질을 가지고 있는 것을 확인하고,\
      sox를 이용하여 22khz로 down sampling 하여 문제를 해결할 수 있었습니다.\
      이로 인해 오류를 해결함은 물론 학습 속도 10% 이상 향상의 효과도 얻을 수 있었습니다.'
    ]
  },
  {
    'name':'Pommelier',
    'subname':'포스코 청년 AI·Big data Academy',
    'live': 'https://pommelier.herokuapp.com',
    'code':'https://github.com/LEE010/bigdata-project-wine',
    'page': 13,
    'intro':'주어진 경영 위기 상황 비지니스 케이스를 데이터 분석으로 해결하는 프로젝트',
    'category':['Data Analysis','WEB'],
    'editor':['Atom', 'Jupyter Notebook'],
    'techs':[
      'Ubuntu: 16.04','Python: 3.6.8',
      'Pandas: 0.23.4', 'Scipy: 1.2.1',
      'Sklearn: 0.20.3', 'Django: 2.1.7',
      '...',
    ],
    'roles':[
      '도메인 분석', '와인 성분 데이터 이상치 처리',
      'kaggle의 instacart 장바구니 분석',
      '추천 알고리즘 구현', 'Django 웹 페이지 구현'
    ],
    'comment':[
      '포스코 청년 AI·Big data Academy의 Big data과정 최종 팀 프로젝트로 경영 위기 상황을 가정하고 새로운 사업을 제안하는 비즈니스 케이스를 주제로 빅 데이터 분석을 수행하였습니다.'
      ,
      '-가정된 상황 : \n 수입 주류 판매 회사에서 주 종목인 맥주의 수익이 크게 감소하였고, 따라서 새로운 시장인 와인 시장개척을 통해 위기를 극복해야 함.'
      ,
      '- 주어진 데이터: \n \
      1. 와인 성분 데이터:\n 11가지 화학성분과 와인 평가 점수(0~9)\n\n \
      2. 와인 블라인드 테스트 평가 결과: \n \
      블라인드 테스트 참여자의 개인 신상 정보,\
      선호 와인(5종), 치즈를 곁들였을 때 선호 와인\n\n\
      3. 블라인드 테스트에서 사용된 와인의 성향:\n\
      당도, 알코올 농도 등 5개(상, 중, 하)\n '
      ,
      '- 해결 과제:\n \
      1. 와인 생산자가 와인의 등급을 임의로 올려 수입 원가가 15% 상승함\n\
      2. 고객군별, 곁들이는 음식 별로 선호하는 와인이 다르므로 맞춤 추천 시스템 필요함\n '
      ,
      '-새로 추가한 데이터:\n \
      1. Wine Spectator:\n \
      와인 추천 시스템을 구현하는데 와인의 유형만 표시된 데이터만 제공되었기 때문에 실제 와인 데이터를 Beautiful Soup를 이용하여 수집하고 키워드 분석을 통해 특정 품종의 와인을 블라인드 테스트의 와인 성향으로 유추하였습니다. \n\n \
      2. kaggle의 instacart data:\n \
      안주 추천 시스템을 구현하는데 기존 데이터에서 사용할 수 있는 정보가 많이 없어 안주 추천 시스템을 구현하는데 어려움이 있었고 이에 따라 조사를 통해 해당 데이터를 찾아 이용하였습니다.\n \n '
      ,

      '와인 성분 데이터에서 와인 등급을 기준으로 box plot과 scatter plot을 통해 등급 별 이상치를 확인하였습니다. 표본의 개수가 많은 등급은 다른 연관된 성분들과 확인하고 이상치라고 판단되었을 때 제거하였고, 표본의 개수가 적은 등급은 연관 성분과의 관계를 비교하여 평균값, 3 분위 값 등으로 바꾸는 작업을 진행했습니다.\
      ',
      'instacart의 데이터를 통해 와인과의 연관 규칙을 통해 같이 많이 구매한 상품들을 찾을 수 있었습니다. 또한 와인 추천 알고리즘 구현을 위해 instacart의 와인 이름을 Wine Spectator의 결과로 라벨링 하였습니다.\ '
      ,
      '추천 알고리즘은 카이제곱 검정으로 영향이 있다고 판단된 나이, 성별, 직업을 통해 선호 와인 유형을 찾은 결과를 Django 웹에 DB로 저장된 라벨링 된 와인을 임의로 가져와 보여주는 방식으로 구현하였고, 안주 추천 알고리즘은 장바구니 분석을 통해 찾은 재료들로 만들 수 있는 요리를 와인 유형을 키로 값을 음식들의 배열로 딕셔너리를 선언하여 임의로 불러오는 방식으로 구현했습니다.\ '
      ,
      '와인 등급 평가 모델은 가장 성능이 좋았던 SVM 모델을 pickle 모듈을 이용하여 웹에서 직접 확인할 수 있게 구현하였습니다.'
    ]
  },
  {
    'name':'DSC2019',
    'subname':'주가 등락률로 살펴보는 AI 취업 전망',
    'live': '#Projects',
    'code': 'https://github.com/LEE010/DSC2019',
    'page': 3,
    'intro':'"데이터로 스토리 탐색하기"를 주제로 주어진 경제 지표 데이터 중 주가 등락률 데이터를 이용하여 "주가 등락를로 살펴보는 AI 취업전망" 데이터 분석을 진행하였습니다.',
    'category':['Data Analysis',],
    'editor':['Jupyter Notebook'],
    'techs':[
      'Ubuntu: 18.04','Python: 3.7.1',
      'Pandas: 0.24.2', 'Scipy: 1.2.1',
      'Sklearn: 0.20.3', 'Seaborn: 0.9.0',
      '...',
    ],
    'roles':[
      '데이터 분석 전 과정',
    ],
    'comment':[
      '경제 지표 데이터로 어떤 스토리를 만들 수 있을까? 라는 고민 끝에 \n "주가의 상승률은 투자자들의 해당 회사에 대한 성장 혹은 수익 증가에 따른 주가 상승에 대한 기대이고, 결국 이러한 기대와 대세를 따르기 위해 기업에서도 AI 활용을 고려할 것이다." 라는 가설을 세웠고, 이를 통해 NAVER의 AI 이슈에 따른 등락률의 변화에 따른 투자자들의 반응으로 "주가 등락률로 살펴보는 AI 취업 전망"을 주제로 데이터 분석을 진행했습니다. ',
      '처음 알파고와 이세돌 기사의 대국을 기점으로 12개월간의 주요 AI 이슈를 11개 수집하였습니다. \
      그리고 해당 기간 동안의 주어진 주가 데이터를 확인해 본 결과 데이터가 3일에 한 번씩 수집되어 있었고, 휴장으로 인해 결측 값이 많았던 관계로, Pandas의 read_html을 이용하여 새로 데이터를 수집하였습니다. \n그리고 전일 종가를 이용하여 변화량과 변화율을 계산하여 새로운 feature를 만들어주는 작업을 진행했습니다. ',
      '분석을 하며 T-검정을 통해 값의 변화가 유의미한지 살펴보았습니다.\n 하지만 T-검정으로 11개 중의 3개의 항목에만 유의미한 상승이 있었습니다. \n이에 따라 유의미하지 않았던 항목을 확인해본 결과 전반적으로 하락하는 추세인 것을 확인했습니다. 따라서 해당 기간에 대한 시계열 분석을 시행하였고 총 2개의 항목에 대하여 유의 수준 90% 예측보다 더 높은 상승을 한 것을 확인하였습니다. \n이를 통해 "AI 이슈들이 주가 방어에 어느 정도 기여했을 것이다." 라는 결론을 내렸고, "더 많은 긍정적 성과가 나타난다면 많은 기업에서도 AI기술 도입을 고려할 것이다."라는 결론으로 데이터 분석을 마무리 하였습니다.'
    ]
  },
  {
    'name':'minor-market',
    'subname':'멋쟁이 사자처럼',
    'live': 'https://one-two-test.herokuapp.com',
    'code': 'https://github.com/LEE010/one-two-rails',
    'page': 10,
    'intro': '"마이너 콘텐츠들의 플리마켓"을 목표로 실제 창업을 염두하고 진행한 SNS형 오픈 마켓입니다.',
    'category':['WEB'],
    'editor':['AWS C9','Atom'],
    'techs':[
      'Amazon Linux','Ubuntu: 18.04',
      'Ruby: 2.4.1','Ruby on Rails: 5.0.7',
      'Bootstrap: 4.1.3','jQuery: 3.x','...',
    ],
    'roles':[
      '웹 서비스 개발 전 과정'
    ],
    'comment':[
      '멋쟁이 사자처럼의 아이디어톤을 시작으로 SNS 기반 쇼핑 플랫폼 minor-market을 기획하였습니다.\
      나아가 빅데이터 수집과 활용에 대한 포석으로 결제 시스템까지 결합하여 졸업 작품까지 진행하였습니다.'
      ,
      '처음 SNS 기반 쇼핑 플랫폼을 기획하게 된 계기는 인디 밴드, 작은 공방의 생산품 등과 같은 마이너 콘텐츠들이\
      광고, 홍보에 대한 어려움으로 빛을 보지 못해 문을 닫게 되는 상황을 보고 이런 문제를 어떻게 해결하면 좋을까?\
      라는 고민을 통해 만들게 되었습니다.'
      ,
      '인스타그램, 블로그를 이용한 바이럴 마케팅으로 제품을 홍보하여 수익을 창출하는 인스타 마켓, 블로그 마켓에서\
      아이디어를 얻었고 이러한 마이너 콘텐츠들을 마치 플리마켓처럼 SNS 형태로 제공하면 \
      충분히 경쟁력 있는 서비스를 만들 수 있겠다고 생각되어 시작했습니다.'
      ,
      'Data Science Competition 2018에 참여하며 빅데이터에\
      대해 알게 되고 단순 정보만 제공하려 했던 기존 minor-market에서 어떻게 활용될 수 있을까 고민했습니다.'
      ,
      'minor-market은 기본적으로 SNS의 구조로 되어 있기 때문에 좋아요, 댓글, 팔로우, 해시태그 등으로\
      많은 데이터를 수집할 수 있지만 좋은 품질의 데이터를 수집하는 데 한계가 있다고 생각되었고\
      그 고민에 대한 결과가 결제 시스템 도입이었습니다.'
      ,
      '기존 minor-market에 쇼핑몰을 결합하는 형태로 수정 하여\
       장바구니, 구매내역, 재고관리등을 추가적으로 구현하였고,\
      카카오페이 API를 이용하여 테스트 결제까지 구현하였습니다.'

    ]
  },
];

function Projects() {
  const project_list = projects.map(
    project => (<ProjectList key={'project-'+project.name} project={project}/>)
  );
  return (
    <section id='Projects' className='Projects'>
      <h1>Projects</h1>
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
