
module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests/**/*.test.js'
    ],
    preprocessors:{
      'tests/**/*.test.js': ['webpack']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    }
  });
};
