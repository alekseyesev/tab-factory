import { Component, Input } from "@angular/core";

@Component({
  selector: "tab-title",
  template: `
    <div
      [ngClass]="{
        'tabs__title--active': active,
        tabs__titles: true,
        tabs__title: true
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .tabs__titles {
        flex: 1 1 0;
        flex-direction: row;
        margin-bottom: 10px;
      }
    `,

    `
      .tabs__title {
        display: inline-block;
        padding: 5px;
        cursor: pointer;
      }
    `,
    `
      .tabs__title--active {
        border-bottom: 2px solid #ff2222;
      }
    `
  ]
})
export class TabTitleComponent {
  @Input() active: boolean;
}
