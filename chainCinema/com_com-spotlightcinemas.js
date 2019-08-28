const CrawlE = require('crawl-e/v0.4.9')


const crawlE = new CrawlE({
    cinemas: {
        list: {
            url: 'http://spotlightcinemas.com/corporate/',
            box: 'li .dropdown-menu a:not(.disabled)',
            website: {
                selector: ':box',
                attribute: 'href',
                mapper: url => {
                    if (url !== '/corporate') {
                        return `http://spotlightcinemas.com${url}`
                    }
                }
            },
            slug: {
                selector: ':box',
                mapper: value => {
                  if (value !== 'Home') {
                    return value
                  }
                }
            }
        },
        details: {
            url: ':cinema.website:?page=contact',
            name: {
                selector: 'span.card-text p:nth-of-type(2)',
                attribute: 'html()',
                mapper: value => value.split('<br>')[1].trim(),
  
            },
            address: {
                selector: 'span.card-text p:nth-of-type(2)',
                attribute: 'html()',
                mapper: value => value.split('<br>').slice(2, 4).join(', ').trim(),
            },
            phone: {
                selector: 'span.card-text p:nth-of-type(2)',
                attribute: 'html()',
                mapper: value => value.split('<br>')[4].split(' - ')[0],
            },
            
        }
    },
  
    showtimes: {
        url: ':cinema.website:/index.php?date=:date:',
        urlDateFormat: 'YYYYMMDD',
        urlDateCount: 2,
        movies: {
            box: '.card .movie_card',
            title: '.card-title',
            showtimes: {
                box: 'button span strong',
                time: {
                  selector: ':box',
                  attribute: 'ownText()',
                  mapper: time => {
                    // Could not parse time -> for example 1:33 or 7:55 because its not known if its AM or PM.
                    // Since the website itself tells when the movies is AM , it means the other times are PM ,
                    // or at least the movies are not in the morning :)  
                    // and this time we have to remove '(3D)' part from 4:10 (3D) to parse this time too
                    let regEx = /(([AaPp][Mm]))/    
                    let timeWithAmPm = regEx.exec(time)
                    if (!timeWithAmPm) {
                      if (time.includes('(3D)')) {
                         let newTime = time.replace(/\(([3D)]+)\)/g,'')
                          return `${newTime} PM`
                        }
                        return `${time} PM`
                           }
                       
                     } 
                },
                timeFormat: ['h:mm a','hh:mm a'],
            }
        },
  
    }
  });
  
  
  
  
  
  
  crawlE.crawl()
