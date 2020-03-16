import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TabsComponent } from "./tabs.component";
import { TabComponent } from "./tab.component";
import { TabTitleComponent } from "./tab-title.component";
import { TabContentComponent } from "./tab-content.component";

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent
  ],
  imports: [BrowserModule],
  exports: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent]
})
export class TabsModule {}
