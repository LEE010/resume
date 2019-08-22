import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectList from './projects/ProjectList';
import './scss/Projects.scss'

const projects = [
  {
    'name':'Deep-Studio',
    'subname':'포스코 청년 AI·Big data Academy',
    'img_dir': '/images/sample.png',
    'page': 31,
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
    'img_dir': '/images/sample.png',
    'page': 13,
    'comment':[
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  {
    'name':'DSC2019',
    'subname':'주가 등락률로 살펴보는 AI 취업 전망',
    'img_dir': '/images/sample.png',
    'page': 3,
    'comment':[
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  {
    'name':'minor-market',
    'subname':'멋쟁이 사자처럼',
    'img_dir': '/images/sample.png',
    'page': 10,
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
