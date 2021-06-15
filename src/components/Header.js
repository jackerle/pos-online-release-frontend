import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import logo from './../static/img/icon.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    nav_bar:{
        height: '3.5em'
    },
    menuName: {
        marginRight: theme.spacing(14),
        fontSize: '1.2em'
    },
    logo: {
        width: 40,
    },
    logo_wrap: {
        backgroundColor: 'white',
        padding : 4,
        marginRight: 5,
        borderRadius:5
    }
}));



export default function Header(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                title={<img src={logo} alt="logo"/>}>
                <Toolbar variant="dense" className={classes.nav_bar}>
                    <div className={classes.logo_wrap}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </div>

                    <Typography color="inherit" className={classes.menuName}>
                        POS Online Version List
                    </Typography>
                    <Typography color="inherit" className={classes.title}>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )

}