const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

console.log(React);

function App() {
    console.log("Called App");
    return React.createElement("button", null, "Click Me");
}

console.log(App()); 