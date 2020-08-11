plumas = [
    {
        codigoHtml: 'App 18',
        codigoCss: 'img/app-icons/18.webp',
        codigoJs: 'Desarrollador 16',
    },
    {
    codigoCss: 'h1 {↵    color:red;↵}',
    codigoHtml: '<div id="contenedor"></div>',
    codigoJs: 'function hola(){↵    document.getElementById("contenedor").innerHTML += ↵        `  ↵        <h1>Hola</h1>↵        `; ↵}↵hola();'
    }
];

// Funciones para el editor
  function update(){
    var res = document.getElementById('resultado-editor').contentWindow.document;
    res.open();
    // HTML
    res.write(eh.getValue());
    // CSS
    res.write('<style>'+ec.getValue()+'</style>');
    // JS
    res.write('<script>'+ej.getValue()+'</script>'); //Modificar
    
    res.close();
}

function seteditor(){
    // HTML
    window.eh = ace.edit('html-editor');
    eh.setTheme('ace/theme/twilight');
    eh.session.setMode('ace/mode/html');
    // CSS
    window.ec = ace.edit('css-editor');
    ec.setTheme('ace/theme/twilight');
    ec.session.setMode('ace/mode/css');
    // CSS
    window.ej = ace.edit('js-editor');
    ej.setTheme('ace/theme/twilight');
    ej.session.setMode('ace/mode/javascript');

    eh.getSession().on('change', function(){
        update();
    });

    ec.getSession().on('change', function(){
        update();
    });

    ej.getSession().on('change', function(){
        update();
    });
}
seteditor();
update();


function guardar() {
    console.log(plumas);
    console.log(eh.getValue());
    plumas.push({
        codigoHtml:eh.getValue(),
        codigoCss:ec.getValue(),
        codigoJs:ej.getValue(),
      });
      console.log(plumas);
}

backendHost:string = 'http://localhost:8888';

// function guardarUsuario() {

// } 

function mostrarPlumas(){
    document.getElementById('plumas').innerHTML += 
    ` 
    <div class="col-xl-4 mb-5 mb-xl-0">
        <div class="card bg-gradient-default shadow card-proyecto" >
        <a href="index" class="btn btn-expandir" ><i class="fas fa-expand-arrows-alt"></i>
        </a>
        <img src="../../assets/img/theme/sketch.jpg" class="image-proyecto" alt="..." onclick="www.google.com">
        <div class="contenido" ><a href="detallePluma"> Titulo Proyecto</a></div>
        <div class="contenido-2">Desarrollador</div>
        </div>
    </div> 
    ` ;
    console.log('nweubf');
}

mostrarPlumas();