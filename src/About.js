import React from 'react';
import { Grid, Paper } from '@material-ui/core';

function About() {
  return (
    <section id='About'>
      <h2>About</h2>
      <Paper>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p>
              새로움에 대한 호기심으로 도전을 즐기는 저의 성향이 개발자로서 빛을 발할 것입니다.
              <br/>
              개발자는 빠르게 변하는 IT 기술과 발맞추어 낯선 환경에도 망설임 없이 도전하는 자세가 필요하다고 생각합니다. 
              저는 전국 연합 개발 동아리 멋쟁이 사자처럼의 최종 과제로 수행한 프로젝트 'minor-market'에서 빅데이터 활용에 대한 고민으로 서울대 통계연구소에서 주최한 DSC 2018에 참여하였고, 이후 관련 지식을 심화하기 위해 포항공대에서 진행한 청년 AI·Big Data 아카데미 등에 참여하는 등의 노력을 했습니다. 
              이런 과정에서 여러 어려움이 있었지만 새로운 것을 알아가는 즐거움으로 포기하지 않을 수 있었고, 노력의 결실로 AI·Big Data 아카데미 팀 프로젝트에서 우수상을 받기도 했습니다. 
              이러한 노력이 실제 구현물로 이어지며 느꼈던 성취감은 소프트웨어 개발에 대한 학습을 지속할 원동력이 되었고 이러한 자세와 노력이 제가 담당하게 될 서비스의 더 나은 모습을 만드는데 도움이 될것이라 확신합니다.
            </p>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
}
export default About;
