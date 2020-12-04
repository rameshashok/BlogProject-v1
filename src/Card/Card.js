import React from "react";
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';

class Card extends React.Component {
    constructor(props) {
        super(props);
        const decodedPostContent = atob(this.props.postContent);
        const contentBlock = htmlToDraft(decodedPostContent);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            this.state = {
                editorState,
            };
        }
    }

    render() {
        const { editorState } = this.state;
        return (
            <div className="card list-group-item">
                <div className="Card card-body">
                    <div className="title card-title">{this.props.title}</div>
                    <div className="article card-text">
                        <Editor
                            toolbarClassName="content-display-toolbar"
                            defaultEditorState={editorState}
                            contentEditable={false}
                            readOnly
                            toolbarOnFocus
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card