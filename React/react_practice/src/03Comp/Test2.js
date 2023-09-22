import React from 'react';
import pubao from './1685519005341_0.jpg';

class Test2 extends React.Component {
    render() {
        const style = {
            color: 'orange',
            fontSize: '40px',
            marginTop: '12px',
        };

        return (
            <div style={style}>
                <h2>안녕하세요</h2>
                <img src={pubao} width={200} />
            </div>
        );
    }
}

export default Test2;
