import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public tabs: Array<number>;
  public activeTab: number;

  public ngOnInit() {
    this.tabs = [1, 2];
    this.activeTab = 1;
  }

  public onActivate(tab: number) {
    this.activeTab = tab;
  }

  public dec() {
    if (this.tabs.length > 1) {
      const firstTab = this.tabs[0];
      const lastTab = this.tabs[this.tabs.length - 1];
      if (this.activeTab === lastTab) {
        this.activeTab = firstTab;
      }
    }
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    this.tabs = [...this.tabs, this.tabs.length + 1];
  }
}
