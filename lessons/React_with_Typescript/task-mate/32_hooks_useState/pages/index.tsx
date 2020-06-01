import React from 'react';
import { NextPage } from 'next';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
return <div className="">
    <div style={{background: 'peachpuff', fontWeight: 'bold'}}>
        This website uses cookies.<button>I Agree</button>
    </div>
</div>
};

export default IndexPage;