import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hey! <br/>
        I Am Shravan
        </SectionTitle>
        <SectionText>
        Welcome to my personal portfolio website.
        </SectionText>
        <Button onClick={()=>window.location="#about"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;