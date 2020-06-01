import React, { useState } from 'react';
import { NextPage } from 'next';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Thanks ${email} has been added to list`);
    };

return <form onSubmit={handleSubmit}>
    <p>
        <input type="email" value={email} onChange={handleChange}/>
    </p>
    <button type="submit">Subscribe</button>
</form>
};

export default IndexPage;