function main() {
    //1
    let texto_inicial = document.getElementById('explicacion').innerHTML
    let texto_adicional = 'Te damos la bienvenida al curso.'
    document.getElementById('explicacion').innerHTML = texto_inicial + texto_adicional
    //2
    let elementos_standard = document.getElementsByClassName('standard')
    elementos_standard[0].style.width = '30%'
    elementos_standard[1].style.width = '30%'
    //3
    document.getElementById('horario').style.border = '1em dotted lightblue'
    //4
    document.getElementById('cuartaHora').style.backgroundColor = 'red'
    //5
    document.getElementsByClassName('asignaturas')[0].style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    document.getElementsByClassName('asignaturas')[1].style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    //6
    document.getElementById('bienvenida').style.cssText = `
    font-family: Cascadia Code PL;
    text-decoration: underline;
    `
    //7
    document.getElementsByTagName('tr')[0].style.cssText = `
    text-align: center;
    font-size: 2em;
    font-family: Arial;
    text-align: center;
    color: black;
    `
    document.getElementsByTagName('tr')[1].style.cssText = `
    text-align: center;
    font-size: 0.75em;
    font-family: Arial;
    text-align: center;
    color: ;
    `
    document.getElementsByTagName('tr')[2].style.cssText = `
    text-align: center;
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: #EA330C;
    `
    document.getElementsByTagName('tr')[3].style.cssText = `
    text-align: center;
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: #EA330C;
    `
    document.getElementsByTagName('tr')[4].style.cssText = `
    text-align: center;
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: #EA330C;
    `
    document.getElementsByTagName('tr')[6].style.cssText = `
    text-align: center;
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: #EA330C;
    `
    document.getElementsByTagName('tr')[7].style.cssText = `
    text-align: center;
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: #EA330C;
    `
    document.getElementsByTagName('tr')[8].style.cssText = `
    text-align: center;
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: #EA330C;
    `
    document.getElementsByTagName('tr')[9].style.cssText = `
    text-align: center;
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: #EA330C;
    `
    //8
    document.write('<strong>Los horarios son provisionales, están dispuestos a cambios.</strong>')
    //9
    var node = document.createElement('LI');
    var textnode = document.createTextNode('Diseño de interfaces web');
    node.appendChild(textnode);
    document.getElementById("segundo").appendChild(node);

    var node = document.createElement('LI');
    var textnode = document.createTextNode('Despliegue de aplicaciones web');
    node.appendChild(textnode);
    document.getElementById("segundo").appendChild(node);

    var node = document.createElement('LI');
    var textnode = document.createTextNode('Formación en centros de trabajo');
    node.appendChild(textnode);
    document.getElementById("segundo").appendChild(node);
}
main()