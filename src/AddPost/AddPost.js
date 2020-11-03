import React from "react";
import {Redirect} from "react-router";

class AddPost extends React.Component {
    state = {
        title: '',
        postContent: '',
        toHome: false
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({title: this.state.title, postContent: this.state.postContent});
        this.setState(() => ({toHome: true}));
    };

    render() {
        if (this.state.toHome === true) {
            return <Redirect to="/" />
        }

        return (
            <form className="addPost jumbotron form-group"
                  onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="title"
                       className="form-control blogTitle"
                       value={this.state.title}
                       onChange={event => this.setState({title: event.target.value})}
                       required />
                       <br/>
                <textarea
                    placeholder="Content"
                    className="form-control blogContent"
                    value={this.state.postContent}
                    onChange={event => this.setState({postContent: event.target.value})}
                    required />
                    <br/>
                <button className="btn btn-light addPost">
                    Add Post
                </button>
            </form>
        );
    }
}

export default AddPost;