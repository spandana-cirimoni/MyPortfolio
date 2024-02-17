import './Skills.css';
import image1 from '../../assets/Images/self.jpeg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skills">
            <h2>Skills</h2>
            <Carousel responsive={responsive}>
                {data.map(d => (
                    <div key={d.id} className='skills-card'>
                        <img src={d.image} alt="Default" className='product--image'/>
                        <h5>{d.name}</h5>
                    </div>
                ))}
            </Carousel>
    </section>
    )
}

const data = [
    {
        id:'1',
        name : 'Java',
        image : image1,
    },
    {
        id:'2',
        name : 'React',
        image : image1,
    },
    {
        id:'3',
        name : 'ASP.NET',
        image : image1,
    },
    {
        id:'4',
        name : 'Spring Boot',
        image : image1,
    },
    {
        id:'5',
        name : 'MS-SQL',
        image : image1,
    },
    {
        id:'6',
        name : 'Spring Boot',
        image : image1,
    },
    {
        id:'7',
        name : 'MS-SQL',
        image : image1,
    },
]