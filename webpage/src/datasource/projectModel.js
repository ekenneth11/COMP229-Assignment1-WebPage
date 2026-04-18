class ProjectModel{
    constructor(id, title, description, completion, owner = null){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completion = completion;
        this.owner = owner;
    }

}

export default ProjectModel;