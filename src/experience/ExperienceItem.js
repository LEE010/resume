import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ExperienceDetail(detail) {
  return(
    <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{detail.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {detail.comment}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

function ExperienceItem(exp) {
  const name = exp.name;
  const subname = exp.subname;
  const date = exp.date;
  const content = exp.content;
  const rank = exp.rank
  const details = exp.details.map( detail => ExperienceDetail(detail))
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
      <div>
        {details}
      </div>
    </TimelineItem>

  );
}
export default ExperienceItem;
