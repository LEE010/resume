import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import TagChips from '../TagChips'
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Button from '@material-ui/core/Button';

// function ExperienceDetail(detail) {
//   return(
//     <ExpansionPanel>
//         <ExpansionPanelSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>{detail.name}</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             {detail.comment}
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//   );
// }

function ExperienceItem(exp) {
  // const details = exp.details.map( detail => ExperienceDetail(detail))
  // const links = exp.urls.map(
  //   link =>
  //   <Button variant="contained" href={link.url}>
  //     github
  //   </Button>);

  return (
    <TimelineItem
      key={exp.rank}
      dateText={exp.date}
      style={{ color: '#e86971' }}
    >
      <h3>{exp.name}</h3>
      <h4>{exp.subname}</h4>
      { TagChips(exp.tags, exp.name) }
      <p>
        {exp.content}
      </p>
      {/*<div>
        {details}
      </div>*/}
      {/*<div>
        {links}
      </div>*/}
    </TimelineItem>

  );
}
export default ExperienceItem;
