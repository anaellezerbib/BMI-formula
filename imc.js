//javaScript
//Calculer sa masse corpolaire 

import java.util.Scanner; // pour demander valeur à l'utilisateur des valeurs 

//const IMC = poids * taille ** 2
// avec le poids en kg, et la taille en m

// class IMCpeople {
    // constructor(height, weight) {
    // 	this.height = height;
    // 	this.weight = weight;
    // }
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');
    // Scanner inputReader = new Scanner(System.in);
    // System.out.println("Enter your height: ");
    // int height = inputReader.nextInt();
    // Scanner inputReader = new Scanner(System.in);
    // System.out.println("Enter your weight: ");
    // int weight = inputReader.nextInt();
	let IMC = weight / (height ** 2)     
