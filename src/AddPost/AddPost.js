import React from "react";
import {Redirect} from "react-router";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {convertToRaw, EditorState} from 'draft-js';
import draftToHtml from "draftjs-to-html";

class AddPost extends React.Component {
    state = {
        title: '',
        toHome: false,
        postContent: EditorState.createEmpty(),
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const encodedPostContent =
            btoa(
                draftToHtml(
                    convertToRaw(this.state.postContent.getCurrentContent())
                )
            );
        this.props.onSubmit({
            title: this.state.title,
            postContent: encodedPostContent
        });
        this.setState(() => ({toHome: true}));
    };

    onEditorStateChange = (postContent) => {
        this.setState({postContent});
    }

    uploadImageCallBack = (file) => {
        return new Promise(
            (resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => resolve({ data: { link: e.target.result } });
                reader.onerror = e => reject(e);
                reader.readAsDataURL(file);
            }
        );
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
                    postContent={postContent}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        image: {
                            uploadCallback: this.uploadImageCallBack,
                            alt: {
                                present: true,
                                mandatory: true
                            },
                            previewImage: true
                        }
                    }}
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