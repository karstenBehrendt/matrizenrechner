/*
	Please do not use this code to evaluate my abilities. 
	This code was written in dark times: Before using std containers, libraries, object-orientation... basically in medieval times. You also will not find any comments. 
	
	
	Feel free to copy, use, manipulate and sell it as yours, if you want to. 
	
	This is basically a list of numeric funtions and it is in German. 
*/

//Entfernt den Text für Suchmaschinen, da die Gängigen immer noch nicht das Java-Script durchsuchen. 
function erklaerungenEntfernen(){
	document.getElementById('erklaerung').innerHTML = 'Hier kommen kurze Erklärungen hin. '; 
}

function matrixarray(n,m){
	var matrix = new Array(n); 
	for(var i=0; i<n; i++) matrix[i]= new Array(m); 
	return matrix; 
};

function ausgabe(matrix){

	var nachkommastellen; 
	nachkommastellen = Math.pow(10, document.form1.elements["nachkomma"].selectedIndex);

	
	var n = matrix.length; 
	var m = matrix[0].length; 
	var ausgabe = ""; 
	for(var i=0; i<n; i++){
		for(var j=0; j<m; j++){
			matrix[i][j] = Math.round(matrix[i][j] * nachkommastellen)/nachkommastellen; 
			ausgabe += matrix[i][j] + " ";
		}
		ausgabe += "\n"; 
	}
	document.form1.ergebnis.value=ausgabe;
};

function ausgabe2(matrix){

	var nachkommastellen; 
	nachkommastellen = Math.pow(10, document.form1.elements["nachkomma"].selectedIndex);

	var n = matrix.length; 
	var m = matrix[0].length; 
	var ausgabe = ""; 
	for(var i=0; i<n; i++){
		for(var j=0; j<m; j++){
			matrix[i][j] = Math.round(matrix[i][j] * nachkommastellen)/nachkommastellen; 		
			ausgabe += matrix[i][j] + " ";
		}
		ausgabe += "\n"; 
	}
	document.form1.ergebnis2.value=ausgabe;
};

function ausgabep(matrix){
	var n = matrix.length; 
	var m = matrix[0].length; 
	var ausgabe = ""; 
	for(var i=0; i<n; i++){
		for(var j=0; j<m; j++){
			matrix[i][j]=Math.round(matrix[i][j]*1000)/1000; 
			ausgabe += matrix[i][j] + " ";
		}
		ausgabe += "\n"; 
	}
	document.form1.ergebnisp.value=ausgabe;
};

function stringToArray(matrix1, n, m){

	var einDim = new Array(n*m); 
	var matrix = matrixarray(n, m); 

	var laenge = matrix1.length; 
	
	
	//eindimensionales array fuellen. 	
	var pos = 0; var marker1 = 0; var marker2 = 0; temp = ""; dim = 0; 
	//abfangen von pos == 0
	if(matrix1[pos] == "\n" || matrix1[pos] == " "){
		//do nothing
	}
	else{
		//do nothing, weil marker1 und marker2 schon  = 0 sind. 
	} pos = 1; 
	//Die wunderschoene Schleife
	while(pos < matrix1.length){
	if(matrix1[pos] == " " || matrix1[pos] == "\n"){
		if(matrix1[pos-1] == " " || matrix1[pos-1] == "\n"){
			//do nothing
		}
		else{
			//hier kommt der schoene tolle und super geniale teil. 
			while(marker1 <= marker2){
				temp += matrix1[marker1]; 
				marker1++; 
			}
			marker1 = 0; 
			marker2 = 0; 
			einDim[dim] = (temp*1);
			temp = ""; 1
			dim++; 
		}
	}
	else{
		if(matrix1[pos-1] == " " || matrix1[pos-1] == "\n"){
			marker1 = pos; marker2 = pos; 
		}
		else{
			marker2 = pos; 
		}
	}

	//letztes element auch noch ins array. 
	if(pos+1 == matrix1.length){
		if(marker1 != 0){
			while(marker1 <= marker2){
				temp += matrix1[marker1]; 
				marker1++; 
			}
			marker1 = 0; 
			marker2 = 0; 
			einDim[dim] = (temp*1);
			temp = ""; 1
			dim++; 	
		}
	}
		
	pos++; 
	}
	
	//Aus eindimensionalem array ein mehrdimensionales machen
	for(var i=0; i<n; i++){
		for(var j=0; j<m; j++){
			matrix[i][j] = einDim[i*m+j]; 
		}
	
	}

	return matrix; 
};

function einlesen(){

var matrix1 = document.form1.m1.value; 
	matrix1 = matrix1 + '\n'; 
var zeichen = matrix1.length; 

var bool = 0; var n = 1; var m = 1; var temp=0; 
for(var i=0; i<zeichen; i++){
	if(i==0){ //Hier wird mal wieder schoen der erste Eintrag abgefangen. 
		while(matrix1[i]==" " || matrix1[i]=="\n")i++; 
	}
	//Zeilenanzahl. 
	if(matrix1[i]=='\n'){
		temp=i+1; 
		while(temp<zeichen && bool==0){
			if(matrix1[temp]==' ' || matrix1[temp]=='\n'){}
			else{ bool=1}
			temp++; 
		}
		if(bool==1){n++}
		else{}
		temp=0; 
		bool=0; 
	}
	
	//Spalten anhand der ersten Zeile. 
	if(matrix1[i]==" " && n==1 && matrix1[i-1]!=" " && matrix1[i-1]!="\n"){
		temp=i+1; 
		while(matrix1[temp]!='\n'){
			if(matrix1[temp]!=' ')bool=1; 
			temp++; 
		}
		if(bool==1)m++; 
		temp=0; 
		bool=0; 
	}
}

	var matrix = stringToArray(matrix1, n, m); 
	return matrix; 
};

function einlesen2(){

var matrix1 = document.form1.m2.value; 
	matrix1 = matrix1 + '\n'; 
var zeichen = matrix1.length; 

var bool = 0; var n = 1; var m = 1; var temp=0; 
for(var i=0; i<zeichen; i++){
	if(i==0){ //Hier wird mal wieder schoen der erste Eintrag abgefangen. 
		while(matrix1[i]==" " || matrix1[i]=="\n")i++; 
	}
	//Zeilenanzahl. 
	if(matrix1[i]=='\n'){
		temp=i+1; 
		while(temp<zeichen && bool==0){
			if(matrix1[temp]==' ' || matrix1[temp]=='\n'){}
			else{ bool=1}
			temp++; 
		}
		if(bool==1){n++}
		else{}
		temp=0; 
		bool=0; 
	}
	
	//Spalten anhand der ersten Zeile. 
	if(matrix1[i]==" " && n==1 && matrix1[i-1]!=" " && matrix1[i-1]!="\n"){
		temp=i+1; 
		while(matrix1[temp]!='\n'){
			if(matrix1[temp]!=' ')bool=1; 
			temp++; 
		}
		if(bool==1)m++; 
		temp=0; 
		bool=0; 
	}
}

	var matrix = stringToArray(matrix1, n, m); 
	return matrix; 
};

function vektoreinlesen(){

var matrix1 = document.form1.vektor.value; 
var zeichen = matrix1.length; 

var bool = 0; var n = 1; var m = 1; var temp=0; 
for(var i=0; i<zeichen; i++){
	if(i==0){ //Hier wird mal wieder schoen der erste Eintrag abgefangen. 
		while(matrix1[i]==" " || matrix1[i]=="\n")i++; 
	}
	//Zeilenanzahl. 
	if(matrix1[i]=='\n'){
		temp=i+1; 
		while(temp<zeichen && bool==0){
			if(matrix1[temp]==' ' || matrix1[temp]=='\n'){}
			else{ bool=1}
			temp++; 
		}
		if(bool==1){n++}
		else{}
		temp=0; 
		bool=0; 
	}
	
	//Spalten anhand der ersten Zeile. 
	if(matrix1[i]==" " && n==1 && matrix1[i-1]!=" " && matrix1[i-1]!="\n"){
		temp=i+1; 
		while(matrix1[temp]!='\n'){
			if(matrix1[temp]!=' ')bool=1; 
			temp++; 
		}
		if(bool==1)m++; 
		temp=0; 
		bool=0; 
	}
}

	var matrix = stringToArray(matrix1, n, m); 
	return matrix; 
};

