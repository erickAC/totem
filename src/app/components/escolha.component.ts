import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-escolha',
    imports: [
        RouterModule
    ],
    standalone: true,
    template: `
        <style>
            .content {
                /* height: 100vh; */
                background-image: url("assets/bg.png");
                background-repeat: no-repeat;
                background-size: cover;
                background-attachment: fixed;
                /* background-position: center; */
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100vw;
            }
            .escolhas {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                width: 100vw;
            }

            .button {
                display: flex;
                flex-basis: 40%;
                background-color: white;
                border-radius: 40px;
                background-repeat: no-repeat;
                background-size: cover;
                align-items: center;
                justify-content: center;
                height: 150px;
                margin: 5px;
                flex-direction: column;
            }

            @media only screen and (max-width: 768px) {
                .button {
                    flex-basis: 45%;
                    height: 100px;
                }
            }

        </style>
        <div class="content">
            <div class="mt-5 d-flex column-gap-5 align-items-end">
                <img width="100" class="img-fluid" src="assets/logo_idot.png" alt="">
                <img width="100" class="img-fluid" src="assets/logo_nupi.png" alt="">
            </div>
            <div class="escolhas mt-5">
                @for (item of escolhas; track $index) {
                    <div class="button text-center" routerLink="/pdf" [queryParams]="{src: item.caminho, id: item.id}">
                    <h5 style="text-transform: uppercase; font-weight: 800; font-size: 10px;"><b>{{ item.titulo }}</b></h5>
                    <span style="text-transform: uppercase; font-size: 12px;">Aluno: {{ item.aluno }}</span>
                    </div>
                }
            </div>
            <div class="d-flex justify-content-center my-5">
                <button class="btn btn-primary" [routerLink]="['']">Voltar</button>
            </div>
        </div>
    `
})

export class EscolhaComponent implements OnInit {

