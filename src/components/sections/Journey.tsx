'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Tabs, TabList, Tab, TabPanel } from '@/components/ui/tabs';
import TimelineList from './TimelineList';
import { education, workExperience } from '@/lib/timelineData';

const tabClassName =
  'flex-1 justify-center rounded-none border-b-2 border-transparent px-3 py-4 text-sm transition-colors duration-200 first:ms-0 last:me-0 selected:border-primary focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-4 sm:text-base';

export default function Journey() {
  return (
    <div className="container-wide">
      <header className="section-header stack-sm">
        <Heading level={2} id="journey-heading" className="text-3xl md:text-5xl">
          Min rejse
        </Heading>
      </header>
      <div className="section-content">
        <Card className="rounded-sm pt-0 pb-6">
          <CardContent className="px-0">
            <Tabs defaultSelectedKey="work" className="w-full gap-0">
              <TabList
                aria-labelledby="journey-heading"
                selectionIndicator={false}
                className="w-full gap-0 p-0">
                <Tab id="work" className={tabClassName}>
                  Erhvervserfaring
                </Tab>
                <Tab id="education" className={tabClassName}>
                  Uddannelse
                </Tab>
              </TabList>
              <TabPanel
                id="work"
                className="motion-safe:animate-in motion-safe:fade-in px-6 pt-6 motion-safe:duration-200">
                <TimelineList entries={workExperience} />
              </TabPanel>
              <TabPanel
                id="education"
                className="motion-safe:animate-in motion-safe:fade-in px-6 pt-6 motion-safe:duration-200">
                <TimelineList entries={education} />
              </TabPanel>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
