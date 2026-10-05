import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TimelineList from './TimelineList';
import { education, workExperience } from '@/lib/timelineData';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  idPrefix: string;
}

function CustomTabPanel({ children, value, index, idPrefix, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${idPrefix}-panel-${index}`}
      aria-labelledby={`${idPrefix}-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3, fontSize: '1.125rem', lineHeight: 1.7 }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(idPrefix: string, index: number) {
  return {
    id: `${idPrefix}-tab-${index}`,
    'aria-controls': `${idPrefix}-panel-${index}`,
  };
}

export default function Journey() {
  const [value, setValue] = React.useState(0);
  const idPrefix = 'journey';

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const indicatorColor = value === 0 ? '#14b8a6' : '#6366f1';

  // subtle selected background (module bg is #1e1e1e)
  const selectedBg = value === 0 ? 'rgba(20, 184, 166, 0.08)' : 'rgba(99, 102, 241, 0.08)';

  return (
    <div className="container-wide">
      <header className="section-header stack-sm">
        <h2 id="journey-heading">Min rejse</h2>
      </header>

      <div className="section-content">
        <Box
          sx={{
            width: '100%',
            background: '#1e1e1e',
            backgroundBlendMode: 'normal',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
          <Box sx={{ borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-labelledby="journey-heading"
              variant="fullWidth"
              sx={{
                minHeight: 64,
                px: 0,

                '& .MuiTabs-flexContainer': {
                  justifyContent: 'stretch',
                  alignItems: 'stretch',
                },

                '& .MuiTab-root': {
                  flex: 1,
                  fontSize: '1.7rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  minHeight: 64,
                  color: '#e0e0e0',
                  px: 0,
                  transition: 'background-color 200ms ease, color 200ms ease',

                  '&.Mui-selected': {
                    color: indicatorColor,
                    backgroundColor: selectedBg,
                  },

                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  },
                },

                '& .MuiTab-root .MuiTab-wrapper, & .MuiTab-root .MuiTab-iconWrapper': {
                  paddingInline: 32,
                },

                '& .MuiTabs-indicator': {
                  backgroundColor: indicatorColor,
                  height: '3px',
                  left: 0,
                },
              }}>
              <Tab label="Erhvervserfaring" {...a11yProps(idPrefix, 0)} />
              <Tab label="Uddannelse" {...a11yProps(idPrefix, 1)} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0} idPrefix={idPrefix}>
            <TimelineList entries={workExperience} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1} idPrefix={idPrefix}>
            <TimelineList entries={education} />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
