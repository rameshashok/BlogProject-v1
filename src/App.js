import React from 'react';
import AddPost from "./AddPost/AddPost";
import CardList from "./CardList/CardList";

class App extends React.Component {
    state = {
        posts: []
    };

    addNewPost = (postData) => {
        this.setState(prevState => ({
            posts: [...prevState.posts, postData]
        }));
    };

    render() {
        return (
            <div className="App">
                <AddPost onSubmit={this.addNewPost} />
                <CardList posts={this.state.posts} />
            </div>
        );
    }
}

export default App;
