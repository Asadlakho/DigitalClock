
      function showTime() {
        let time = new Date().toLocaleTimeString("en-US", {
          timeZone:"Asia/Karachi"
        });
        document.getElementById("time").innerHTML = time;
      }
      showTime;
      setInterval(showTime, 1000);