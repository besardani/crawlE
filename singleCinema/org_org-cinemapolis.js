const CrawlE = require('crawl-e/v0.4.9')

const crawlE = new CrawlE({
        cinemas: [
            {
                name: 'Cinemapolis',
                website: 'https://cinemapolis.org/',
                address: '120 E. Green Street Ithaca, New York 14850',
                phone: '(607) 277-6115'
            }
        ],
        showtimes: {
            url: 'https://cinemapolis.org/showtimes/?showdate=:date:',
            urlDateFormat: 'MM/DD/YYYY',
            urlDateCount: 2,
            movies: {
                box: '.homepageleft .showtimes .showtime',
                title: '.showtimetitle a:first-child',
                    showtimes: {
                        box: '.showtimeshow a:first-child',
                        time: ':box @ownText()',
                        timeFormat: 'h:mm a',
                    }  
                }
             }
        })

    crawlE.crawl()
