import React from 'react';
import * as actionTypes from '../store/constants/actions';
import classNames from 'classnames';

import { connect } from 'react-redux';

class TokenCard extends React.Component {
  render() {
    return (
      <div value={this.props.symbol}
           className={classNames({
             "col m2": true,
             "coinInactive": !this.props.currentlySelectedToken || (this.props.currentlySelectedToken.name !== this.props.token.name),
             "coinActive": this.props.currentlySelectedToken && this.props.currentlySelectedToken.name === this.props.token.name
           })}
           onClick={() => this.props.setCurrentlySelectedToken(this.props.token)}
      >
        <img className="logoSpec circle" src={this.props.image}/>
        <p
          className="center-align description">{this.props.name}
          ({this.props.symbol})</p>
        <p className="center-align">
          {this.props.balance}
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentlySelectedToken: state.currentlySelectedToken
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentlySelectedToken: (token) => dispatch({type: actionTypes.UPDATE_CURRENTLY_SELECTED_TOKEN, payload: token})
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TokenCard);
