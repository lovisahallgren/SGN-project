import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../H2';
import ArrowRight from '../SVGs/ArrowRight';

const StyledForm = styled.form`
  width: 100%;

  .form-container {
    width: 100%;
    max-height: 50rem;
    min-height: 21rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: ${props => props.background || 'white'};
    color: black;
    padding: 16px 16px 20px 16px;
    margin: 16px 0;
  }

  .form-button-div {
    padding-left: 70%;
    padding-top: 5%;
  }
  .form-button {
    text-decoration: underline;
    font-weight: 800;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
  }
  .form-header {
    padding-bottom: 10%;
    padding-top: 10%;
  }

  .user-input-wrp {
    position: relative;
    width: 100%;
    color: #333333;
    padding-bottom: 10%;
  }
  .user-input-wrp .inputText {
    font-size: 1.5rem;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    box-shadow: none !important;
  }
  .user-input-wrp .inputText:focus {
    border-color: ${props => props.formColor || 'white'};
    border-width: medium medium 1px;
  }
  .user-input-wrp .floating-label {
    position: absolute;
    pointer-events: none;
    top: 18px;
    left: 0%;
    transition: 0.15s ease all;
  }
  .user-input-wrp input:focus ~ .floating-label,
  .user-input-wrp input:not(:focus):valid ~ .floating-label {
    top: 0px;
    left: 0%;
    color: ${props => props.formColor || 'white'};
    // font-size: 13px;
    font-weight: bold;
    opacity: 1;
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event){
    alert(this.name.value);

    event.preventDefault();
  }



  render() {
    return (
      <StyledForm {...this.props} id="form">
        <div className="form-container">
          <H2 color="#000" className="form-header">
            {this.props.title}
          </H2>


          <form onSubmit={this.handleSubmit} >

            <div className="user-input-wrp">
              <br />
              <input type="text" ref={nameInput => this.name = nameInput} className="inputText" required />
              <span className="floating-label">{this.props.name}</span>
            </div>

            <div className="user-input-wrp">
              <br />
              <input type="text" className="inputText" required />
              <span className="floating-label">{this.props.phone}</span>
            </div>

            <div className="user-input-wrp">
              <br />
              <input type="text" className="inputText" required />
              <span className="floating-label">{this.props.email}</span>
            </div>

            <div className="user-input-wrp">
              <br />
              <input type="textarea" className="inputText" required />
              <span className="floating-label">{this.props.subject}</span>
            </div>

            <div className="form-button-div">
              <button className="form-button" type="submit">
                <p>{this.props.submit}</p>
                <ArrowRight width="20%" />
              </button>
            </div>
          </form>
        </div>
      </StyledForm>
    );
  }
}
export default Form;
