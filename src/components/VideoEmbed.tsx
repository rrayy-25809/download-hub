type Embed_prop = {
    link: string
}

function VideoEmbed({link} : Embed_prop) {
    if (link.includes("youtu")) {
        const video_id = link.split('/').pop()
        
        return (
            <div className="video-embed">
                <iframe
                    src={"https://www.youtube.com/embed/"+video_id}
                    title="video"
                    allowFullScreen
                ></iframe>
            </div>
        )
    }
    return <></>
}

export default VideoEmbed