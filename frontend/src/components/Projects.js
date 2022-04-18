import React from 'react'
import {Link} from "react-router-dom";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                <Link to={`/projects/${project.id}`}>{project.id}</Link>
            </td>
            <td>{project.name}</td>
            <td>{project.repository}</td>
            <td>{project.users}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table>
            <tbody>
            <th>id</th>
            <th>name</th>
            <th>repository</th>
            <th>users</th>

            {projects.map((project) => <ProjectItem project={project}/>)}
            </tbody>
        </table>
    )
}


export default ProjectList
