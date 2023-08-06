// Table.js
import React, { useState } from "react";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";
import Sortable from "./Sortable";
import Up from "./Up";
import Down from "./Down";
import "./Table.css";
import PropTypes from "prop-types";

const Table = ({ display, data, columns, card, title }) => {
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [rows, setRows] = useState(data);
  const [selected, setSelected] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSelect = (rowIndex, selectionType) => {
    if (selectionType === "checkbox") {
      let newSelected;
      if (selected.includes(rowIndex)) {
        newSelected = selected.filter((item) => item !== rowIndex);
      } else {
        newSelected = [...selected, rowIndex];
      }
      setSelected(newSelected);

      // If all rows are selected, set isSelectAllChecked to true, otherwise false
      setIsSelectAllChecked(newSelected.length === data.length);
    } else if (selectionType === "radio") {
      setSelected([rowIndex]);
    }
  };

  const handleSelectAll = () => {
    if (isSelectAllChecked) {
      // If currently all are selected, deselect all.
      setSelected([]);
    } else {
      // If currently not all are selected, select all.
      const allRowIndexes = rows.map((_, index) => index);
      setSelected(allRowIndexes);
    }
    // Toggle the current value of isSelectAllChecked
    setIsSelectAllChecked(!isSelectAllChecked);
  };

  const handleSort = (columnField) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === columnField &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key: columnField, direction });
  };

  const sortedRows = React.useMemo(() => {
    let sortableItems = [...rows];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [rows, sortConfig]);

  // Function to render field value based on type
  const renderFieldValue = (row, field, rowIndex) => {
    const column = columns.find((column) => column.field === field);

    if (!column) {
      return null; // or return a default value, for example: 'N/A'
    }

    const selectionType = column.type;

    switch (column.type) {
      case "radio":
      case "checkbox":
        return (
          <div className="input-wrapper">
            <label className="selection-input-wrapper">
              <input
                type={selectionType}
                className="hidden-input"
                checked={selected.includes(rowIndex)}
                onChange={() => handleSelect(rowIndex, selectionType)}
              />
              {selectionType === "radio" ? (
                <RadioButton isChecked={selected.includes(rowIndex)} />
              ) : (
                <Checkbox isChecked={selected.includes(rowIndex)} />
              )}
            </label>
          </div>
        );
      case "text":
      default:
        return row[field];
    }
  };

  // Render card view
  const renderCardView = () => (
    <div className="card-container">
      <div className="card-title">{title}</div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`card ${
            selected.includes(rowIndex) ? "selected-row" : ""
          }`}
        >
          <div className="card-row">
            {card.map((col, colIndex) => {
              // Get the count of fields that exist in columns
              const existingFieldsCount = col.field.filter((f) =>
                columns.map((c) => c.field).includes(f)
              ).length;

              return (
                <div
                  key={colIndex}
                  className="card-column"
                  style={{
                    width:
                      col.width === "auto"
                        ? "auto"
                        : col.width +
                          (typeof col.width === "number" ? "px" : ""),
                    flexGrow: col.width === "auto" ? 1 : 0,
                    textAlign: col.position,
                  }}
                >
                  {col.field.map((field, fieldIndex) => {
                    return (
                      <div
                        key={fieldIndex}
                        style={{ fontWeight: col.fontweight }}
                      >
                        {(col.key &&
                          columns.find((column) => column.field === field)
                            ?.header) ||
                          (col.value && renderFieldValue(row, field, rowIndex))}
                        {col.addSymbol && fieldIndex < existingFieldsCount && (
                          <span>{col.addSymbol}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  const renderTableView = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{
                  textAlign: column.position,
                  width:
                    typeof column.width === "number"
                      ? `${column.width}px`
                      : column.width,
                }}
                onClick={() => column.sortable && handleSort(column.field)}
                sortable={column.sortable ? "true" : undefined}
              >
                {column.type === "checkbox" ? (
                  <div className="input-wrapper">
                    <label className="selection-input-wrapper">
                      <input
                        type="checkbox"
                        className="hidden-input"
                        checked={isSelectAllChecked}
                        onChange={handleSelectAll}
                      />
                      <Checkbox isChecked={isSelectAllChecked} />
                    </label>
                  </div>
                ) : (
                  <div className="table-header">
                    <div className="table-header-text"> {column.header}</div>
                    <>
                      {column.sortable && (
                        <>
                          {sortConfig && sortConfig.key === column.field ? (
                            sortConfig.direction === "ascending" ? (
                              <Up />
                            ) : (
                              <Down />
                            )
                          ) : (
                            <Sortable />
                          )}
                        </>
                      )}
                    </>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`table-row ${
                selected.includes(rowIndex) ? "selected-row" : ""
              }`}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} style={{ textAlign: column.position }}>
                  {renderFieldValue(row, column.field, rowIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className={`container ${display}`}>
      {renderTableView()}
      {renderCardView()}
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.string.isRequired,
  display: PropTypes.oneOf(["table", "card"]).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired, // can be an empty string ""
      field: PropTypes.string.isRequired, // text
      type: PropTypes.oneOf(["text", "radio", "checkbox"]).isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired, // auto or number
      position: PropTypes.oneOf(["left", "center", "right"]).isRequired,
      sortable: PropTypes.bool.isRequired, // true or false
    })
  ).isRequired,
  card: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.arrayOf(PropTypes.string).isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      fontweight: PropTypes.string.isRequired,
      addSymbol: PropTypes.string, // Not explicitly required
      position: PropTypes.oneOf(["left", "right"]).isRequired,
      key: PropTypes.bool.isRequired,
      value: PropTypes.bool.isRequired,
    })
  ), // Only required if the display prop is "card"
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
