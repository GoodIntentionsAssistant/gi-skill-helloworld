/**
 * Hello World Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class HelloWorldIntent extends Intent {

  setup() {
    this.train('hello world');
  }

  response(request) {
    return 'Hello!';
  }

}

