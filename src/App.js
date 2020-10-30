import React from 'react';
import AddPost from "./AddPost/AddPost";
import CardList from "./CardList/CardList";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

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
            <Router>
                <div className="App">
                    <button>
                        <Link to='/addPost'>Add Post</Link>
                    </button>

                    <Switch>
                        <Route path='/addPost'>
                            <AddPost onSubmit={this.addNewPost} />
                        </Route>
                    </Switch>
                    <CardList posts={this.state.posts} />
                </div>
            </Router>
        );
    }
}

export default App;
