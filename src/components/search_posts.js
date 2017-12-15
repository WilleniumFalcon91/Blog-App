import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class SearchBar extends Component {
    constructor(props) {
       super(props);
       this.state = {
           searchTerm: '',
       };
    }

    onInputChange(event){
        this.setState({searchTerm : event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        const { actions } = this.props;
        actions.searchPosts(this.state.searchTerm);
    }

    render () {
        return (
            <div className="search-bar">
                <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search for..."
                    onChange={this.onInputChange.bind(this)}
                    value={this.state.searchTerm}
                />
                <span className="input-group-btn">
                    <button 
                        className="btn btn-default" 
                        type="button"
                        onClick={this.onFormSubmit.bind(this)}
                    >
                        Search
                    </button>
                </span>
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
   actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(SearchBar);