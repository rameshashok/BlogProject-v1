import React from "react";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class Card extends React.Component {
    render() {
        return (
            <div className="card list-group-item">
                <div className="Card card-body">
                    <div className="title card-title">{this.props.title}</div>
                    <div className="article card-text">
                        {
                            draftToHtml(
                                convertToRaw(this.props.postContent.getCurrentContent())
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card