import React from 'react';
import { Component } from 'react';


class Footer extends Component {
  constructor(props) {
    super(props);
  //   this.state {
  //     online : false
  //   }
  // }
}

render() {
  return(
  <footer>
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        &copy; 2020 Some Guy
      </div>
      <div className="col-12 col-md-6 text-right">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </div>
  </div>
</footer>
  );
}
}

export default Footer;