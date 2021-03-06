import React, { useEffect } from 'react';
import Form1 from '../accordian1/Form1.js';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form2 from '../accordian2/Form2.js';
import Form3 from '../accordian3/Form3.js';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        position: 'relative',
        left: '10%',
        marginTop: '1%',
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    heading: {
        fontSize: '1.5rem',
        fontWeight: '600',
    },
    container: {
        backgroundColor: '#bb8bbb',
    },
    innerContainer: {
        backgroundColor: '#f8ecf8'
    },
    innovatorIdeaFormTitle: {
        marginBottom: '10px',
        position: 'relative',
        left: '42%',
    }
}));

function InnovatorForm(props) {

    const ideaId = useSelector((state) => {
        if (state.innovatorForm1.form1) {
            return state.innovatorForm1.form1.idea._id
        }
    }
    );
    // console.log(ideaId, 'innovatorForm screen ideaid');
    const { enqueueSnackbar } = useSnackbar();

    const handleSnackbar = (value, variant) => {
        // console.log('from function', value)
        enqueueSnackbar(value, { variant });
    };

    const { form1, form1Error } = useSelector((state) => state.innovatorForm1);
    const { form2, form2Error } = useSelector((state) => state.innovatorForm2);
    const { form3, form3Error } = useSelector((state) => state.innovatorForm3);

    // console.log('submission', form1, form1Error)

    useEffect(() => {
        if (form3) {
            handleSnackbar('Your idea has been submitted successfully', 'success');
            props.history.push('/')
            return;
        } else if (form3Error) {
            handleSnackbar('Form 3 submission unsuccessful, Please try again', 'error');
            return;
        }
        if (form2) {
            handleSnackbar('Form 2 submission successful, Continue with part 3', 'success');
            return;
        } else if (form3Error) {
            handleSnackbar('Form 2 submission unsuccessful, Please try again', 'error');
            return;
        }
        if (form1) {
            handleSnackbar('Form 1 submission successful, Continue with part 2', 'success');
            return;
        } else if (form1Error) {
            handleSnackbar('Form 1 submission unsuccessful, Please try again', 'error');
            return;
        }
    }, [form1, form2, form3, form1Error, form2Error, form3Error]);

    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <h2 className={classes.innovatorIdeaFormTitle}>Explain your idea</h2>
                <Accordion className={classes.container}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>1. My Idea</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.innerContainer}>
                        {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography> */}
                        <div className="accordianContainer">
                            <Form1 />
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.container}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>2. Upload Attachments</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.innerContainer}>
                        <div className="accordianContainer">
                            <Form2 ideaId={ideaId} />
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.container}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>3. Intellectual Property</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.innerContainer}>
                        <div className="accordianContainer">
                            <Form3 ideaId={ideaId} />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <Footer />
        </div>

    );
}

export default InnovatorForm;
