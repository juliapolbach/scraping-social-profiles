import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const Submit = ({createPost}) => {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new window.FormData(form);
        createPost(formData.get('title'), formData.get('text'), formData.get('author'));
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>New post:</h1>
            <input className="input" placeholder="title" name="title" type="text" required />
            <input className="input" placeholder="text" name="text" type="text" required />
            <input className="input" placeholder="authorId" name="author" type="text" required />
            <button className="button" type="submit">
                Create
            </button>
        </form>
    );
};


export default Submit;