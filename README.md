# crawlE
Node Js webscraping


## Getting Started



These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



#### Prerequisites



Cloning the repository


```
git clone https://github.com/besardani/crawlE.git
```


#### Installing dependencies


```
yarn install
```


## Running the tests


#### Overall Test (-v)


For https://spotlightcinemas.com/corporate/


```
npm run debug-spot
```

For http://www.tclchinesetheatres.com/


```
npm run debug-tcl
```


For https://cinemapolis.org/


```
npm run debug-cinemapolis
```


#### Time Test (time:parsing)


Test if the time format can be parsed


For https://spotlightcinemas.com/corporate/


```
npm run time-spot
```

For http://www.tclchinesetheatres.com/


```
npm run time-tcl
```

For https://cinemapolis.org/


```
npm run time-cinemapolis
```


## Running Build



For https://spotlightcinemas.com/corporate/


```
npm run build-spot
```

For http://www.tclchinesetheatres.com/


```
npm run build-tcl
```

For https://cinemapolis.org/

```
npm build time-cinemapolis
```

Build files located at /outup

## Built With

crawlE framework, build on top of cheerio.js .




## Authors

* **Besar Dani** - 


