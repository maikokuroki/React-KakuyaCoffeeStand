import React from "react";

const Article = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">Publish status</label>
            <input type="checkbox" checked={props.isPublished} id="check"/>
        </div>
    )
};

export default Article;