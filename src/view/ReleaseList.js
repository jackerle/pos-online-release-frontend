import Header from './../components/Header'
import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ggdrive_logo from './../static/img/ggdrive.svg'
import { TableContainer, TableRow, Paper, Table, TableHead, TableCell, TableBody } from '@material-ui/core'
import _version_list from './../utillity/version_list.json'
const version_list = _version_list.reverse()



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    row: {
        fontFamily:"A7Font",
        height: 40
    },
    ggdrive_logo: {
        width: 30,
        padding: 10
    },
    img: {
        marginBottom:30
    },
    table :{
        font: "A7Font",
        background: "rgba(255,255,255,0.5)"
    }

}));

const TableContainerStyled = styled(TableContainer)`
    background:White; 
    @media (min-width: ${1900}px) {
        max-height:80vh
      }
    max-height:80vh
`;

const PaperStyled = styled(Paper)`
  margin-top:1rem;
  width:95%;
  max-height:100%
  background:White;
  margin-left:1rem;
  margin-right:1rem;
  margin-bottom:3rem;
`;

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#f7fdfa',
        }
    }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#D63135',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

// console.log(version_list);

export default function ReleaseList(props) {

    const classes = useStyles()

    return (
        <>
            <Header />

            <div className={classes.root}>
                <PaperStyled elevation={0}>

                    {/* <img src={bg} className={classes.img} /> */}

                    <TableContainerStyled className={classes.container} >
                        <Table stickyHeader aria-label="sticky table" className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.row}>
                                    <StyledTableCell
                                        align={'center'}
                                        padding='none'
                                    >
                                        Version
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={'center'}
                                        padding='none'
                                    >
                                        Release Date
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={'center'}
                                        padding='none'
                                    >
                                        Feature
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={'center'}
                                        padding='none'
                                    >
                                        Dev
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={'center'}
                                        padding='none'
                                    >
                                        QC
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={'center'}
                                        padding='none'
                                    >
                                        UAT
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    version_list.map((ele, index) => {
                                        return <StyledTableRow className={classes.row} key={'i' + index}>
                                            <TableCell
                                                align={'center'}
                                                padding='none'>
                                                {ele.version}
                                            </TableCell>
                                            <TableCell
                                                align={'center'}
                                                padding='none'>
                                                {ele.release_date}
                                            </TableCell>
                                            <TableCell
                                                align={'left'}
                                                padding='none'>
                                                {ele.feature}
                                            </TableCell>
                                            <TableCell
                                                align={'center'}
                                                padding='none'>
                                                {
                                                    ele.dev ?
                                                        <a href={ele.dev} target="_blank" rel="noreferrer">
                                                            <img src={ggdrive_logo} alt="ggdrive" className={classes.ggdrive_logo} />
                                                        </a> : null
                                                }
                                            </TableCell>
                                            <TableCell
                                                align={'center'}
                                                padding='none'>
                                                {
                                                    ele.qc ?
                                                        <a href={ele.qc} target="_blank" rel="noreferrer">
                                                            <img src={ggdrive_logo} alt="ggdrive" className={classes.ggdrive_logo} />
                                                        </a> : null
                                                }
                                            </TableCell>
                                            <TableCell
                                                align={'center'}
                                                padding='none'>
                                                {
                                                    ele.uat ?
                                                        <a href={ele.uat} target="_blank" rel="noreferrer">
                                                            <img src={ggdrive_logo} alt="ggdrive" className={classes.ggdrive_logo} />
                                                        </a> : null
                                                }
                                            </TableCell>
                                        </StyledTableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainerStyled>
                </PaperStyled>
            </div>
        </>
    )

}