    escolhas = [
            {
                id: 47,
                titulo: "Tratamento osteopático para dor cervicobraquial: relato de caso",
                aluno: "Fernanda Vergani Pissaia",
                caminho: "/assets/pdf/fernanda.pdf"
            },
            {
                id: 48,
                titulo: "Abordagem Osteopática para Região Lombo-Sacra e seu Efeito na Dor, Mobilidade e Função: Estudo de Caso",
                aluno: "Juliana Hinterholz",
                caminho: "assets/pdf/juliana.pdf"
            },
            {
                id: 49,
                titulo: "Efeito do tratamento osteopático na dor, amplitude e funcionalidade de ombro. Relato de caso.",
                aluno: "Carolina Assis",
                caminho: "assets/pdf/carolina-assis.pdf"
            },
            {
                id: 50,
                titulo: "Influência do Tratamento Osteopático na dor, incapacidade e flexibilidade de cuidadora com dor lombar: relato de caso",
                aluno: "Maithê Blaya Leite",
                caminho: "assets/pdf/maithe.pdf"
            },
            {
                id: 51,
                titulo: "Intervenção osteopática na dor nos ombros associada a dor torácica e cefaléia: Relato de Caso",
                aluno: "Gustavo de Souza Moretti, CEI",
                caminho: "assets/pdf/gustavo.pdf"
            },
            {
                id: 52,
                titulo: "Influência do tratamento Osteopático na dor lombar baixa em jovem com discrepância de comprimento de membros inferiores: Relato de Caso.",
                aluno: "Karina Cristina Fernandes",
                caminho: "assets/pdf/karina.pdf"
            },
            {
                id: 53,
                titulo: "Tratamento osteopático para dor na região anterior da tíbia: Relato de caso",
                aluno: "Isabela Malaguti",
                caminho: "assets/pdf/isa.pdf"
            },
            {
                id: 54,
                titulo: "Influência do Tratamento Osteopático na neuralgia pós herpética: relato de caso",
                aluno: "Géssyka Mazzilli",
                caminho: "assets/pdf/gessyca.pdf"
            },
            {
                id: 55,
                titulo: "Influência do Tratamento Osteopático na dor, força muscular e mobilidade do ombro: relato de caso",
                aluno: "Gabriela Cardoso de Sousa",
                caminho: "assets/pdf/gabriela.pdf"
            },
            {
                id: 56,
                titulo: "Influência do Tratamento Osteopático na incapacidade e dor lombar com sintoma de irradiação para o membro inferior esquerdo: relato de caso",
                aluno: "Hidelvani Nunes Silva",
                caminho: "assets/pdf/hidelvani.pdf"
            },
            {
                id: 57,
                titulo: "Efeitos do tratamento manipulativo osteopático na dor, mobilidade e qualidade de vida em paciente com dor lombar: relato de caso.",
                aluno: "Marcio Kenji Hirata",
                caminho: "assets/pdf/marcio.pdf"
            },
            {
                id: 58,
                titulo: "Efeito do tratamento osteopático em aspectos físicos, dor e qualidade de vida em pacientes com cervicobraquialgia: Relato de caso.",
                aluno: "Flávia Luciana Lôbo Cunha Lima, CEI, Ma.",
                caminho: "assets/pdf/flavia.pdf"
            },
            {
                id: 59,
                titulo: "Influência do Tratamento Osteopático na dor, força muscular e mobilidade do ombro: relato de caso",
                aluno: "Gabriela Cardoso de Sousa",
                caminho: "assets/pdf/gabriela-2.pdf"
            },
            {
                id: 60,
                titulo: "Influência do Tratamento Osteopático na incapacidade e dor lombar com sintoma de irradiação para o membro inferior esquerdo: relato de caso",
                aluno: "Hidelvani Nunes Silva",
                caminho: "assets/pdf/hidelvani.pdf"
            },
            {
                id: 61,
                titulo: "Influência do Tratamento Osteopático na amplitude de movimento cervical e dor no ombro: relato de caso",
                aluno: "Renata Cristina Lemos de Oliveira",
                caminho: "assets/pdf/renata.pdf"
            },
            {
                id: 62,
                titulo: "Tratamento Osteopático na Ruptura de Menisco: Estudo de Caso",
                aluno: "William de Almeida Silva",
                caminho: "assets/pdf/william.pdf"
            },
            {
                id: 63,
                titulo: "Efeitos do tratamento osteopático na dor e mobilidade em paciente com dor sacroilíaca - relato de caso",
                aluno: "Daniela de Souza Pereira",
                caminho: "assets/pdf/daniela-pereira.pdf"
            },
            {
                id: 64,
                titulo: "Influência do Tratamento Osteopático na dor cervical, radicular e cefaléia: relato de caso",
                aluno: "Bibiana Melher Pereira",
                caminho: "assets/pdf/bibiana.pdf"
            },
            {
                id: 65,
                titulo: "Efeitos do tratamento osteopático na dor e mobilidade em paciente com dor sacroilíaca - relato de caso",
                aluno: "Daniela de Souza Pereira",
                caminho: "assets/pdf/daniela-pereira.pdf"
            },
            {
                id: 66,
                titulo: "Influência do Tratamento Osteopático na Dor Lombar em Paciente com sequela de Anestesia Raquimedular: Um relato de caso",
                aluno: "Jéssica Bomfim Palhano",
                caminho: "assets/pdf/jessica.pdf"
            },
            {
                id: 67,
                titulo: "Efeito do tratamento Osteopático na incontinência urinária: relato de caso",
                aluno: "Maria Carolina Carvalho dos Santos Schmitz",
                caminho: "assets/pdf/maria.pdf"
            },
            {
                id: 68,
                titulo: "A influência do tratamento osteopático na dor, amplitude de movimento e função em paciente com cervicalgia e irradiação para membros superiores: relato de caso.",
                aluno: "Maurício Arnoni Ferreira",
                caminho: "assets/pdf/mauricio.pdf"
            }
    ];

    constructor() { }

    ngOnInit() { }

    
}
