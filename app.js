const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return (
        <section>
            <h1>Counters</h1>
            <section>
                <Counter />
            </section>
        </section>
    );
}

function Counter() {
    return (
        <article>
            <h2>Counter</h2>
            <p>You clicked 1 times</p>
            <button className="button">Click me</button>
        </article>        
    );
}

rootNode.className = "root";