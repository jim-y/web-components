import { html, css, LitElement, property } from 'lit-element';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';

export class Button extends LitElement {
  static styles = css`
    button {
      background-color: #fff;
      border-color: #dbdbdb;
      border-width: 1px;
      color: #363636;
      cursor: pointer;
      justify-content: center;
      padding-bottom: calc(0.5em - 1px);
      padding-left: 1em;
      padding-right: 1em;
      padding-top: calc(0.5em - 1px);
      text-align: center;
      white-space: nowrap;
      -webkit-appearance: none;
      align-items: center;
      border-radius: 4px;
      box-shadow: none;
      display: inline-flex;
      font-size: 1rem;
      height: 2.5em;
      justify-content: flex-start;
      line-height: 1.5;
      position: relative;
      vertical-align: top;
      user-select: none;
    }

    button.primary {
      color: #fff;
      background-color: teal;
    }
  `;

  private _classes: any = {};

  constructor() {
    super();
  }

  @property({ type: String })
  variant = 'raised';

  @property({ type: String })
  color = 'default';

  __getClassInfo() {
    switch (this.color) {
      case 'error':
        this._classes.error = true;
        break;
      case 'primary':
        this._classes.primary = true;
        break;
    }
    return classMap({ ...this._classes } as ClassInfo);
  }
  render() {
    return html`
      <button class=${this.__getClassInfo()}><slot></slot></button>
    `;
  }
}