function vektoreinlesen2(){

var matrix1 = document.form1.vektor2.value; 
var zeichen = matrix1.length; 

var bool = 0; var n = 1; var m = 1; var temp=0; 
for(var i=0; i<zeichen; i++){
	if(i==0){ //Hier wird mal wieder schoen der erste Eintrag abgefangen. 
		while(matrix1[i]==" " || matrix1[i]=="\n")i++; 
	}
	//Zeilenanzahl. 
	if(matrix1[i]=='\n'){
		temp=i+1; 
		while(temp<zeichen && bool==0){
			if(matrix1[temp]==' ' || matrix1[temp]=='\n'){}
			else{ bool=1}
			temp++; 
		}
		if(bool==1){n++}
		else{}
		temp=0; 
		bool=0; 
	}
	
	//Spalten anhand der ersten Zeile. 
	if(matrix1[i]==" " && n==1 && matrix1[i-1]!=" " && matrix1[i-1]!="\n"){
		temp=i+1; 
		while(matrix1[temp]!='\n'){
			if(matrix1[temp]!=' ')bool=1; 
			temp++; 
		}
		if(bool==1)m++; 
		temp=0; 
		bool=0; 
	}
}

	var matrix = stringToArray(matrix1, n, m); 
	return matrix; 
};

function vektorEinlesen3(){

var matrix1 = document.form1.vektor3.value; 
var zeichen = matrix1.length; 

var bool = 0; var n = 1; var m = 1; var temp=0; 
for(var i=0; i<zeichen; i++){
	if(i==0){ //Hier wird mal wieder schoen der erste Eintrag abgefangen. 
		while(matrix1[i]==" " || matrix1[i]=="\n")i++; 
	}
	//Zeilenanzahl. 
	if(matrix1[i]=='\n'){
		temp=i+1; 
		while(temp<zeichen && bool==0){
			if(matrix1[temp]==' ' || matrix1[temp]=='\n'){}
			else{ bool=1}
			temp++; 
		}
		if(bool==1){n++}
		else{}
		temp=0; 
		bool=0; 
	}
	
	//Spalten anhand der ersten Zeile. 
	if(matrix1[i]==" " && n==1 && matrix1[i-1]!=" " && matrix1[i-1]!="\n"){
		temp=i+1; 
		while(matrix1[temp]!='\n'){
			if(matrix1[temp]!=' ')bool=1; 
			temp++; 
		}
		if(bool==1)m++; 
		temp=0; 
		bool=0; 
	}
}

	var matrix = stringToArray(matrix1, n, m); 
	return matrix; 
};

function skalarmultiplikation(){ 
document.getElementById('erklaerung').innerHTML = 'Einfach nur eine Matrix mit einer Zahl multiplizieren, dabei wird jeder Eintrag mit dem Skalar multipliziert. ';
//Matrix einlesen, n, m holen
	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 
	
//Skalar einlesen und zu zahl konvertieren
	var skalar = document.form1.skalar.value; 
	var laenge = skalar.length; 
	var skalarchar=""; 
document.form1.ergebnis2.value= "Der verwendete Skalar: " + skalar; 
	for(var i=0; i<laenge; i++){
		if(skalar[i]==' '||skalar[i]=='\n'){alert("bla"); break}
		skalarchar+=skalar[i]; 
	}

	var skalarwert= parseFloat(skalarchar); 
	
//Matrix mit Skalar multiplizieren
	for(var i=0; i<n; i++) for(var j=0; j<m; j++) matrix[i][j]=skalarwert*matrix[i][j]; 
	
		ausgabe(matrix); 
		document.form1.ergebnis2.value="Skalarmultiplikation \ndas ist ja mal wieder typisch, der Computer soll wohl die ganze sinnfreie Schreibarbeit machen... \n<----------"; 
	return 0; 
};

function matrixTransponieren(matrix){
	var n = matrix.length; 
	var m = matrix[0].length; 
	var temp = matrixarray(m,n); 
	for(var i=0; i<m; i++){
		for(var j=0; j<n; j++){
			temp[i][j] = matrix[j][i]; 
		}
	}
	return temp; 
};

function matrixmultiplikation(){
document.getElementById('erklaerung').innerHTML = 'Die Matrixmultiplikation ist sehr viel Arbeit per Hand. Skalarprodukte, Zeilen mal Spalten. ';
	var matrix1=einlesen(); 
	var matrix2=einlesen2(); 
	var n1= matrix1.length; 
	var n2= matrix2.length; 
	var m1= matrix1[0].length; 
	var m2= matrix2[0].length; 
	if(n2 != m1){document.form1.ergebnis.value="Die will ich aber nicht multiplizieren..."; return 0; } 
	var matrix= matrixarray(n1, m2);  //matrix = ergebnismatrix. 

	//Multiplikation: Zeilen1 * Spalten2, Dimension der neuen Matrix: 
	for(var i=0; i<n1; i++){
		for(var j=0; j<m2; j++){
			matrix[i][j] = 0; 
			for(var k=0; k<m1; k++){
				matrix[i][j] += (matrix1[i][k] * matrix2[k][j]); 
			}
		}
	}
	ausgabe(matrix); 
	
	document.form1.ergebnis2.value="Die Matrixmultiplikation \nSpass und Schreibarbeit fuer die ganze Familie \n<-----------"; 
	return 0; 
};

function transponierteAusgeben(){
document.getElementById('erklaerung').innerHTML = 'Eine Matrix wird transponiert, indem man die Elemente der Diagonalen spiegelt(quadratische Matrizen), bzw. die Indizes tauscht (alle Matrizen). ';
	var matrix = einlesen(); 
	matrix = matrixTransponieren(matrix); 
	document.form1.ergebnis2.value="Die Transponierte \nhaettest du auch selber rechnen koennen ;) \n<-----"; 
	ausgabe(matrix); 
};

function faktor(i, j){
	if((i+j)%2==0) return 1; 
	else return -1; 
};

function determinante(){
document.getElementById('erklaerung').innerHTML = 'Die Determinante wird hier nach Laplace berechnet, hierzu empfehle ich den Wikipedia Artikel. Was sehr wichtig ist, ist dass eine Matrix mit einer Determinante ungleich 0 invertierbar ist. ';

	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[1].length; 
	if(n!=m){
		document.form1.ergebnis.value="Nur von quadratischen Matrizen kann ich eine Determinante berechnen. "; 
		document.form1.ergebnis2.value=""; 	
		return -1; 
	} 
	if(n>10){
		document.form1.ergebnis.value="Das willst du deinem Rechner nicht antun, nimm die LR-Determinante... "; 
		document.form1.ergebnis2.value=""; 	
		return -1; 
	}
	var det = ndeterminante(matrix, n); 
	document.form1.ergebnis2.value = "Die Determinante \nuebrigens nach dem Laplace'schen Entwicklungssatz \nMit LRZerlegung waere auch einfach moeglich. \n<-----------"; 
	document.form1.ergebnis.value = det; 
	return det; 
};	

