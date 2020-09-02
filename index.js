const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");
const fs = require('fs');

(async () => {

    try {
        //get payload
        const payload = github.context.payload;

        //get json file path
        const path = core.getInput("path");

        //read json file
        const phpinsights = JSON.parse(fs.readFileSync(path));

        //service credentials
        const url = core.getInput('url');
        const password = core.getInput('password');

        //get repo user/name
        const author = payload.repository.owner
        const repo = payload.repository.name;

        //upload data
        await axios.post(url, {
            password: password,
            author: author,
            repo: repo,
            file: phpinsights
        });

    } catch (error) {
        console.log(JSON.stringify(error, undefined, 2));
        core.setFailed(error.message);
    }

})();