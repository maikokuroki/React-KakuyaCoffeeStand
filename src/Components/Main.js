import React, {Component} from 'react';
import Article from './Article';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPublished: false
        }
    }
    render(){
        return(
            <div>
                <Article title={"React"}
                         isPublished = {this.state.isPublished}
                            />

            </div>
        );
    }
}

export default Main;