"use client";

import { useCallback, useState } from "react";

import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { paths } from "src/routes/paths";

import { _jobs, JOB_DETAILS_TABS, JOB_PUBLISH_OPTIONS } from "src/_mock";

import Label from "src/components/label";
import { useSettingsContext } from "src/components/settings";

import JobDetailsCandidates from "../job-details-candidates";
import JobDetailsContent from "../job-details-content";
import JobDetailsToolbar from "../job-details-toolbar";

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function JobDetailsView({ id }: Props) {
  const settings = useSettingsContext();

  const currentJob = _jobs.filter((job) => job.id === id)[0];

  const [publish, setPublish] = useState(currentJob?.publish);

  const [currentTab, setCurrentTab] = useState("content");

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setCurrentTab(newValue);
    },
    []
  );

  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  const renderTabs = (
    <Tabs
      value={currentTab}
      onChange={handleChangeTab}
      sx={{
        mb: { xs: 3, md: 5 },
      }}
    >
      {JOB_DETAILS_TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.value === "candidates" ? (
              <Label variant="filled">{currentJob?.candidates.length}</Label>
            ) : (
              ""
            )
          }
        />
      ))}
    </Tabs>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <JobDetailsToolbar
        backLink={paths.dashboard.job.root}
        editLink={paths.dashboard.job.edit(`${currentJob?.id}`)}
        liveLink="#"
        publish={publish || ""}
        onChangePublish={handleChangePublish}
        publishOptions={JOB_PUBLISH_OPTIONS}
      />
      {renderTabs}

      {currentTab === "content" && <JobDetailsContent job={currentJob} />}

      {currentTab === "candidates" && (
        <JobDetailsCandidates candidates={currentJob?.candidates} />
      )}
    </Container>
  );
}
