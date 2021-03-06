JazzMint.defineConfig({

  specDir : './example/Spec', //this should point to where your Spec Files are located
  sourceDir : './example/Source',

  appendSpecToFiles : true,
  appendJSToFiles : true

});

JazzMint.defineTestSuite('all',{

  quitWhenLoadFailure : true,

  queryString : {
    specFiles : 'random',
    sourceFiles : 'random'
  },

  specFiles : 'hello,testing',
  sourceFiles : 'hello'

});
