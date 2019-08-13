import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';


function ExperienceItem(exp) {
  const name = exp.name;
  const subname = exp.subname;
  const date = exp.date;
  const content = exp.content;
  const rank = exp.rank

  return (
    <TimelineItem
      key={rank}
      dateText={date}
      style={{ color: '#e86971' }}
    >
      <h3>{name}</h3>
      <h4>{subname}</h4>
      <p>
        {content}
      </p>
    </TimelineItem>

  );
}
export default ExperienceItem;
