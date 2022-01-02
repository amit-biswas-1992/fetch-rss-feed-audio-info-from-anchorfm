const podcastFeedParser = require("podcast-feed-parser")

// for fetching remote feeds, use getPodcastFromURL.
// Note that function must be async
async function printPodcastTitle (url) {
	const podcast = await podcastFeedParser.getPodcastFromURL(url)
	//console.log(podcast.episodes)
    //get audios
    podcast.episodes.forEach( (episode) => {

        console.log(episode.title)
        //audio link
        console.log(episode.enclosure.url)
        //type
        console.log(episode.enclosure.type)
        //duration
        console.log(episode.enclosure.length)
        //get Image
        console.log(episode.imageURL)
    })
}

let link = "https://anchor.fm/s/6e29eeec/podcast/rss"

printPodcastTitle(link)