import axios from "axios";
import { useState } from "react";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";


function CreateProjectPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = (e) => {

        // prevent page reaload
        e.preventDefault();

        // prepare an object with the data that we send to the api
        const newProject = {
            title: title,
            description: description
        }
        
        // send POST request
        axios.post(`${API_URL}/projects`, newProject)
            .then( response => {
                console.log("project was created...")
                console.log(response.data)
            })
            .catch((error) => {
                console.log("Error creating project in the API...");
                console.log(error);
            })
        
    }


    return (
        <div className="CreateProjectPage">
            <h3>Add Project</h3>

            <form onSubmit={handleSubmit}>
                
                <label>
                    Title
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="enter the title"
                        required={true}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        />
                </label>

                <label>
                    Description
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="short description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        />
                </label>


                <button>Create Project</button>
            </form>

        </div>
    )
}

export default CreateProjectPage;