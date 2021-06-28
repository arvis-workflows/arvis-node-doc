const arvish = require('arvish');
const builtinModules = require('builtin-modules');

const items = builtinModules.map((moduleName) => {
    return {
        title: moduleName,
        subtitle: '',
        arg: `https://nodejs.org/api/${moduleName}.html`,
        quicklookurl: `https://nodejs.org/api/${moduleName}.html`,
    };
});

arvish.output(arvish.inputMatches(items, 'title'));