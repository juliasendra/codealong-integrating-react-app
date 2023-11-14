import { useState } from "react";
import axios from "axios";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";


function AddTask(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        // convert projectId to number (API expects to receive the id as a number)
        const id = parseInt(props.projectId);

        // prepare an object with the data that we send to the api
        const requestBody = {
            title: title,
            description: description,
            projectId: id
        }

        // send POST request
        axios.post(`${API_URL}/tasks`, requestBody)
            .then( response => {
                // invoke function in the parent component, so that the list of tasks is updated
                props.callbackToUpdateProject()
            })
            .catch((error) => {
                console.log("Error creating a new task...");
                console.log(error);
            })
    };


    return (
        <div className="AddTask">
            <h3>Add New Task</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        required={true}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Description
                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
