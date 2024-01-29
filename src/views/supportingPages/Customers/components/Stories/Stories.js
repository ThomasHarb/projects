import React from "react";
import PropTypes from "prop-types";
/*import { useTheme } from '@mui/material/styles';*/
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { LuBrainCircuit } from "react-icons/lu";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { FaChartArea } from "react-icons/fa";

const Stories = () => {
  /*const theme = useTheme();*/

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}
        >
          Projects
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          align={"center"}
        >
          A journey of turning data into actionable intelligence
          <br />
          Explore the fusion of Python development, data science and data
          expertise
        </Box>
      </Box>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4} style={{ display: "flex" }}>
          <Card
            sx={{
              maxWidth: 343,
              borderRadius: "20px",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <Box sx={{ minWidth: 256 }}>
              <Box
                sx={{
                  padding: `4px 24px 0`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar
                  alt={"brand logo"}
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    transform: "translateY(50%)",
                    "& > img": {
                      margin: 0,
                      backgroundColor: "common.white",
                    },
                    [theme.breakpoints.up("sm")]: {
                      width: 60,
                      height: 60,
                    },
                  })}
                >
                  <FaChartArea />
                </Avatar>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 14,
                    color: "grey.500",
                    letterSpacing: "1px",
                  }}
                >
                  7 min read
                </Typography>
              </Box>
              <Box
                component="hr"
                sx={(theme) => ({
                  backgroundColor: "grey.200",
                  marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                  [theme.breakpoints.up("sm")]: {
                    marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                  },
                })}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Data Analysis of all movies in my Cloud
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                Analysis or all movie on Netflix. The dataset has been
                downloaded from Kaggle. The data will be processed in Python
                then integrated in a MySQL database. The data will be then
                display in PowerBI.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
                Languages and softwares used
              </Typography>
              <Typography variant="body2">
                Python - MySQL - PowerBi - Tableau - excel
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ display: "flex" }}>
          <Card
            sx={{
              maxWidth: 343,
              borderRadius: "20px",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <Box sx={{ minWidth: 256 }}>
              <Box
                sx={{
                  padding: `4px 24px 0`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar
                  alt={"brand logo"}
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    transform: "translateY(50%)",
                    "& > img": {
                      margin: 0,
                      backgroundColor: "common.white",
                    },
                    [theme.breakpoints.up("sm")]: {
                      width: 60,
                      height: 60,
                    },
                  })}
                >
                  <LuBrainCircuit />
                </Avatar>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 14,
                    color: "grey.500",
                    letterSpacing: "1px",
                  }}
                >
                  20 min read
                </Typography>
              </Box>
              <Box
                component="hr"
                sx={(theme) => ({
                  backgroundColor: "grey.200",
                  marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                  [theme.breakpoints.up("sm")]: {
                    marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                  },
                })}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Store management system and Data science
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
                textAlign="justify"
              >
                The purpose of this application is to help mangement of food. A
                python script reads the receipt or bar-codes from food element,
                and store them in MySQL Database. Then another Python script
                helps me to find recipe according to all elements store in the
                databases.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
                Languages and softwares used
              </Typography>
              <Typography variant="body2">Python - MySQL</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

Stories.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Stories;
