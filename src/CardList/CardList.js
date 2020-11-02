import React from "react";
import Card from "../Card/Card";

class CardList extends React.Component {
    render() {
        return (
            <div className="list-group">
                {this.props.posts.map(post => <Card {...post} />)}
            </div>
        );
    }
}

export default CardList;