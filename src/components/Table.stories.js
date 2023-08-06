// Table.stories.js
import React from "react";
import Table from "./Table";

export default {
  title: "components/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Layout1 = Template.bind({});
Layout1.args = {
  title: "Contact View",
  display: "card", // table or card
  columns: [
    {
      header: "",
      field: "option",
      type: "radio",
      width: 60,
      position: "left",
      sortable: false,
    },
    {
      header: "Name",
      field: "name",
      type: "text",
      width: "auto",
      position: "left",
      sortable: false,
    },
    {
      header: "Mobile",
      field: "mobile",
      type: "text",
      width: "auto",
      position: "center",
      sortable: false,
    },
    {
      header: "Expiry",
      field: "expiry",
      type: "text",
      width: "auto",
      position: "left",
      sortable: false,
    },
    {
      header: "Penalty",
      field: "penalty",
      type: "text",
      width: "auto",
      position: "right",
    },
  ],
  card: [
    {
      field: ["option"],
      width: 40,
      fontweight: "",
      position: "left",
      key: false,
      value: true,
    },
    {
      field: ["name", "mobile", "expiry", "penalty", "email", "address"],
      width: 70,
      fontweight: "bold",
      addSymbol: ":",
      position: "left",
      key: true,
      value: false,
    },
    {
      field: ["name", "mobile", "expiry", "penalty", "email", "address"],
      width: "auto",
      fontweight: "",
      addSymbol: "",
      position: "left",
      key: false,
      value: true,
    },
  ],
  data: [
    {
      option: false,
      name: "Mavis Chen",
      mobile: 88997654,
      expiry: "Dec 2022",
      penalty: "$600",
      email: "ken@gmail.com",
      address: "123 Love street",
    },
    {
      option: false,
      name: "Valentino Morose",
      mobile: 99896543,
      expiry: "Jan 2023",
      penalty: "$600",
      email: "yy@gmail.com",
      address: "35 Why street",
    },
  ],
};

export const Layout2 = Template.bind({});

// I will write require otherwise not require
Layout2.args = {
  title: "Title name",
  display: "table", // require, [table or card]
  columns: [
    // all columns fields is required
    {
      header: "Destination", // required, can be ""
      field: "destination", // reqired, text
      type: "text", // required, text, radio, checkbox
      width: "auto", // required, auto or number
      position: "left", // required, left, center, right
      sortable: true, // required, true or false
    },
    {
      header: "Mins",
      field: "mins",
      type: "text",
      width: "auto",
      position: "right",
      sortable: true,
    },
    {
      header: "Rate/min",
      field: "rate",
      type: "text",
      width: "auto",
      position: "right",
    },
  ],
  card: [
    // all the fields required if the display = card
    {
      field: ["option"],
      width: 40,
      fontweight: "",
      position: "left",
      key: false,
      value: true,
    },
    {
      field: ["name", "mobile", "expiry", "penalty", "email", "address"],
      width: 70,
      fontweight: "bold",
      addSymbol: ":",
      position: "left",
      key: true,
      value: false,
    },
    {
      field: ["name", "mobile", "expiry", "penalty", "email", "address"],
      width: "auto",
      fontweight: "",
      addSymbol: "",
      position: "left",
      key: false,
      value: true,
    },
  ],
  data: [
    {
      destination: "Bangladesh",
      mins: 240,
      rate: "$0.03",
    },
    {
      destination: "China",
      mins: 600,
      rate: "$0.01",
    },
    {
      destination: "India",
      mins: 600,
      rate: "$0.01",
    },
    {
      destination: "Indonesia",
      mins: 90,
      rate: "$0.07",
    },
    {
      destination: "Malaysia",
      mins: 60,
      rate: "$0.01",
    },
    {
      destination: "Myanmar",
      mins: 35,
      rate: "$0.17",
    },
    {
      destination: "Philippines",
      mins: 40,
      rate: "$0.15",
    },
    {
      destination: "Thailand",
      mins: 120,
      rate: "$0.05",
    },
    {
      destination: "Vietnam",
      mins: 60,
      rate: "$0.10",
    },
  ],
};

export const Table_with_checkbox = Template.bind({});

Table_with_checkbox.args = {
  title: "Contact View",
  display: "table", // table or card
  columns: [
    {
      header: "",
      field: "option",
      type: "checkbox",
      width: 50,
      position: "left",
    },
    {
      header: "BRN",
      field: "brn",
      type: "text",
      width: "auto",
      position: "left",
    },
    {
      header: "Company",
      field: "company",
      type: "text",
      width: "auto",
      position: "left",
    },
  ],
  card: [
    {
      field: [""],
      width: "auto",
      fontweight: "",
      position: "left",
      key: false,
      value: true,
    },
  ],
  data: [
    {
      option: false,
      brn: "293810299K",
      company: "Ocean Ventures Ltd.",
    },
    {
      option: false,
      brn: "587692837K",
      company: "Seaside Ocean Ltd.",
    },
    {
      option: false,
      brn: "486791045K",
      company: "Coastal Trading Pte Ltd",
    },
    {
      option: false,
      brn: "124573891K",
      company: "Marine Holdings",
    },
    {
      option: false,
      brn: "752910834K",
      company: "Aqua Development",
    },
    {
      option: false,
      brn: "938102746K",
      company: "Pacific Ventures Ltd.",
    },
    {
      option: false,
      brn: "802647312K",
      company: "Oceanic Trading Inc.",
    },
    {
      option: false,
      brn: "536127495K",
      company: "Maritime Group",
    },
  ],
};

export const Table_with_radio_button = Template.bind({});

Table_with_radio_button.args = {
  title: "Contact View",
  display: "table", // table or card
  columns: [
    {
      header: "",
      field: "option",
      type: "radio",
      width: 50,
      position: "left",
    },
    {
      header: "BRN",
      field: "brn",
      type: "text",
      width: "auto",
      position: "left",
    },
    {
      header: "Company",
      field: "company",
      type: "text",
      width: "auto",
      position: "left",
    },
  ],
  card: [
    {
      field: [""],
      width: "auto",
      fontweight: "",
      position: "left",
      key: false,
      value: true,
    },
  ],
  data: [
    {
      option: false,
      brn: "293810299K",
      company: "Ocean Ventures Ltd.",
    },
    {
      option: false,
      brn: "587692837K",
      company: "Seaside Ocean Ltd.",
    },
    {
      option: false,
      brn: "486791045K",
      company: "Coastal Trading Pte Ltd",
    },
    {
      option: false,
      brn: "124573891K",
      company: "Marine Holdings",
    },
    {
      option: false,
      brn: "752910834K",
      company: "Aqua Development",
    },
    {
      option: false,
      brn: "938102746K",
      company: "Pacific Ventures Ltd.",
    },
    {
      option: false,
      brn: "802647312K",
      company: "Oceanic Trading Inc.",
    },
    {
      option: false,
      brn: "536127495K",
      company: "Maritime Group",
    },
  ],
};
