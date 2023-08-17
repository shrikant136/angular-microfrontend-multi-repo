import { ModuleWithProviders, NgModule } from '@angular/core';
import { DesLibraryComponent } from './des-library.component';
import { DesLibraryService } from './des-library.service';

@NgModule({
  declarations: [DesLibraryComponent],
  imports: [],
  exports: [DesLibraryComponent],
})
export class DesLibraryModule {
  static forRoot(): ModuleWithProviders<DesLibraryModule> {
    return {
      ngModule: DesLibraryModule,
      providers: [DesLibraryService],
    };
  }
}
