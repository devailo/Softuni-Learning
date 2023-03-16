const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

const Heading = (props) => {
    return <h1>H1 heading with props input = {props.title}</h1>
}

const headerEl = (
    <header className="headerclass">
        <Heading title="heading 1-1" />
        <Heading title="heading 1-2" />
        <h2>H2 madafakarrr</h2>
        <h3>h3 madafaka</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, vero quis velit tempore laudantium neque odit, sit voluptates atque provident excepturi quaerat at nesciunt doloribus repellendus officiis ipsa eaque iusto.</p>
    </header>
);

root.render(headerEl)