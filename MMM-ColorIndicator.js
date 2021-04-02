/* global Module */

/* Magic Mirror
 * Module: MMM-ColorIndicator
 *
 * By amonelias https://github.com/amonelias
 * MIT Licensed.
 */

Module.register("MMM-ColorIndicator", {

    defaults: {
        msgin: "",
        msgout: "",
        limits:[
            [0, "0000FF"] 
        ]
    },

    notificationReceived: function(notification, payload, sender) {
        if (notification == this.config.msgin){ 
            let data = Number(payload)
            let color = ""
            for(x in this.config.limits){
                if(data>this.config.limits[x][0]){
                    color = this.config.limits[x][1]
                    break
                }
            }
            this.sendNotification(this.config.msgout, color)
        }
    },

  })
