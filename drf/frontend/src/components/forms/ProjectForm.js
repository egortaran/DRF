import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', repository: '', users: []}
    }

    handleUserChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }

        let users = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'users': users
        })
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
        console.log(event.target.name ,event.target.value)
        console.log(this.state.name)
        console.log(123123)
        console.log(this.state.users)
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.repository, this.state.users)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="name">name</label>
                    <input type="text" className="form-control" name="name"
                           value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="repository">repository</label>
                    <input type="text" className="form-control" name="repository"
                           value={this.state.repository} onChange={(event) => this.handleChange(event)}/>
                </div>
                <select name="users" multiple onChange={(event) => this.handleUserChange(event)}>
                </select>

                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default ProjectForm
