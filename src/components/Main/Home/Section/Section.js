import Card from "../../../UI/Card/Card";
import React from "react";

const Section = React.memo(({ sectionSelectedHandler, cards }) => {
  const view = cards.map((card, index) => {
    return (
      <React.Fragment key={index}>
        {card.docs.map((doc, index) => {
          return (
            <Card
              key={index}
              handler={sectionSelectedHandler}
              title={doc.title}
              id={doc.id}
              description={doc.description}
              tech={doc.techArr}
            />
          );
        })}
      </React.Fragment>
    );
  });

  return <div>{view}</div>;
});

export default Section;
