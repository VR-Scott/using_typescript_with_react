import React from 'react'
import { NextPage } from 'next';

interface InitailProps {
    greeting: string;
}

interface Props extends InitailProps {}

const IndexPage: NextPage<InitailProps, Props>= props => {
return <div className="">{props.greeting}</div>
}

IndexPage.getInitialProps = async () => ({
    greeting: 'Hello World!'
});

export default IndexPage; 