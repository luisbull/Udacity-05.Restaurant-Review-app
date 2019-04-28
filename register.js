if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then((reg) => {
      // registration worked
      if(reg.installing) {
        console.log("Service Worker Installing");
      } else if(reg.waiting) {
        console.log("Service Worker Installed");
      } else if(reg.active) {
        console.log("Service Worker Active");
      }
      console.log("Registration Successful " + reg.scope);
    }).catch((error) => {
      // registration failed
      console.log("Registration Failed with " + error);
      
    });
  }