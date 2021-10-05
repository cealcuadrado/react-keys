import React from "react";
import Content from "../main/Content";

class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                { id: 1, component: 'First' },
                { id: 2, component: 'Second' },
                { id: 3, component: 'Third'}
            ]
        };
    }
    render() {
        return (
            <div>
                {this.state.data.map((dynamicComponent, i) => 
                    <Content key={i} componentData={dynamicComponent}/>)}
            </div>
        );
    }
}

export default Layout;