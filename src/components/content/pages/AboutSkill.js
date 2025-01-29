import { v4 as uuidv4 } from 'uuid';

function AboutSkill(props) {

    return (
        <div className="about-skill">
            <div className="name">{props.data.name}</div>
            <div className="skill">
                {
                    Array.from({ length: props.data.skill }, (_, i) => {
                        return <div key={uuidv4()} className="skill-unit"></div>
                    })
                }
            </div>
        </div>
    );
}

export default AboutSkill;