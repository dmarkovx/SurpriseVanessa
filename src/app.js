let start = document.getElementById("start");
start.onclick = () =>{
    document.querySelector(".box").style.opacity = 1;
    document.getElementById("buttonStart").style.opacity=0;
    document.getElementById("audio").play();
    document.getElementById("audio").volume = 0.3;
    setTimeout(() =>{
        document.getElementById("container").style.opacity=1;
        document.getElementById("buttonStart").style.display = 'none';
    }, 1000);
}

console.log("========================================================================");
console.log("========================================================================");
console.log("Vaya!!! entraste a la consola, eso quiere decir que sabes algo de código o tal vez más que yo xd");
console.log("Ahora estoy disponible para trabajar(contrátame por favor, quiero comer :c)");
console.log("Me comprometo a aprender nuevas tecnologías en el menor tiempo posible");
console.log("Si en caso quieres contratarme(Por favor contrátame :c) entonces envíame un mensaje a mi email: dmarkovx@gmail.com ");
console.log("No tengo experiencia laboral pero conozco algunos lenguajes de programación, entre ellos javascript y python, quiero desenvolverme laboralmente");
console.log("Y si no puedes o no quieres contratarme entonces si deceas igual contáctame, te puedo enseñar lo que sé :D");
console.log("Buenas Noches :D");
console.log("Psdt: No robes mi código, mejor aprende a hacerlo, seguro haces uno mejor que el mío :D")
console.log("========================================================================");
console.log("========================================================================");

