import React, { Component } from 'react';

class Mailchimp extends Component {
  constructor() {
    super();
    this.state = { email: '' }
  }
  render() {
    const { email } = this.state;
    return (
      <div>
        <div id="mc_embed_signup">
        <form onSubmit={() => this.setState({ email: '' })} action="//cards.us16.list-manage.com/subscribe/post?u=d58afda4875ebb3b07cb96aae&amp;id=9506b42252" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
          	<label>Get notified when we release the game</label>
          	<input type="email" value={email} onChange={(e) => this.setState({ email: e.target.value })} name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{ position: 'absolute', left: '-5000px'}} ariaHidden="true">
              <input type="text" name="b_d58afda4875ebb3b07cb96aae_9506b42252" tabindex="-1" value=''/>
            </div>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
export default Mailchimp;
