import React from 'react';


const ArticleRecognition = () => {
    return (
        <article className="bg-light-green dib br3 pa3 ma2 grow">
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Service Offering</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">KB Number</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Title</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in" 
            />
          </div>
          <div className="lh-copy mt3">
            <p href="#0" className="f6 link dim black db pointer">Content</p>
          </div>
        </form>
      </main>
      </article>
    ); }

export default ArticleRecognition;
