import React from "react";

class AddPost extends React.Component {
    state = {
        title: '',
        postContent: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({title: this.state.title, postContent: this.state.postContent})
    };

    render() {
        return (
            <form className="addPost jumbotron"
                  onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="title"
                       value={this.state.title}
                       onChange={event => this.setState({title: event.target.value})}
                       required />
                       <br/>
                <textarea
                    placeholder="Content"
                    value={this.state.postContent}
                    onChange={event => this.setState({postContent: event.target.value})}
                    required />
                    <br/>
                <button className="btn btn-light">Add Post</button>
            </form>
        );
    }
}

export default AddPost;