A simple library to deal with file submitting.

### How to use
Import library to your module
```typescript
import {FileSubmitModule} from "angular4-file-submit";

@NgModule({
    ],
    imports: [
        FileSubmitModule
    ]
})
export class AdminModule {
}

```
After that, you are free to use directive for you inputs.

```typescript
<input type="file" name="image_file" ng4-file-submit>
```

Directive provides a public method to get formData object ready to be submitted with your service

```typescript
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {PhotosService} from "../../../../services/photos.service";
import {Photo, CATEGORIES_LIST} from "../../../../../shared/models/photo.model";
import {FileSubmitDirective} from 'angular4-file-submit';

@Component({
    selector: 'app-upload-photo',
    templateUrl: 'upload-photo.component.html',
    styleUrls: [
        'upload-photo.component.scss'
    ]
})
export class UploadPhotoComponent implements OnInit {
    @ViewChild(FileSubmitDirective) fileSubmitDirective: FileSubmitDirective;

    
    uploadPhoto() {
        if (!this.validateModel()) {
            return;
        }

        let formData = this.fileSubmitDirective.getFormData();

        for (const prop in this.model) {
            formData.set(prop, this.model[prop]);
        }

        return this.photosService.createPhoto(formData)
            .then((results) => {
                this.dialogRef.close(results[0]);
            });
    }
}

```