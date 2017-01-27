import React from 'react';
import { connect } from 'react-redux';

class Feature extends React.Component {
  render() {
    const {children, features, flag} = this.props;

    if (!features[flag]) {
      return null;
    }

    return React.Children.only(children);
  }
}

Feature.propTypes = {
  features: React.PropTypes.object,
  children: React.PropTypes.object,
  name: React.PropTypes.string
};


function mapStateToProps(state, ownProps) {
  const {features} = state;

  return {
    features
  };
}

export default connect(mapStateToProps)(Feature);
