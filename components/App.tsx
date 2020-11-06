import React from 'https://dev.jspm.io/react/index.js';
import {DirectionContext} from '../contexts/DirectionContext.ts';

export interface IAppProps {
    message: string;
};

const App: React.FC<IAppProps> = (props: IAppProps) => {
    const dir = React.useContext(DirectionContext);
    return (
        <div>Hello {props.message}</div>
    );
};

export default App;