
import React, {Component} from 'react';
import axios from 'axios';
import Smartcar from '@smartcar/auth';

import Connect from './components/Connect';
import Vehicle from './components/Vehicle';

class Smartcar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: {},
    };

    this.authorize = this.authorize.bind(this);

    this.onComplete = this.onComplete.bind(this);

    this.smartcar = new Smartcar({
      clientId: '67c32077-412b-4f36-941a-6c76f9752b6a',
      redirectUri: 'https://javascript-sdk.smartcar.com/v2/redirect?app_origin=http://localhost:3000',
      scope: ['read_vehicle_info'],
      testMode: true,
      onComplete: this.onComplete,
    });
  }

  onComplete(err, code, state) {
    return axios
      .get(`${'http://localhost:8000'}/exchange?code=${code}`)
      .then(_ => {
        return axios.get(`http://localhost:8000'}/vehicle`);
      })
      .then(res => {
        this.setState({vehicle: res.data});
      });
  }

  authorize() {
    this.smartcar.openDialog({forcePrompt: true});
  }

  render() {
    return Object.keys(this.state.vehicle).length !== 0 ? (
      <Vehicle info={this.state.vehicle} />
    ) : (
      <Connect onClick={this.authorize} />
    );
  }
}

export default Smartcar;