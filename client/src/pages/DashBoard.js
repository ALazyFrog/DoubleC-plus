import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { Box, Grid, Container, Typography, Card, CardHeader } from "@mui/material";
import * as React from 'react';

// import { Button } from 'rsuite';
import {
  CommitNumber,
  IssueNumber,
  StarNumber,
  ForkNumber,
  TimeLine,
  Language,
  Contribute,
  CommitFrequency,
  IssueFrequency,
  ContributorList,
  Company,
  Tab,
  Discussion
} from "../components/DashBoard";



export default function DashboardApp() {
  useEffect(() => {
    getDashBoard(id);
  }, []);
  const { id } = useParams();
  const { isLoading, detail, getDashBoard } = useAppContext();
  const {
    forks,
    stars,
    open_issues,
    timeline,
    language,
    commit_frequency,
    issue_frequency,
    contributors
  } = detail;

  if (isLoading) {
    return <Loading center />;
  } else {
    const contribute = {
      labels: ['ezyang', 'malfet', 'zou3519', 'gchanan', 'jerryzh168', 'apaszke', 'soumith', 'suo', 'pytorchmergebot', 'zdevito'],
      commits: ['2068', '1253', '1233', '1082', '1051', '870', '738', '738', '684', '653']
    };
    const company = [{}]
    //TODO: 修改contribution
    let new_contributors = [
      { avatar_url: "https://avatars.githubusercontent.com/u/13564?v=4", name: "ezyang", commits: '2068', company: null, created_at: "2008-06-13T04:11:18Z", followers: 1789, public_gists: 66, public_repos: 184 },
      { avatar_url: "https://avatars.githubusercontent.com/u/2453524?v=4", name: "malfet", commits: '1253', company: null, created_at: "2012-09-29T17:47:22Z", followers: 82, public_gists: 31, public_repos: 38 },
      { avatar_url: "https://avatars.githubusercontent.com/u/5652049?v=4", name: "zou3519", commits: '1233', company: null, created_at: "2013-10-10T01:51:13Z", followers: 182, public_gists: 21, public_repos: 47 },
      { avatar_url: "https://avatars.githubusercontent.com/u/3768583?v=4", name: "gchanan", commits: '1082', company: null, created_at: "2013-03-04T20:09:56Z", followers: 256, public_gists: 40, public_repos: 22 },
      { avatar_url: "https://avatars.githubusercontent.com/u/4958441?v=4", name: "jerryzh168", commits: '1051', company: "@facebook", created_at: "2013-07-07T12:45:31Z", followers: 97, public_gists: 6, public_repos: 22 },
      { avatar_url: "https://avatars.githubusercontent.com/u/4583066?v=4", name: "apaszke", commits: '870', company: "@google", created_at: "2013-05-31T20:51:12Z", followers: 3159, public_gists: 19, public_repos: 71 },
      { avatar_url: "https://avatars.githubusercontent.com/u/1310570?v=4", name: "soumith", commits: '738', company: "Facebook AI Research", created_at: "2012-01-06T23:20:12Z", followers: 11215, public_gists: 77, public_repos: 166 },
      { avatar_url: "https://avatars.githubusercontent.com/u/1617424?v=4", name: "suo", commits: '738', company: null, created_at: "2012-04-06T02:37:12Z", followers: 160, public_gists: 56, public_repos: 32 },
      { avatar_url: "https://avatars.githubusercontent.com/u/97764156?v=4", name: "pytorchmergebot", commits: '684', company: null, created_at: "2022-01-14T21:13:05Z", followers: 4, public_gists: 0, public_repos: 1 },
      { avatar_url: "https://avatars.githubusercontent.com/u/370202?v=4", name: "zdevito", commits: '653', company: null, created_at: "2010-08-19T22:33:16Z", followers: 348, public_gists: 5, public_repos: 32 }
    ];
    return (
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Report</Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CommitNumber />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <IssueNumber total={open_issues} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StarNumber total={stars} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ForkNumber total={forks} />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TimeLine {...timeline} />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Language {...language} />
            </Grid>
            <Grid item xs={24} sm={12} md={12}>
              <CommitFrequency {...commit_frequency} />
            </Grid>
            <Grid item xs={24} sm={12} md={12}>
              <IssueFrequency {...issue_frequency} />
            </Grid>
            <Grid item xs={24} sm={12} md={12}>
              <Discussion {...issue_frequency} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Contribute {...contribute} />
            </Grid>

            {new_contributors && (
              <Grid item xs={12} sm={6} md={12}>
                <ContributorList {...new_contributors} />
              </Grid>
            )}

            <Grid item xs={12} sm={6} md={12}>
              <Company {...company} />
            </Grid>

            <Grid item xs={12} sm={6} md={12}>
              <Card>
                <CardHeader title="Comparation vs Tensorflow" />
                <Tab />
              </Card>
            </Grid>

          </Grid >
        </Box >
      </Container >
    );
  }
}
