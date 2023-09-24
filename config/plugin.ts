export default {

  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: "opizv1unmzabr6z3h50ozro81foqw8n4lry93jxbd090heuth1djp2rliw1a90t7", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "purple-sun-48360659", // the neon project under wich your DB runs
      neonRole: "strapi", // create it manually under roles for your project first
      //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    }
  },
}