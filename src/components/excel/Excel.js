import { $ } from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components.forEach(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
      // $root.insertAdjacentHTML('beforeend', component.toHTML());
    });

    return $root;
  }

  render() {
    // this.$el.insertAdjacentHTML('afterbegin', `<>Test</>`);
    this.$el.append(this.getRoot());
  }
}
