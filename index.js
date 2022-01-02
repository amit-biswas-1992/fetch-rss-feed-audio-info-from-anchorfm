var axios = require('axios');
var parseString = require('xml2js').parseString;

let link = "https://anchor.fm/s/6e29eeec/podcast/rss"

axios.get(link)
  .then(response => {
    var self = this; 

    parseString(response.data, function (err, result) {
        let title = result.rss.channel[0].item[0].title[0];
        let description = result.rss.channel[0].item[0].description[0];
        let link = result.rss.channel[0].item[0].link[0];
        let pubDate = result.rss.channel[0].item[0].pubDate[0];
        let enclosure = result.rss.channel[0].item[0].enclosure[0];
        let url = enclosure.$.url;
        let length = enclosure.$.length;
        let type = enclosure.$.type;

+
        console.log( "title :" +   title + "\n\n"
        + "link :" + link + "\n\n"
        + "pubDate :" + pubDate + "\n\n"
        + "url :" + url + "\n\n"
        + "length :" + length + "\n\n"
        + "type :" + type + "\n\n"
        );
       
       


    });
        
  })
    .catch(error => {
      console.log(error)
    })