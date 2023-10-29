
# ng-ion-alphabetical-ui
Librería visual que te ordena un array de objectos alfabéticamente y te los lista, la navegación puede ser onClick u onDrag. 
Cuando pulses una letra, la sección del contenido automáticamente hará scroll hasta llegar a la sección.

![Prun app](https://raw.githubusercontent.com/DavidDavila/prun-ionic-app/main/readme.png "Prun app")

## Instalacion
Para instalar esta libraría visual, pon en tu consola:

    
    npm install ng-ion-alphabetical-ui
    
Para importar el módulo:
    
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser'; 
    import { AppComponent } from './app.component';
    import {  NgAlphabeticalListModule } from '../../../ng-ui-list/src/public-api';
     
    
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule, 
        NgAlphabeticalListModule ,  <-- Importamos el módulo
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

## Uso
Para que al seleccionar una letra, el contenedor pueda navegar hasta la sección correspondiente. HAY que poner el atributo **[attr.letter-list]** al comienzo de la sección.
Esto es un ejemplo de implementación:

    <section>
        <alphabetical-letter></alphabetical-letter>
        <alphabetical-list> 
          <!-- Recorre tu lista -->
          <ul id="plant-list">
            <ng-container
              *ngFor="let item of plantList | groupByFirstLetter | keyvalue">
              <li
                [attr.letter-list]="item.key" <---- AQUÍ EL ATRIBUTO
                [ngClass]="{ 'height-0': !item.value.length }"
              >{{ item.key }}
                <ul>
                  <ng-container *ngFor="let plant of item.value">
                    <li>
                      Esta es la planta: {{ plant.name }}
                    </li>
                  </ng-container>
                </ul>
              </li>
            </ng-container>
          </ul>
        </alphabetical-list>
    </section>
      