function createSubMatrix(matrix, k, n){
	var submatrix = matrixarray(n-1, n-1); 
	for(var y=0; y<n-1; y++){
		for(var z=0; z<n-1; z++){
		if(z<k) submatrix[y][z]= matrix[y+1][z]; 
		if(z>=k) submatrix[y][z]= matrix[y+1][z+1]; 
		}
	}	

	return submatrix; 
};

function ndeterminante(matrix, n){
	
	if(n==1) return matrix[0][0]; 
	if(n==2) return (matrix[0][0]*matrix[1][1]-matrix[1][0]*matrix[0][1]); 
	
		var det = 0; 
	
	for(var x=0; x<n; x++){
		var submatrix= createSubMatrix(matrix, x, n); 
		det += matrix[0][x]*ndeterminante(submatrix, n-1)*faktor(0,x); 
	}
	return det; 
	
};

function vektormultiplikation(){
document.getElementById('erklaerung').innerHTML = 'Eine Matrixmultiplikation bei der der Vektor als n*1 Matrix aufgefasst wird. ';
	var matrix1=einlesen(); 
	var matrix2=vektoreinlesen(); 
	var n1= matrix1.length; 
	var n2= matrix2.length; 
	var m1= matrix1[0].length; 
	var m2= matrix2[0].length; 
	if(n2 != m1){document.form1.ergebnis.value="Die will ich aber nicht multiplizieren..."; return 0; } 
	var matrix= matrixarray(n1, m2);  //matrix = ergebnismatrix. 

	//Multiplikation: Zeilen1 * Spalten2, Dimension der neuen Matrix: 
	for(var i=0; i<n1; i++){
		for(var j=0; j<m2; j++){
			matrix[i][j] = 0; 
			for(var k=0; k<m1; k++){
				matrix[i][j] += (matrix1[i][k] * matrix2[k][j]); 
			}
		}
	}
	document.form1.ergebnis2.value="Eine Vektormultiplikation kann man uebrigens auch einfach durchfuehren, indem man den Vektor als n*1-Matrix betrachet. "; 
	ausgabe(matrix); 
	
	return 0; 
};

function gauss(){
document.getElementById('erklaerung').innerHTML = 'Zum lösen linearer Gleichungssysteme verwendet man Anfangs Gauss Methode Zeilen mit einander zu addieren. Leider ist diese Methode numerisch nicht sehr stabil. ';
	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 

	var faktor = 0; 
	var temp; 
	
	for(var i=0; i<n; i++){

				if(matrix[i][i] == 0){
				//Finde zeile ungleich null und vertausche. 
				for(var xi = i+1; xi<n; xi++){
					if(matrix[xi][i] != 0){
						for(var eta = 0; eta < m; eta++){
							temp = matrix[i][eta]; 
							matrix[i][eta] = matrix[xi][eta]; 
							matrix[xi][eta] = temp; 
						}
					}
				}
			}
	
		for(var j=i+1; j<n; j++){

			if(matrix[i][i] != 0){ 
				faktor = matrix[j][i] / matrix[i][i]; 
				for(var k=0; k<m; k++){
					matrix[j][k] -= matrix[i][k]*faktor; 
				}
			}
		}
	}
	

	
	var pivotElement = new Array(n); 
	for(var d = 0; d < n; d++){
	//PivotElement setzen. 
		for(var e = 0; e < m; e++){
			if(matrix[d][e] != 0){
				pivotElement[d] = e; 
				break; 
				}
		}
		
	//Bei gleichem Pivotelement Zeile leeren. 
		for(var f = 0; f < d; f++){
			if(pivotElement[f] == pivotElement[d]){
				for(var g = 0; g < m; g++){
					matrix[f][g] = 0; 
				}
			}
		
		
		}
	}
	
	
	
	
	
	
	
	 
	//document.form1.ergebnisp.value="Lineare Abhängigkeiten müssen zur Zeit selber entfernt werden. ";
	document.form1.ergebnis2.value="Gauss-Elimination: \n ohne Pivotisierung, \n ohne aequilibrierung, \n und ohne Skalierung \n ohne Rangabfrage, ergo NaNs moeglich \n <---- :D";
	ausgabe(matrix); 
	return matrix; 
};




function lrgauss(){
	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 

	
	var faktor = 0; 
	var temp; 
	
	for(var i=0; i<n; i++){

				if(matrix[i][i] == 0){
				//Finde zeile ungleich null und vertausche. 
				for(var xi = i+1; xi<n; xi++){
					if(matrix[xi][i] != 0){
						for(var eta = 0; eta < m; eta++){
							temp = matrix[i][eta]; 
							matrix[i][eta] = matrix[xi][eta]; 
							matrix[xi][eta] = temp; 
						}
					}
				}
			}
	
		for(var j=i+1; j<n; j++){

			if(matrix[i][i] != 0){ 
				faktor = matrix[j][i] / matrix[i][i]; 
				for(var k=0; k<m; k++){
					matrix[j][k] -= matrix[i][k]*faktor; 
				}
			}
		}
	}
	
	//Wenn eine Zeile komplett Null ist -> alle daruntern null setzen. 
	//temp = 0; 
	//for(var phi = 0; phi < n-1; phi++){
	//	for(var psi = 0; psi < m-1; psi++){
	//		temp += matrix[n-2][phi]; 
	//	}
	//	if(temp == 0) matrix[phi][psi] = 0; 
	//	temp = 0; 
	//}
	 

	return matrix; 
};

function lrZerlegung(){
document.getElementById('erklaerung').innerHTML = 'Mittels Gauss-Verfahren wird diese Matrix in eine linke untere und eine rechte obere Dreiecksmatrix zerlegt. ';

	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 

	if(n!=m){
		document.form1.ergebnis.value="LR-Zerlegung nur fuer quadratische Matrizen"; 
		return -1; 
	} 
	
	if(rang()<n){
		document.form1.ergebnis.value="Der Rang der Matrix ist kleiner als n, also ist keine LR-Zerlegung moeglich"; 
		document.form1.ergebnis2.value="Sonst kann eine LR-Zerlegung echt toll sein, aber ich empfehle die QR-Zerlegung"; 
		return -1; 
	}
	
	for(var t=0; t<n; t++){
		if(matrix[t][t]==0){
			document.form1.ergebnis.value="Tut mir Leid, keine Pivotisierung, keine Nullstellen auf der Diagonalen bitte"; 
			return -1; 
		}
	}
	
	
	//Hier der relevante Teil
	
	for(var i=0; i<n; i++){
		//rechts
		for(var j=i; j<n; j++){
			for(var k= 0; k<i; k++){
				matrix[i][j] -= matrix[i][k]*matrix[k][j]; 
			}
		}
		//links
		for(var j=i+1; j<n; j++){
			for(k=0; k<i; k++){
				matrix[j][i] -= matrix[j][k]*matrix[k][i]; 
			}
			matrix[j][i] /= matrix[i][i]; 
		}
	}
	
	//schön in 2 matrizen: 
	var links = matrixarray(n,n); 
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			if(i>j){
				links[i][j] = matrix[i][j]; 
				matrix[i][j] = 0; 
			}
			if(i==j){
				links[i][j]= 1 ; 
			}
			if(j>i){
				links[i][j] = 0; 
			}
		}
	}
	
		
	//Hier endet der relevante Teil. 
	
	//var rechts = gauss(); 
	ausgabe(links); 
	ausgabe2(matrix); 
	
	return links; 

};

