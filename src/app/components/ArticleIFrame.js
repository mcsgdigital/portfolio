import Card from "./Card";

export default function ArticleIFrame(props) {
    const handleCardClick = (project) => {
        if (project.openInNewTab) {
            // Open the link in a new tab
            window.open(project.linkUrl, "_blank");
        } else {
            // Render in iframe
            props.handleOnClick(project);
        }
    };

    return (
        <>
            <article className="mb-16">
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-white">INTERACTIVE APPS</h2>
                {/* Symbol Explanation */}
                <p className="text-sm text-gray-400 mt-2">
                    <span className="inline-block text-lg font-bold">⧉</span> indicates the app will open in a new tab.
                </p>
                {/* Line Separator */}
                <hr className="border-gray-600 my-4" />
                <br />
                {/* Cards Container */}
                <div className="flex flex-wrap justify-center gap-4">
                    {props.data &&
                        props.data.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                                img={"/assets/projects/apps/" + project.imageUrl + ".png"}
                                type="project"
                                link={project.linkUrl}
                                size={project.size}
                                openInNewTab={project.openInNewTab} // Pass the openInNewTab prop
                                handleOnClick={() => handleCardClick(project)} // Use the new handler
                            />
                        ))}
                </div>
            </article>
            {/* iFrame Lightbox */}
            {props.itemData && !props.itemData.openInNewTab && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-1000"
                    onClick={props.handleItemClick}
                >
                    <iframe
                        src={props.itemData.linkUrl}
                        title="Assembly"
                        width={props.itemData.size[0]}
                        height={props.itemData.size[1]}
                    ></iframe>
                </div>
            )}
        </>
    );
}