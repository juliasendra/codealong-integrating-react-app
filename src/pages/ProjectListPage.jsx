import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";


function ProjectListPage(){

    const [projects, setProjects] = useState([]);

    const getAllProjects = () => {
        axios.get(API_URL + "/projects?_embed=tasks")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.log("Error getting projects from the API...");
                console.log(error);
            })
    };


    useEffect(() => {
        getAllProjects();
    }, []);



    return (
        <div className="ProjectListPage">
            <h2>List of projects:</h2>

            <Link to="/projects/create">
                <p>
                    <button>Create Project</button>
                </p>
            </Link>

            {projects.map((project) => {
                return (
                    <div className="ProjectCard card" key={project.id} >
                        <Link to={`/projects/${project.id}`}>
                            <h3>{project.title}</h3>
                        </Link>
                    </div>
                );
            })} 

        </div>
    )
}

export default ProjectListPage;