function skalarProdukt(){
document.getElementById('erklaerung').innerHTML = 'Das Skalarprodukt ist eine Verknüpfung zweier Vektoren, bei der die jeweiligen Elemente miteinander multipliziert werden und die Produkte addiert. ';
	var vektor1 = vektoreinlesen(); 
	var vektor2 = vektoreinlesen2(); 
	
	var n = vektor1.length; 
	var m = vektor2.length; 
	
	if(n!=m){
		document.form1.ergebnis.value="Vektoren bitte gleich lang. Danke"; 
		return -1; 
	}
	var produkt=0; 
	
	for(var i=0; i<n; i++){
		produkt += vektor1[i][0]*vektor2[i][0]; 
	}

	document.form1.ergebnis.value="Das Skalarprodukt betraegt: " + produkt; 
	document.form1.ergebnis2.value="Das Skalarprodukt \nlernt man schon vor dem Abi und nutzt es danach durchgehend fuer saemtliche Sachen... \n<-----"; 
	return produkt; 
};

function houseHold(){
document.getElementById('erklaerung').innerHTML = 'Die Vektormultiplikation mit 1 Vektor ausführen. Dies spannt eine Matrix auf. ';

	var vektor = vektoreinlesen(); 
	var n = vektor.length; 
	var matrix = matrixarray(n,n); 

	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			matrix[i][j]=vektor[i]*vektor[j]; 
		}
	}
	
	ausgabe(matrix); 
	document.form1.ergebnis2.value=" Die Householder Matrix \n (zu gegebenem Vektor) \n <-----"; 
	return 0; 
};

function vtv(){
document.getElementById('erklaerung').innerHTML = 'Der erste Vektor wird als n*1 Matrix aufgefasst, der zweite als 1*n Matrix, was multipliziert eine Matrix aufspannt. ';
	var vektor1 = vektoreinlesen(); 
	var vektor2 = vektoreinlesen2(); 
	var p = vektor1.length; 
	var o = vektor2.length; 
	
	var matrix = matrixarray(p,o); 
	
	for(var i=0; i<p; i++){
		for(var j=0; j<o; j++){
			matrix[i][j]=vektor1[i]*vektor2[j]; 
		}
	}
	document.form1.ergebnis2.value="Wozu brauchst du die denn?? \n<---------"; 
	ausgabe(matrix); 
};

function rang(){
document.getElementById('erklaerung').innerHTML = 'Der Rang einer Matrix ist die Anzahl der linear unabhängigen Zeilen. (=Anzahl der linear unabhängigen Spalten)';
	var matrix = gauss(); 
	var n = matrix.length; 
	var m = matrix[0].length; 
	var rang = 0; 
	var temp = 0; 
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			if(matrix[i][j] != 0) temp = 100; 
			temp+=matrix[i][j]; 
			
		}
		if(temp==0){}
		else{
		rang++; 
		temp = 0; 
		}
	}
	document.form1.ergebnis.value = "Der Rang der Matrix ist " + rang; 
	return rang; 
};

function hoch1(){
	document.form1.m1.value=document.form1.ergebnisp.value; 
};

function hoch2(){
	document.form1.m1.value=document.form1.ergebnis.value; 
};

function hoch3(){
	document.form1.m2.value=document.form1.ergebnis.value; 
};

function hoch4(){
	document.form1.m1.value=document.form1.ergebnis2.value; 
};
function hoch5(){
	document.form1.m2.value=document.form1.ergebnis2.value; 
};

function hoch6(){
	document.form1.m2.value=document.form1.ergebnisp.value; 
};

function matrixAddition(){
document.getElementById('erklaerung').innerHTML = 'Bei der Matrixaddition werden einfach die Elemente der jeweiligen Matrizen miteinander addiert. ';
	var matrix1 = einlesen(); 
	var matrix2 = einlesen2(); 
	var n1 = matrix1.length; 
	var n2 = matrix2.length; 
	var m1 = matrix1[0].length; 
	var m2 = matrix2[0].length; 
	if(n1!=n2||m1!=m2){
		document.form1.ergebnis.value="Die Matrizen muessen schon gleich gross ein fuer eine Addition"; 
		document.form1.ergebnis2.value="Zeilen- und Spaltenanzahl muessen uebereinstimmen. Rang ist hierbei egal."; 
		return 0; 
	}
	
	for(var i=0; i<n1; i++){
		for(var j=0; j<m1; j++){
			matrix1[i][j]+=matrix2[i][j]; 
		}
	}
	ausgabe(matrix1); 
	document.form1.ergebnis2.value="Einfach alle Elemtene an der gleichen Position miteinander addieren, das wars schon." ; 
	return matrix1; 
};


function axb(){
document.getElementById('erklaerung').innerHTML = 'Mittels Gauss-Verfahren wird hier A*x=b nach x aufgelöst. ';

	var matrix = gauss(); 
	var n = matrix.length; 
	var m = matrix[0].length; 

	if(n != m){
		document.form1.ergebnis.value = "Zur Zeit nur quadratische Matrizen bitte."; 
		return -1; 
	}

	if(AbRang() != rang()){
		document.form1.ergebnis.value = "Rang von A muss gleich Rang(Ab) sein damit ich das ausrechnen kann. "; 
		return -1; 
	}

	var links = lrZerlegung(); 	
	if(links == -1){
		document.form1.ergebnis.value="Ich rechne Lösungen noch mit LR Zerlegung, daher kann ich nur mit regulären Matrizen rechnen. "; 
		return -1; 
	}
	var vektor = vektoreinlesen(); 
	var vn = vektor.length; 
	if(vn != n){
		document.form1.ergebnis.value = "Die Matrix muss schon so gross sein wie der Vektor..."; 
		return -1; 
	}
	
	var x = new Array(n); 
	for(var i=0; i<n; i++){
		x[i] = 0; 
	}
	
	//Ly = b
	x[0] = vektor[0]/links[0][0]; 
	for(var i=1; i<n; i++){
		for(var j=i-1; j>=0; j--){
			vektor[i] -= links[i][j]*x[j]; 
		}
		x[i] = vektor[i]/links[i][i]; 
	}
	
	//Rx = y
	x[n-1]= vektor[n-1]/matrix[n-1][n-1]; 
	for(var i=n-2; i>=0; i--){
		for(var j=i+1; j<n; j++){
			vektor[i] -= matrix[i][j]*x[j]; 
		}
		x[i] = vektor[i]/matrix[i][i]; 
	}

	document.form1.ergebnis2.value = "Errechnet mit ganz simpler LR-Zerlegung. Noch ohne Spaltenvertauschung. "; 
	document.form1.ergebnis.value = x + '\n' + "(natürlich ein Spaltenvektor!)"; 
	return x; 

};

function LRdeterminante(){
document.getElementById('erklaerung').innerHTML = 'Hier wird die Determinante mittels LR-Zerlegung berechnet. Bei der LR-Zerlegung kann man die Diagonalelemente beider Matrizen mit einandern multiplizieren und erhält die Determinante. ';
	var matrix = lrgauss(); 
	var matrix2 = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 
	if(n != m){
		document.form1.ergebnis.value = "Der Herr Gauß mag es überhaupt nicht, wenn man versucht Determinanten von nicht quadratischen Matrizen zu berechnen"; 
		document.form1.ergebnis2.value = "Eine Determinante existiert nur bei nxn Matrizen"; 
		return 0; 
	}
	
	//Eine 0 abfange auf der Diagonalen der Matrix. 
	for(var x=0; x<m; x++){
		if(matrix2[x][x]==0){
			var lpdeterminante = determinante(); 
			document.form1.ergebnis.value = lpdeterminante; 
			document.form1.ergebnis2.value = "Wegen Nullen auf der Hauptdiagonalen wurde die Determinante mittels Laplace berechnet. "; 
			return lpdeterminante; 
		}
	}
	
	var det = matrix[0][0]; 
	for(var i = 1; i<n; i++){
		det *= matrix[i][i]; 
	}
	nachkommastellen = Math.pow(10, document.form1.elements["nachkomma"].selectedIndex);
			det = Math.round(det * nachkommastellen)/nachkommastellen; 	
	document.form1.ergebnis.value = det; 
	document.form1.ergebnis2.value = "Bei (rechts oberen und links unteren) Dreiecksmatrizen reicht es die Werte der Diagonalen zu multiplizieren \nJavascript mag manches nicht genau rechnen! "; 
	return det; 
}; 

