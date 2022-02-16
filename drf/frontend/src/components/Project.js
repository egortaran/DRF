import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectItem = ({project}) => {
    console.log(project.users)
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.repository}</td>
            <td>{project.users}</td>
        </tr>
    )
}


const ProjectList = ({projects}) => {
    let { id } = useParams();
    let filtered_items = projects.filter((project) => project.id == id)
    return (
        <table>
            <tr>
                <th>name</th>
                <th>repository</th>
                <th>users</th>
            </tr>
            {filtered_items.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default ProjectList
