import {Lista} from './lista.js';

let lista=null;

export function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);
        lista.canvas=canvas;//despues contructor			
    }
    
    var DATO = window.prompt("ingrese valor de nodo");
    lista.inserta_inicio(DATO);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}////////////////////////////////////////////////////////
export function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = window.prompt("ingrese valor de nodo");
    lista.inserta_final(DATO);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}//////////////////////////////////////////////////////////
export function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = window.prompt("ingrese valor de DATO");
    var X = window.prompt("ingrese valor de X");
    lista.inserta_antes_X(DATO,X);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////
export function insertar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = window.prompt("ingrese valor de DATO");
    var X = window.prompt("ingrese valor de X");
    lista.inserta_antes_X(DATO,X);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////