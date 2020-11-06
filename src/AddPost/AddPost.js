import React from "react";
import {Redirect} from "react-router";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {convertFromRaw, EditorState} from 'draft-js';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class AddPost extends React.Component {
    postContent = convertFromRaw(content);

    state = {
        title: '',
        // postContent: '',
        toHome: false,
        postContent: {}
        // postContent: EditorState.createEmpty(),
        // postContent: EditorState.createWithContent(convertFromRaw(initialState))
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            // postContent: convertFromRaw(this.state.postContent)
        });
        this.setState(() => ({toHome: true}));
    };

    onEditorStateChange = (postContent) => {
        this.setState({postContent});
        console.log(postContent)
    }

    imageUpload = (src) => {
        this.setState(() => (
            this.state.postContent.data.link = src
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
                    initialContentState={postContent}
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