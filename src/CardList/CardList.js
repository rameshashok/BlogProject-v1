import React from "react";
import Card from "../Card/Card";
import {Link} from "react-router-dom";

class CardList extends React.Component {
    render() {
        return (
            <>
                <Link to='/addPost'>
                    <button className="btn btn-light addPost">
                        Add Post
                    </button>
                </Link>

                <div className="list-group">
                    {this.props.posts.map(post => <Card {...post} key={post.id} />)}
                </div>
            </>
        );
    }
}

export default CardList;