import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <div className="title">{this.props.title}</div>
                <div className="article">{this.props.postContent}</div>
            </div>
        );
    }
}

export default Card