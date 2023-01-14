const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h2",
    {
      id: "heading2",
    },
    "Heading 2"
  );
  console.log(heading);

  const container = React.createElement("div",{
    id:'container'
  },[heading,heading2])
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element into the root
  root.render(container);

  