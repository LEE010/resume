import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillsItem from './SkillsItem';

function SkillsCategory(cate) {
  const skills_list = cate.heads.map(heads => SkillsList(heads));

  return (
    <div key={'category-'+ cate.category}>
      <h3>{cate.category}</h3>
      {skills_list}
    </div>
  );
}
function SkillsList(cate_skills) {
  const items = cate_skills.items.map(item => SkillsItem(item));

  return (
    <div key={cate_skills.head + '-items' }>
      <h4>{cate_skills.head}</h4>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={2}
      >
        {items}
      </Grid>
    </div>
  );
}
export default SkillsCategory;
