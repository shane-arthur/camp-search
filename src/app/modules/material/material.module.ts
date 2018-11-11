import { NgModule } from '@angular/core';
import { MatMenuModule, MatIconModule, MatToolbarModule, MatInputModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatCardModule
    ],
    declarations: [],
    exports: [
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatCardModule
    ]
  })
  export class MaterialModule {}

