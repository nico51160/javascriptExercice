function TarifTTC () {
    this.prixHT = ht;
    this.calculerTTC = fonction() {
        var c = this.prixHT * 1.2;
        if(c > 0) {
            var msg = 'Le montant TTC est de ' + c +'Euros';
        } else {  
            var msg = 'Le montant TTC est nul';   
        }
        return msg;
    }
}

var tarif = new TarifTTC(10);
document.write(tarif.calculerTTC())