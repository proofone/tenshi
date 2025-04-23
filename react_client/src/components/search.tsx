import React, { SyntheticEvent } from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { BsIcon } from "./misc";

interface SearchProps {
  searchterm: string;
}
export const SearchElement: FC<SearchProps> = ({ searchterm = "" }) => {
  const searchForm = (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="border-1">
        <Form.Control
          id="search-input"
          name="search-input"
          placeholder={
            searchterm.length
              ? searchterm
              : "Search for users, communities or locations"
          }
          aria-label="Search for users, communities or locations"
        ></Form.Control>
        <Button variant="outline-secondary" type="reset">
          <BsIcon cls="x-lg text-danger"></BsIcon>
        </Button>
      </InputGroup>
    </Form>
  );

  return <div className="my-3">{searchForm}</div>;
};

function handleSubmit(e: SyntheticEvent) {
    console.log("SearchForm submit", e.target)
}
