import {AppComponent} from './app.component';
import {ServerModule} from '@angular/platform-server';
import {AppModule} from './app.module';
import {NgModule} from '@angular/core';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
