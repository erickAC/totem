import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <style>
      .content {
        height: 100vh;
        background-image: url("assets/bg.png");
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
        padding: 30px;
      }

      .texto {
        margin-top: 80px;
      }

      .texto img {
        width: 40vw;
      }

      .botao img {
        width: 17vw;
      }

      @media only screen and (max-width: 768px) {
        .content {
          justify-content: center;
        }
        .texto img {
          width: 100vw;
        }
        .botao img {
          width: 80vw;
        }
      }

    </style>
    <div class="content">
      <div class="d-flex column-gap-5 align-items-end">
        <img width="100" class="img-fluid" src="assets/logo_idot.png" alt="">
        <img width="100" class="img-fluid" src="assets/logo_nupi.png" alt="">
      </div>
      <div class="texto text-center">
        <img class="img-fluid" src="assets/texto.png" alt="">
      </div>
      <div class="botao text-center mt-5" routerLink="escolha">
        <img class="img-fluid" src="assets/botao.png" alt="" >
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {
  title = 'idot-totem';
}
