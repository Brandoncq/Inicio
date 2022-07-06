class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;
   
   constructor(canvas) {
    this.canvas = canvas;
   }///////////////////////////////////////////

   isVacio(){
    if(this.INICIO==null)
       return true;
    else 
       return false;
  }///////////////////////////////////////////
  
   buscar(DATO){
    var encontrado=false;
    var	tmp=this.INICIO;
    while(tmp!=null){
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.liga;
    }

    return encontrado;
   }

   inserta_inicio(DATO){

       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }///////////////////////////////////////////
   inserta_alfinal(DATO){
        var P=this.INICIO;
        
        var T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }/////////////////////////////////////////////
    dibujarNodosLog(valor){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }
    inserta_antes_X (DATO,X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                X1.liga=P;
                P=X1;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    } 
    inserta_despues_X (DATO,X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!= null){
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    }
    eliminar_primer(){
        if(this.INICIO!=null){
            var aux=this.INICIO;
            this.INICIO=this.INICIO.liga;
        }
        else{
            throw new Error("\n<Lista vacia>");
        }
    }
    eliminar_final(){
        if(this.INICIO!=null){
            var aux=this.INICIO;
            var borrar;
            while(aux.liga!=null){
                 borrar=aux;
                 aux=aux.liga; 
            }
            //caso.inicio = final 
            if(aux==this.INICIO){
                 this.INICIO=null;
            }
            //caso normal 
            else{
                 borrar.liga=null;
            }
         }
         else{
            throw new Error("\n<Lista Vacia>");
         }
     }
    eliminar_X(DATO){
        if(this.INICIO!=null){
            var eliminar=this.INICIO;
            var BAND=1;
            var atras;
            while(eliminar.info!=DATO && BAND==1 ){
                if(eliminar.liga!=null){
                    atras=eliminar;
                    eliminar=eliminar.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(eliminar==this.INICIO){
                    this.INICIO=this.INICIO.liga;
                }
                else{
                    atras.liga=eliminar.liga;
                }
            }
            else{
                throw new Error("\n\nEL NODO NO SE ENCUENTRA EN LA LISTA");
            }
        }
        else{
            throw new Error("\n<Lista vacia>");
        }   
    }
    eliminarDespues_X(DATO){
        if(this.INICIO!=null){
            var eliminar=this.INICIO;
            var BAND=1;
            var adelante=null;
            while(eliminar.info!=DATO && BAND==1 ){
                if(eliminar.liga!=null){
                    eliminar=eliminar.liga;
                    adelante=eliminar.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(eliminar==this.INICIO){
                    if(this.INICIO.liga!=null){
                        this.INICIO.liga=this.INICIO.liga.liga;
                    }
                    else{
                        throw new Error("No existe un nodo despues de este");
                    }
                }
                else{
                    if(adelante!=null){
                        eliminar.liga=adelante.liga;
                    }
                    else{
                        throw new Error("No existe elemento despues ");
                    }
                }
            }
            else{
                throw new Error("\n\nEL NODO NO SE ENCUENTRA EN LA LISTA");
            }
        }
        else{
            throw new Error("\n<Lista vacia>");
        }   
    }
    eliminar_antes_X(DATO){
        if(this.INICIO.info==DATO){
            throw new Error("\n[no hay nodo antes de este]");
        }
        else{
            var adelante=this.INICIO;
            var BAND=1;
            var atras;
            var aux;
            while(adelante.info!=DATO && BAND==1){
                if(adelante.liga!=null){
                    aux=atras;
                    atras=adelante;
                    adelante=adelante.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==0){
                throw new Error("No se encuentra el dato ingresado. ");
            }
            if(this.INICIO.liga==adelante){
                this.INICIO=adelante;
            }
            else{
                aux.liga=adelante;
            }
        }   
    }
    dibujarNodos(valor){
        
        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        
        var x=0;
        var y=0;
        var ctd=0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva
        var nodo=null;				
        while(tmp!=null){
            
            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(51,51,0)";//GRIS
                ctx.fillRect (x,y, 55,30);

                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;

            }
            else{
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(200,0,0)";  //ROJO
                ctx.fillRect (x,y, 55,30);
            }
            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp.liga;
            if(nodo!=null){

                setTimeout(function(){
    
                    ctx.beginPath();
                    ctx.fillStyle = "rgb(200,0,0)";//ROJO
                    ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                    //texto
                    ctx.fillStyle="white";
                    ctx.font = '15px Arial';
                    ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                    ctx.closePath();
    
                },2000);
    
            }
    
    
        }
        
    }
}