function kern(){
var matrix = gauss(); 
var n = matrix.length; 
var m = matrix[0].length; 

for(var i=0; i<n; i++){
	for(var j=n-1; j>=i; j--){
		if(matrix[i][i]!=0){
			matrix[i][j] = matrix[i][j] / matrix[i][i]; 
		}
	}
}
//diagonale schon einmal alles eins!!!!


ausgabe(matrix); 

}; 

function AbRang(){
document.getElementById('erklaerung').innerHTML = 'Der Rang der Determinante mit b rechts hinzugefügt gibt an ob man das ganze eindeutig oder überhaupt nach x auflösen kann. (Ax=b)';
	var matrix1 = einlesen(); 
	var vektor = vektoreinlesen(); 
	var n1 = matrix1.length; 
	var m = matrix1[0].length; 
	var n2 = vektor.length; 
	
	if(n1 != n2){
		return -1; 
	}
	
	var matrix = matrixarray((n1),(m+1)); 
	for(var i = 0; i<n1; i++){
		for(var j=0; j<m+1; j++){
			if(j==m){
				matrix[i][j]=vektor[i]; 
			}
			else{
				matrix[i][j]=matrix1[i][j]; 
			}
		}
	}
	
	var temp = document.form1.m1.value; 
	ausgabe(matrix); 
	document.form1.m1.value = document.form1.ergebnis.value; 
	var rangab = rang(); 
	document.form1.m1.value = temp; 
	return rangab; 
	
}

function dimensionkern(){
document.getElementById('erklaerung').innerHTML = 'Die Dimension des Kerns gibt die Anzahl aller Zeilen - die Anzahl der linear unabhängigen Zeilen an. ';
	var rangs = rang(); 
	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 
	var groesser = 0; 
	if(n>m){
		groesser = n; 
	}
	else{
		groesser = m; 
	}
	var defekt = 0; 
	defekt = groesser - rangs; 
	document.form1.ergebnis.value="Die Dimension des Kerns dieser Matrix beträgt " + defekt + ". "; 
	document.form1.ergebnis2.value="Juhuu!"; 
	return defekt; 
};

function dimensionbild(){
	var rangs = rang(); 
	document.form1.ergebnis.value="Die Dimension des Bildes dieser Matrix beträgt " + rangs + ". "; 
	document.form1.ergebnis2.value="Juhuu!"; 	
	return rangs; 
};

function dimensionsregel(){
	var rangs = rang(); 
	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 
	var groesser = 0; 
	if(n>m){
		groesser = n; 
	}
	else{
		groesser = m; 
	}
	
	var defekt = 0; 
	defekt = groesser - rangs; 
	
	document.form1.ergebnis.value = "Dimensionsregel: \n" + groesser + " = " + rangs + " + " + defekt; 
	document.form1.ergebnis2.value = "Dimensionsregel: \n\nZeilen bzw. Spalten \n     = dim(Bild) + dim(Kerns) \n     = Rang + Defekt"; 
	return 0; 
};

function kreuzprodukt(){
document.getElementById('erklaerung').innerHTML = 'Das Kreuzprodukt ist in der Physik sehr interessant. Hier empfehle ich den Wikipedia-Artikel. ';
	var vektor1 = vektoreinlesen(); 
	var vektor2 = vektoreinlesen2(); 
	var vektor3 = new Array(3); 
	var n1 = vektor1.length; 
	var n2 = vektor2.length; 
	if(n1 != 3 || n2 != 3){
		document.form1.ergebnis.value="Das Kreuzprodukt ist nur für 2 Vektoren der Länge 3 definiert. "; 
		document.form1.ergebnis2.value=":-("; 
		return -1; 
	}
	vektor3[0]=0; vektor3[1]=0; vektor3[2]=0; 
		
	vektor3[0] = vektor1[1]*vektor2[2]-vektor1[2]*vektor2[1]; 
	vektor3[1] = vektor1[2]*vektor2[0]-vektor1[0]*vektor2[2]; 
	vektor3[2] = vektor1[0]*vektor2[1]-vektor1[1]*vektor2[0]; 
	
	ausgabe(vektor3); 
	document.form1.ergebnis.value= "Kreuzprodukt: \n" + vektor3; 
	document.form1.ergebnis2.value= "Kreuzprodukt: Determinante einer 3x3 Matrix nach der Regel von Sarrus mit der kanonischen Basis als erster Spaltenvektor"; 
	return vektor3; 
};

function spatprodukt(){
document.getElementById('erklaerung').innerHTML = 'Das Spatprodukt ist in der Physik sehr interessant, hierzu empfehle ich den Wikipedia-Artikel. ';
	var matrix = matrixarray(3,3); 
	var vektor1 = vektoreinlesen(); 
	var vektor2 = vektoreinlesen2(); 
	var vektor3 = vektorEinlesen3(); 
	if(vektor1.length != 3 || vektor2.length != 3 || vektor3.length != 3){
		document.form1.ergebnis.value="Die Vektoren müssen eine Länge von 3 haben. "; 
		document.form1.ergebnis2.value="Das Kreuzprodukt ist nur für Vektoren der Länge 3 (also 3x1 Matrizen) bestimmt."; 
		return -1; 
	}
	
	for(var i=0; i<3; i++){
		matrix[0][i]=vektor1[i]; 
		matrix[1][i]=vektor2[i]; 
		matrix[2][i]=vektor3[i]; 
	}
	
	ausgabe(matrix); 
	var temp = document.form1.m1.value; 
	document.form1.m1.value=document.form1.ergebnis.value; 
	var spat = determinante(); 
	document.form1.m1.value=temp; 
	
	document.form1.ergebnis.value="Das Spatprodukt beträgt: \n" + spat; 
	document.form1.ergebnis2.value="Kreuzprodukt aus Vektor 1 und 2, \ndann aus dem Ergebnis mit Vektor 3 das Skalarprodukt.\nOder einfach die Determinante aus der Matrix der 3 Vektoren. "; 
	return spat; 
}; 

function spur(){
document.getElementById('erklaerung').innerHTML = 'Die Spur einer Matrix ist die Summer ihrer Diagonaleinträge. Die Spur ist gleichzeitig die Summe aller Eigenwerte. ';
	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix[0].length; 
	
	if(n != m){
		document.form1.ergebnis.value="Funktioniert nur von quadratischen Matrizen"; 
		document.form1.ergebnis2.value="Die Spur einer Matrix ist die Summe ihrer Diagonaleinträge."; 
		return -1; 
	}
	var spur = 0; 
	for(var i=0; i<n; i++){
		spur+=matrix[i][i]; 
	}
		document.form1.ergebnis.value="Die Spur beträgt:\n"+spur; 
		document.form1.ergebnis2.value="Die Spur einer Matrix ist die Summe ihrer Diagonaleinträge."; 
		return spur; 
}; 

function synmetrie(){
	var matrix = einlesen(); 
	var n = matrix.length; 
	var m = matrix.length;

	if(n != m){
		document.form1.ergebnis.value="Synmetrie ist nur für nxn Matrizen. "; 
		return -1; 
	}
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			if(matrix[i][j] != matrix[j][i]){
				document.form1.ergebnis.value="Die Matrix ist nicht synmetrisch. (Zum Beispiel an der Stelle "+ i + "," + j + ".)"; 
				return -1; 
			}
		}
	}
	return 0; 
}

