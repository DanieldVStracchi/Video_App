import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage';


@Component({
    selector: 'app-searchbar',
    imports: [ReactiveFormsModule],
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

    constructor (private localStorageService: LocalStorageService){}

    onSearch() {

        if (this.searchForm.valid) {
            const urlValue = this.searchForm.controls.videoUrl.value;
            this.submittedSearch.emit(urlValue);

            // TODO: Here, save your item in localStorage using localStorage.setItem('key', data) (change key and data accordingly, you might need json stringify)

            //PARA GUARDAR EN EL LOCAL STORAGE
            //COGE TODO EL HISTORIAL Y LO GUARDA EN UN ARRAY VACÍO

            const existingHistory = this.localStorageService.getItem('searchHistory') || '[]';

            //PARA TRANSFORMARLO EN EL LINGO DE JSON

            const historyArray: string[] = JSON.parse(existingHistory);

            //TONTERÍA PARA CONFIRMAR QUE NO HAY DUPLICADOS
            if (urlValue && !historyArray.includes(urlValue))
                historyArray.push(urlValue);

            //PARA VOLVER A GUARDARLO EN UN STRING
            this.localStorageService.setItem('searchHistory', JSON.stringify(historyArray))
            this.searchForm.reset();
        }
    }

}
