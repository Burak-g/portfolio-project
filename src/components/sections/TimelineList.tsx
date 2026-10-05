'use client';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { styled } from '@mui/material/styles';

import type { TimelineEntry } from '@/lib/timelineData';

const ACCENT_BY_TYPE: Record<TimelineEntry['type'], string> = {
  work: '#e8bf4f',
  education: '#91a8cb',
};

const CustomTimelineDot = styled(TimelineDot)<{ $accent: string }>(({ $accent }) => ({
  borderColor: $accent,
  color: $accent,
}));

const CustomTimelineConnector = styled(TimelineConnector)<{ $accent: string }>(({ $accent }) => ({
  backgroundColor: $accent,
  width: 2,
  flexGrow: 1,
}));

type TimelineListProps = {
  entries: TimelineEntry[];
};

export default function TimelineList({ entries }: TimelineListProps) {
  return (
    <Timeline
      position="right"
      sx={{
        p: 0,
        m: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        '& .MuiTimelineItem-root': {
          alignItems: 'stretch',
        },
        '& .MuiTimelineSeparator-root': {
          alignItems: 'center',
        },
      }}>
      {entries.map((entry, index) => {
        const accent = ACCENT_BY_TYPE[entry.type];
        const showConnector = index !== entries.length - 1;

        return (
          <TimelineItem
            key={entry.id}
            sx={{
              '& .MuiTimelineContent-root': {
                pb: showConnector ? 8 : 0,
              },
            }}>
            <TimelineSeparator>
              <CustomTimelineDot variant="outlined" $accent={accent} />
              {showConnector ? <CustomTimelineConnector $accent={accent} /> : null}
            </TimelineSeparator>

            <TimelineContent>
              <h3 className="m-0">{entry.title}</h3>
              <p style={{ color: accent }}>{entry.company}</p>
              <p className="text-gunmetal">{entry.period}</p>
              <p className="mt-2">{entry.description}</p>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