function cholesky(){
document.getElementById('erklaerung').innerHTML = 'Die Cholesky Zerlegung ist eine für synmetrische Matrizen optimierte LR-Zerlegung. ';

	var matrix = einlesen(); 
	
	var n = matrix.length; 
	var m = matrix.length; 
	
	var links = matrixarray(n,n); 
	var diagonal = matrixarray(n,n); 
	var rechts = matrixarray(n,n); 
	
	var test = synmetrie(); 
	if(test==-1){
		document.form1.ergebnis.value="Matrix ist nicht synmetrisch. "; 
		document.form1.ergebnis2.value="Die Cholesky-Zerlegung ist für diese Matrix nicht möglich. "; 
		return -1; 	
	}
	
	var vonk; 
	var spd=0; 
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
		vonk=0; 
			if(i==j){
				for(var k=0; k<j; k++){
					vonk += links[j][k]*links[j][k]*links[k][k]; 
				}
				links[i][i] = matrix[i][i] - vonk; 
				if(links[i][j]<=0) spd++; 
			}
			if(i!=j){
				for(var k=0; k<j; k++){
					vonk +=links[i][k]*links[k][k]*links[j][k]; 
				}
				links[i][j]=(matrix[i][j]-vonk)/links[j][j]; 
			}
		}
	}

	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			if(i>j){
				diagonal[i][j]=0; 
				rechts[i][j]=0; 
			}
			if(i==j){
				diagonal[i][j]=links[i][j]; 
				rechts[i][j]=1;
				links[i][j]=1; 
			}
			if(i<j){
				diagonal[i][j]=0; 
				rechts[i][j]=links[j][i]; 
				links[i][j]=0; 
			}
		}
	}
	
	if(spd>0){
		document.form1.m2.value="Achtung! Matrix ist nicht positiv definit - Hier kann es zu Fehlern kommen!"; 
	}
	
	
	ausgabep(links); 
	ausgabe(diagonal); 
	ausgabe2(rechts); 

	return 1; 
}

function mmintern(matrix1, matrix2){

	var n1 = matrix1.length; 
	var n2 = matrix2.length; 
	var m1 = matrix1[0].length; 
	var m2 = matrix2[0].length; 
	var mmatrix = matrixarray(n1, m2); 

	for(var i=0; i<n1; i++){
		for(var j=0; j<m2; j++){
			mmatrix[i][j] = 0; 
			for(var k=0; k<m1; k++){
				mmatrix[i][j] += (matrix1[i][k] * matrix2[k][j]);
			}
		}
	}
	return mmatrix; 

}

function hhintern(vektor){

	var n = vektor.length; 
	var hmatrix = matrixarray(n,n); 

	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			hmatrix[i][j]=vektor[i]*vektor[j]; 
		}
	}
	
	return hmatrix;  
}

function skalarintern(vektor){
	var n = vektor.length; 
	var skalar = 0; 
	for(var i=0; i<n; i++){
		skalar += vektor[i]*vektor[i]; 
	}
	return skalar; 
}

function qerstellen(skalar, household, m, p){

	var qtemp = matrixarray(m,m); 
	
	for(var i=0; i<m; i++){
		for(var j=0; j<m; j++){
			if(i==j) qtemp[i][j]=1; 
			else qtemp[i][j] = 0; 
		}
	}
	
	for(var i=0; i<m-p; i++){
		for(var j=0; j<m-p; j++){
			qtemp[i+p][j+p]=qtemp[i][j] - 2 * household[i][j]/skalar; 
		}
	}
	return qtemp; 
}

function hhintern(vektor, m){

	var n = vektor.length; 
	var hmatrix = matrixarray(n,n); 

	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			hmatrix[i][j]=vektor[i]*vektor[j]; 
		}
	}
	
	return hmatrix;  
}

function skalarintern(vektor){
	var n = vektor.length; 
	var skalar = 0; 
	for(var i=0; i<n; i++){
		skalar += vektor[i]*vektor[i]; 
	}
	return skalar; 
}

function qerstellen(skalar, household, m, i){

	var qtemp = matrixarray(m,m); 
	for(var i=0; i<m; i++){
		for(var j=0; j<m; j++){
			if(i==j) qtemp[i][j]=1 - 2 * household[i][j]/skalar; 
			else qtemp[i][j] = 0 - 2* household[i][j]/skalar; 
		}
	}
	return qtemp; 
}

function vektorkorrektur(vektor, i, skalar){
		if(vektor[i]>=0){
		vektor[i]=vektor[i]+Math.sqrt(skalar); 
		}
		else{
		vektor[i]=vektor[i]-Math.sqrt(skalar); 
		}
	return vektor; 
};


function qrhouse(){
document.getElementById('erklaerung').innerHTML = 'Die Householder Transformation ist eine Spiegelung, so dass gewünschte Stellen zu Null werden. Das Ergebnis zeigt Q*A = R. R ist eine rechte obere Dreiecksmatrix, Q ist eine orthogonale Matrix. Dies kann umgestellt werden zu A = Q(transponiert)*R. Dieses Verfahren ist sehr stabil. ';
	var matrix = einlesen(); 
	var orgmatrix = matrix; 
	var n= matrix.length; 
	var m= matrix[0].length; 
	var vektor = new Array(m); 
	var k=0; k=n; if(m<n) k=m; 
	var skalar; 
	var household; 
	var qges = matrixarray(n,n); 
	
	if(n<m){
		document.form1.ergebnis.value="Tut mir Leid, QR Zerlegung zur Zeit nur für Matrizen mit m>n und m=n hier berechenbar. "; 
		document.form1.ergebnis2.value="Sollte nur eine Sache von ein paar Tagen sein"; 
		return -1; 
	}
	
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			qges[i][j]=0; 
			if(i==j) qges[i][j]=1; 
		}
	}


			
	for(var i=0; i<k; i++){  //Spalten durchlaufen
		for(var j=0; j<n; j++){  //Spalte für Vektor nehmen. 
			if(i>j) vektor[j]=0; 
			else vektor[j] = matrix[j][i]; 
			}
			
			skalar = skalarintern(vektor); 
			vektor = vektorkorrektur(vektor, i, skalar); 
			skalar = skalarintern(vektor); 
			

			
			household = hhintern(vektor, n); 			
			
			qtemp = qerstellen(skalar, household, n, i); 		
			qges = mmintern(qtemp, qges); 
			
			matrix = mmintern(qtemp, matrix); 
		
	}
	ausgabep(qges)
	ausgabe(orgmatrix); 
	ausgabe2(matrix); 
	return 0; 
};


function createGoodSubMatrix(matrix, n, i, j){
	var sub = matrixarray(n-1, n-1); 

	for(var y=0; y<i; y++){
		for(var z=0; z<j; z++){
			sub[y][z]=matrix[y][z]; 
		}
	}
	
	for(var y=0; y<i; y++){
		for(var z=j+1; z<n; z++){
			sub[y][z-1]=matrix[y][z]; 
		}
	}
	
	for(var y=i+1; y<n; y++){
		for(var z=0; z<j; z++){
			sub[y-1][z]=matrix[y][z]; 
		}
	}
	
	for(var y=i+1; y<n; y++){
		for(var z=j+1; z<n; z++){
			sub[y-1][z-1]=matrix[y][z]; 
		}
	}
	
	return sub; 
};


