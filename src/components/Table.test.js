// Table.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Table from "./Table";

describe("<Table />", () => {
  // Sample data for testing
  const mockColumns = [
    {
      header: "Name",
      field: "name",
      type: "text",
      width: "auto",
      position: "left",
      sortable: true,
    },
    {
      header: "Age",
      field: "age",
      type: "radio",
      width: 50,
      position: "center",
      sortable: true,
    },
  ];

  const mockData = [
    { name: "John", age: 25 },
    { name: "Doe", age: 30 },
  ];

  it("renders without crashing", () => {
    render(
      <Table
        display="table"
        data={mockData}
        columns={mockColumns}
        card={[]}
        title="Test Table"
      />
    );
    expect(screen.getByText("Test Table")).toBeInTheDocument();
  });

  it("displays data correctly in table format", () => {
    render(
      <Table
        display="table"
        data={mockData}
        columns={mockColumns}
        card={[]}
        title="Test Table"
      />
    );
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
  });

  it("handles row select with radio button", () => {
    render(
      <Table
        display="table"
        data={mockData}
        columns={mockColumns}
        card={[]}
        title="Test Table"
      />
    );
    const radioButton = screen.getAllByRole("radio")[0];
    fireEvent.click(radioButton);
    const tableRow = screen.getByText("John").closest("tr");
    expect(tableRow).toHaveClass("selected-row");
  });
});
