import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductBuilderComponent } from './product-builder/product-builder.component';
import { BackComponent } from './back/back.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { QuantityEditComponent } from './quantity-edit/quantity-edit.component';
import { SocialMediaCardComponent } from './social-media-card/social-media-card.component';
import { UploadPhotosComponentComponent } from './upload-photos-component/upload-photos-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductBuilderComponent,
    BackComponent,
    ProductDescriptionComponent,
    MyAccountComponent,
    QuantityEditComponent,
    SocialMediaCardComponent,
    UploadPhotosComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
