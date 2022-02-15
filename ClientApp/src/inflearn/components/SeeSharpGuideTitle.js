import React from 'react';
import '../css/App.css';

function SeeSharpGuideTitle() {
    const subject = 'React';
    const title = `${subject} 학습 가이드`
    const titleStyles = { color: '#C0FFEE', textDecoration: 'underline' };
    return (
        <header className="seesharp-guide-title">
            <h2 style={titleStyles}>{ title }</h2>
        </header>
    );
}

export default SeeSharpGuideTitle