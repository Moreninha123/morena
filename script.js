document.addEventListener('DOMContentLoaded', function(){
let tamanhoAtualFonte= 1;
constaumentaFonteBotao= document.getElementById('aumentar-fonte');

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document..body.style.fontSize='${tamanhoAtualFonte}rem';
    })
    const diminuiFonteBotao= document.getElementById('diminuir-fonte');
    diminuirFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte-+ 0.1;
    document.body.style.fonteSize='${tamanhoAtualFonte}rem';
    })
})