var rootEl = document.getElementById('root');
var root = ReactDOM.createRoot(rootEl);

var Heading = function Heading(props) {
    return React.createElement(
        "h1",
        null,
        "H1 heading with props input = ",
        props.title
    );
};

var headerEl = React.createElement(
    "header",
    { className: "headerclass" },
    React.createElement(Heading, { title: "heading 1-1" }),
    React.createElement(Heading, { title: "heading 1-2" }),
    React.createElement(
        "h2",
        null,
        "H2 madafakarrr"
    ),
    React.createElement(
        "h3",
        null,
        "h3 madafaka"
    ),
    React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, vero quis velit tempore laudantium neque odit, sit voluptates atque provident excepturi quaerat at nesciunt doloribus repellendus officiis ipsa eaque iusto."
    )
);

root.render(headerEl);