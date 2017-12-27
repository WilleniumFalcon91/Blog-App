import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                className='form-control'
                type="text"
                {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderField2(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <textarea
                className='form-control post-content'
                type="text"
                {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="form-body" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title:"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories:"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content:"
                    name="content"
                    autofocus='autofocus'
                    component={this.renderField2}
                />
                {/* <form enctype="multipart/form-data" action="/upload/image" method="post">
                    <input id="image-file" type="file" />
                </form> */}
                
            <button type="submit" className="btn btn-primary submit">
                Submit
            </button>
            <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);