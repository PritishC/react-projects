import React from 'react';

// This `props` object will have a `children` property, which is an object.
const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {/* `children` is the child component that we passed into
                    the ApprovalCard tag/component. */}
                {props.children}
            </div>
            <div className="extra content">
                <div class="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;
