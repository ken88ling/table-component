import React from "react";
import Table from "./Table";
import "./App.css";

const App = () => {
  // ... (data and columns)
  const customTheme = {
    primaryColor: "#ff5733",
    backgroundColor: "#f0f0f0",
    secondaryColor: "#abaccd",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  };

  // Check for errors in props and handle accordingly
  try {
    return (
      <div className="app">
        <h1>Custom Theme Table</h1>
        <Table
          display="table"
          data={data}
          columns={columns}
          theme={customTheme}
        />
      </div>
    );
  } catch (error) {
    // Handle the error here, such as displaying an error message or fallback content
    console.error("Error in rendering Table component:", error);
    return <div>Error occurred while rendering the Table.</div>;
  }
};

export default App;
