function PrintInWindow(text){
    datos = text;
    document.getElementById('navbar').innerHTML = datos;
}

PrintInWindow("<h1>alequivacodotv</h1><ul><a href='#' class='url'>    <li>        <p class='titulo-debotones-menu'>        </p>    </li></a><a href='#' class='url'>    <li>        <p class='titulo-debotones-menu'></p>    <li></a><a href='#' class='url'>    <li>        <p class='titulo-debotones-menu'></p>    </li></a><a href='#' class='url'>    <li>        <p class='titulo-debotones-menu'></p>    </li></a></ul>");