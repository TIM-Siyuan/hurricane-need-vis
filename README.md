# hurricane-need-vis

**Live demo：** https://tim-siyuan.github.io/hurricane-need-vis/

**Data Description：**
<br>
>map.json: geojson of houston counties and districts from
  [reference](https://github.com/codeforamerica/click_that_hood/blob/master/public/data/houston.geojson) <br>
>userData.json: show user's concern via wordCloud 
```
  {
     "region": regionID,
     "user": userID,
     "user_content": userConcern
  }
``` 
>region_concern.json: show regional concern via map and dots
```
   {
     "region": regionID,
     "concern": concern items,
     "context": " lack",
     "count": needs_frequency
   }
```
>need_tweet.json: show user's needs from tweet
```
  {
    "region": regionID,
    "user": userID,
    "user_content": userConcern,
  }
```
>region_data.json: show regional needs'frequency via line graph
```
{
    "region_id": regionID,
    "needs_frequency": [
        ["item A", the number of needs frequency],
        ["item B", the number of needs frequency],
        ["item C", the number of needs frequency]
    ]
}
```
>streamData.js: show regionConcern via streamgraph (javascript object)
  
  
    
