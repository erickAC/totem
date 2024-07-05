import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EscolhaService } from './escolha.service';

@Component({
    selector: 'app-pdf',
    standalone: true,
    imports: [
        PdfViewerModule,
        RouterModule
    ],
    template: `
        <pdf-viewer [src]="src" [render-text]="true" [original-size]="false" style="width: 100%; height: 700px;"></pdf-viewer>
        <div class="d-flex justify-content-center column-gap-3">
            <button class="btn btn-secondary" (click)="votar('regular')">REGULAR</button>
            <button class="btn btn-success" (click)="votar('bom')">BOM</button>
            <button class="btn btn-success" (click)="votar('otimo')">ÓTIMO</button>
        </div>
        <div class="d-flex justify-content-center text-center mt-3">
            <button class="btn btn-primary" (click)="back()">Voltar</button>
        </div>
    `
})  

export class PdfComponent implements OnInit {

    private service = inject(EscolhaService);
    public src = new String;
    public id = new String;

    constructor(private router: ActivatedRoute, private route: Router) {
       this.router.queryParams.subscribe(x => {
        this.src = x["src"];
        this.id = x["id"];
        console.log(this.id);
       }); 
    }

    ngOnInit() { }

    back = () => window.history.back();

    votar(tipo: string) {
        this.service.salvar(tipo, Number(this.id)).subscribe({
            next: () => {
                this.route.navigate(["escolha"])
            }
        });
    }

}