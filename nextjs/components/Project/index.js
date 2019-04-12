import React, {Component} from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import NavIndicator from '../NavIndicator';
import H1 from '../H1'
import H2 from '../H2'
import P from '../P'
import Card from '../Card'
import QuoteSmall from '../QuoteSmall'
import SmallP from '../SmallP'
import Line from '../Line'
import LetterBig from '../LetterBig'
import Link from 'next/link';
import PropTypes from 'prop-types';
import ReadMoreCard from '../ReadMoreCard';
import ReadMoreButton from '../ReadMoreButton';
import ArrowUp from '../SVGs/ArrowUp';
import nookies from 'nookies';
class Project extends Component {
  constructor(props) {
      super(props);
      this.state = {
      isHighContrastMode: null,
      }

  }

  componentDidMount() {
    this.setState({
      isHighContrastMode: nookies.get(this.state.ctx).contrast === "true" ? "true" : "false"
    })
  }

  render() {
  const isHighContrastMode = this.state.isHighContrastMode === "true"

  return(
      <Layout isHighContrastMode={isHighContrastMode} handleContrastMode={this.handleContrastMode}>
          <NavIndicator style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
              <LetterBig>P</LetterBig>
              <div>
                  <SmallP style={{textTransform: "capitalize"}}>
                  <Link href={"/"}>
                      <a href="">Home</a>
                  </Link> > {this.props.projects[0].type}</SmallP>
                  <H1 style={{textTransform: "capitalize"}}>{this.props.projects[0].type}</H1>
              </div>
          </NavIndicator>
          {
              this.props.projects.map(item => {
                  return (
                    <div key={item.id}>
                      <Card style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
                      <SmallP>{item.project_name}</SmallP>
                      <Line />
                      <img src={item.logo} alt={item.name}/>
                      <H2>{item.title}</H2>
                      <P>{item.excerpt}</P>
                      <Line />
                      </Card>
                      {item.image !== null ||
                        item.image_description !== null ||
                        item.content !== null ||
                        item.quote !== null ||
                        item.quote_name !== null ?
                        <ReadMoreButton>
                          <ReadMoreCard style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--secondary-purple)"}}>
                            <img src={item.image || undefined} alt={item.name}/>
                            <div style={{display: "flex"}}>
                              <ArrowUp />
                              <P style={{marginTop: "-1rem", fontWeight:"bold", width: "90%"}}>{item.image_description}</P>
                            </div>
                            {item.quote !== "" ?
                              <div>
                                <Line />
                                <QuoteSmall style={{marginTop: "1rem"}}>"{item.quote}"</QuoteSmall>
                              </div> : null}
                            <SmallP fontStyle="italic" textAlign="right" margin="1rem 0">{item.quote_name}</SmallP>
                            <Line />
                            <P>{item.content}</P>
                          </ReadMoreCard>
                        </ReadMoreButton>
                      : null}
                    </div>
                  )
              })
          }
      </Layout>
    )
  }
}

export default Project;
