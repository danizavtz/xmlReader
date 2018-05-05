[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)
# xmlFeedReader
Steps for running:<br>
1. Clone project from git<br>
2. cd to project folder (default: parserxml2json)
3. install dependencies
```
npm install
```
4. Start the application
```
npm start
```
5. If everything is ok you should see a msg:
```
Microsservice xmlparser listening at http://localhost:3011
```

This api have only one endpoint, you should make a request for:
```
http://localhost:3011/data
```
it has a required item the quantity of podcasts you want to see...

# Making Requests
curl localhost:3011/data -X GET -d "quantity=12"


The original xml that is loaded at xml/saida.xml is from feed:
 ```
https://jovemnerd.com.br/feed-nerdcast/
 ```