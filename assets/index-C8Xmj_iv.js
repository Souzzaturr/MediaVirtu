(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();function p(){return`
        <header id = "cabecalho">
            <div id = "cabecalho-cima" class = "bg-blbl rgb-border-fade"></div>
            <div id = "cabecalho-meio" class = "bg-blbl rgb-border-fade"></div>
            <a id = "titulo" href = "">
                <h1 class = "goldman-bold">MediaVirtu</h1>
            </a>
        </header>
    `}const u={opcoes:["Inicio","Sobre","Ajuda","Feedback","Configurações"],enderecos_icones:["icones/menu_lateral_icons/icone-inicio.png","icones/menu_lateral_icons/icone-sobre.png","icones/menu_lateral_icons/icone-ajuda.png","icones/menu_lateral_icons/icone-feedback.png","icones/menu_lateral_icons/icone-configuracoes.svg"]},g={opcoes:["Meu Perfil","Postar","Excluir","Denunciar","sair"],enderecos_icones:["icones/menu_lateral_icons/icone-perfil.png","icones/menu_lateral_icons/icone-postar.png","icones/menu_lateral_icons/icone-excluir.svg","icones/menu_lateral_icons/icone-denunciar.png","icones/menu_lateral_icons/icone-sair.png"]},r={sidebar_left:u,sidebar_right:g};function m(){let e,i;const s=[0,1,2,3,4];var a='<section id = "barra-esquerda" class = "bg-blbl rgb-border-fade">';return s.forEach(o=>{e=r.sidebar_left.opcoes[o],i=r.sidebar_left.enderecos_icones[o],a+=`
        <a id = "${e}" class = "opcao-barra-lateral" href="" data-page = "${e}">
            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>

            <img class = "icon-barra-ltrl" src="${i}" alt="" width = "100%">                    
        </a>
        `}),a+="</section>",a}function f(){let e,i;const s=[0,1,2,3,4];var a='<section id = "barra-direita" class = "bg-blbl rgb-border-fade">';return s.forEach(o=>{e=r.sidebar_right.opcoes[o],i=r.sidebar_right.enderecos_icones[o],a+=`
        <a id = "${e}" class = "opcao-barra-lateral" href = "" data-page = "${e}">
            <img class = "icon-barra-ltrl" src = "${i}" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>
        </a>`}),a+="</section>",a}function h(){return'<nav id = "barras-navegacao-laterais">'+m()+f()+"</nav>"}const b=[{nome:"Dernald0_356",foto_perfil:"https://media.tenor.com/rLWM_LVTf-0AAAAM/%D0%BD%D1%83-%D0%B0%D1%87%D1%82%D0%BE.png",tempo_postagem:"Ontem",texto:"FINALMENTE, ALGUÉM CONSEGUIU!!",imagens:["pictures/lapis.png"]},{nome:"Euclides_34654",foto_perfil:"",tempo_postagem:"Anteontem",texto:"A saúde mental do estudante ao decorrer do semestre:",imagens:["pictures/picapau-bem.png","pictures/picapau-endoidado.png"]},{nome:"Juliao_FiatUno13",foto_perfil:"https://pbs.twimg.com/profile_images/1518671976222625794/XS5UoGKU_400x400.jpg",tempo_postagem:"Amanhã",texto:"O seu patrão vendo você fazer 1 hora de almoço durante sua hora de almoço",imagens:["pictures/patrao-hora-almoco.png"]},{nome:"featura_brentho123",foto_perfil:"",tempo_postagem:"Há 2 horas atrás",texto:"Você quando copia o código do tutorial e mesmo assim não funciona",imagens:["https://preview.redd.it/me-when-i-copy-the-exact-same-code-from-tutorial-and-it-v0-fak7lnhnr5rf1.jpeg?auto=webp&s=7b8a10942eea7622d9c0631afefa81df2a716054"]},{nome:"Ussoperr",foto_perfil:"https://stickerly.pstatic.net/sticker_pack/xO3zSKpBX8TqGJtXWsgzg/HTWPHY/17/1fa92768-261d-482a-8fb0-d383215c5d7c.png",tempo_postagem:"logo cedo",texto:`Padeiro chique é outra coisa! 
O pão não basta ser francês, tem que ser da LACOSTE!!!`,imagens:["pictures/pao-chique.png"]}];function v(){return`
        <div class = "tres-pontinhos">
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
        </div>
    `}function _(e,i,s,a,o=[]){const t=a.length>0?`<div class = "conteudo-shitpost">
        ${a.split(`
`).map(c=>`<p>${c}</p>`).join("")}
    </div>`:"",n=o.length>0?`<div class = "conjunto-imagens-shitpost">
        ${o.map(c=>`<img class = "imagem-shitpost" src = "${c}" alt = "imagem-shitpost">`).join("")}
    </div>`:"";return`
    <section class="bloco bloco-shitpost">
        <div class = "topo-shitpost">
            <div class="autor">
                <img src="${i}" alt="" class="foto-perfil">
                <div class="info-autor">
                    <h3 class="nome-autor goldman-bold">${e}</h3>
                    <p class="tempo-post">${s}</p>
                </div>
            </div>
            ${v()}
        </div>
        <div class = "principal-shitpost">
            ${t}
            ${n}
        </div>
        <div class = "painel-interacao-shitpost">
            ${$(e)}
            ${L(e)}
            ${A(e)}
        </div>
    </section>
    `}function $(e="ninguem"){return`
        <a class = "botao-gostei" href = "">
            <img class = "icone-gostei" src = "icones/interacao_shitpost_icons/icone-gostei.png" alt = "gostei">
            <p id = "gostei-shitpost-${e}">0</p>
        </a>
    `}function L(e="ninguem"){return`
        <a class = "botao-naogostei" href = "">
            <img class = "icone-naogostei" src = "icones/interacao_shitpost_icons/icone-naogostei.png" alt = "nao-gostei">
            <p id = "naogostei-shitpost-${e}">0</p>
        </a>
    `}function A(e="ninguem"){return`
        <a class = "botao-comentarios" href = "">
            <img class = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "nao-gostei">
            <p id = "qtd-comentarios-shitpost-${e}">0</p>
        </a>
    `}function E(){return`
    <div class="linha-divisoria-sessoes">
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
    </div>
    `}function x(){return q(b.map(e=>_(e.nome,e.foto_perfil?e.foto_perfil:"pictures/MediaVirtu_icon.png",e.tempo_postagem,e.texto,e.imagens)+E())).join("")}function q(e){for(let i=e.length-1;i>0;i--){const s=Math.floor(Math.random()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}function M(e){switch(e){case"Inicio":return x();case"Sobre":case"Ajuda":case"Feedback":case"Configurações":case"Meu Perfil":case"Postar":case"Excluir":case"Denunciar":case"sair":return"<div class = 'bloco'> Aguardem sensacionais revelações... </div>"}}var l="Inicio";const D=document.querySelector("#root");function O(){D.innerHTML=`
    ${p()}
    ${h()}
    <main id = "corpo-principal"></main>
    `,d(),y()}O();function d(){const e=document.querySelector("#corpo-principal");e.innerHTML=M(l)}function y(){document.querySelectorAll("[data-page]").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),l=s.currentTarget.dataset.page,d()})})}window.addEventListener("popstate",e=>{e.state&&e.state.page&&(l=e.state.page,render())});
