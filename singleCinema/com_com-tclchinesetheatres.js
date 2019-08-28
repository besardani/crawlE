const CrawlE = require('crawl-e/v0.4.9')


const crawlE = new CrawlE({
  cinemas: [
      {
          name: 'TCL chinese Theatres',
          website: 'http://www.tclchinesetheatres.com/',
          address: '6801 Hollywood Blvd,Hollywood, CA 90028',
          phone: '+1 323.461.3331'
      }
  ],
  showtimes: {
      url: 'http://www.tclchinesetheatres.com/tickets-showtimes/?date=:date:',
      urlDateFormat: 'MM%2FDD%2FYYYY',
      urlDateCount: 2,
      movies: {
          box: '.teatro_box',
          title: '.movie .movie_desc a h3',
          showtimes: {
              box: '.time_and_info .time a ',
              time: {
                selector: '.time_div',
                attribute: 'ownText()',
                mapper: time => {
                  // Could not parse time -> for example 1:33 or 7:55 because its not known if its AM or PM.
                  // Since the website itself tells when the movies is AM , it means the other times are PM ,
                  // or at least the movies are not in the morning :)
                  let regEx = /(([AaPp][Mm]))/
                  let timeWithAmPm = regEx.exec(time)
                  if (timeWithAmPm) {
                    return time
                  }
                  return `${time} PM`
                  } 
                 
              },
              timeFormat: ['h:mm a','hh:mm a']
             
          }
      }
  }
})


crawlE.crawl()
