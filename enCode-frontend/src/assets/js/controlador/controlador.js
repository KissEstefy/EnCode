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
