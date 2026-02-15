import Card from "./Card";

export default function ArticleVideo(props) {

    return (
        <>
            <article className="mb-16">
                <h2 className="text-2xl font-bold text-white">DEMOS</h2>
                <hr className="border-gray-400 my-4"/>
                <br/>
                <div className="flex flex-wrap justify-center gap-4">
                    {
                        props.data && props.data.map((project, index) => (
                            <Card 
                                key={index}
                                title={project.title}
                                description={project.description}
                                img={"/assets/projects/games/"+ project.imageUrl +".png"}
                                type="project"
                                link={project.linkUrl}
                                size={project.size}
                                handleOnClick={props.handleOnClick}
                            />
                        ))
                    }
                </div>
            </article>
            
            {
                props.itemData && 
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-1000" onClick={props.handleItemClick}>
                    <video 
                        src={props.itemData.link} 
                        title={props.itemData.title}
                        width={props.itemData.size[0]}
                        height={props.itemData.size[1]}
                        controls
                        autoPlay
                        loop
                    ></video>
                </div>
            }
        </>
    )
}