import { Component } from '@angular/core';
import { SelectLetterService } from '../../../ng-ui-list/src/public-api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-demo';
  plantList: { [key: string]: any } = {
    "Aegagropila linnaei": {
      "imgs": [
        "/plants/img/Aegagropila linnaei/0.png",
        "/plants/img/Aegagropila linnaei/1.png",
        "/plants/img/Aegagropila linnaei/2.png",
        "/plants/img/Aegagropila linnaei/5.png",
        "/plants/img/Aegagropila linnaei/6.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "cosmopolitan",
        "crecimiento": "lento",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Varía, puede formar esferas densas de varios tamaños",
        "description": "Esta planta acuática es conocida como musgo de agua marimo. Es una especie de alga filamentosa que forma esferas densas y suaves. Es popular en acuarios debido a su apariencia única y su capacidad para purificar el agua.",
        "zona": "Superficie",
        "temperatura": "6-20 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "6-20 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Alternanthera reineckii Mini": {
      "imgs": [
        "/plants/img/Alternanthera reineckii Mini/0.png",
        "/plants/img/Alternanthera reineckii Mini/1.png",
        "/plants/img/Alternanthera reineckii Mini/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "5 - 10 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-20 cm",
        "description": "Alternanthera reineckii Mini es una variedad en miniatura de la planta de acuario Alternanthera reineckii. Tiene hojas estrechas y de color rojo intenso, lo que le da un aspecto llamativo en el acuario. Es una planta compacta y de crecimiento lento, ideal para acuarios más pequeños o como planta de primer plano.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.0",
        "kh": "2-8 dKH",
        "gh": "4-12 dGH",
        "nutriente": "Potasio"
      }
    },
    "Alternanthera reineckii Pink": {
      "imgs": [
        "/plants/img/Alternanthera reineckii Pink/0.png",
        "/plants/img/Alternanthera reineckii Pink/1.png",
        "/plants/img/Alternanthera reineckii Pink/2.png",
        "/plants/img/Alternanthera reineckii Pink/6.png",
        "/plants/img/Alternanthera reineckii Pink/7.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 25-50 cm",
        "description": "Alternanthera reineckii Pink es una planta de acuario de color rosa intenso. Tiene hojas puntiagudas y de forma ovalada que crecen en espiral alrededor del tallo. Es una planta de crecimiento moderado que requiere una iluminación intensa y una adición regular de nutrientes para mantener su coloración vibrante.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.0",
        "kh": "2-8 dKH",
        "gh": "4-12 dGH",
        "nutriente": "Potasio"
      }
    },
    "Alternanthera reineckii Rosanervig": {
      "imgs": [
        "/plants/img/Alternanthera reineckii Rosanervig/0.png",
        "/plants/img/Alternanthera reineckii Rosanervig/1.png",
        "/plants/img/Alternanthera reineckii Rosanervig/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "5 - 20 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Alternanthera reineckii Rosanervig es una planta acuática de hojas rojas y nervaduras rosadas. Tiene un crecimiento compacto y denso, lo que la hace adecuada para acuarios de tamaño medio a grande. Requiere una iluminación intensa y una adición regular de nutrientes para mantener su coloración intensa.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.0",
        "kh": "2-8 dKH",
        "gh": "4-12 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri caladiifolia": {
      "imgs": [
        "/plants/img/Anubias barteri caladiifolia/0.png",
        "/plants/img/Anubias barteri caladiifolia/1.png",
        "/plants/img/Anubias barteri caladiifolia/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "10 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-25 cm",
        "description": "Anubias barteri caladiifolia es una variedad de Anubias que tiene hojas grandes y en forma de lanza. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri Mini Coin": {
      "imgs": [
        "/plants/img/Anubias barteri Mini Coin/0.png",
        "/plants/img/Anubias barteri Mini Coin/1.png",
        "/plants/img/Anubias barteri Mini Coin/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Anubias barteri Mini Coin es una variedad compacta de Anubias que tiene hojas pequeñas y redondas. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri nana": {
      "imgs": [
        "/plants/img/Anubias barteri nana/0.png",
        "/plants/img/Anubias barteri nana/1.png",
        "/plants/img/Anubias barteri nana/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "5 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-15 cm",
        "description": "Anubias barteri nana es una variedad enana de Anubias que tiene hojas pequeñas y de forma ovalada. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri Petite": {
      "imgs": [
        "/plants/img/Anubias barteri Petite/0.png",
        "/plants/img/Anubias barteri Petite/1.png",
        "/plants/img/Anubias barteri Petite/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "3 - 5 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Anubias barteri Petite es una variedad enana de Anubias que tiene hojas pequeñas y redondas. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri sp": {
      "imgs": [
        "/plants/img/Anubias barteri sp/0.png",
        "/plants/img/Anubias barteri sp/1.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "5 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-25 cm",
        "description": "Anubias barteri sp es una variedad de Anubias que tiene hojas grandes y de forma ovalada. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri var. barteri": {
      "imgs": [
        "/plants/img/Anubias barteri var. barteri/0.png",
        "/plants/img/Anubias barteri var. barteri/1.png",
        "/plants/img/Anubias barteri var. barteri/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-25 cm",
        "description": "Anubias barteri var. barteri es una variedad de Anubias que tiene hojas grandes y de forma ovalada. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri var. caladiifolia": {
      "imgs": [
        "/plants/img/Anubias barteri var. caladiifolia/0.png",
        "/plants/img/Anubias barteri var. caladiifolia/1.png",
        "/plants/img/Anubias barteri var. caladiifolia/2.png",
        "/plants/img/Anubias barteri var. caladiifolia/6.png",
        "/plants/img/Anubias barteri var. caladiifolia/7.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "10 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-25 cm",
        "description": "Anubias barteri var. caladiifolia es una variedad de Anubias que tiene hojas grandes y en forma de lanza. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri var. Coffeifolia": {
      "imgs": [
        "/plants/img/Anubias barteri var. Coffeifolia/0.png",
        "/plants/img/Anubias barteri var. Coffeifolia/1.png",
        "/plants/img/Anubias barteri var. Coffeifolia/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Anubias barteri var. Coffeifolia es una variedad de Anubias que tiene hojas grandes y de color marrón rojizo. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri var. glabra": {
      "imgs": [
        "/plants/img/Anubias barteri var. glabra/0.png",
        "/plants/img/Anubias barteri var. glabra/1.png",
        "/plants/img/Anubias barteri var. glabra/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "10 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-25 cm",
        "description": "Anubias barteri var. glabra es una variedad de Anubias que tiene hojas grandes y de forma ovalada. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri var. nana": {
      "imgs": [
        "/plants/img/Anubias barteri var. nana/0.png",
        "/plants/img/Anubias barteri var. nana/1.png",
        "/plants/img/Anubias barteri var. nana/11.png",
        "/plants/img/Anubias barteri var. nana/12.png",
        "/plants/img/Anubias barteri var. nana/15.png",
        "/plants/img/Anubias barteri var. nana/16.png",
        "/plants/img/Anubias barteri var. nana/21.png",
        "/plants/img/Anubias barteri var. nana/22.png",
        "/plants/img/Anubias barteri var. nana/6.png",
        "/plants/img/Anubias barteri var. nana/7.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "5 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-15 cm",
        "description": "Anubias barteri var. nana es una variedad enana de Anubias que tiene hojas pequeñas y de forma ovalada. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias barteri var. nana Large": {
      "imgs": [
        "/plants/img/Anubias barteri var. nana Large/0.png",
        "/plants/img/Anubias barteri var. nana Large/1.png",
        "/plants/img/Anubias barteri var. nana Large/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "5 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-15 cm",
        "description": "Anubias barteri var. nana Large es una variedad enana de Anubias que tiene hojas más grandes que la variedad nana estándar. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Anubias gracilis": {
      "imgs": [
        "/plants/img/Anubias gracilis/0.png",
        "/plants/img/Anubias gracilis/1.png",
        "/plants/img/Anubias gracilis/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-25 cm",
        "description": "Anubias gracilis es una variedad de Anubias que tiene hojas grandes y de forma ovalada. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Aponogeton boivinianus": {
      "imgs": [
        "/plants/img/Aponogeton boivinianus/0.png",
        "/plants/img/Aponogeton boivinianus/1.png",
        "/plants/img/Aponogeton boivinianus/2.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "africa",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Aponogeton boivinianus es una planta acuática bulbosa que tiene hojas grandes y onduladas. Es una planta de crecimiento rápido y requiere una iluminación intensa. Sus hojas pueden alcanzar la superficie del agua y formar una estera flotante. Esta planta puede producir flores en forma de espiga en condiciones adecuadas.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.5-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Potasio"
      }
    },
    "Aponogeton longiplumulosus": {
      "imgs": [
        "/plants/img/Aponogeton longiplumulosus/0.png",
        "/plants/img/Aponogeton longiplumulosus/1.png",
        "/plants/img/Aponogeton longiplumulosus/2.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "africa",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Aponogeton longiplumulosus es una planta acuática bulbosa que tiene hojas largas y plumosas. Es una planta de crecimiento moderado y requiere una iluminación moderada. Sus hojas pueden alcanzar la superficie del agua. Esta planta puede producir flores en forma de espiga en condiciones adecuadas.",
        "zona": "Fondo",
        "temperatura": "20-30 °C",
        "ph": "6.5-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Potasio"
      }
    },
    "Aponogeton madagascariensis": {
      "imgs": [
        "/plants/img/Aponogeton madagascariensis/0.png",
        "/plants/img/Aponogeton madagascariensis/1.png",
        "/plants/img/Aponogeton madagascariensis/2.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "africa",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 40-60 cm",
        "description": "Aponogeton madagascariensis es una planta acuática bulbosa que tiene hojas largas y estrechas. Es una planta de crecimiento medio y requiere una iluminación moderada. Sus hojas pueden alcanzar la superficie del agua y formar una estera flotante. Esta planta puede producir flores en forma de espiga en condiciones adecuadas.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Potasio"
      }
    },
    "Aponogeton ulvaceus": {
      "imgs": [
        "/plants/img/Aponogeton ulvaceus/0.png",
        "/plants/img/Aponogeton ulvaceus/1.png",
        "/plants/img/Aponogeton ulvaceus/2.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "africa",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Aponogeton ulvaceus es una planta acuática bulbosa que tiene hojas largas y onduladas. Es una planta de crecimiento rápido y requiere una iluminación moderada. Sus hojas pueden alcanzar la superficie del agua. Esta planta puede producir flores en forma de espiga en condiciones adecuadas.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Potasio"
      }
    },
    "Bacopa australis": {
      "imgs": [
        "/plants/img/Bacopa australis/0.png",
        "/plants/img/Bacopa australis/1.png",
        "/plants/img/Bacopa australis/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "5 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 30-60 cm",
        "description": "Bacopa australis es una planta acuática que tiene hojas pequeñas y redondas. Es una planta de crecimiento rápido y requiere una iluminación moderada. Sus tallos pueden volverse rojos en condiciones de alta iluminación. Se recomienda podar regularmente para mantener su forma compacta.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Bacopa caroliniana": {
      "imgs": [
        "/plants/img/Bacopa caroliniana/0.png",
        "/plants/img/Bacopa caroliniana/1.png",
        "/plants/img/Bacopa caroliniana/11.png",
        "/plants/img/Bacopa caroliniana/12.png",
        "/plants/img/Bacopa caroliniana/15.png",
        "/plants/img/Bacopa caroliniana/16.png",
        "/plants/img/Bacopa caroliniana/2.png",
        "/plants/img/Bacopa caroliniana/6.png",
        "/plants/img/Bacopa caroliniana/7.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "lento",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Bacopa caroliniana es una planta acuática que tiene hojas pequeñas y redondas. Es una planta de crecimiento lento y requiere una iluminación moderada. Sus tallos pueden volverse rojos en condiciones de alta iluminación. Se recomienda podar regularmente para mantener su forma compacta.",
        "zona": "Medio-Fondo",
        "temperatura": "20-30 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Bacopa monnieri Compact": {
      "imgs": [
        "/plants/img/Bacopa monnieri Compact/0.png",
        "/plants/img/Bacopa monnieri Compact/1.png",
        "/plants/img/Bacopa monnieri Compact/3.png",
        "/plants/img/Bacopa monnieri Compact/6.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cultivar",
        "crecimiento": "rápido",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Bacopa monnieri Compact es una variedad compacta de Bacopa que tiene hojas pequeñas y redondas. Es una planta de crecimiento lento y requiere una iluminación moderada. Sus tallos pueden volverse rojos en condiciones de alta iluminación. Se recomienda podar regularmente para mantener su forma compacta.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "5.5-7.5",
        "kh": "2-12 dKH",
        "gh": "4-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Blyxa japonica": {
      "imgs": [
        "/plants/img/Blyxa japonica/0.png",
        "/plants/img/Blyxa japonica/1.png",
        "/plants/img/Blyxa japonica/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "10 - 20 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-20 cm",
        "description": "Blyxa japonica es una planta acuática que tiene hojas delgadas y puntiagudas. Forma rosetas compactas y es ideal para acuarios plantados. Es una planta de crecimiento moderado y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato para un mejor crecimiento.",
        "zona": "Frente",
        "temperatura": "20-30 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Bolbitis heudelotii": {
      "imgs": [
        "/plants/img/Bolbitis heudelotii/0.png",
        "/plants/img/Bolbitis heudelotii/1.png",
        "/plants/img/Bolbitis heudelotii/11.png",
        "/plants/img/Bolbitis heudelotii/2.png",
        "/plants/img/Bolbitis heudelotii/3.png",
        "/plants/img/Bolbitis heudelotii/5.png",
        "/plants/img/Bolbitis heudelotii/6.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "15 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Bolbitis heudelotii es una planta acuática que pertenece a la familia de los helechos. Tiene hojas verdes y finamente divididas, que le dan una apariencia exótica. Se puede fijar a rocas o maderas en el acuario y también puede crecer emersa en terrarios húmedos. Requiere una iluminación moderada y crece lentamente.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Bucephalandra Kedagang": {
      "imgs": [
        "/plants/img/Bucephalandra Kedagang/0.png",
        "/plants/img/Bucephalandra Kedagang/1.png",
        "/plants/img/Bucephalandra Kedagang/2.png",
        "/plants/img/Bucephalandra Kedagang/3.png",
        "/plants/img/Bucephalandra Kedagang/6.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-15 cm",
        "description": "Bucephalandra Kedagang es una variedad de Bucephalandra que tiene hojas pequeñas y de color verde oscuro. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "5.5-7.5",
        "kh": "2-15 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Bucephalandra pygmaea Bukit Kelam": {
      "imgs": [
        "/plants/img/Bucephalandra pygmaea Bukit Kelam/0.png",
        "/plants/img/Bucephalandra pygmaea Bukit Kelam/1.png",
        "/plants/img/Bucephalandra pygmaea Bukit Kelam/2.png",
        "/plants/img/Bucephalandra pygmaea Bukit Kelam/3.png",
        "/plants/img/Bucephalandra pygmaea Bukit Kelam/6.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "5 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Bucephalandra pygmaea Bukit Kelam es una variedad compacta de Bucephalandra que tiene hojas pequeñas y de color verde oscuro. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Troncos/Rocas",
        "temperatura": "22-28 °C",
        "ph": "5.5-7.5",
        "kh": "2-15 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Bucephalandra pygmaea Wavy Green": {
      "imgs": [
        "/plants/img/Bucephalandra pygmaea Wavy Green/0.png",
        "/plants/img/Bucephalandra pygmaea Wavy Green/1.png",
        "/plants/img/Bucephalandra pygmaea Wavy Green/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "5 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Bucephalandra pygmaea Wavy Green es una variedad compacta de Bucephalandra que tiene hojas pequeñas y onduladas de color verde. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Bucephalandra sp Red": {
      "imgs": [
        "/plants/img/Bucephalandra sp Red/0.png",
        "/plants/img/Bucephalandra sp Red/1.png",
        "/plants/img/Bucephalandra sp Red/2.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "5 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Bucephalandra sp Red es una variedad de Bucephalandra que tiene hojas pequeñas y de color rojo intenso. Es una planta resistente que puede crecer tanto sumergida como emersa. Se recomienda fijarla a una roca o madera en el acuario, ya que no debe enterrarse en el sustrato. Es una planta de crecimiento lento y no requiere una iluminación intensa.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cabomba aquatica": {
      "imgs": [
        "/plants/img/Cabomba aquatica/0.png",
        "/plants/img/Cabomba aquatica/1.png",
        "/plants/img/Cabomba aquatica/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 30-80 cm",
        "description": "Cabomba aquatica es una planta acuática que tiene hojas plumosas y delicadas. Es una planta de crecimiento rápido y requiere una iluminación intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su apariencia atractiva.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.5-7.5",
        "kh": "2-15 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Cardamine lyrata": {
      "imgs": [
        "/plants/img/Cardamine lyrata/0.png",
        "/plants/img/Cardamine lyrata/1.png",
        "/plants/img/Cardamine lyrata/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "medio",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-15 cm",
        "description": "Cardamine lyrata es una planta acuática que tiene hojas redondas y dentadas. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios pequeños y nano acuarios.",
        "zona": "Frente",
        "temperatura": "20-24 °C",
        "ph": "5.5-7.5",
        "kh": "2-10 dKH",
        "gh": "4-10 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Ceratophyllum demersum Foxtail": {
      "imgs": [
        "/plants/img/Ceratophyllum demersum Foxtail/0.png",
        "/plants/img/Ceratophyllum demersum Foxtail/1.png",
        "/plants/img/Ceratophyllum demersum Foxtail/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cosmopolitan",
        "crecimiento": "rápido",
        "altura": "5 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-40 cm",
        "description": "Ceratophyllum demersum Foxtail es una planta acuática que tiene hojas finamente divididas y plumosas. Forma densas matas de hojas y no tiene raíces verdaderas. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se puede utilizar como planta flotante o plantada en el sustrato.",
        "zona": "Medio-Fondo",
        "temperatura": "15-30 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Ceratopteris thalictroides": {
      "imgs": [
        "/plants/img/Ceratopteris thalictroides/0.png",
        "/plants/img/Ceratopteris thalictroides/1.png",
        "/plants/img/Ceratopteris thalictroides/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "15 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 30-60 cm",
        "description": "Ceratopteris thalictroides, también conocida como helecho de agua india, es una planta acuática que tiene hojas grandes y delicadas. Puede crecer tanto sumergida como emersa. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato o fijarla a una roca o madera en el acuario.",
        "zona": "Fondo",
        "temperatura": "20-30 °C",
        "ph": "6.0-8.0",
        "kh": "2-15 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Crinum calamistratum": {
      "imgs": [
        "/plants/img/Crinum calamistratum/0.png",
        "/plants/img/Crinum calamistratum/1.png",
        "/plants/img/Crinum calamistratum/2.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 30-70 cm",
        "description": "Crinum calamistratum es una planta acuática bulbosa que tiene hojas largas y rizadas. Es una planta de crecimiento lento y requiere una iluminación moderada a intensa. Se recomienda plantar el bulbo en el sustrato con la parte superior expuesta. Es una planta resistente que puede agregar un toque exótico a un acuario plantado.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "5.5-7.5",
        "kh": "2-12 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Potasio"
      }
    },
    "Crinum thaianum": {
      "imgs": [
        "/plants/img/Crinum thaianum/0.png",
        "/plants/img/Crinum thaianum/1.png",
        "/plants/img/Crinum thaianum/2.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 30-60 cm",
        "description": "Crinum thaianum es una planta acuática bulbosa que tiene hojas largas y estrechas. Es una planta de crecimiento lento y requiere una iluminación moderada a intensa. Se recomienda plantar el bulbo en el sustrato con la parte superior expuesta. Es una planta resistente que puede agregar un toque exótico a un acuario plantado.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Potasio"
      }
    },
    "Cryptocoryne albida Brown": {
      "imgs": [
        "/plants/img/Cryptocoryne albida Brown/0.png",
        "/plants/img/Cryptocoryne albida Brown/1.png",
        "/plants/img/Cryptocoryne albida Brown/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "5 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-30 cm",
        "description": "Cryptocoryne albida Brown es una variedad de Cryptocoryne que tiene hojas estrechas y de color marrón. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios de estilo natural.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne beckettii Petchii": {
      "imgs": [
        "/plants/img/Cryptocoryne beckettii Petchii/0.png",
        "/plants/img/Cryptocoryne beckettii Petchii/1.png",
        "/plants/img/Cryptocoryne beckettii Petchii/12.png",
        "/plants/img/Cryptocoryne beckettii Petchii/3.png",
        "/plants/img/Cryptocoryne beckettii Petchii/6.png",
        "/plants/img/Cryptocoryne beckettii Petchii/7.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "10 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Cryptocoryne beckettii Petchii es una variedad de Cryptocoryne que tiene hojas de color marrón y verde. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su apariencia atractiva.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne crispatula": {
      "imgs": [
        "/plants/img/Cryptocoryne crispatula/0.png",
        "/plants/img/Cryptocoryne crispatula/1.png",
        "/plants/img/Cryptocoryne crispatula/2.png",
        "/plants/img/Cryptocoryne crispatula/3.png",
        "/plants/img/Cryptocoryne crispatula/6.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-40 cm",
        "description": "Cryptocoryne crispatula es una planta acuática que tiene hojas estrechas y rizadas. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta resistente que puede agregar un toque exótico a un acuario plantado.",
        "zona": "Fondo",
        "temperatura": "20-30 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne parva": {
      "imgs": [
        "/plants/img/Cryptocoryne parva/0.png",
        "/plants/img/Cryptocoryne parva/1.png",
        "/plants/img/Cryptocoryne parva/2.png",
        "/plants/img/Cryptocoryne parva/3.png",
        "/plants/img/Cryptocoryne parva/4.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "5 - 10 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 5-10 cm",
        "description": "Cryptocoryne parva es una planta acuática que tiene hojas pequeñas y puntiagudas. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios pequeños y nano acuarios.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne undulata Broad Leaf": {
      "imgs": [
        "/plants/img/Cryptocoryne undulata Broad Leaf/0.png",
        "/plants/img/Cryptocoryne undulata Broad Leaf/1.png",
        "/plants/img/Cryptocoryne undulata Broad Leaf/2.png",
        "/plants/img/Cryptocoryne undulata Broad Leaf/5.png",
        "/plants/img/Cryptocoryne undulata Broad Leaf/6.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Cryptocoryne undulata Broad Leaf es una variedad de Cryptocoryne que tiene hojas anchas y onduladas. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta versátil que puede agregar un toque visual interesante a un acuario.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne usteriana": {
      "imgs": [
        "/plants/img/Cryptocoryne usteriana/0.png",
        "/plants/img/Cryptocoryne usteriana/1.png",
        "/plants/img/Cryptocoryne usteriana/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-30 cm",
        "description": "Cryptocoryne usteriana es una planta acuática que tiene hojas grandes y de color verde oscuro. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta resistente que puede ser utilizada como punto focal en un acuario.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne wendtii Green": {
      "imgs": [
        "/plants/img/Cryptocoryne wendtii Green/0.png",
        "/plants/img/Cryptocoryne wendtii Green/1.png",
        "/plants/img/Cryptocoryne wendtii Green/2.png",
        "/plants/img/Cryptocoryne wendtii Green/3.png",
        "/plants/img/Cryptocoryne wendtii Green/7.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "10 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Cryptocoryne wendtii Green es una variedad de Cryptocoryne que tiene hojas de color verde brillante. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su aspecto atractivo y su fácil mantenimiento.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne wendtii Mi Oya": {
      "imgs": [
        "/plants/img/Cryptocoryne wendtii Mi Oya/0.png",
        "/plants/img/Cryptocoryne wendtii Mi Oya/1.png",
        "/plants/img/Cryptocoryne wendtii Mi Oya/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Cryptocoryne wendtii Mi Oya es una variedad de Cryptocoryne que tiene hojas de color marrón y verde. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su apariencia atractiva y su resistencia.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne wendtii Tropica": {
      "imgs": [
        "/plants/img/Cryptocoryne wendtii Tropica/0.png",
        "/plants/img/Cryptocoryne wendtii Tropica/1.png",
        "/plants/img/Cryptocoryne wendtii Tropica/2.png",
        "/plants/img/Cryptocoryne wendtii Tropica/5.png",
        "/plants/img/Cryptocoryne wendtii Tropica/6.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Cryptocoryne wendtii Tropica es una variedad de Cryptocoryne que tiene hojas de color marrón y verde. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su apariencia atractiva y su resistencia.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cryptocoryne x willisii": {
      "imgs": [
        "/plants/img/Cryptocoryne x willisii/0.png",
        "/plants/img/Cryptocoryne x willisii/1.png",
        "/plants/img/Cryptocoryne x willisii/3.png",
        "/plants/img/Cryptocoryne x willisii/6.png",
        "/plants/img/Cryptocoryne x willisii/7.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-15 cm",
        "description": "Cryptocoryne x willisii es una planta acuática que tiene hojas alargadas y de color verde oscuro. Es una planta de crecimiento lento y requiere una iluminación moderada. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta versátil que puede adaptarse a diferentes condiciones de acuario.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Cyperus helferi": {
      "imgs": [
        "/plants/img/Cyperus helferi/0.png",
        "/plants/img/Cyperus helferi/1.png",
        "/plants/img/Cyperus helferi/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-30 cm",
        "description": "Cyperus helferi es una planta acuática que tiene hojas largas y delgadas que se asemejan a las hojas de una hierba. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios de estilo natural y puede agregar textura y altura al diseño del acuario.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Echinodorus Aquartica": {
      "imgs": [
        "/plants/img/Echinodorus Aquartica/0.png",
        "/plants/img/Echinodorus Aquartica/1.png",
        "/plants/img/Echinodorus Aquartica/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "10 - 20 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Echinodorus Aquartica, también conocida como Echinodorus amazonicus, es una planta acuática que tiene hojas grandes y alargadas de color verde oscuro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su aspecto majestuoso y su capacidad para formar un punto focal en el acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.5-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus Barthii": {
      "imgs": [
        "/plants/img/Echinodorus Barthii/0.png",
        "/plants/img/Echinodorus Barthii/1.png",
        "/plants/img/Echinodorus Barthii/2.png",
        "/plants/img/Echinodorus Barthii/6.png",
        "/plants/img/Echinodorus Barthii/7.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Echinodorus Barthii es una planta acuática que tiene hojas de color verde claro y forma ovalada. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su aspecto llamativo y su capacidad para agregar color y volumen al acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus cordifolius Fluitans": {
      "imgs": [
        "/plants/img/Echinodorus cordifolius Fluitans/0.png",
        "/plants/img/Echinodorus cordifolius Fluitans/1.png",
        "/plants/img/Echinodorus cordifolius Fluitans/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-60 cm",
        "description": "Echinodorus cordifolius Fluitans es una variedad de Echinodorus que tiene hojas grandes y en forma de corazón. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta versátil que puede ser utilizada como punto focal en un acuario y crear una sensación de exuberancia en el diseño del acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.5-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus grisebachii Bleherae": {
      "imgs": [
        "/plants/img/Echinodorus grisebachii Bleherae/0.png",
        "/plants/img/Echinodorus grisebachii Bleherae/1.png",
        "/plants/img/Echinodorus grisebachii Bleherae/2.png",
        "/plants/img/Echinodorus grisebachii Bleherae/3.png",
        "/plants/img/Echinodorus grisebachii Bleherae/8.png",
        "/plants/img/Echinodorus grisebachii Bleherae/9.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Echinodorus grisebachii Bleherae es una variedad de Echinodorus que tiene hojas grandes y de color verde oscuro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su apariencia atractiva y su capacidad para formar grupos densos en el acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus Ozelot": {
      "imgs": [
        "/plants/img/Echinodorus Ozelot/0.png",
        "/plants/img/Echinodorus Ozelot/1.png",
        "/plants/img/Echinodorus Ozelot/4.png",
        "/plants/img/Echinodorus Ozelot/5.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Echinodorus Ozelot es una variedad de Echinodorus que tiene hojas de color verde con manchas de color marrón o rojo. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su aspecto atractivo y su capacidad para agregar color y contraste al acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus Ozelot Green": {
      "imgs": [
        "/plants/img/Echinodorus Ozelot Green/0.png",
        "/plants/img/Echinodorus Ozelot Green/1.png",
        "/plants/img/Echinodorus Ozelot Green/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Echinodorus Ozelot Green es una variedad de Echinodorus que tiene hojas de color verde con manchas más claras. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su aspecto atractivo y su capacidad para agregar color y contraste al acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus palifolius": {
      "imgs": [
        "/plants/img/Echinodorus palifolius/0.png",
        "/plants/img/Echinodorus palifolius/1.png",
        "/plants/img/Echinodorus palifolius/4.png",
        "/plants/img/Echinodorus palifolius/5.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Echinodorus palifolius es una planta acuática que tiene hojas grandes y alargadas de color verde claro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios plantados debido a su apariencia atractiva y su capacidad para agregar volumen y movimiento al acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus Red Diamond": {
      "imgs": [
        "/plants/img/Echinodorus Red Diamond/0.png",
        "/plants/img/Echinodorus Red Diamond/1.png",
        "/plants/img/Echinodorus Red Diamond/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "15 - 20 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-30 cm",
        "description": "Echinodorus Red Diamond es una variedad de Echinodorus que tiene hojas de color rojo intenso. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta llamativa que puede agregar un toque de color vibrante al acuario y ser utilizada como punto focal en el diseño del acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.5-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus Reni": {
      "imgs": [
        "/plants/img/Echinodorus Reni/0.png",
        "/plants/img/Echinodorus Reni/1.png",
        "/plants/img/Echinodorus Reni/10.png",
        "/plants/img/Echinodorus Reni/2.png",
        "/plants/img/Echinodorus Reni/3.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Echinodorus Reni es una variedad de Echinodorus que tiene hojas de color verde claro y forma alargada. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta versátil que puede ser utilizada como punto focal en un acuario y agregar un toque de frescura al diseño del acuario.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Echinodorus Rosé": {
      "imgs": [
        "/plants/img/Echinodorus Rosé/0.png",
        "/plants/img/Echinodorus Rosé/1.png",
        "/plants/img/Echinodorus Rosé/2.png",
        "/plants/img/Echinodorus Rosé/6.png",
        "/plants/img/Echinodorus Rosé/7.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Echinodorus Rosé es una planta acuática de tamaño mediano que forma una roseta compacta con hojas de color verde claro y tonos rosados. Alcanza una altura de aproximadamente 20-40 cm y puede tener un diámetro de hasta 25 cm. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.5-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Egeria densa": {
      "imgs": [
        "/plants/img/Egeria densa/0.png",
        "/plants/img/Egeria densa/1.png",
        "/plants/img/Egeria densa/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cosmopolitan",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-100 cm",
        "description": "Egeria densa, también conocida como Elodea densa, es una planta acuática de tallo que tiene hojas largas y delgadas. Es una planta de crecimiento rápido y puede adaptarse a una amplia gama de condiciones de acuario. No requiere una iluminación intensa y puede ayudar a controlar el crecimiento de algas en el acuario. Es una planta popular en acuarios de estilo natural y puede proporcionar refugio y protección para los peces.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.5-8.0",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Elatine hydropiper": {
      "imgs": [
        "/plants/img/Elatine hydropiper/0.png",
        "/plants/img/Elatine hydropiper/1.png",
        "/plants/img/Elatine hydropiper/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "europe/asia",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 3-10 cm",
        "description": "Elatine hydropiper es una planta acuática pequeña y compacta con hojas redondas y delicadas de color verde claro. Es una planta de crecimiento rápido y requiere una iluminación intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios de tamaño reducido o nano acuarios y puede formar un atractivo tapiz verde en el suelo del acuario.",
        "zona": "Frente",
        "temperatura": "20-24 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Eleocharis acicularis": {
      "imgs": [
        "/plants/img/Eleocharis acicularis/0.png",
        "/plants/img/Eleocharis acicularis/1.png",
        "/plants/img/Eleocharis acicularis/2.png",
        "/plants/img/Eleocharis acicularis/6.png",
        "/plants/img/Eleocharis acicularis/7.png"
      ],
      "desc": {
        "tipo": "estolones",
        "origen": "cosmopolitan",
        "crecimiento": "medio",
        "altura": "10 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 3-10 cm",
        "description": "Eleocharis acicularis, también conocida como hierba de aguja, es una planta acuática de tallo bajo que tiene hojas finas y alargadas. Es una planta de crecimiento rápido y se utiliza comúnmente como planta de primer plano en acuarios plantados. Requiere una iluminación intensa y se recomienda plantarla en el sustrato. Es una planta popular para crear un aspecto natural y paisajístico en el acuario.",
        "zona": "Frente",
        "temperatura": "20-26 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Eleocharis montevidensis": {
      "imgs": [
        "/plants/img/Eleocharis montevidensis/0.png",
        "/plants/img/Eleocharis montevidensis/1.png",
        "/plants/img/Eleocharis montevidensis/2.png"
      ],
      "desc": {
        "tipo": "estolones",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Eleocharis montevidensis, también conocida como pelo de mono gigante, es una planta acuática de tallo que tiene hojas delgadas y alargadas. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular para crear un aspecto natural y exuberante en el acuario.",
        "zona": "Frente",
        "temperatura": "20-26 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Eleocharis parvula": {
      "imgs": [
        "/plants/img/Eleocharis parvula/0.png",
        "/plants/img/Eleocharis parvula/1.png",
        "/plants/img/Eleocharis parvula/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "cosmopolitan",
        "crecimiento": "rápido",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 3-7 cm",
        "description": "Eleocharis parvula, también conocida como pelo de mono enano, es una planta acuática pequeña y compacta que forma densos tapices en el suelo del acuario. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular para crear un aspecto natural y ordenado en el primer plano del acuario.",
        "zona": "Frente",
        "temperatura": "20-26 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Eleocharis pusilla": {
      "imgs": [
        "/plants/img/Eleocharis pusilla/0.png",
        "/plants/img/Eleocharis pusilla/1.png",
        "/plants/img/Eleocharis pusilla/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 3-5 cm",
        "description": "Eleocharis pusilla, también conocida como pelo de mono mini, es una planta acuática muy pequeña y compacta que forma tapices densos en el suelo del acuario. Es una planta de crecimiento lento y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios de tamaño reducido o nano acuarios y puede crear un efecto visual impactante en el primer plano del acuario.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-12 dGH",
        "nutriente": "Hierro"
      }
    },
    "Eriocaulon cinereum": {
      "imgs": [
        "/plants/img/Eriocaulon cinereum/0.png",
        "/plants/img/Eriocaulon cinereum/1.png",
        "/plants/img/Eriocaulon cinereum/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "cosmopolitan",
        "crecimiento": "lento",
        "altura": "3 - 10 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Eriocaulon cinereum es una planta acuática de tallo que tiene hojas estrechas y alargadas de color verde claro. Es una planta de crecimiento lento y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta delicada y exótica que puede añadir un toque único y elegante al acuario.",
        "zona": "Frente",
        "temperatura": "22-26 °C",
        "ph": "5.0-7.0",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Fissidens fontanus": {
      "imgs": [
        "/plants/img/Fissidens fontanus/0.png",
        "/plants/img/Fissidens fontanus/1.png",
        "/plants/img/Fissidens fontanus/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "EEUU y Asia",
        "crecimiento": "lento",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "difícil",
        "tamaño": "Altura de 3-5 cm",
        "description": "Fissidens fontanus, también conocido como musgo de Phoenix, es una planta acuática de crecimiento lento que se adhiere a superficies como rocas y troncos en el acuario. Tiene hojas pequeñas y ramificadas de color verde oscuro. Requiere una iluminación moderada y se beneficia de una corriente suave. Es una planta popular en acuarios de estilo natural y puede proporcionar refugio y protección para los peces y otros organismos acuáticos.",
        "zona": "Medio-Fondo",
        "temperatura": "20-26 °C",
        "ph": "5.5-7.0",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Glossostigma elatinoides": {
      "imgs": [
        "/plants/img/Glossostigma elatinoides/0.png",
        "/plants/img/Glossostigma elatinoides/1.png",
        "/plants/img/Glossostigma elatinoides/2.png",
        "/plants/img/Glossostigma elatinoides/3.png",
        "/plants/img/Glossostigma elatinoides/7.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "australia",
        "crecimiento": "rápido",
        "altura": "3 - 5 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 1-2 cm",
        "description": "Glossostigma elatinoides, también conocido como hierba de cinta enana, es una planta acuática pequeña y rastrera que forma densos tapices en el suelo del acuario. Es una planta de crecimiento rápido y requiere una iluminación intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular para crear un aspecto natural y exuberante en el primer plano del acuario.",
        "zona": "Frente",
        "temperatura": "22-26 °C",
        "ph": "5.5-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Gratiola viscidula": {
      "imgs": [
        "/plants/img/Gratiola viscidula/0.png",
        "/plants/img/Gratiola viscidula/1.png",
        "/plants/img/Gratiola viscidula/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "lento",
        "altura": "3 - 10 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-20 cm",
        "description": "Gratiola viscidula es una planta acuática de tallo que tiene hojas estrechas y alargadas de color verde claro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios de tamaño medio a grande y puede añadir un toque de frescura al diseño del acuario.",
        "zona": "Trasera",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "3-8 dKH",
        "gh": "4-12 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Helanthium bolivianum Quadricostatus": {
      "imgs": [
        "/plants/img/Helanthium bolivianum Quadricostatus/0.png",
        "/plants/img/Helanthium bolivianum Quadricostatus/1.png",
        "/plants/img/Helanthium bolivianum Quadricostatus/2.png",
        "/plants/img/Helanthium bolivianum Quadricostatus/3.png",
        "/plants/img/Helanthium bolivianum Quadricostatus/7.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "10 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Helanthium bolivianum Quadricostatus, también conocido como Echinodorus Quadricostatus, es una planta acuática de tallo corto que tiene hojas alargadas y onduladas de color verde claro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios de estilo natural y puede formar un atractivo tapiz verde en el suelo del acuario.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Helanthium tenellum Green": {
      "imgs": [
        "/plants/img/Helanthium tenellum Green/0.png",
        "/plants/img/Helanthium tenellum Green/1.png",
        "/plants/img/Helanthium tenellum Green/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "5 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Helanthium tenellum Green, también conocido como Echinodorus tenellus, es una planta acuática de tallo corto que tiene hojas finas y alargadas de color verde claro. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular para crear un aspecto natural y exuberante en el primer plano del acuario.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Hemianthus callitrichoides Cuba": {
      "imgs": [
        "/plants/img/Hemianthus callitrichoides Cuba/0.png",
        "/plants/img/Hemianthus callitrichoides Cuba/1.png",
        "/plants/img/Hemianthus callitrichoides Cuba/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 1-3 cm",
        "description": "Hemianthus callitrichoides Cuba, también conocido como Cuba Dwarf, es una planta acuática pequeña y rastrera que forma tapices densos en el suelo del acuario. Es una planta de crecimiento rápido y requiere una iluminación intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta muy popular para crear un aspecto natural y exuberante en el primer plano del acuario.",
        "zona": "Frente",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Hemianthus micranthemoides": {
      "imgs": [
        "/plants/img/Hemianthus micranthemoides/0.png",
        "/plants/img/Hemianthus micranthemoides/1.png",
        "/plants/img/Hemianthus micranthemoides/2.png",
        "/plants/img/Hemianthus micranthemoides/3.png",
        "/plants/img/Hemianthus micranthemoides/6.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "5 - 15 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "difícil",
        "tamaño": "Altura de 10-30 cm",
        "description": "Hemianthus micranthemoides, también conocido como hierba de perlas, es una planta acuática de tallo que tiene hojas pequeñas y redondas de color verde claro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular para crear un aspecto natural y exuberante en el acuario.",
        "zona": "Frente",
        "temperatura": "20-26 °C",
        "ph": "5.0-7.5",
        "kh": "0-8 dKH",
        "gh": "0-14 dGH",
        "nutriente": "Dióxido de carbono"
      }
    },
    "Heteranthera zosterifolia": {
      "imgs": [
        "/plants/img/Heteranthera zosterifolia/0.png",
        "/plants/img/Heteranthera zosterifolia/1.png",
        "/plants/img/Heteranthera zosterifolia/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "medio",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Heteranthera zosterifolia, también conocida como hierba de estrella, es una planta acuática de tallo que tiene hojas alargadas y estrechas de color verde oscuro. Es una planta de crecimiento rápido y requiere una iluminación intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios de estilo natural y puede añadir un toque de elegancia al diseño del acuario.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Hottonia palustris": {
      "imgs": [
        "/plants/img/Hottonia palustris/0.png",
        "/plants/img/Hottonia palustris/1.png",
        "/plants/img/Hottonia palustris/2.png",
        "/plants/img/Hottonia palustris/3.png",
        "/plants/img/Hottonia palustris/7.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "europe/asia",
        "crecimiento": "medio",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-30 cm",
        "description": "Hottonia palustris es una planta acuática de tallo que tiene hojas finas y delicadas de color verde claro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios de tamaño medio a grande y puede crear un efecto visual impresionante con sus hojas delicadas y plumosas.",
        "zona": "Frente",
        "temperatura": "15-26 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-14 dGH",
        "nutriente": "Hierro"
      }
    },
    "Hydrocotyle tripartita": {
      "imgs": [
        "/plants/img/Hydrocotyle tripartita/0.png",
        "/plants/img/Hydrocotyle tripartita/1.png",
        "/plants/img/Hydrocotyle tripartita/2.png",
        "/plants/img/Hydrocotyle tripartita/3.png",
        "/plants/img/Hydrocotyle tripartita/6.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "5 - 5 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 3-5 cm",
        "description": "Hydrocotyle tripartita es una planta acuática de crecimiento rastrero que forma alfombras densas y frondosas. Tiene hojas pequeñas y redondas de color verde claro que se asemejan a las hojas de trébol. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede utilizar como planta de primer plano en el acuario y también ayuda a oxigenar el agua. Es una planta popular en el diseño de paisajes acuáticos estilo iwagumi.",
        "zona": "Medio-Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Hydrocotyle verticillata": {
      "imgs": [
        "/plants/img/Hydrocotyle verticillata/0.png",
        "/plants/img/Hydrocotyle verticillata/1.png",
        "/plants/img/Hydrocotyle verticillata/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "alta",
        "co2": "medio",
        "dificultad": "difícil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Hydrocotyle verticillata es una planta acuática de tallo que tiene hojas redondas y lobuladas de color verde claro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios de tamaño medio a grande y puede crear un efecto visual impresionante con su follaje denso y esponjoso.",
        "zona": "Superficie",
        "temperatura": "15-30 °C",
        "ph": "5.0-7.5",
        "kh": "0-8 dKH",
        "gh": "0-14 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Hygrophila corymbosa": {
      "imgs": [
        "/plants/img/Hygrophila corymbosa/0.png",
        "/plants/img/Hygrophila corymbosa/1.png",
        "/plants/img/Hygrophila corymbosa/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Hygrophila corymbosa es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Fondo-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Hygrophila corymbosa Compact": {
      "imgs": [
        "/plants/img/Hygrophila corymbosa Compact/0.png",
        "/plants/img/Hygrophila corymbosa Compact/1.png",
        "/plants/img/Hygrophila corymbosa Compact/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "10 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Hygrophila corymbosa Compact es una variante compacta de la Hygrophila corymbosa original. Tiene un tamaño más pequeño y forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-20 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. Es una opción popular para acuarios más pequeños o para crear un efecto de paisaje acuático más compacto.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Hygrophila corymbosa Siamensis": {
      "imgs": [
        "/plants/img/Hygrophila corymbosa Siamensis/0.png",
        "/plants/img/Hygrophila corymbosa Siamensis/1.png",
        "/plants/img/Hygrophila corymbosa Siamensis/2.png",
        "/plants/img/Hygrophila corymbosa Siamensis/6.png",
        "/plants/img/Hygrophila corymbosa Siamensis/7.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Hygrophila corymbosa Siamensis es una variante de la Hygrophila corymbosa que tiene hojas más anchas y onduladas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Hygrophila corymbosa Siamensis 53B": {
      "imgs": [
        "/plants/img/Hygrophila corymbosa Siamensis 53B/0.png",
        "/plants/img/Hygrophila corymbosa Siamensis 53B/1.png",
        "/plants/img/Hygrophila corymbosa Siamensis 53B/12.png",
        "/plants/img/Hygrophila corymbosa Siamensis 53B/2.png",
        "/plants/img/Hygrophila corymbosa Siamensis 53B/3.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Hygrophila corymbosa Siamensis 53B es una variante de la Hygrophila corymbosa que tiene hojas más anchas y onduladas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Hygrophila costata": {
      "imgs": [
        "/plants/img/Hygrophila costata/0.png",
        "/plants/img/Hygrophila costata/1.png",
        "/plants/img/Hygrophila costata/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-50 cm",
        "description": "Hygrophila costata es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Fondo-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Hygrophila difformis": {
      "imgs": [
        "/plants/img/Hygrophila difformis/0.png",
        "/plants/img/Hygrophila difformis/1.png",
        "/plants/img/Hygrophila difformis/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-60 cm",
        "description": "Hygrophila difformis, también conocida como hierba de las estrellas, es una planta acuática de tallo que tiene hojas redondas y lobuladas de color verde claro. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios de estilo natural y puede formar un atractivo tapiz verde en el suelo del acuario.",
        "zona": "Medio",
        "temperatura": "22-28 °C",
        "ph": "5.0-8.0",
        "kh": "2-12 dKH",
        "gh": "3-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Hygrophila lancea Araguaia": {
      "imgs": [
        "/plants/img/Hygrophila lancea Araguaia/0.png",
        "/plants/img/Hygrophila lancea Araguaia/1.png",
        "/plants/img/Hygrophila lancea Araguaia/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "10 - 20 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-30 cm",
        "description": "Hygrophila lancea Araguaia es una planta acuática de tamaño mediano que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-30 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es una opción popular para la creación de paisajes acuáticos estilo nature.",
        "zona": "Medio-Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Hygrophila pinnatifida": {
      "imgs": [
        "/plants/img/Hygrophila pinnatifida/0.png",
        "/plants/img/Hygrophila pinnatifida/1.png",
        "/plants/img/Hygrophila pinnatifida/2.png",
        "/plants/img/Hygrophila pinnatifida/3.png",
        "/plants/img/Hygrophila pinnatifida/6.png",
        "/plants/img/Hygrophila pinnatifida/8.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 15-40 cm",
        "description": "Hygrophila pinnatifida es una planta acuática de tallo que tiene hojas lobuladas y dentadas de color verde oscuro a rojizo. Es una planta de crecimiento moderado y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios de estilo natural y puede añadir un toque de textura y color al diseño del acuario.",
        "zona": "Trasera",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-8 dKH",
        "gh": "2-12 dGH",
        "nutriente": "Hierro"
      }
    },
    "Hygrophila polysperma": {
      "imgs": [
        "/plants/img/Hygrophila polysperma/0.png",
        "/plants/img/Hygrophila polysperma/1.png",
        "/plants/img/Hygrophila polysperma/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-60 cm",
        "description": "Hygrophila polysperma, también conocida como hierba de los templos, es una planta acuática de tallo que tiene hojas estrechas y alargadas de color verde claro. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta muy resistente y adaptable, ideal para acuarios de principiantes.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "5.0-8.0",
        "kh": "2-10 dKH",
        "gh": "3-18 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Hygrophila polysperma Rosanervig": {
      "imgs": [
        "/plants/img/Hygrophila polysperma Rosanervig/0.png",
        "/plants/img/Hygrophila polysperma Rosanervig/1.png",
        "/plants/img/Hygrophila polysperma Rosanervig/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cultivar",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "medio",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Hygrophila polysperma Rosanervig es una variante de la Hygrophila polysperma que tiene hojas de color verde claro con nervaduras de color rosa. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. Esta planta agrega un toque de color y contraste al acuario, especialmente cuando se combina con plantas de tonos verdes más oscuros.",
        "zona": "Fondo-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Juncus repens": {
      "imgs": [
        "/plants/img/Juncus repens/0.png",
        "/plants/img/Juncus repens/1.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "10 - 20 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-30 cm",
        "description": "Juncus repens es una planta acuática de tamaño mediano que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-30 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es una opción popular para la creación de paisajes acuáticos estilo nature.",
        "zona": "Frente",
        "temperatura": "18-26 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Lagenandra meeboldii Red": {
      "imgs": [
        "/plants/img/Lagenandra meeboldii Red/0.png",
        "/plants/img/Lagenandra meeboldii Red/1.png",
        "/plants/img/Lagenandra meeboldii Red/2.png"
      ],
      "desc": {
        "tipo": "roseta",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-20 cm",
        "description": "Lagenandra meeboldii Red es una planta acuática de tamaño mediano que forma rosetas compactas con hojas onduladas de color rojo intenso. Alcanza una altura de aproximadamente 10-20 cm y puede tener un diámetro de hasta 15 cm. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. El contraste de color que proporciona esta planta la hace destacar en el acuario.",
        "zona": "Medio-Frente",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.0",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Leptodictyum riparium": {
      "imgs": [
        "/plants/img/Leptodictyum riparium/0.png",
        "/plants/img/Leptodictyum riparium/1.png",
        "/plants/img/Leptodictyum riparium/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "cosmopolitan",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Leptodictyum riparium es una planta acuática de tamaño pequeño que forma tallos verticales con hojas delgadas y alargadas de color verde claro. Alcanza una altura de aproximadamente 5-10 cm y puede tener un ancho de hasta 5 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. También se puede utilizar en la creación de acuarios paludarios y acuaterrarios.",
        "zona": "Flotante",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Lilaeopsis brasiliensis": {
      "imgs": [
        "/plants/img/Lilaeopsis brasiliensis/0.png",
        "/plants/img/Lilaeopsis brasiliensis/1.png",
        "/plants/img/Lilaeopsis brasiliensis/3.png",
        "/plants/img/Lilaeopsis brasiliensis/6.png",
        "/plants/img/Lilaeopsis brasiliensis/7.png"
      ],
      "desc": {
        "tipo": "estolones",
        "origen": "south america",
        "crecimiento": "lento",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-15 cm",
        "description": "Lilaeopsis brasiliensis, también conocida como hierba de Brasil, es una planta acuática pequeña y compacta que forma densos tapices en el suelo del acuario. Es una planta de crecimiento lento y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular para crear un aspecto natural y ordenado en el primer plano del acuario.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Lilaeopsis mauritiana": {
      "imgs": [
        "/plants/img/Lilaeopsis mauritiana/0.png",
        "/plants/img/Lilaeopsis mauritiana/1.png",
        "/plants/img/Lilaeopsis mauritiana/2.png"
      ],
      "desc": {
        "tipo": "estolones",
        "origen": "africa",
        "crecimiento": "lento",
        "altura": "5 - 10 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 2-5 cm",
        "description": "Lilaeopsis mauritiana es una planta acuática de tamaño pequeño que forma alfombras densas de hojas estrechas y alargadas de color verde claro. Alcanza una altura de aproximadamente 2-5 cm y puede tener un ancho de hasta 5 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a alta. Se puede utilizar como planta de primer plano en el acuario y también ayuda a oxigenar el agua. Es una planta popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Lilaeopsis novae-zelandiae": {
      "imgs": [
        "/plants/img/Lilaeopsis novae-zelandiae/0.png",
        "/plants/img/Lilaeopsis novae-zelandiae/1.png",
        "/plants/img/Lilaeopsis novae-zelandiae/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "cosmopolitan",
        "crecimiento": "lento",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 2-5 cm",
        "description": "Lilaeopsis novae-zelandiae es una planta acuática de tamaño pequeño que forma alfombras densas de hojas estrechas y alargadas de color verde claro. Alcanza una altura de aproximadamente 2-5 cm y puede tener un ancho de hasta 5 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a alta. Se puede utilizar como planta de primer plano en el acuario y también ayuda a oxigenar el agua. Es una planta popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Limnobium laevigatum": {
      "imgs": [
        "/plants/img/Limnobium laevigatum/0.png",
        "/plants/img/Limnobium laevigatum/1.png",
        "/plants/img/Limnobium laevigatum/2.png"
      ],
      "desc": {
        "tipo": "flotante",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Limnobium laevigatum, comúnmente conocida como lechuga de agua, es una planta flotante de tamaño pequeño que forma rosetas de hojas redondas y flotantes de color verde claro. Alcanza una altura de aproximadamente 5-10 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede dejar flotando en la superficie del acuario para proporcionar sombra y refugio para los peces. También ayuda a absorber los nutrientes del agua y puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Flotante",
        "temperatura": "20-30 °C",
        "ph": "5.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Limnophila aquatica": {
      "imgs": [
        "/plants/img/Limnophila aquatica/0.png",
        "/plants/img/Limnophila aquatica/1.png",
        "/plants/img/Limnophila aquatica/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Limnophila aquatica es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y plumosas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-40 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Limnophila hippuridoides": {
      "imgs": [
        "/plants/img/Limnophila hippuridoides/0.png",
        "/plants/img/Limnophila hippuridoides/1.png",
        "/plants/img/Limnophila hippuridoides/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Limnophila hippuridoides es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y plumosas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-40 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Fondo-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Limnophila sessiliflora": {
      "imgs": [
        "/plants/img/Limnophila sessiliflora/0.png",
        "/plants/img/Limnophila sessiliflora/1.png",
        "/plants/img/Limnophila sessiliflora/12.png",
        "/plants/img/Limnophila sessiliflora/2.png",
        "/plants/img/Limnophila sessiliflora/3.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Limnophila sessiliflora es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y plumosas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas.",
        "zona": "Fondo-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Lindernia rotundifolia": {
      "imgs": [
        "/plants/img/Lindernia rotundifolia/0.png",
        "/plants/img/Lindernia rotundifolia/1.png",
        "/plants/img/Lindernia rotundifolia/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "medio",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Lindernia rotundifolia es una planta acuática de tamaño pequeño que forma tallos verticales con hojas redondas y suaves de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 5-10 cm y puede tener un ancho de hasta 5 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. También puede ser utilizada en acuarios paludarios y acuaterrarios.",
        "zona": "Frente-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Littorella uniflora": {
      "imgs": [
        "/plants/img/Littorella uniflora/0.png",
        "/plants/img/Littorella uniflora/1.png",
        "/plants/img/Littorella uniflora/2.png"
      ],
      "desc": {
        "tipo": "estolones",
        "origen": "cosmopolitan",
        "crecimiento": "lento",
        "altura": "3 - 5 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 1-2 cm",
        "description": "Littorella uniflora es una planta acuática de tamaño pequeño que forma rosetas compactas de hojas redondas y suaves de color verde claro. Alcanza una altura de aproximadamente 1-2 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Es una planta popular para acuarios de pequeño tamaño y para la creación de paisajes acuáticos estilo nature.",
        "zona": "Frente",
        "temperatura": "5-20 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-12 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Lobelia cardinalis": {
      "imgs": [
        "/plants/img/Lobelia cardinalis/0.png",
        "/plants/img/Lobelia cardinalis/1.png",
        "/plants/img/Lobelia cardinalis/11.png",
        "/plants/img/Lobelia cardinalis/2.png",
        "/plants/img/Lobelia cardinalis/3.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Lobelia cardinalis, también conocida como cardenal rojo, es una planta acuática de tallo que tiene hojas estrechas y alargadas de color verde oscuro a rojizo. Es una planta de crecimiento moderado y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta llamativa y colorida que puede añadir un toque de elegancia al diseño del acuario.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Lobelia cardinalis Mini": {
      "imgs": [
        "/plants/img/Lobelia cardinalis Mini/0.png",
        "/plants/img/Lobelia cardinalis Mini/1.png",
        "/plants/img/Lobelia cardinalis Mini/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "3 - 15 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Lobelia cardinalis Mini es una variante enana de la Lobelia cardinalis que forma rosetas compactas con hojas puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 5-10 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y contraste al acuario debido a su follaje rojo intenso en las puntas.",
        "zona": "Medio-Frente",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Ludwigia glandulosa": {
      "imgs": [
        "/plants/img/Ludwigia glandulosa/0.png",
        "/plants/img/Ludwigia glandulosa/1.png",
        "/plants/img/Ludwigia glandulosa/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-50 cm",
        "description": "Ludwigia glandulosa es una planta acuática de tallo que tiene hojas estrechas y alargadas de color verde oscuro a rojizo. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta muy llamativa y colorida que puede añadir un toque vibrante al diseño del acuario.",
        "zona": "Trasera",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "3-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Ludwigia inclinata Cuba": {
      "imgs": [
        "/plants/img/Ludwigia inclinata Cuba/1.png",
        "/plants/img/Ludwigia inclinata Cuba/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "tropical",
        "crecimiento": "rápido",
        "altura": "5 - 20 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Ludwigia inclinata Cuba es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. También es conocida por su capacidad para absorber los nutrientes del agua, lo que puede ayudar a prevenir el crecimiento de algas. Esta planta se caracteriza por su follaje de color rojo intenso en condiciones de iluminación intensa.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Ludwigia palustris Super Red": {
      "imgs": [
        "/plants/img/Ludwigia palustris Super Red/0.png",
        "/plants/img/Ludwigia palustris Super Red/1.png",
        "/plants/img/Ludwigia palustris Super Red/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cosmopolitan",
        "crecimiento": "medio",
        "altura": "10 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Ludwigia palustris Super Red es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y puntiagudas de color rojo intenso. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación intensa. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. Esta planta agrega un fuerte contraste de color al acuario y es popular en el diseño de paisajes acuáticos estilo nature. Requiere un suministro adecuado de nutrientes y dióxido de carbono (CO2) para mantener su coloración roja intensa.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Ludwigia repens Rubin": {
      "imgs": [
        "/plants/img/Ludwigia repens Rubin/0.png",
        "/plants/img/Ludwigia repens Rubin/1.png",
        "/plants/img/Ludwigia repens Rubin/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-50 cm",
        "description": "Ludwigia repens Rubin es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y puntiagudas de color rojo intenso. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a intensa. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios. Esta planta agrega un fuerte contraste de color al acuario y es popular en el diseño de paisajes acuáticos estilo nature. Requiere un suministro adecuado de nutrientes y dióxido de carbono (CO2) para mantener su coloración roja intensa.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Marsilea hirsuta": {
      "imgs": [
        "/plants/img/Marsilea hirsuta/0.png",
        "/plants/img/Marsilea hirsuta/1.png",
        "/plants/img/Marsilea hirsuta/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "australia",
        "crecimiento": "medio",
        "altura": "5 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 3-5 cm",
        "description": "Marsilea hirsuta es una planta acuática de tamaño pequeño que forma rizomas con hojas en forma de trébol de color verde claro. Alcanza una altura de aproximadamente 3-5 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento lento y requiere una iluminación moderada. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta forma alfombras densas en el sustrato y es una opción popular para acuarios de estilo natural y acuarios de gambario.",
        "zona": "Frente-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Marsilea minuta": {
      "imgs": [
        "/plants/img/Marsilea minuta/0.png",
        "/plants/img/Marsilea minuta/1.png",
        "/plants/img/Marsilea minuta/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 5-10 cm",
        "description": "Marsilea minuta es una planta acuática de tamaño pequeño a mediano que forma rizomas con hojas en forma de trébol de color verde claro. Alcanza una altura de aproximadamente 5-10 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a intensa. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta forma alfombras densas en el sustrato y es una opción popular para acuarios de estilo natural y acuarios de gambario.",
        "zona": "Frente-Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Mayaca fluviatilis": {
      "imgs": [
        "/plants/img/Mayaca fluviatilis/0.png",
        "/plants/img/Mayaca fluviatilis/1.png",
        "/plants/img/Mayaca fluviatilis/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "rápido",
        "altura": "15 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-30 cm",
        "description": "Mayaca fluviatilis es una planta acuática de tallo que tiene hojas estrechas y delicadas de color verde claro. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta ideal para acuarios de tamaño medio a grande y puede crear un efecto visual impresionante con su follaje delicado y plumoso.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-12 dGH",
        "nutriente": "Potasio"
      }
    },
    "Micranthemum callitrichoides Cuba": {
      "imgs": [
        "/plants/img/Micranthemum callitrichoides Cuba/0.png",
        "/plants/img/Micranthemum callitrichoides Cuba/1.png",
        "/plants/img/Micranthemum callitrichoides Cuba/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "north america",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 1-3 cm",
        "description": "Micranthemum callitrichoides Cuba, también conocida como 'Monte Carlo', es una planta acuática de tamaño pequeño que forma alfombras densas de hojas redondas y suaves de color verde claro. Alcanza una altura de aproximadamente 1-3 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta es muy popular en el diseño de paisajes acuáticos estilo nature y puede formar un hermoso tapiz verde en el sustrato del acuario.",
        "zona": "Frente",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "0-8 dKH",
        "gh": "0-14 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Micranthemum tweediei Monte Carlo": {
      "imgs": [
        "/plants/img/Micranthemum tweediei Monte Carlo/0.png",
        "/plants/img/Micranthemum tweediei Monte Carlo/1.png",
        "/plants/img/Micranthemum tweediei Monte Carlo/2.png",
        "/plants/img/Micranthemum tweediei Monte Carlo/3.png",
        "/plants/img/Micranthemum tweediei Monte Carlo/6.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 1-3 cm",
        "description": "Micranthemum tweediei Monte Carlo es una planta acuática de tamaño pequeño que forma alfombras densas de hojas redondas y suaves de color verde claro. Alcanza una altura de aproximadamente 1-3 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta es muy popular en el diseño de paisajes acuáticos estilo nature y puede formar un hermoso tapiz verde en el sustrato del acuario.",
        "zona": "Frente-Medio",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Micranthemum umbrosum": {
      "imgs": [
        "/plants/img/Micranthemum umbrosum/0.png",
        "/plants/img/Micranthemum umbrosum/1.png",
        "/plants/img/Micranthemum umbrosum/2.png",
        "/plants/img/Micranthemum umbrosum/3.png",
        "/plants/img/Micranthemum umbrosum/7.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "north america",
        "crecimiento": "rápido",
        "altura": "10 - 15 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-30 cm",
        "description": "Micranthemum umbrosum es una planta acuática de tamaño mediano que forma tallos verticales con hojas redondas y suaves de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-30 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente-Medio",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Microsorum pteropus": {
      "imgs": [
        "/plants/img/Microsorum pteropus/0.png",
        "/plants/img/Microsorum pteropus/1.png",
        "/plants/img/Microsorum pteropus/11.png",
        "/plants/img/Microsorum pteropus/12.png",
        "/plants/img/Microsorum pteropus/16.png",
        "/plants/img/Microsorum pteropus/17.png",
        "/plants/img/Microsorum pteropus/2.png",
        "/plants/img/Microsorum pteropus/21.png",
        "/plants/img/Microsorum pteropus/22.png",
        "/plants/img/Microsorum pteropus/6.png",
        "/plants/img/Microsorum pteropus/7.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-30 cm",
        "description": "Microsorum pteropus, también conocido como helecho de Java, es una planta acuática de hoja ancha que tiene hojas alargadas y onduladas de color verde oscuro. No es una planta de tallo, sino que se adhiere a la decoración del acuario o puede dejarse flotando en la superficie del agua. Es una planta de crecimiento lento y requiere una iluminación moderada. Es una planta muy resistente y popular en acuarios, ya que no necesita un sustrato y puede tolerar una variedad de condiciones de agua.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Microsorum pteropus Narrow": {
      "imgs": [
        "/plants/img/Microsorum pteropus Narrow/0.png",
        "/plants/img/Microsorum pteropus Narrow/1.png",
        "/plants/img/Microsorum pteropus Narrow/11.png",
        "/plants/img/Microsorum pteropus Narrow/16.png",
        "/plants/img/Microsorum pteropus Narrow/3.png",
        "/plants/img/Microsorum pteropus Narrow/6.png",
        "/plants/img/Microsorum pteropus Narrow/7.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-30 cm",
        "description": "Microsorum pteropus Narrow, también conocida como 'Helecho de Java Narrow Leaf', es una planta acuática de tamaño mediano que forma rizomas con hojas estrechas y puntiagudas de color verde oscuro. Alcanza una altura de aproximadamente 15-30 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a baja. Se puede plantar en el sustrato del acuario o atar a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y es apreciada por su aspecto exótico y fácil cuidado.",
        "zona": "Medio-Fondo",
        "temperatura": "22-30 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Microsorum pteropus Trident": {
      "imgs": [
        "/plants/img/Microsorum pteropus Trident/0.png",
        "/plants/img/Microsorum pteropus Trident/1.png",
        "/plants/img/Microsorum pteropus Trident/14.png",
        "/plants/img/Microsorum pteropus Trident/2.png",
        "/plants/img/Microsorum pteropus Trident/3.png",
        "/plants/img/Microsorum pteropus Trident/6.png",
        "/plants/img/Microsorum pteropus Trident/7.png",
        "/plants/img/Microsorum pteropus Trident/9.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "15 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-30 cm",
        "description": "Microsorum pteropus Trident, también conocida como 'Helecho de Java Trident Leaf', es una planta acuática de tamaño mediano que forma rizomas con hojas estrechas y puntiagudas con formas de tridente de color verde oscuro. Alcanza una altura de aproximadamente 15-30 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a baja. Se puede plantar en el sustrato del acuario o atar a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y agrega un toque único y llamativo al acuario.",
        "zona": "Medio-Fondo",
        "temperatura": "22-30 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Microsorum pteropus Windeløv": {
      "imgs": [
        "/plants/img/Microsorum pteropus Windeløv/0.png",
        "/plants/img/Microsorum pteropus Windeløv/1.png",
        "/plants/img/Microsorum pteropus Windeløv/11.png",
        "/plants/img/Microsorum pteropus Windeløv/12.png",
        "/plants/img/Microsorum pteropus Windeløv/14.png",
        "/plants/img/Microsorum pteropus Windeløv/19.png",
        "/plants/img/Microsorum pteropus Windeløv/2.png",
        "/plants/img/Microsorum pteropus Windeløv/3.png",
        "/plants/img/Microsorum pteropus Windeløv/4.png",
        "/plants/img/Microsorum pteropus Windeløv/6.png",
        "/plants/img/Microsorum pteropus Windeløv/7.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "10 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-30 cm",
        "description": "Microsorum pteropus Windeløv, también conocida como 'Helecho de Java Windeløv', es una planta acuática de tamaño mediano que forma rizomas con hojas anchas y onduladas de color verde oscuro. Alcanza una altura de aproximadamente 15-30 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a baja. Se puede plantar en el sustrato del acuario o atar a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y agrega un aspecto exótico y elegante al acuario.",
        "zona": "Medio-Fondo",
        "temperatura": "22-30 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Microsorum sp": {
      "imgs": [
        "/plants/img/Microsorum sp/0.png",
        "/plants/img/Microsorum sp/1.png"
      ],
      "desc": {
        "tipo": "rizoma",
        "origen": "Asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-30 cm",
        "description": "Microsorum sp, también conocida como 'Helecho de Java', es una planta acuática de tamaño mediano que forma rizomas con hojas anchas y puntiagudas de color verde oscuro. Alcanza una altura de aproximadamente 15-30 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a baja. Se puede plantar en el sustrato del acuario o atar a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y es apreciada por su aspecto exótico y fácil cuidado.",
        "zona": "Medio-Fondo",
        "temperatura": "22-30 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Hierro"
      }
    },
    "Monosolenium tenerum": {
      "imgs": [
        "/plants/img/Monosolenium tenerum/0.png",
        "/plants/img/Monosolenium tenerum/1.png",
        "/plants/img/Monosolenium tenerum/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 1-3 cm",
        "description": "Monosolenium tenerum, también conocida como 'Pelo de Mono', es una planta acuática de tamaño pequeño que forma almohadillas densas y suaves de color verde oscuro. Alcanza una altura de aproximadamente 1-3 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a baja. Se puede plantar en el sustrato del acuario o atar a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y agrega un aspecto exótico y textura al acuario.",
        "zona": "Frente",
        "temperatura": "18-26 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-20 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Murdannia keisak": {
      "imgs": [
        "/plants/img/Murdannia keisak/0.png",
        "/plants/img/Murdannia keisak/1.png",
        "/plants/img/Murdannia keisak/2.png",
        "/plants/img/Murdannia keisak/3.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "5 - 20 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Murdannia keisak es una planta acuática de tamaño pequeño a mediano que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 5-10 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Myriophyllum mattogrossense": {
      "imgs": [
        "/plants/img/Myriophyllum mattogrossense/0.png",
        "/plants/img/Myriophyllum mattogrossense/1.png",
        "/plants/img/Myriophyllum mattogrossense/2.png",
        "/plants/img/Myriophyllum mattogrossense/3.png",
        "/plants/img/Myriophyllum mattogrossense/7.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-50 cm",
        "description": "Myriophyllum mattogrossense es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas plumosas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exuberante y plumoso al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Myriophyllum sp Guyana": {
      "imgs": [
        "/plants/img/Myriophyllum sp Guyana/0.png",
        "/plants/img/Myriophyllum sp Guyana/1.png",
        "/plants/img/Myriophyllum sp Guyana/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "10 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-50 cm",
        "description": "Myriophyllum sp Guyana es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas plumosas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-50 cm y puede tener un ancho de hasta 15 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exuberante y plumoso al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Nesaea crassicaulis": {
      "imgs": [
        "/plants/img/Nesaea crassicaulis/0.png",
        "/plants/img/Nesaea crassicaulis/1.png",
        "/plants/img/Nesaea crassicaulis/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "africa",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-30 cm",
        "description": "Nesaea crassicaulis es una planta acuática de tamaño mediano que forma tallos verticales con hojas puntiagudas y dentadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-30 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente-Medio",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Nymphaea lotus": {
      "imgs": [
        "/plants/img/Nymphaea lotus/0.png",
        "/plants/img/Nymphaea lotus/1.png",
        "/plants/img/Nymphaea lotus/2.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "africa",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 20-60 cm",
        "description": "Nymphaea lotus, también conocida como lirio de agua rojo o loto rojo, es una planta acuática de hoja flotante que tiene hojas redondas y grandes de color verde oscuro a rojizo. Produce flores hermosas y llamativas en tonos de rosa o rojo. Es una planta de crecimiento lento y requiere una iluminación intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta muy decorativa y puede ser el punto focal en el diseño de un acuario.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Hierro"
      }
    },
    "Nymphoides hydrophylla Taiwan": {
      "imgs": [
        "/plants/img/Nymphoides hydrophylla Taiwan/0.png",
        "/plants/img/Nymphoides hydrophylla Taiwan/1.png",
        "/plants/img/Nymphoides hydrophylla Taiwan/2.png",
        "/plants/img/Nymphoides hydrophylla Taiwan/3.png",
        "/plants/img/Nymphoides hydrophylla Taiwan/6.png"
      ],
      "desc": {
        "tipo": "bulbo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "medio",
        "dificultad": "fácil",
        "tamaño": "Altura de 10-30 cm",
        "description": "Nymphoides hydrophylla Taiwan es una planta acuática de tamaño mediano que forma rosetas de hojas redondeadas y acorazonadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-30 cm y puede tener un diámetro de hasta 15 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exuberante y acuático al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Phyllanthus fluitans": {
      "imgs": [
        "/plants/img/Phyllanthus fluitans/0.png",
        "/plants/img/Phyllanthus fluitans/1.png",
        "/plants/img/Phyllanthus fluitans/2.png"
      ],
      "desc": {
        "tipo": "flotante",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Phyllanthus fluitans, también conocida como 'Planta de Mariposa Roja', es una planta acuática flotante de tamaño pequeño que forma almohadillas redondeadas de color verde claro a rojo intenso. Alcanza una altura de aproximadamente 5-10 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede dejar flotando en la superficie del agua o anclarla a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y agrega un toque de color y belleza al acuario.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Pogostemon deccanensis": {
      "imgs": [
        "/plants/img/Pogostemon deccanensis/0.png",
        "/plants/img/Pogostemon deccanensis/1.png",
        "/plants/img/Pogostemon deccanensis/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-20 cm",
        "description": "Pogostemon deccanensis es una planta acuática de tamaño mediano que forma tallos verticales con hojas puntiagudas y dentadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-20 cm y puede tener un ancho de hasta 10 cm. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente-Medio",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Pogostemon erectus": {
      "imgs": [
        "/plants/img/Pogostemon erectus/0.png",
        "/plants/img/Pogostemon erectus/1.png",
        "/plants/img/Pogostemon erectus/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 15-30 cm",
        "description": "Pogostemon erectus es una planta acuática de tamaño mediano que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 15-30 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio-Fondo",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Pogostemon helferi": {
      "imgs": [
        "/plants/img/Pogostemon helferi/0.png",
        "/plants/img/Pogostemon helferi/1.png",
        "/plants/img/Pogostemon helferi/11.png",
        "/plants/img/Pogostemon helferi/2.png",
        "/plants/img/Pogostemon helferi/3.png",
        "/plants/img/Pogostemon helferi/5.png",
        "/plants/img/Pogostemon helferi/6.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 5-10 cm",
        "description": "Pogostemon helferi, también conocida como 'Planta de Hierba enana', es una planta acuática de tamaño pequeño que forma rosetas compactas de hojas rizadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 5-10 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exuberante y compacto al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio-Frente",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-15 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Pogostemon stellatus": {
      "imgs": [
        "/plants/img/Pogostemon stellatus/0.png",
        "/plants/img/Pogostemon stellatus/1.png",
        "/plants/img/Pogostemon stellatus/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Pogostemon stellatus es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-40 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio-Fondo",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Proserpinaca palustris Cuba": {
      "imgs": [
        "/plants/img/Proserpinaca palustris Cuba/0.png",
        "/plants/img/Proserpinaca palustris Cuba/1.png",
        "/plants/img/Proserpinaca palustris Cuba/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "10 - 30 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 15-30 cm",
        "description": "Proserpinaca palustris Cuba es una planta acuática de tamaño mediano que forma tallos verticales con hojas puntiagudas y dentadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 15-30 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Fondo",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Ranunculus inundatus": {
      "imgs": [
        "/plants/img/Ranunculus inundatus/0.png",
        "/plants/img/Ranunculus inundatus/1.png",
        "/plants/img/Ranunculus inundatus/2.png"
      ],
      "desc": {
        "tipo": "estolones",
        "origen": "australia",
        "crecimiento": "medio",
        "altura": "5 - 5 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-20 cm",
        "description": "Ranunculus inundatus es una planta acuática de tamaño mediano que forma rosetas compactas de hojas redondeadas y dentadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-20 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exuberante y compacto al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente",
        "temperatura": "18-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "2-12 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Riccardia chamedryfolia": {
      "imgs": [
        "/plants/img/Riccardia chamedryfolia/0.png",
        "/plants/img/Riccardia chamedryfolia/1.png",
        "/plants/img/Riccardia chamedryfolia/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "3 - 5 cm",
        "luz": "alta",
        "co2": "medio",
        "dificultad": "difícil",
        "tamaño": "Altura de 1-2 cm",
        "description": "Riccardia chamedryfolia, también conocida como 'Musgo de Riñón', es una planta acuática de tamaño pequeño que forma almohadillas densas y suaves de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 1-2 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento lento y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario o atar a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y agrega un aspecto exótico y textura al acuario.",
        "zona": "Flotante",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Hierro"
      }
    },
    "Riccia fluitans": {
      "imgs": [
        "/plants/img/Riccia fluitans/0.png",
        "/plants/img/Riccia fluitans/1.png",
        "/plants/img/Riccia fluitans/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "cosmopolitan",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 1-5 cm",
        "description": "Riccia fluitans, también conocida como 'Musgo de Riccia', es una planta acuática flotante de tamaño pequeño que forma tapices flotantes de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 1-5 cm y puede cubrir una gran superficie en el acuario. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede dejar flotando en la superficie del agua o anclarla a decoraciones como rocas o troncos. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y agrega un aspecto exuberante y acuático al acuario.",
        "zona": "Flotante",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Rotala indica Bonsai": {
      "imgs": [
        "/plants/img/Rotala indica Bonsai/0.png",
        "/plants/img/Rotala indica Bonsai/1.png",
        "/plants/img/Rotala indica Bonsai/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cultivar",
        "crecimiento": "lento",
        "altura": "5 - 20 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-20 cm",
        "description": "Rotala indica Bonsai es una planta acuática de tamaño mediano que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-20 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Rotala macrandra": {
      "imgs": [
        "/plants/img/Rotala macrandra/0.png",
        "/plants/img/Rotala macrandra/1.png",
        "/plants/img/Rotala macrandra/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "20 - 30 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Rotala macrandra es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-40 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Rotala rotundifolia": {
      "imgs": [
        "/plants/img/Rotala rotundifolia/0.png",
        "/plants/img/Rotala rotundifolia/1.png",
        "/plants/img/Rotala rotundifolia/10.png",
        "/plants/img/Rotala rotundifolia/2.png",
        "/plants/img/Rotala rotundifolia/3.png",
        "/plants/img/Rotala rotundifolia/5.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "15 - 30 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 15-30 cm",
        "description": "Rotala rotundifolia es una planta acuática de tallo que tiene hojas redondas y pequeñas de color verde claro a rojizo. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular en acuarios de estilo natural y puede añadir un toque de color y textura al diseño del acuario.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Hierro"
      }
    },
    "Rotala rotundifolia Green": {
      "imgs": [
        "/plants/img/Rotala rotundifolia Green/0.png",
        "/plants/img/Rotala rotundifolia Green/1.png",
        "/plants/img/Rotala rotundifolia Green/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "20 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Rotala rotundifolia Green es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas redondeadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-40 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y forma al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Hierro"
      }
    },
    "Rotala rotundifolia Hra": {
      "imgs": [
        "/plants/img/Rotala rotundifolia Hra/0.png",
        "/plants/img/Rotala rotundifolia Hra/1.png",
        "/plants/img/Rotala rotundifolia Hra/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "rápido",
        "altura": "3 - 20 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 20-40 cm",
        "description": "Rotala rotundifolia Hra es una planta acuática de tamaño mediano a grande que forma tallos verticales con hojas redondeadas y dentadas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-40 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Hierro"
      }
    },
    "Rotala wallichii": {
      "imgs": [
        "/plants/img/Rotala wallichii/0.png",
        "/plants/img/Rotala wallichii/1.png",
        "/plants/img/Rotala wallichii/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "10 - 30 cm",
        "luz": "alta",
        "co2": "alto",
        "dificultad": "difícil",
        "tamaño": "Altura de 20-30 cm",
        "description": "Rotala wallichii es una planta acuática de tamaño mediano que forma tallos verticales con hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-30 cm y puede tener un diámetro de hasta 5 cm. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un toque de color y textura al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Medio",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Sagittaria subulata": {
      "imgs": [
        "/plants/img/Sagittaria subulata/0.png",
        "/plants/img/Sagittaria subulata/1.png",
        "/plants/img/Sagittaria subulata/12.png",
        "/plants/img/Sagittaria subulata/3.png",
        "/plants/img/Sagittaria subulata/6.png",
        "/plants/img/Sagittaria subulata/7.png"
      ],
      "desc": {
        "tipo": "estolones",
        "origen": "south america",
        "crecimiento": "rápido",
        "altura": "5 - 30 cm",
        "luz": "baja",
        "co2": "medio",
        "dificultad": "fácil",
        "tamaño": "Altura de 20-40 cm",
        "description": "Sagittaria subulata es una planta acuática de tamaño mediano a grande que forma rosetas de hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 20-40 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado a rápido y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exuberante y natural al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente",
        "temperatura": "18-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Salvinia auriculata": {
      "imgs": [
        "/plants/img/Salvinia auriculata/0.png",
        "/plants/img/Salvinia auriculata/1.png",
        "/plants/img/Salvinia auriculata/2.png"
      ],
      "desc": {
        "tipo": "flotante",
        "origen": "cosmopolitan",
        "crecimiento": "rápido",
        "altura": "3 - 5 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Tamaño variable",
        "description": "Salvinia auriculata es una planta acuática flotante que forma tapices flotantes de hojas redondeadas y suaves de color verde claro a verde oscuro. Alcanza un tamaño variable, dependiendo de las condiciones de cultivo y el entorno acuático. Es una planta de crecimiento rápido y requiere una iluminación moderada a alta. Se puede dejar flotando en la superficie del agua para proporcionar sombra y cobertura adicional al acuario. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y agrega un aspecto acuático y natural al acuario.",
        "zona": "Superficie",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-8 dKH",
        "gh": "2-12 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Shinnersia rivularis Weiss-Grün": {
      "imgs": [
        "/plants/img/Shinnersia rivularis Weiss-Grün/0.png",
        "/plants/img/Shinnersia rivularis Weiss-Grün/1.png",
        "/plants/img/Shinnersia rivularis Weiss-Grün/2.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "cultivar",
        "crecimiento": "rápido",
        "altura": "10 - 30 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "media",
        "tamaño": "Altura de 10-20 cm",
        "description": "Shinnersia rivularis Weiss-Grün es una planta acuática de tamaño mediano que forma rosetas compactas de hojas estrechas y puntiagudas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 10-20 cm y puede tener un diámetro de hasta 10 cm. Es una planta de crecimiento moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exuberante y compacto al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "6.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Hierro"
      }
    },
    "Staurogyne repens": {
      "imgs": [
        "/plants/img/Staurogyne repens/0.png",
        "/plants/img/Staurogyne repens/1.png",
        "/plants/img/Staurogyne repens/11.png",
        "/plants/img/Staurogyne repens/3.png",
        "/plants/img/Staurogyne repens/4.png",
        "/plants/img/Staurogyne repens/5.png",
        "/plants/img/Staurogyne repens/6.png"
      ],
      "desc": {
        "tipo": "tallo",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 5-10 cm",
        "description": "Staurogyne repens es una planta acuática rastrera que forma densos tapices en el suelo del acuario. Tiene hojas pequeñas y ovaladas de color verde oscuro. Es una planta de crecimiento moderado y requiere una iluminación moderada a intensa. Se recomienda plantarla en el sustrato y puede ser necesario el uso de suplementos de nutrientes. Es una planta popular para crear un aspecto natural y exuberante en el primer plano del acuario.",
        "zona": "Frente",
        "temperatura": "22-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-12 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Taxiphyllum alternans Taiwan Moss": {
      "imgs": [
        "/plants/img/Taxiphyllum alternans Taiwan Moss/0.png",
        "/plants/img/Taxiphyllum alternans Taiwan Moss/1.png",
        "/plants/img/Taxiphyllum alternans Taiwan Moss/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 3-10 cm",
        "description": "Taxiphyllum alternans Taiwan Moss, también conocido como 'Musgo de Taiwán', es una planta acuática de tamaño pequeño que forma matas densas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 3-10 cm y puede cubrir una gran superficie en el acuario. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada. Se puede atar a decoraciones como rocas o troncos para crear un aspecto natural y exuberante en el acuario. Esta planta es adecuada para acuarios comunitarios y acuarios plantados.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "5.0-8.0",
        "kh": "2-12 dKH",
        "gh": "3-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Taxiphyllum barbieri": {
      "imgs": [
        "/plants/img/Taxiphyllum barbieri/0.png",
        "/plants/img/Taxiphyllum barbieri/1.png",
        "/plants/img/Taxiphyllum barbieri/10.png",
        "/plants/img/Taxiphyllum barbieri/11.png",
        "/plants/img/Taxiphyllum barbieri/2.png",
        "/plants/img/Taxiphyllum barbieri/5.png",
        "/plants/img/Taxiphyllum barbieri/6.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 3-10 cm",
        "description": "Taxiphyllum barbieri, también conocido como 'Musgo de Java', es una planta acuática de tamaño pequeño que forma matas densas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 3-10 cm y puede cubrir una gran superficie en el acuario. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada. Se puede atar a decoraciones como rocas o troncos para crear un aspecto natural y exuberante en el acuario. Esta planta es adecuada para acuarios comunitarios y acuarios plantados y es muy popular debido a su facilidad de cuidado y versatilidad en el diseño del acuario.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "5.0-8.0",
        "kh": "2-12 dKH",
        "gh": "3-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Taxiphyllum Flame": {
      "imgs": [
        "/plants/img/Taxiphyllum Flame/0.png",
        "/plants/img/Taxiphyllum Flame/1.png",
        "/plants/img/Taxiphyllum Flame/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "asia",
        "crecimiento": "lento",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 3-10 cm",
        "description": "Taxiphyllum Flame es una variante de Taxiphyllum barbieri, también conocido como 'Musgo de Java', que presenta un color rojo intenso. Es una planta acuática de tamaño pequeño que forma matas densas de color verde claro a rojo. Alcanza una altura de aproximadamente 3-10 cm y puede cubrir una gran superficie en el acuario. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada. Se puede atar a decoraciones como rocas o troncos para crear un aspecto llamativo y exuberante en el acuario. Esta planta es adecuada para acuarios comunitarios y acuarios plantados.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "5.0-8.0",
        "kh": "2-12 dKH",
        "gh": "3-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Taxiphyllum Spiky": {
      "imgs": [
        "/plants/img/Taxiphyllum Spiky/0.png",
        "/plants/img/Taxiphyllum Spiky/1.png",
        "/plants/img/Taxiphyllum Spiky/2.png",
        "/plants/img/Taxiphyllum Spiky/4.png",
        "/plants/img/Taxiphyllum Spiky/5.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "baja",
        "co2": "bajo",
        "dificultad": "fácil",
        "tamaño": "Altura de 3-10 cm",
        "description": "Taxiphyllum Spiky es una variante de Taxiphyllum barbieri, también conocido como 'Musgo de Java', que presenta hojas puntiagudas y textura más irregular. Es una planta acuática de tamaño pequeño que forma matas densas de color verde claro a verde oscuro. Alcanza una altura de aproximadamente 3-10 cm y puede cubrir una gran superficie en el acuario. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada. Se puede atar a decoraciones como rocas o troncos para crear un aspecto natural y exuberante en el acuario. Esta planta es adecuada para acuarios comunitarios y acuarios plantados.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "5.0-8.0",
        "kh": "2-12 dKH",
        "gh": "3-15 dGH",
        "nutriente": "Potasio"
      }
    },
    "Utricularia graminifolia": {
      "imgs": [
        "/plants/img/Utricularia graminifolia/0.png",
        "/plants/img/Utricularia graminifolia/1.png",
        "/plants/img/Utricularia graminifolia/2.png"
      ],
      "desc": {
        "tipo": "tapizante",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 10 cm",
        "luz": "media",
        "co2": "medio",
        "dificultad": "difícil",
        "tamaño": "Altura de 3-5 cm",
        "description": "Utricularia graminifolia es una planta acuática de tamaño pequeño que forma alfombras densas de hojas filiformes y delicadas de color verde claro. Alcanza una altura de aproximadamente 3-5 cm y puede cubrir una gran superficie en el acuario. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada a alta. Se puede plantar en el sustrato del acuario y es adecuada para acuarios comunitarios y acuarios plantados. Esta planta agrega un aspecto exótico y delicado al acuario y es popular en el diseño de paisajes acuáticos estilo nature.",
        "zona": "Frente",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.0",
        "kh": "0-4 dKH",
        "gh": "0-6 dGH",
        "nutriente": "Nitrógeno"
      }
    },
    "Vesicularia ferriei Weeping": {
      "imgs": [
        "/plants/img/Vesicularia ferriei Weeping/0.png",
        "/plants/img/Vesicularia ferriei Weeping/1.png",
        "/plants/img/Vesicularia ferriei Weeping/2.png",
        "/plants/img/Vesicularia ferriei Weeping/5.png",
        "/plants/img/Vesicularia ferriei Weeping/6.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "asia",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 3-10 cm",
        "description": "Vesicularia ferriei Weeping es una variedad de musgo de Java que tiene un crecimiento rastrero y forma mechones colgantes con hojas pequeñas y delicadas de color verde claro. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada a baja. Se puede fijar a la decoración del acuario, como rocas o troncos, con hilo de pescar o pegamento. Es una planta muy decorativa y puede agregar un aspecto elegante y lloroso al diseño del acuario.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Hierro"
      }
    },
    "Vesicularia montagnei Christmas": {
      "imgs": [
        "/plants/img/Vesicularia montagnei Christmas/0.png",
        "/plants/img/Vesicularia montagnei Christmas/1.png",
        "/plants/img/Vesicularia montagnei Christmas/2.png",
        "/plants/img/Vesicularia montagnei Christmas/5.png",
        "/plants/img/Vesicularia montagnei Christmas/6.png",
        "/plants/img/Vesicularia montagnei Christmas/7.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 3-5 cm",
        "description": "Vesicularia montagnei Christmas, también conocida como musgo de Navidad, es una planta acuática de crecimiento rastrero que forma mechones densos y frondosos. Tiene hojas pequeñas y onduladas de color verde claro que se asemejan a las ramas de un árbol de Navidad. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada a baja. Se puede fijar a la decoración del acuario, como rocas o troncos, con hilo de pescar o pegamento. Es una planta popular para crear un ambiente festivo en el acuario durante la temporada navideña.",
        "zona": "Troncos/Rocas",
        "temperatura": "20-28 °C",
        "ph": "5.0-7.5",
        "kh": "2-10 dKH",
        "gh": "4-18 dGH",
        "nutriente": "Potasio"
      }
    },
    "Vesicularia montagnei Christmas Moss": {
      "imgs": [
        "/plants/img/Vesicularia montagnei Christmas Moss/0.png",
        "/plants/img/Vesicularia montagnei Christmas Moss/1.png",
        "/plants/img/Vesicularia montagnei Christmas Moss/2.png"
      ],
      "desc": {
        "tipo": "musgo",
        "origen": "south america",
        "crecimiento": "medio",
        "altura": "3 - 5 cm",
        "luz": "media",
        "co2": "bajo",
        "dificultad": "media",
        "tamaño": "Altura de 3-5 cm",
        "description": "Vesicularia montagnei Christmas Moss, también conocida como musgo de Navidad, es una variante de musgo de Java que tiene un crecimiento rastrero y forma mechones densos con hojas pequeñas y onduladas de color verde claro. Es una planta de crecimiento lento a moderado y requiere una iluminación moderada a baja. Se puede fijar a la decoración del acuario, como rocas o troncos, con hilo de pescar o pegamento. Es muy apreciada por su aspecto festivo y se utiliza frecuentemente en la creación de paisajes acuáticos inspirados en la naturaleza.",
        "zona": "Superficie-Medio",
        "temperatura": "20-28 °C",
        "ph": "5.0-8.0",
        "kh": "2-12 dKH",
        "gh": "2-15 dGH",
        "nutriente": "Nitrógeno"
      }
    }
  }  ;
  constructor( ) { 
    
  }
}