function adjunkte(){
document.getElementById('erklaerung').innerHTML = 'Die Adjunkte berechnet sich so ein bisschen wie die Determinate nach dem Laplaceschen Entwicklungssatz (ein bisschen!). Mit ihr kann man die Inverse berechnen. ';
	var matrix = einlesen(); 
	var m = matrix.length; 
	var n = matrix[0].length; 
	if(n!=m){
		document.form1.ergebnis.value="Adjunkte nur von quadratischen Matrizen berechenbar. "; 
		document.form1.ergebnis2.value=""; 
		return -1; 
	}
	
	if(n>10){
		document.form1.ergebnis.value="Das willst du deinem Rechner nicht antun... "; 
		document.form1.ergebnis2.value=""; 
		return -1; 
	}

	var adjunkt=matrixarray(n,n); 
	var sub=matrixarray(n-1,n-1); 
	
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			sub = createGoodSubMatrix(matrix, n, i, j); 
			adjunkt[i][j]= ndeterminante(sub, n-1); 
			if((i+j)%2==1) adjunkt[i][j] = -adjunkt[i][j];
		}
	}
	var transponierte = matrixarray(n,n); 
	for(var i=0; i<n; i++){
		for(var j=0; j<n;j++){
			transponierte[i][j] = adjunkt[j][i]; 
		}
	}

	
	ausgabe(transponierte); 
	document.form1.ergebnis2.value="Das ist die Adjunkte. Bringt sie Dir was? ;)"; 
	return transponierte; 
}; 

function inverse(){
document.getElementById('erklaerung').innerHTML = 'Matrize*Inverse = Einheitsmatrix. Mit der Inversen kann man Ax=b auflösen. Also Inverse*A*x=Inverse*b <=> x = Inverse*b. ';

	var det = determinante(); 
	if(det == 0){
		document.form1.ergebnis.value="Inverse nur von Matrizen mit vollem Rang errechenbar. "; 
		document.form1.ergebnis2.value="eine Matrix hat vollen Rang, wenn ihre Determinante ungleich 0 ist. "; 
		return -1; 	
	}
	
	var matrix = adjunkte(); 
	if(matrix == -1){
		document.form1.ergebnis.value="Entweder ist diese Matrix nicht quadratisch... oder zu gross für deinen Rechner. "; 
		document.form1.ergebnis2.value="Von dieser Matrix gibt es also hier keine Inverse. "; 
		return -1; 	
	}
	var n = matrix.length; 
	
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			matrix[i][j]= matrix[i][j]/det; 
		}
	}
	
	var transponierte = matrixarray(n,n); 
	for(var i=0; i<n; i++){
		for(var j=0; j<n;j++){
			transponierte[i][j] = matrix[j][i]; 
		}
	}
	
	ausgabe(matrix); 
	document.form1.ergebnis2.value="Und das ist die Inverse. "; 
	return matrix; 
}; 

function betragsnorm(){
document.getElementById('erklaerung').innerHTML = 'Die Betragsnorm ist eine Vektornorm. Alle Vektoreinträge werden hier addiert. ';
	var vektor = vektoreinlesen(); 
	var norm = 0; 
	var n = vektor.length; 
	for(var i=0; i<n; i++){
		if(vektor[i]>0)	norm+=vektor[i]*1; 
		else norm-=vektor[i]; 
	}	
	
	document.form1.ergebnis.value=norm; 
	document.form1.ergebnis2.value="Die Betragsnorm: Einfach die Beträge der Werte des Vektors addieren"; 
	return norm; 
}; 

function euklidnorm(){
document.getElementById('erklaerung').innerHTML = 'Die Euklidnorm ist eine Vektornorm. Die Quadrate aller Einträge werden addiert und aus der Summe wird die Wurzel gezogen. ';
	var vektor = vektoreinlesen();
	var norm = 0; 	
	var n = vektor.length; 
	for(var i=0; i<n; i++){
		norm+=vektor[i]*vektor[i]; 
	}	
	norm = Math.sqrt(norm); 
	document.form1.ergebnis.value=norm; 
	document.form1.ergebnis2.value="Die Euklidische Norm: Die Quadrate der Werte addieren und aus dem Ergebnis die Wurzel ziehen. "; 
	return norm; 	
	
	
};

function maxnorm(){
document.getElementById('erklaerung').innerHTML = 'Die Maximumsnorm ist eine Vektornorm. Es wird hier nur der größte Eintrag des Vektors genommen und das war es schon. ';
	var vektor = vektoreinlesen();
	var norm = 0; 	
	var n = vektor.length; 
	for(var i=0; i<n; i++){
		if(vektor[i]>norm) norm=vektor[i]; 
	}	
	
	document.form1.ergebnis.value=norm; 
	document.form1.ergebnis2.value="Die Maximumsnorm: Der grösste Wert im Vektor. "; 
	return norm; 	
};

function spaltensummennorm(){
document.getElementById('erklaerung').innerHTML = 'Die Spaltensummennorm ist eine Matrixnorm. Hier wird die Spalte mit der größten Betragsnorm genommen. ';
	var matrix = einlesen(); 
	var norm = 0; var temp=0; 
	var m = matrix.length; 
	var n = matrix[0].length; 
	
	for(var i=0; i<n; i++){
		for(var j=0; j<m; j++){
			temp+=Math.abs(matrix[j][i]); 
		}
		if(temp>norm) norm = temp; 
		if(temp*(-1)>norm) norm = temp*-1; 
		temp =0; 
	}
	
	document.form1.ergebnis.value=norm; 
	document.form1.ergebnis2.value="Die Spaltensummennorm: Die grösste Spalte "; 
	return norm; 	
	
};

function zeilensummennorm(){
document.getElementById('erklaerung').innerHTML = 'Die Zeilensummennorm ist eine Matrixnorm. Hier wird die Zeile mit der größten Betragsnorm genommen. ';
	var matrix = einlesen();
	var norm = 0; var temp = 0; 	
	var m = matrix.length; 
	var n = matrix[0].length; 
	
	for(var i=0; i<m; i++){
		for(var j=0; j<n; j++){
			temp+=Math.abs(matrix[i][j]); 
		}
		if(temp>norm) norm = temp; 
		if(temp*(-1)>norm) norm = temp*-1; 
		temp =0; 
	}	
	
	document.form1.ergebnis.value=norm; 
	document.form1.ergebnis2.value="Die Zeilensummennorm: Die grösste Zeile "; 
	return norm; 	
};

function gesamtnorm(){
document.getElementById('erklaerung').innerHTML = 'Die Gesamtnorm ist eine Matrixnorm. Für die Norm wird lediglich das betragsmäßig größte Element genommen und mit der Anzahl aller Elemente mutipliziert. ';
	var matrix = einlesen(); 
	var norm = 0; 
	var m = matrix.length; 
	var n = matrix[0].length; 
	var temp =0; 
	
	for(var i=0; i<m; i++){
		for(var j=0; j<n; j++){
			if(matrix[i][j]>0){
				if(matrix[i][j]>norm) norm=matrix[i][j]; 
			}
			else{
				matrix[i][j]=matrix[i][j]*-1; 
				if(matrix[i][j]>norm) norm=matrix[i][j]; 				
			}
		}
	}
	norm = norm * n * m; 
	
	document.form1.ergebnis.value=norm; 
	document.form1.ergebnis2.value="Die Gesamtnorm: Das Betragsmässig grösste Element multipliziert mit der Anzahl der Elemente. "; 
	return norm; 	
};

