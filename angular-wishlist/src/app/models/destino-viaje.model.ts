export class destinoViaje{
    private selected: boolean;

    constructor(public nombre: string, public imangenUrl: string){}
    isSelected(): boolean{
        return this.selected
    }
    setSelected(s: boolean){
        this.selected = s;
    }

}