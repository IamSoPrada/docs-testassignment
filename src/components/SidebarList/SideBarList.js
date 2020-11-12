import React, {useState, useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import SideBarListItem from "../SideBarListItem"
import FirebaseService from "../../services/building-service"

const firebaseService = new FirebaseService()

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


const SideBarList = () => {
    
    const [buildings, setBuildings] = useState([])
    useEffect(()=> {
        firebaseService.getBuildings()
            .then(data => setBuildings(data))
    }, [])

    const classes = useStyles();
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Здания
          </ListSubheader>
            }
            className={classes.root}
        >
            {
                buildings.map(el => {
                    return (
                        <SideBarListItem classes={classes} building={el} key={el.id}/>
                    )
                })
            }
        </List>
    );
}


export default SideBarList