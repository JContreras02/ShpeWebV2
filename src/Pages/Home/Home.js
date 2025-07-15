import React from 'react';
import HomeWelcome from './HomeWelcome';
import GsunshpeSection from './Gsu';
import ResumeAndMember from './ResumeAndMember'
import SponsorsCard from './SponsorsCard';

export default function Home() {
  return (
    <div>
      <HomeWelcome />
      <GsunshpeSection/>
      <ResumeAndMember/>
      <SponsorsCard/>
      {/* You can add more sections here later */}
    </div>
  );
}
