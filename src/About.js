import React, { Component, Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';

class About extends Component {
    render() {
        return (
          <section>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography variant='h1'>더 나은 결과를 위해 최선을 다합니다.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  SW에 확신을 가지고 본격적으로 공부를 시작한 지 2년이 채 되지 않은 기간 동안,
                  조금 길었던 방황을 만회하기 위해 최선을 다했습니다. 
                  무엇이든 해보자 라는 마음으로 시작한 멋쟁이 사자처럼에서
                  실제 창업을 하겠다는 마음가짐으로 서비스를 기획, 구현하였고,
                  더 나은 서비스를 실현하기 위해 DSC2018에서 빅데이터와 머신러닝 기본을,
                  더 나아가 포스코 AI·Bigdata 아카데미에서 통계학과 딥러닝까지 공부하며 관련 내용을 심화했습니다.
                  이러한 과정을 거치며 현재 상황에서 선택할 수 있는 최적의 방법을 찾기 위해 고민하고 이에 따라
                  다양한 방법론을 고려하기 위해 새로운 방식뿐만 아니라 고전적인 방식까지 숙지하기 위해 노력하고 있습니다.
                  현재는 여러 유형의 빅데이터를 처리하면서 코드의 효율성에 대해 절감하고,
                  조금 더 나은 코드를 작성하기 위해 알고리즘 학습에 전념하고 있습니다.
                </Typography>
              </Grid>
            </Grid>


          </section>

        );
    }
}
export default About;
