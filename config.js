var config = {
  "magicmirror_port": 8080, // magic mirror port
  "display_width": 1872, // eink display height in px
  "display_height": 1404, // eink display width in px
  "wait_to_load": 60, // wait seconds to load the site and display all data
  "refresh_interval": "0 */2 * * * *", // update eink every 10 minutes
  // https://github.com/kelektiv/node-cron#cron-ranges
  "timezone": "Europe / Berlin", // https://www.inmotionhosting.com/support/website/general-server-setup/tz-ref-table
  "invert_color": false
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
