import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import ScrollspyNav from "react-scrollspy-nav";


function NavBar(props) {

    return (
        <ScrollspyNav
            scrollTargetIds={["section_1", "section_2", "section_3"]}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
        >
          <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                  <Link href={'#section-1'} color="inherit">
                    {'section-1'}
                  </Link>
                </ListItemText>
                <ListItemText inset>
                  <Link href={'#section-2'} color="inherit">
                    {'section-2'}
                  </Link>
                </ListItemText>
                <ListItemText inset>
                  <Link href={'#section-3'} color="inherit">
                    {'section-3'}
                  </Link>
                </ListItemText>
            </ListItem >
          </List>
        </ScrollspyNav>
    )
}


export default NavBar;
