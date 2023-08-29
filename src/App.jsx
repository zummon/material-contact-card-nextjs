import { useContext, useState } from "react";
import {
  Typography,
  Tab,
  Tabs,
  Paper,
  Switch,
  FormControlLabel,
  Grid,
  Menu,
  MenuItem,
  Box,
  Button,
  Container,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Context } from "./Context";
import languages from "./translates.json";
import MeSvg from "./MeSvg";

const useStyles = makeStyles((theme) => {
  return {
    scope: {
      padding: theme.spacing(3),
    },
    textDefault: {
      textTransform: "none",
      fontSize: "1rem",
    },
    textRight: {
      textAlign: "right",
    },
    myPic: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(3),
      marginLeft: "auto",
      marginRight: "auto",
      height: "120px",
      width: "120px",
    },
    myMap: {
      border: 0,
      borderRadius: "5px",
      display: "block",
      marginBottom: theme.spacing(3),
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "100%",
      height: "300px",
      width: "400px",
    },
  };
});

export default () => {
  const classes = useStyles();
  const { darkmode, handleDarkmode, language, handleLanguage } =
    useContext(Context);
  const { translation } = language;
  const [anchorEl, setAnchorEl] = useState(null);
  const [tab, setTab] = useState(1);

  return (
    <Container maxWidth="sm">
      <Typography align="center">{translation["translate-by"]}</Typography>

      {/* Header */}
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box p={2}>
            <Typography variant="h4">{translation["headline"]}</Typography>
            <Button variant="text" className={classes.textDefault} href="https://zummon.page/" target="_blank">
              {translation["sub-headline"]}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} className={classes.textRight}>
            {/* dark mode part */}
            <FormControlLabel
              labelPlacement="start"
              display="block"
              control={
                <Switch
                  color="secondary"
                  checked={darkmode}
                  onChange={(event) => handleDarkmode(event.target.checked)}
                />
              }
              label={translation["toggle-dark-mode"]}
            />

            {/* language part */}
            <FormControlLabel
              display="block"
              labelPlacement="start"
              control={
                <Button
                  variant="text"
                  color="secondary"
                  className={classes.textDefault}
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  {language.name}
                </Button>
              }
              label={translation["change-language"]}
            />
            <Menu
              keepMounted
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              open={Boolean(anchorEl)}
            >
              {languages.map((item) => (
                <MenuItem
                  key={`language-${item.locale}`}
                  onClick={() => {
                    handleLanguage(item.locale);
                    setAnchorEl(null);
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Grid>
      </Grid>

      {/* Tabs */}
      <Paper elevation={3} my={3}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          onChange={(event, newValue) => setTab(newValue)}
          value={tab}
        >
          <Tab label={translation["about"]} />
          <Tab label={translation["goal"]} />
          <Tab label={translation["contact"]} />
        </Tabs>
      </Paper>

      {/* Body */}
      <Paper variant="outlined" className={classes.scope}>
        <div hidden={tab !== 0}>
          <div className={classes.myPic}>
            <MeSvg />
          </div>
          <Typography paragraph>{translation["about-detail"]}</Typography>
        </div>
        <div hidden={tab !== 1}>
          <Typography paragraph>{translation["goal-detail"]}</Typography>
        </div>
        <div hidden={tab !== 2}>
          {/* https://www.google.com/maps */}
          <iframe
            className={classes.myMap}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12605.205205101372!2d-82.85086127234254!3d37.82983162410789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1616864581381!5m2!1sen!2sth"
            loading="lazy"
          />
          <Typography>{translation["contact-detail"]}</Typography>
        </div>
      </Paper>
    </Container>
  );
};
