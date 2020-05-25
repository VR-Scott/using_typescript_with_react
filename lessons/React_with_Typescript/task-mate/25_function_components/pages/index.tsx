import React from 'react'
import { NextPage } from 'next';
import { url } from 'inspector';

// interface InitailProps {
//     greeting: string;
// }

// interface Props extends InitailProps {}

// const IndexPage: NextPage<InitailProps, Props>= props => {
// return <div className="">{props.greeting}</div>
// }

// IndexPage.getInitialProps = async () => ({
//     greeting: 'Hello World!'
// });

// export default IndexPage; 

interface Task {
    title: string;
}

interface TasksListProps {
    tasks: Task[];
}

const TasksList: React.FunctionComponent<TasksListProps> = ({ tasks }) => {
    return (
    <ul className="">
        {tasks.map((task, i) => {
            return <li key={i} className="">{task.title}</li>;
        })}
    </ul>
    );
};

const tasks = [
    {title: 'Task 1'},
    {title: 'Task 2'},
    {title: 'Task 3'}
];

export default () => <div className=""><TasksList tasks={tasks} /></div>;