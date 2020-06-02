import React, { useState } from 'react';
import { NextPage } from 'next';
import { Interface } from 'readline';

interface InitialProps {}

interface Props extends InitialProps {}

interface State {
    notificationVisible: boolean;
}

const IndexPage: NextPage<Props, InitialProps> = () => {
    const [state, setState] = useState<State>({
        notificationVisible: true
    });

    const handleClick = () => {
        setState({
            notificationVisible: false
        });
    };

    return <div className="">
        {state.notificationVisible && (
            <div
                style={{ 
                    background: 'peachpuff',
                    fontWeight: 'bold',
                    padding: '10px',
                    textAlign: 'center'
                }}
            >
                This website uses cookies.{' '}
                <button onClick={handleClick}>I Agree</button>
            </div>
            )}
    </div>
};

export default IndexPage;