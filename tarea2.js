var varPropiedades ={
    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    esSegura: false,
    llamarAlerta: function(alerta){
        alert('Mensaje de alerta, el mensaje es: '+alerta);
    },
    esHttps: function (){
        if (window.location.protocol == "https:"){
            this.esSegura = true;
            return true;
            
        }else{
            this.esSegura = false;
            return false;
        }
    },
    eliminarMascota: function(tipoMascota){
        var encuentra = this.mascotas.indexOf(tipoMascota);
        if (encuentra != -1){
            console.log('Se ha eliminado '+tipoMascota);
            this.mascotas.splice(encuentra,1);
            return this.mascotas;
            
        }else if(encuentra = -1){
            console.log('No se encontro la mascota '+tipoMascota);
            return this.mascotas;
        }
    },
    eliminarUltimaMascota: function(){
        this.mascotas.pop();
        return this.mascotas;
    },
    agregarMascota:function(nuevaMascota){
        var ultimo = this.mascotas.length;
        this.mascotas.splice(ultimo,1,nuevaMascota);
        return this.mascotas;
    },
    contadorMascotas: function(){
        cantMascotas = 0;
        this.mascotas.forEach(function(valor, indice, completo){
            if (valor.slice(-2) == 'os'){ //retorna las 2 ultimas letras de la palabra
                this.cantMascotas +=1;
            }
        })
        return 'En el arreglo hay '+cantMascotas+' mascotas que terminan con "os"'
    }
}