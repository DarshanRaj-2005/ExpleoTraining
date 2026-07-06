module.exports = {
    default : {
        "formatOptions" : {
            "snippetInterface" : "async-await"
        },
        requireModule: [
            "ts-node/register"
        ],

        require : [
            "src/test/stepdefinitions/**/*.ts",
            "src/test/hooks/**/*.ts",
            "src/test/world/**/*.ts"
            // "src/test/support/**/*.ts"
        ],

        paths: [
            "src/test/features/**/*.feature"
        ],

        publishQuiet : true,
        dryRun: false,

        format: [
            "progress",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            "rerun:@rerun.txt"
        ]
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },

        requireModule: [
            "ts-node/register"
        ],

        require: [
            "src/test/steps/**/*.ts",
            "src/hooks/**/*.ts"
        ],

        paths: [
            "@rerun.txt"
        ],

        publishQuiet: true,
        dryRun: false,

        format: [
            "progress",
            "json:reports/rerun-report.json",
            "html:reports/rerun-report.html",
            "rerun:@rerun.txt"
        ]
    }
}

