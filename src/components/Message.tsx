import React from 'react';


export const Message: React.FunctionComponent<any> = props => <div className="alert alert-danger" role="alert">
{props.children}
</div>;
