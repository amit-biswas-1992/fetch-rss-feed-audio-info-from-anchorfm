const podcastFeedParser = require("podcast-feed-parser")

// for fetching remote feeds, use getPodcastFromURL.
// Note that function must be async
async function printPodcastTitle (url) {
	const podcast = await podcastFeedParser.getPodcastFromURL(url)
	//console.log(podcast.episodes)
    //get audios
    podcast.episodes.forEach( (episode) => {
        console.log(episode)

        // console.log("titile: " + episode.title)
        // //audio link
        // console.log("link: " + episode.enclosure.url)
        // //type
        // console.log("type: " + episode.enclosure.type)
        // //duration
        // console.log("duration" + episode.enclosure.length)
        // //get Image
        // console.log("cover image: " + episode.imageURL)
        
        // //get description
        // console.log("description: " + episode.description)
        // //get date
        // console.log("date: " + episode.pubDate)
        
        
        console.log()
    })
}

let link = "https://anchor.fm/s/6e29eeec/podcast/rss"

printPodcastTitle(link)