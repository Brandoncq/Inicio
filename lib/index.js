import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

export async function insertar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);			
    }
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null|| DATO=='')
        return;
    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);

    }catch(e){

        await bootbox_alert(e.message);
    }

}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        } 
        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null|| DATO=='')
        return;
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_alfinal(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);

    }catch(e){

        await bootbox_alert(e.message);
    }

}//////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null|| DATO=='')
        return;
        try{
            if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");
            var X = await bootbox_prompt("ingrese valor de referencia X");
            if(X==null|| X=='')
            return;
            lista.inserta_antes_X(DATO,X);
            lista.dibujarNodosLog();	
            lista.dibujarNodos(DATO);
    
        }catch(e){
    
            await bootbox_alert(e.message);
        }

    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null|| DATO=='')
        return;
        try{
            
            if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");
            var X = await bootbox_prompt("ingrese valor de referencia X");
            if(X==null|| X=='')
            return;
            lista.inserta_despues_X(DATO,X);
            lista.dibujarNodosLog();	
            lista.dibujarNodos(DATO);
    
        }catch(e){
    
            await bootbox_alert(e.message);
        }

    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////

export async function eliminar_primer(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
        throw new Error("LA LISTA ESTA VACIA");
        }
    }catch(e){

    await bootbox_alert(e.message);
    }
    lista.eliminar_primer();
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////
export async function eliminar_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();		
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
        throw new Error("LA LISTA ESTA VACIA");
        }
    }catch(e){

    await bootbox_alert(e.message);
}
    lista.eliminar_final();
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////
export async function eliminar_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        lista.canvas=canvas;//despues contructor	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
        throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null|| DATO=='')
        return;
        lista.eliminar_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminarDespues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null|| DATO=='')
        return;
        lista.eliminarDespues_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        lista.canvas=canvas;//despues contructor	
    }
  
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null|| DATO=='')
        return;
        lista.eliminar_antes_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////