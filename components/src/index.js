// note: Webpack does the import work
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


// The Props system is used to pass information from the parent component to
// its nested child components for customizability or configurability.
const App = () => {
    return (
        <div className="ui container comments">
            {/* To nest a component within a component, we can't use
                interpolation. We have to implement the component as a tag */ }
            <ApprovalCard>
                <div>
                    <h4>Are you sure about that?</h4>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                {/* We can pass a component into another component as a prop by
                    nesting the component as a tag, and not as an attribute */}
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM"
                    comment={faker.lorem.paragraph()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 2PM"
                    comment={faker.lorem.paragraph()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="KejriDidTheRiots" timeAgo="Today at 5AM"
                    comment={faker.lorem.paragraph()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
