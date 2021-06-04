// impoting react stuff
import React from 'react';
import App from 'next/app';

// importing node stuff
import fs from 'fs';
import path from 'path';

// importing layout
import Layout from '../layout/default';

//importing global CSS
import "../styles/custom.scss";

class MyApp extends App {
  constructor(props){
    super(props);
    this.state = {
      language: "es"
    }

    //binding
    this.langChange = this.langChange.bind(this);
  }

  //defining methods
  langChange(){
    return this.setState(state => (
      state.language === "es"
      ? { language: "en"}
      : { language: "es"}
    ))
  }

  //getting initial props
  static async getInitialProps(ctx){
    const basepath = path.join(process.cwd(), 'data');
    const filepath = path.join(basepath, 'layout.json');
    const layoutData = JSON.parse(fs.readFileSync(filepath, 'utf-8'));

    return {
      layoutData
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const state = this.state;
    const layoutData = this.props.layoutData;
        
    return (
      <Layout data={layoutData} lang={state.language} langChange={this.langChange} router={this.props.router.asPath}>
        <Component {...pageProps} lang={state.language}/>
      </Layout>
    )
  }
}

export default MyApp;