import React from 'react';
import { DiPython, DiReact } from 'react-icons/di';
import { GiArtificialIntelligence } from "react-icons/gi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Technologies and Skills that I am learning and exploring are...
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js<br/>
            HTML/CSS
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
        <GiArtificialIntelligence size="3rem"/>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Pandas<br/>
            Numpy<br/>
            Scikit-Learn<br/>
            Matplotlib<br/>
            Weka<br/>
            Orange
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Tkinter<br/>
            PyTest & Selenium
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
