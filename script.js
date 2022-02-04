const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const active = ("active")

function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'data.json', true);
  xobj.onreadystatechange = function () {
  if (xobj.readyState == 4 && xobj.status == "200") {
  
  // .open will NOT return a value but simply returns undefined in async mode so use a callback
  callback(xobj.responseText);
  
  }
  }
  xobj.send(null);
  
  }
  
  loadJSON(function(response) {
  jsonresponse = JSON.parse(response);
 
  for (let i = 0; i < jsonresponse.length; i++) {
    title = jsonresponse[i].title.replace(/\s/g, '').toLowerCase();
    hours = jsonresponse[i].timeframes.daily.current;
    previous = jsonresponse[i].timeframes.daily.previous;
    markup = `${hours}hrs<br><span class="small-txt" id="txt-work">Last Week - ${previous}hrs</span>`;
    document.querySelector(`#${title}`).innerHTML = markup;
  }

 daily.addEventListener("click",function() {
  
  for (let i = 0; i < jsonresponse.length; i++) {
      title = jsonresponse[i].title.replace(/\s/g, '').toLowerCase();
      hours = jsonresponse[i].timeframes.daily.current;
      previous = jsonresponse[i].timeframes.daily.previous;
      markup = `${hours}hrs<br><span class="small-txt" id="txt-work">Last Week - ${previous}hrs</span>`;
      document.querySelector(`#${title}`).innerHTML = markup;
      
      
    }
  })

  weekly.addEventListener("click", function() {
  
    for (let i = 0; i < jsonresponse.length; i++) {
        title = jsonresponse[i].title.replace(/\s/g, '').toLowerCase();
        hours = jsonresponse[i].timeframes.weekly.current;
        previous = jsonresponse[i].timeframes.weekly.previous;
        markup = `${hours}hrs<br><span class="small-txt" id="txt-work">Last Week - ${previous}hrs</span>`;
        document.querySelector(`#${title}`).innerHTML = markup;
      }
    
    })

    monthly.addEventListener("click", function() {
  
      for (let i = 0; i < jsonresponse.length; i++) {
          title = jsonresponse[i].title.replace(/\s/g, '').toLowerCase();
          hours = jsonresponse[i].timeframes.monthly.current;
          previous = jsonresponse[i].timeframes.monthly.previous;
          markup = `${hours}hrs<br><span class="small-txt" id="txt-work">Last Week - ${previous}hrs</span>`;
          document.querySelector(`#${title}`).innerHTML = markup;
        }
      
      })
}

);


  