function relFehler(){
document.getElementById('erklaerung').innerHTML = 'Der relative Fehler ist die Norm dividiert durch die Norm der Inversen. Hier wird der relative Fehler für drei Normen berechnet. ';
	var matrix = einlesen(); 
	if(determinante() == 0){
		document.form1.ergebnis.value="Relativer Fehler: \u221E"; 
		document.form1.ergebnis2.value=""; 
		return -1; 	
	
	}
	var n = matrix.length; 
	var invers = inverse(); 
	if(invers == -1){
		document.form1.ergebnis.value="Keine reguläre Matrix. Kein relativer Fehler berechenbar. "; 
		document.form1.ergebnis2.value=""; 
		return -1; 
	}
	
	var matrixfeld = document.form1.m1.value; 
	var inversefeld = document.form1.ergebnis.value; 
	
	var betragsnorm = spaltensummennorm(); 
	var maxnorm = zeilensummennorm(); 
	var gesamt = gesamtnorm(); 
	
	document.form1.m1.value = inversefeld; 
	
	var ibetragsnorm = spaltensummennorm(); 
	var imaxnorm = zeilensummennorm(); 
	var igesamt = gesamtnorm(); 

	var relbetrag = betragsnorm/ibetragsnorm; 
	var relmax = maxnorm / imaxnorm; 
	var relgesamt = gesamt/igesamt; 
	
	document.form1.m1.value=matrixfeld; 
	
		document.form1.ergebnis.value="Relativer Fehler \nBetragsnorm: "+relbetrag+"\nMaxnorm: " + relmax + "\nGesamtnorm: " + relgesamt; 
		document.form1.ergebnis2.value="So langsam wird das skript leicht nerdig. "; 
		return relgesamt; 
};

function pivotisierung(){
document.getElementById('erklaerung').innerHTML = 'Die Pivotisierung guckt welche Zeile an welcher Stelle das größte Element hat und das wird genutzt zur Sortierung. Dadurch kann man z.B. den Gauss Algorithmus stabiler gestalten. ';
	var matrix = einlesen(); 
	var m = matrix.length; 
	var n = matrix[0].length; 
	var zeilen = new Array(m); 
	var test = 1; 
	for(var i=0; i<n; i++)zeilen[i]=-3; 
	
	var max = matrixarray(2,1); 
	max[0][0]=-100000; 
	max[1][0]=-1; 
	
	for(var i=0; i<m; i++){
		for(var j=0; j<m; j++){
			for(var k=0; k<n; k++){
				if(matrix[j][k]>max[0][0]){
					for(var l=0; l<m; l++){
						if(l==zeilen[l])test=0;  
					}
					if(test==1){
						max[0][0]=matrix[j][k]; 
						max[1][0]=j; 
					}
					test=1; 
				}
			}
		}
		if(i==2)document.form1.ergebnisp.value = max[0][0]; 
		zeilen[i]=max[1][0]; 
		max[0][0]=-100000; 
		max[1][0]=-1; 
		test=1; 
	}
	document.form1.ergebnis.value=zeilen; 
	return 0; 
};

function aequilibrierung(){
document.getElementById('erklaerung').innerHTML = 'Bei dieser Äquilibrierung wird bekommt jede Zeile eine Betragsnorm von 1. Dadurch werden Verfahren durch zusätzliche Pivotisierung sehr viel stabiler. ';
	var matrix = einlesen(); 
	var m = matrix.length; 
	var n = matrix[0].length; 
	var matrix2 = matrixarray(m, m); 
	
	var zeilen = new Array(m); 
	
	for(var i=0; i<m; i++){
	zeilen[i]=0; 
		for(var j=0; j<n; j++){
			zeilen[i]+=matrix[i][j]; 

		}
	}
	for(var i=0; i<m; i++){ 
		for(var j=0; j<n; j++){
			matrix[i][j]= matrix[i][j]/zeilen[i]; 
		}
	}	
	for(var i=0; i<m; i++){
		for(var j=0; j<m; j++){
			matrix2[i][j]=0; 
			if(i==j)matrix2[i][i]=zeilen[i]; 
		}
	}
	
	ausgabe(matrix); 
	ausgabep(matrix2); 
	document.form1.ergebnis2.value="Jetzt ist jede Zeile gleich gross, dafür sind es jetzt 2 Matrizen."; 
	return 0; 
};

function aequipivo(){
document.getElementById('erklaerung').innerHTML = 'Äquilibrierung und Pivotisierung führt dazu, dass zB die LR-Zerlegung sehr viel stabiler wird. ';
	var matrix = einlesen(); 
	var m = matrix.length; 
	var n = matrix[0].length; 
	
	
	return 0; 
};


function givensmatrix(aij, ajj, k, i, j){

	var qmatrix = matrixarray(k,k); 
		for(var y=0; y<k; y++){
			for(var z=0; z<k; z++){
				qmatrix[y][z] = 0; 
				if(y==z) qmatrix[y][z] = 1; 
			}
	}
		
		var p = Math.sqrt(ajj*ajj + aij*aij); 
		if(ajj<0) p = -p; 
		c = ajj/p; 
		s = aij/p; 

		qmatrix[i][i] = c; 
		qmatrix[i][j] = -s; 
		qmatrix[j][i] = s; 
		qmatrix[j][j] = c; 
	
	return qmatrix; 

}; 


function qrgivens(){
document.getElementById('erklaerung').innerHTML = 'Die Givens Rotation ist eine Drehung, so dass gewünschte Stellen zu Null werden. Das Ergebnis zeigt Q*A = R. R ist eine rechte obere Dreiecksmatrix, Q ist eine orthogonale Matrix. Dies kann umgestellt werden zu A = Q(transponiert)*R. Das Verfahren ist sehr stabil. ';

	var matrix = einlesen(); 
	var orgmatrix = matrix; 
	var m = matrix.length; 
	var n = matrix[0].length; 
	var qmatrixges = matrixarray(m,m); 
	
	for(var z=0; z<m; z++){
		for(var y=0; y<m; y++){
			qmatrixges[z][y] = 0; 
			if(y==z) qmatrixges[y][z] =1; 
		}
	}
	
	var qmatrixtemp; 
	
	for(var i=0; i<m; i++){
		for(var j=0; j<n; j++){
			if(i<=j) continue; 
			if(matrix[i][j]==0) continue; 
			qmatrixtemp = givensmatrix(matrix[i][j], matrix[j][j], m, i, j); 
			qmatrixges = mmintern(qmatrixtemp, qmatrixges); 
			matrix = mmintern(qmatrixtemp, matrix); 			
			
			
		}
	}
	
	ausgabep(qmatrixges); 
	ausgabe(orgmatrix); 
	ausgabe2(matrix);
	
	
	return matrix; 
	
}; 


function internalQrVerfahren(matrix){

	var m = matrix.length; 
	var n = matrix[0].length; 
	var qmatrixges = matrixarray(m,m); 
	
	for(var z=0; z<m; z++){
		for(var y=0; y<m; y++){
			qmatrixges[z][y] = 0; 
			if(y==z) qmatrixges[y][z] =1; 
		}
	}
	
	var qmatrixtemp; 
	
	for(var i=0; i<m; i++){
		for(var j=0; j<n; j++){
			if(i<=j) continue; 
			if(matrix[i][j]==0) continue; 
			qmatrixtemp = givensmatrix(matrix[i][j], matrix[j][j], m, i, j); 
			qmatrixges = mmintern(qmatrixtemp, qmatrixges); 
			matrix = mmintern(qmatrixtemp, matrix); 			
			
			
		}
	}

ausgabep(matrix); 	
	
	qmatrixges  = matrixTransponieren(qmatrixges); 
	matrix = mmintern(matrix, qmatrixges); 
	
	return matrix; 
	
}; 


function eigenwerte(){
document.getElementById('erklaerung').innerHTML = 'Eigenwerte sind toll.  ';

	var matrix = einlesen(); 
	var orgmatrix = matrix; 
	var m = matrix.length; 
	var n = matrix[0].length; 
	if(m != n){
		document.form1.ergebnis.value="Für die Eigenwerte benötige ich eine quadratische Matrix."; 
		return -1; 
	}
	
	 
	for(var y=0; y<500; y++){
	matrix = internalQrVerfahren(matrix); 
	}
	ausgabe(matrix);
	
	return matrix; 
};