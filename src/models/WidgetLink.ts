export interface WidgetLinkInterface {
href: string;
text: string;
}

export default class WidgetLink implements WidgetLinkInterface {
href: string;
text: string;

constructor(href: string, text: string) {
  this.href = href;
  this.text = text;
}
}
