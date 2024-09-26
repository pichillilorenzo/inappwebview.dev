import React from 'react';

export const Badge = ({text, type = 'info'}: {
    text: string,
    type?: 'info' | 'danger' | 'success' | 'warning' | 'primary' | 'secondary'
}) => (
    <span className={"badge badge--" + type} style={{lineHeight: 'initial'}}>{text}</span>
);
