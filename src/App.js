import { useState } from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html.
const renderer = new marked.Renderer();

function App() {
  const [previewText, setPreviewText] = useState(placeholder);

  const handleChange = (e) => {
    setPreviewText(e.target.value);
  };

  return (
    <div className="App">
      <div id="editorWrapper">
        <Toolbar text="Editor" />
        <Editor previewText={previewText} handleChange={handleChange} />
      </div>
      <div id="previewWrapper">
        <Toolbar text="Preview" />
        <Preview previewText={previewText} />
      </div>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div id="toolbar">
      <h1>{props.text}</h1>
    </div>
  );
}

function Editor(props) {
  return (
    <textarea
      value={props.previewText}
      onChange={props.handleChange}
      type="text"
    ></textarea>
  );
}

function Preview(props) {
  return (
    <div
      id="previewer"
      dangerouslySetInnerHTML={{
        __html: marked(props.previewText, { renderer: renderer }),
      }}
    ></div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://libormarko.github.io/), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://reactjs.org/logo-og.png)
`;

export default App;
