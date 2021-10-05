import React from "react";
import Content from "../main/Content";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <p>Hola, mundo!</p>
                <hr/>
                <Content/>
            </div>
        );
    }
}

export default Layout;