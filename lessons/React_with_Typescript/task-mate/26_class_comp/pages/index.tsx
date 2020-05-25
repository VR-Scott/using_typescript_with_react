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
    initialTasks: Task[];
}

interface TasksListState {
    tasks: Task[];
}

class TasksList extends React.Component<TasksListProps, TasksListState> {
    constructor (props: TasksListProps) {
        super(props);
        this.state = {
            tasks: props.initialTasks
        };
        this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
    }

    // use arrow func to make sure the obj contect is bound to this method.
    // onAddNewTaskClick = () => {
    //     this.
    // };

    // another way to bind obj context
    onAddNewTaskClick() {
        this.setState({
            tasks: [
                ...this.state.tasks,
                {title: 'New Task'}
            ]
        });
    }

    render() {
        const { tasks } = this.state;
        return (
            <ul className="">
                {tasks.map((task, i) => {
                    return <li key={i} className="">{task.title}</li>;
                })}
                <button onClick={this.onAddNewTaskClick} >Add new task</button>
            </ul>
            );
    }
}

const tasks = [
    {title: 'Task 1'},
    {title: 'Task 2'},
    {title: 'Task 3'}
];

export default () => (
    <div className="">
        <TasksList initialTasks={tasks} />
    </div>
);