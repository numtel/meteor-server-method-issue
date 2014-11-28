Package.describe({
  name: 'server-method-call-issue',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('server-method-call-issue.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('server-method-call-issue');
  api.addFiles('server-method-call-issue-tests.js');
});
