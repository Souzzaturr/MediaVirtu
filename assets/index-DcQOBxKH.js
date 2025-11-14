(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function p(){return`
        <header id = "cabecalho">
            <div id = "cabecalho-cima" class = "bg-blbl rgb-border-fade"></div>
            <div id = "cabecalho-meio" class = "bg-blbl rgb-border-fade"></div>
            <a id = "titulo" href = "">
                <h1 class = "goldman-bold">MediaVirtu</h1>
            </a>
        </header>
    `}const u={opcoes:["Inicio","Sobre","Ajuda","Feedback","Configurações"],enderecos_icones:["icones/menu_lateral_icons/icone-inicio.png","icones/menu_lateral_icons/icone-sobre.png","icones/menu_lateral_icons/icone-ajuda.png","icones/menu_lateral_icons/icone-feedback.png","icones/menu_lateral_icons/icone-configuracoes.svg"]},m={opcoes:["Meu Perfil","Postar","Excluir","Denunciar","sair"],enderecos_icones:["icones/menu_lateral_icons/icone-perfil.png","icones/menu_lateral_icons/icone-postar.png","icones/menu_lateral_icons/icone-excluir.svg","icones/menu_lateral_icons/icone-denunciar.png","icones/menu_lateral_icons/icone-sair.png"]},n={sidebar_left:u,sidebar_right:m};function f(){let e,a;const t=[0,1,2,3,4];var i='<section id = "barra-esquerda" class = "bg-blbl rgb-border-fade">';return t.forEach(o=>{e=n.sidebar_left.opcoes[o],a=n.sidebar_left.enderecos_icones[o],i+=`
        <a id = "${e}" class = "opcao-barra-lateral" href="" data-page = "${e}">
            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>

            <img class = "icon-barra-ltrl" src="${a}" alt="" width = "100%">                    
        </a>
        `}),i+="</section>",i}function g(){let e,a;const t=[0,1,2,3,4];var i='<section id = "barra-direita" class = "bg-blbl rgb-border-fade">';return t.forEach(o=>{e=n.sidebar_right.opcoes[o],a=n.sidebar_right.enderecos_icones[o],i+=`
        <a id = "${e}" class = "opcao-barra-lateral" href = "" data-page = "${e}">
            <img class = "icon-barra-ltrl" src = "${a}" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>
        </a>`}),i+="</section>",i}function b(){return'<nav id = "barras-navegacao-laterais">'+f()+g()+"</nav>"}const h=[{nome:"Dernald0_356",foto_perfil:"https://media.tenor.com/rLWM_LVTf-0AAAAM/%D0%BD%D1%83-%D0%B0%D1%87%D1%82%D0%BE.png",tempo_postagem:"Ontem",texto:"FINALMENTE, ALGUÉM CONSEGUIU!!",imagens:["pictures/lapis.png"]},{nome:"Euclides_34654",foto_perfil:"",tempo_postagem:"Anteontem",texto:"A saúde mental do estudante ao decorrer do semestre:",imagens:["pictures/picapau-bem.png","pictures/picapau-endoidado.png"]},{nome:"Juliao_FiatUno13",foto_perfil:"https://pbs.twimg.com/profile_images/1518671976222625794/XS5UoGKU_400x400.jpg",tempo_postagem:"Amanhã",texto:"O seu patrão vendo você fazer 1 hora de almoço durante sua hora de almoço",imagens:["pictures/patrao-hora-almoco.png"]},{nome:"featura_brentho123",foto_perfil:"",tempo_postagem:"Há 2 horas atrás",texto:"Você quando copia o código do tutorial e mesmo assim não funciona",imagens:["https://preview.redd.it/me-when-i-copy-the-exact-same-code-from-tutorial-and-it-v0-fak7lnhnr5rf1.jpeg?auto=webp&s=7b8a10942eea7622d9c0631afefa81df2a716054"]},{nome:"Ussoperr",foto_perfil:"https://stickerly.pstatic.net/sticker_pack/xO3zSKpBX8TqGJtXWsgzg/HTWPHY/17/1fa92768-261d-482a-8fb0-d383215c5d7c.png",tempo_postagem:"logo cedo",texto:`Padeiro chique é outra coisa! 
O pão não basta ser francês, tem que ser da LACOSTE!!!`,imagens:["pictures/pao-chique.png"]}];function _(e,a,t,i,o=[]){const r=i.length>0?`<div class = "conteudo-shitpost">
        ${i.split(`
`).map(c=>`<p>${c}</p>`).join("")}
    </div>`:"",s=o.length>0?`<div class = "conjunto-imagens-shitpost">
        ${o.map(c=>`<img class = "imagem-shitpost" src = "${c}" alt = "imagem-shitpost">`).join("")}
    </div>`:"";return`
    <section class="bloco">
        <div class="autor">
            <img src="${a}" alt="" class="foto-perfil">
            <div class="info-autor">
                <h3 class="nome-autor goldman-bold">${e}</h3>
                <p class="tempo-post">${t}</p>
            </div>
        </div>
        ${r}
        ${s}
    </section>
    `}function v(){return`
    <div class="linha-divisoria-sessoes">
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
    </div>
    `}function $(){return L(h.map(e=>_(e.nome,e.foto_perfil?e.foto_perfil:"pictures/MediaVirtu_icon.png",e.tempo_postagem,e.texto,e.imagens)+v())).join("")}function L(e){for(let a=e.length-1;a>0;a--){const t=Math.floor(Math.random()*(a+1));[e[a],e[t]]=[e[t],e[a]]}return e}function A(e){switch(e){case"Inicio":return $();case"Sobre":case"Ajuda":case"Feedback":case"Configurações":case"Meu Perfil":case"Postar":case"Excluir":case"Denunciar":case"sair":return"<div class = 'bloco'> Aguardem sensacionais revelações... </div>"}}var l="Inicio";const E=document.querySelector("#root");function x(){E.innerHTML=`
    ${p()}
    ${b()}
    <main id = "corpo-principal"></main>
    `,d(),M()}x();function d(){const e=document.querySelector("#corpo-principal");e.innerHTML=A(l)}function M(){document.querySelectorAll("[data-page]").forEach(a=>{a.addEventListener("click",t=>{t.preventDefault(),l=t.currentTarget.dataset.page,d()})})}window.addEventListener("popstate",e=>{e.state&&e.state.page&&(l=e.state.page,render())});
