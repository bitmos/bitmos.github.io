import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Phone no.</LinkTitle>
      <LinkItem href="tel:+919632790615">9632790615</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:Shravan.sagara@gmail.com">Shravan.sagara@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
