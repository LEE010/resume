import React, { Component, Fragment } from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';

class ExperienceItem extends Component {
    render() {
      const name = this.props.exp.name;
      const subname = this.props.exp.subname;
      const date = this.props.exp.date;
      const content = this.props.exp.content;

        return (
          <Fragment>
            <TimelineItem
              key={this.props.key}
              dateText={date}
              style={{ color: '#e86971' }}
            >
              <h3>{name}</h3>
              <h4>{subname}</h4>
              <p>
                {content}
              </p>
            </TimelineItem>
          </Fragment>

        );
    }
}
export default ExperienceItem;
