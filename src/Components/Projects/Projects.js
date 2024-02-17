import { Card } from "react-bootstrap";
import projImg1 from "../../assets/Images/self.jpeg";
import { ArrowUpRightSquareFill } from 'react-bootstrap-icons';
import './Projects.css';


export const Projects = () =>{
    return(
        <section className="project" id="projects">
            <h2>Projects</h2>
            <div className='carddiv'>
                {projects.map(proj => (
                <div key={proj.id} className="Heading">
                    <Card style={{ width: '40rem', height:'500px '}}>
                        <Card.Img className='CardImage' variant="top" src={proj.image} />
                        <Card.Body>
                            <Card.Title className="title">{proj.title}</Card.Title>
                            <Card.Text className="text">{proj.description}</Card.Text>
                        </Card.Body>
                        <button onClick={() => console.log('Proj')} className="button"><span>Get Project</span>
                            <ArrowUpRightSquareFill size={25} /></button>
                    </Card>
                </div>))}
                </div>
        </section>
    )
}

const projects = [
    {
        id: "1",
        title: "Project1",
        image: projImg1,
        description: "I am amazing at this! Am i?I am amazing at this! Am i?I am amazing at this! Am i?I am amazing at this! Am i?I am amazing at this! Am i?I am amazing at this! Am i?I am amazing at this! Am i?",
    },
    {
        id: "2",
        title: "Project2",
        image: projImg1,
        description: "I am amazing at this! Am i?",
    },
    {
        id: "3",
        title: "Project3",
        image: projImg1,
        description: "I am amazing at this! Am i?",
    },
    {
        id: "4",
        title: "Project4",
        image: projImg1,
        description: "I am amazing at this! Am i?",
    },
    {
        id: "5",
        title: "Project5",
        image: projImg1,
        description: "I am amazing at this! Am i?",
    },
    {
        id: "6",
        title: "Project6",
        image: projImg1,
        description: "I am amazing at this! Am i?",
    },

]