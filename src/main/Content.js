import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <p>ID {this.props.componentData.id}: {this.props.componentData.component}</p>
            </div>
        );
    }
}

export default Content;