// Config ...
export default class Config {
    // constructor sets up our configuration
    // by reading the environment variable and setting them up
    constructor() {
        this.port = process.env.PORT
        this.twitter_api_key = process.env.TWITTER_API_KEY
    }
}
