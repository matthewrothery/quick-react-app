import React from 'react';
import styles from 'Styles';

class App extends React.Component {
    render() {
        return (
            <div className={styles.main.container}>
                <img src={"/assets/shape.png"} />
                <h2 className={styles.main.heading}>Hello, welcome to Quick React App</h2>
            </div>
        )
    }
}

export default App;