import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link as RouterLink} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarIcon from "@material-ui/icons/Star";
import PageFrame from "./PageFrame";
import CollectionsIcon from "@material-ui/icons/Collections";

export function HomePage() {
    return (
        <PageFrame title="Glorious Dawn's Home">
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper>
                        <List>
                            <ListItem component="h2" variant="h6" color="inherit" noWrap>
                                Available tools:
                            </ListItem>
                            <Divider/>
                            <ListItem component={RouterLink} to="/gacha">
                                <ListItemIcon>
                                    <StarIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Gacha"/>
                            </ListItem>
                            <ListItem component={RouterLink} to="/collection">
                                <ListItemIcon>
                                    <CollectionsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Collection" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper>
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper>
                    </Paper>
                </Grid>
            </Grid>
        </PageFrame>
    );
}
