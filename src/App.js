import React from 'react';
import AddPost from "./AddPost/AddPost";
import CardList from "./CardList/CardList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
                    <Switch>
                        <Route path='/addPost'>
                            <AddPost onSubmit={this.addNewPost} />
                        </Route>
                        <Route path="/" exact>
                            <CardList posts={this.state.posts} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
