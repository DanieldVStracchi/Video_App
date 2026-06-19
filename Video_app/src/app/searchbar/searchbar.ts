import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.html',
  styleUrls: ['./searchbar.css'],
})

export class Searchbar {

      private youtubeRegex = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}(\&.*)?$/;

    searchForm = new FormGroup({
        videoUrl: new FormControl('', 
            {
            nonNullable: true,
            validators:
            [
                Validators.required,    //necesita algo a enviar 
                Validators.pattern(this.youtubeRegex)   //tiene que seguir el patrón establecido en el regex
            ]
        })

    })

    submittedSearch = output<string>();

    
    get isInvalid(): boolean {  //comprueba si se ha escrito bien el URL
    const control = this.searchForm.get('videoUrl');
    return control ? control.invalid : false;
    }

    onSearch() {
        if (this.searchForm.valid) {
        const urlValue = this.searchForm.controls.videoUrl.value;
        // Emitimos la URL limpia hacia el componente padre
        this.submittedSearch.emit(urlValue);
        // Opcional: Reiniciar el formulario tras el envío
        this.searchForm.reset();
        }
    }
 
}
