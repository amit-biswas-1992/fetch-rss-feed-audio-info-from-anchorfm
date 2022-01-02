var axios = require('axios');
var parseString = require('xml2js').parseString;

let link = "https://anchor.fm/s/6e29eeec/podcast/rss"

axios.get(link)
  .then(response => {
    var self = this; 

    parseString(response.data, function (err, result) {
        let items = result.rss.channel[0].item;

        //console.log(items)

        let i = 0;

        items.forEach( item => {
          let title = item.title[0];
          let description = item.description;
          let link = item.link[0];
          let pubDate = item.pubDate[0];
          let enclosure = item.enclosure[0];
          let url = enclosure.$.url;
          let length = enclosure.$.length;
          let type = enclosure.$.type;
          let image = item.duration;
          i++;
          //console.log(item.image[0])
          
          if(i == 1){
            console.log(items)
            //get thumbnail
            console.log(item.image[0])
          }
        // console.log( "title :" +   title + "\n\n"
        // + "link :" + link + "\n\n"
        // + "pubDate :" + pubDate + "\n\n"
        // + "url :" + url + "\n\n"
        // + "length :" + length + "\n\n"
        // + "type :" + type + "\n\n"
        // + "audioThumbnail :" + image + "\n\n"
        // );

        })

        

        


        
       
       


    });
        
  })
    .catch(error => {
      console.log(error)
    })