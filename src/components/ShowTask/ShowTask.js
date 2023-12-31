// importing corresponding css
import "./ShowTask.css";

// importing bootstrap components
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// importing react icons
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

// Creating a Functional component for creating all task
function ShowTask(props) {
  return (
    <>
      <div className="taskBox scroll">
        {/* mapping over all the post and rendering all the data */}
        {props.todo.map((post) => {
          return (
            <div key={post.id}>
              <CardGroup>
                <div className="task">
                  <Card border="success" style={{ width: "18rem" }}>
                    <Card.Header>
                      <FaEdit
                        className="updateBtn"
                        style={{
                          position: "relative",
                          left: "170px",
                          cursor: "pointer",
                          color: "blue",
                        }}
                        size={24}
                        onClick={() => {
                          props.updateHandler(post, true);
                        }}
                        name="create-outline"
                      />

                      <FaTrashAlt
                        style={{
                          position: "relative",
                          left: "180px",
                          cursor: "pointer",
                          color: "red",
                        }}
                        className="deleteBtn"
                        size={24}
                        onClick={() => {
                          props.delete(post.id);
                        }}
                        name="trash-outline"
                      />

                      <CiCircleCheck 
                        className="checkBtn"
                        onClick={() => {
                          props.completed(post);
                        }}
                        style= {
                          post.completed ? {
                          position: "relative",
                          right: "50px",
                          fontSize: "25px",
                          cursor: "pointer",
                          backgroundColor: "green",
                          borderRadius: "50px",
                        } : {
                          position: "relative",
                          right: "50px",
                          fontSize: "25px",
                          cursor: "pointer",
                          color: "green"
                        }}
                      /> 

                    </Card.Header>
                    <Card.Body>
                      <Card.Title style={post.completed ?{textDecoration:"line-through"}: {textDecoration: "none"}}>{post.title}</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                  </Card>
                </div>
              </CardGroup>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowTask;