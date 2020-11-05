import React from "react";
import {Redirect} from "react-router";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

class AddPost extends React.Component {
    state = {
        title: '',
        // postContent: '',
        toHome: false,
        postContent: EditorState.createEmpty()
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            // postContent: this.state.postContent
        });
        this.setState(() => ({toHome: true}));
    };

    onEditorStateChange = (postContent) => {
        this.setState({postContent})
    }

    imageUpload = (src) => {
        this.setState(() => (
            {postContent: {data: { link: src}}}
        ))
    };

    render() {
        const { postContent } = this.state;

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
                <Editor
                    placeholder="Content"
                    className="form-control blogContent"
                    // value={this.state.postContent}
                    // onChange={event => this.setState({postContent: event.target.value})}
                    postContent={postContent}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    toolbarClassName="toolbar-class"
                    toolbar={{
                        image: {
                            uploadEnabled: true,
                            uploadCallback: this.imageUpload
                        }
                    }}
                    onEditorStateChange={this.onEditorStateChange}
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