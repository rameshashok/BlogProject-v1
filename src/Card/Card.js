import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card list-group-item">
                <div className="Card card-body">
                    <div className="title card-title">{this.props.title}</div>
                    <div className="article card-text">{this.props.postContent}</div>
                </div>
            </div>
        );
    }
}

export default Card