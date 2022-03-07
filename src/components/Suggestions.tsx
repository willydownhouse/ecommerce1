import React from "react";
import { Button, Divider, Header } from "semantic-ui-react";
import { IHotel } from "./App";

type SuggestionProps = {
  hotels: IHotel[];
};

function Suggestions({ hotels }: SuggestionProps) {
  return (
    <div>
      <Divider hidden />
      <Header as={"h3"}>Suggestions</Header>
      {hotels.map((el) => (
        <>
          <Header as={"h4"} key={el.destinationId}>
            {el.name}
          </Header>
          <Button onClick={() => console.log(el.destinationId)}>Search</Button>
        </>
      ))}
    </div>
  );
}

export default Suggestions;
