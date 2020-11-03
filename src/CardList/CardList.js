import React from "react";
import Card from "../Card/Card";
import {Link} from "react-router-dom";

class CardList extends React.Component {
    render() {
        return (
            <>
                <button className="btn btn-light addPost">
                    <Link to='/addPost'>Add Post</Link>
                </button>

                <div className="list-group">
                    {this.props.posts.map(post => <Card {...post} />)}
                </div>
            </>
        );
    }
}

export default CardList;