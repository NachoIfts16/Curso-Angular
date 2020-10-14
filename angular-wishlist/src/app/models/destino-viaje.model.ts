export class destinoViaje{
    private selected: boolean;
    public servicios: string[];

    constructor(public nombre: string, public imangenUrl: string){
        this.servicios = ['pileta', 'desayuno'];
    }
    isSelected(): boolean{
        return this.selected
    }
    setSelected(s: boolean){
        this.selected = s;
    }

}