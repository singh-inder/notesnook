import React from "react";
import Topic from "../components/topic";
import { db } from "../common";
import ListContainer from "../components/list-container";

const Topics = props => {
  return (
    <ListContainer
      itemsLength={props.topics.length}
      item={index => (
        <Topic
          index={index}
          item={props.topics[index]}
          onClick={() => {
            let topic = props.topics[index];
            props.navigator.navigate("notes", {
              title: props.notebook.title,
              subtitle: topic.title,
              notes: db.notebooks
                .notebook(props.notebook.id)
                .topics.topic(topic.title).all
            });
          }}
        />
      )}
      button={{
        content: "Add more topics"
      }}
    />
  );
};

export default Topics;
