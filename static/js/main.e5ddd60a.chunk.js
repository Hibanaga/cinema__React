(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(20),c=a.n(n),i=a(4),s=a(166),l=a.p+"static/media/logo.8c1cea37.svg",o=a(51),d=a.n(o),u=a(78),m=a.n(u),j=a(7),_=a(1);function f(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),s=Object(i.a)(c,2),l=s[0],o=s[1];Object(r.useEffect)((function(){var e=localStorage.getItem("querySearch");e&&n(e)}),[]);return Object(_.jsxs)(_.Fragment,{children:[l&&Object(_.jsx)(j.a,{to:{pathname:"/cinema__React/".concat(a)}}),Object(_.jsxs)("form",{action:"",className:"js-form__searchBox",onSubmit:function(e){e.preventDefault(),o(!l)},children:[Object(_.jsx)("input",{type:"text",placeholder:"I'm looking for...",className:"js-input-searchBox",value:a,onChange:function(e){n(e.target.value),localStorage.setItem("querySearch",e.target.value)}}),Object(_.jsx)("button",{type:"submit",className:"js-btn-submit__form",children:Object(_.jsx)(d.a,{})})]})]})}a(100);var b=a(165),O=a(76),g=a.n(O),h=a(77),p=a.n(h);function v(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(g.a,{ContainerClassName:"AnyClassForContainer",TransitionClassName:"AnyClassForTransition",EasingType:"linear",StopPosition:0,ShowAtPosition:520,children:Object(_.jsx)(p.a,{})})})}var x=a(12),N=a(22),S=a.n(N),y=a(11);function E(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),o=Object(i.a)(c,2),u=o[0],j=o[1],O=Object(r.useState)(!0),g=Object(i.a)(O,2),h=g[0],p=g[1],N=Object(r.useState)(0),E=Object(i.a)(N,2),F=E[0],w=E[1];function I(e){w(e.target.innerWidth)}return window.addEventListener("resize",y.debounce(I,100)),Object(r.useEffect)((function(){return F>=1440&&j(!0),function(){return function(){return window.removeEventListener("resize",I)}}}),[F]),Object(r.useEffect)((function(){null===window.sessionStorage.getItem("firstLoadDone")?(p(!0),window.sessionStorage.setItem("firstLoadDone",1)):p(!1),w(window.innerWidth)}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("header",{className:h?"fade__in-hello":"",children:Object(_.jsxs)("nav",{className:"wrapperHeaderNav",children:[Object(_.jsxs)("ul",{className:a?"header__menu header__menu__active":"header__menu",children:[Object(_.jsx)("li",{className:"liItem__menu",children:Object(_.jsx)(x.c,{exact:!0,className:"liItem__link--navLink",activeClassName:"liItem__link__active--navLink",to:S.a.home,children:"Favorites"})}),Object(_.jsxs)("li",{className:"liItem__menu liItem__toggleMenu",children:["My library",Object(_.jsxs)("ul",{className:"hidden__header-menu",children:[Object(_.jsx)("li",{className:"liItem__hidden-menu",children:Object(_.jsx)(x.c,{className:"liItem__link--navLink",activeClassName:"liItem__link__active--navLink",to:S.a.watched,children:"Watched"})}),Object(_.jsx)("li",{className:"liItem__hidden-menu",children:Object(_.jsx)(x.c,{className:"liItem__link--navLink",activeClassName:"liItem__link__active--navLink",to:S.a.queue,children:"Queue"})})]})]})]}),Object(_.jsx)("div",{className:"wrapperMainNav",children:Object(_.jsxs)("div",{className:"header__content",children:[Object(_.jsxs)("div",{className:"wrapper__nav",children:[Object(_.jsx)("div",{className:a?"wrapper__hamburger-active":"wrapper__hamburger",children:Object(_.jsx)(s.a,{toggled:a,toggle:n,size:"30",easing:"ease-in",rounded:!0})}),Object(_.jsx)("img",{src:l,alt:"logo flix.by",className:"imgLogo"})]}),Object(_.jsx)("div",{className:"search__iconHeader",onClick:function(){j(!0)},children:Object(_.jsx)(d.a,{})}),Object(_.jsx)(b.a,{in:u,appear:!0,unmountOnExit:!0,classNames:"fade",timeout:{enter:500,exit:500},children:Object(_.jsxs)("div",{className:"wrapper__searchBox-active",children:[Object(_.jsx)(f,{}),Object(_.jsx)("button",{className:"js-btn__closeForm",onClick:function(){j(!1)},children:Object(_.jsx)(m.a,{})})]})})]})})]})}),Object(_.jsx)(v,{})]})}var F=a(6),w=a(79),I=a.n(w),D=(a(119),a(120),a(121),[a.p+"static/media/bastards.3b18a86d.jpg",a.p+"static/media/fightclub.4d108340.jpg",a.p+"static/media/backtothefuture.314aa45b.jpg",a.p+"static/media/madmax.7e1dd605.jpg",a.p+"static/media/therewillbeblood.5a780147.jpg",a.p+"static/media/revesiourdogs.aa3c31eb.jpg",a.p+"static/media/oldboy.c0fe09e6.jpg",a.p+"static/media/thedeparted.7efabe05.jpg"]),C=a(80),A=a(28),T=a.n(A);function R(e){var t=e.img,a=e.name,r=e.genres,n=e.year,c=e.rating;return Object(_.jsxs)("div",{className:"wrapperCardFilm",children:[Object(_.jsxs)("div",{className:"rating__description--cardFilm",children:[Object(_.jsx)(T.a,{})," ",Object(_.jsx)("span",{className:"description__rating--cardFilm",children:c})]}),Object(_.jsx)("img",{src:t,alt:a,className:"img_film--cardFilm"}),Object(_.jsxs)("div",{className:"info__film--cardFilm",children:[Object(_.jsx)("h1",{className:"title__film--cardFilm",children:a.length>20?a.substring(0,10)+"...":a}),Object(_.jsxs)("ul",{className:"menu__genres--cardFilm",children:[r.map((function(e,t){return Object(_.jsx)("li",{className:"liItem--cardFilm",children:e},t)})),Object(_.jsx)("li",{className:"liItem--cardfilm year__film--cardFilm",children:n})]})]})]})}function L(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1}),s=Object(i.a)(c,2),l=s[0],o=s[1];return Object(r.useEffect)((function(){function e(e){n(e.target.innerWidth)}return window.addEventListener("resize",y.debounce(e,100)),n(window.innerWidth),a>=320&&o(Object(F.a)(Object(F.a)({},l),{},{slidesToShow:1,centerMode:!1})),a>=425&&o(Object(F.a)(Object(F.a)({},l),{},{centerMode:!0})),a>=768&&o(Object(F.a)(Object(F.a)({},l),{},{centerMode:!0,slidesToShow:2})),a>=1440&&o(Object(F.a)(Object(F.a)({},l),{},{centerMode:!0,slidesToShow:3})),function(){return window.removeEventListener("resize",e)}}),[a]),Object(_.jsx)("div",{className:"wrapperCarousel",children:Object(_.jsx)(I.a,Object(F.a)(Object(F.a)({},l),{},{children:C.map((function(e,t){var a=e.id,r=e.name,n=e.genres,c=e.year,i=e.rating;return Object(_.jsx)(R,{img:D[t],name:r,genres:n,year:c,rating:i},a)}))}))})}var J=a(81),M=a.n(J),Q=(a(122),a(17));var k=function(){return fetch(Q.GENRE_LISTREQUEST).then((function(e){return e.json()})).then((function(e){return e.genres}))},G=a(8),H=a(3);function W(e){var t=e.selectedMovie,a=e.onChnageHandleToggle,r=function(e){a(e.target.textContent)};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("span",{className:"Featured"===t?"description__films--slideText description__films__active--slideText":"description__films--slideText",onClick:r,children:"Featured"}),Object(_.jsx)("span",{className:"Popular"===t?"description__films--slideText description__films__active--slideText":"description__films--slideText",onClick:r,children:"Popular"}),Object(_.jsx)("span",{className:"Newest"===t?"description__films--slideText description__films__active--slideText":"description__films--slideText",onClick:r,children:"Newest"}),Object(_.jsx)("div",{className:"Featured"===t?"swipping__part--slideText":"Popular"===t?"swipping__part--slideText swipping__part--medium":"Newest"===t?"swipping__part--slideText swipping__part--large":"swipping__part--slideText"})]})}var P=Object(G.b)((function(e){return{genres:e.genres}}),(function(e){return{addGenresHandler:function(t){return e({type:H.ADD_GENRES,payload:t})},addCurrGenreHandler:function(t){return e({type:H.ADD_CURRGENRE,payload:t})},addSelectedCatalogHandler:function(t){return e({type:H.ADD_SELECTEDCATEGORY,payload:t})}}}))((function(e){var t=e.genres,a=e.addGenresHandler,n=e.addCurrGenreHandler,c=e.addSelectedCatalogHandler,s=Object(r.useState)(!1),l=Object(i.a)(s,2),o=l[0],d=l[1],u=Object(r.useState)("All Genres"),m=Object(i.a)(u,2),j=m[0],f=m[1],b=Object(r.useState)("Featured"),O=Object(i.a)(b,2),g=O[0],h=O[1],p=function(){d(!o)},v=function(e){"SPAN"!==e.target.nodeName&&(e.target.value||d(!1))},x=function(e){f(e.target.textContent),c(e.target.textContent)};return window.addEventListener("click",v),Object(r.useEffect)((function(){k().then((function(e){return a(e)}))}),[]),Object(r.useEffect)((function(){return function(){return window.removeEventListener("click",v)}})),Object(_.jsx)("div",{className:"wrapper__menu--selectFilm",children:Object(_.jsxs)("div",{className:"row__menu--selectFilm",children:[Object(_.jsx)("div",{className:"wrapp__customSelect--selectFilm",children:Object(_.jsxs)("button",{className:"js-btn__toggleSelect--selectFilm",onClick:p,value:"false",children:[j,Object(_.jsx)("input",{type:"checkbox",id:"arrow",className:"js-input__checkbox--selectFilm",checked:o,onChange:p})," ",Object(_.jsx)("label",{htmlFor:"arrow",className:"arrow__dropDown--selectFilm",children:Object(_.jsx)(M.a,{})})]})}),Object(_.jsx)("div",{className:"slide__radio--selectFilm",children:Object(_.jsx)(W,{selectedMovie:g,onChnageHandleToggle:function(e){h(e),n(e)}})}),Object(_.jsxs)("aside",{className:o?"hidden__selectGenre--selectFilm hidden__selectGenre__active--selectFilm":"hidden__selectGenre--selectFilm",children:[Object(_.jsx)("span",{className:"All Genres"===j?"liItem__genre--selectFilm liItem__genreActive--selectFilm":"liItem__genre--selectFilm",onClick:x,children:"All Genres"}),t.length>0&&t.map((function(e){var t=e.id,a=e.name;return Object(_.jsx)("span",{className:j===a?"liItem__genre--selectFilm liItem__genreActive--selectFilm":"liItem__genre--selectFilm",onClick:x,children:a},t)}))]})]})})})),B=a(35),U=a.n(B),q=a(37),z=a.n(q),Y=a(36),V=a.n(Y);var X=function(e,t){var a=[];if(void 0!==t)for(var r=function(r){r<2&&e.map((function(e){var n=e.id,c=e.name;t[r]===n&&a.push(c)}))},n=0;n<t.length;n++)r(n);return a},K=a(54);var Z=function(e,t){if(Array.isArray(t)){var a,r=Object(K.a)(t);try{for(r.s();!(a=r.n()).done;){if(a.value===e)return!0}}catch(n){r.e(n)}finally{r.f()}}else if(e===t)return!0;return!1};var $=function(e,t){return e<=325?t.substring(0,12)+"...":e<=375?t.substring(0,14)+"...":e<=425?t.substring(0,16)+"...":e<=768?t.substring(0,14)+"...":e<=1024?t.substring(0,13)+"...":e<=1440?t.substring(0,15)+"...":e<=1920?t.substring(0,13)+"...":t};var ee=Object(G.b)((function(e){return{genres:e.genres}}),null)((function(e){var t=e.id_film,a=e.id_currFilm,n=e.genres,c=e.title,s=e.posterPath,l=e.voteAverage,o=e.release,d=e.genreIDs,u=e.currWidth,m=e.allPages,f=Object(r.useState)(!1),b=Object(i.a)(f,2),O=b[0],g=b[1],h=Object(r.useState)(!1),p=Object(i.a)(h,2),v=p[0],N=p[1],S=Object(j.g)();return Object(r.useEffect)((function(){var e=localStorage.getItem("itemsQueue"),a=localStorage.getItem("itemsWatched");e&&Z(t,JSON.parse(e))&&N(!0),a&&Z(t,JSON.parse(a))&&g(!0)}),[]),Object(_.jsxs)("div",{className:"wrapper__card--cardFilm","data-aos":void 0===m?a>3&&"fade-up":null,"data-aos-easing":"linear","data-aos-duration":"1000",children:[Object(_.jsxs)("div",{className:"icons__action--cardFilm",children:[Object(_.jsx)("button",{className:v?"js-btn__addToQueue js-btn__addToQueue--catalog js-btn__addToQueue__active":"js-btn__addToQueue js-btn__addToQueue--catalog",onClick:function(){var e=localStorage.getItem("itemsQueue");if(v)if(Array.isArray(JSON.parse(e))){var a=JSON.parse(e).indexOf(t),r=JSON.parse(e).filter((function(e,t){return t!==a}));localStorage.setItem("itemsQueue",JSON.stringify(r)),N(!v)}else localStorage.setItem("itemsQueue",""),N(!v);if(e&&!v){var n=[JSON.parse(e),t];localStorage.setItem("itemsQueue",JSON.stringify(y.uniq(n.flat()))),N(!0)}e||(localStorage.setItem("itemsQueue",JSON.stringify(t)),N(!0))},children:Object(_.jsx)(U.a,{})}),Object(_.jsxs)("div",{className:"rating__description--cardFilm rating__description--catalog",children:[Object(_.jsx)(T.a,{})," ",Object(_.jsx)("span",{className:"description__rating--cardFilm",children:l})]})]}),Object(_.jsx)("button",{className:"js-btn__addToWatched--catalog",onClick:function(){var e=localStorage.getItem("itemsWatched");if(O)if(Array.isArray(JSON.parse(e))){var a=JSON.parse(e).indexOf(t),r=JSON.parse(e).filter((function(e,t){return t!==a}));localStorage.setItem("itemsWatched",JSON.stringify(r)),g(!O)}else localStorage.setItem("itemsWatched",""),g(!O);if(e&&!O){var n=[JSON.parse(e),t];localStorage.setItem("itemsWatched",JSON.stringify(y.uniq(n.flat()))),g(!0)}e||(localStorage.setItem("itemsWatched",JSON.stringify(t)),g(!0))},children:O?Object(_.jsx)(V.a,{}):Object(_.jsx)(z.a,{})}),Object(_.jsx)("div",{className:"wrapper__infoFilm--cardFilm",children:Object(_.jsx)("img",{src:"http://image.tmdb.org/t/p/w500"+s,alt:c,className:"img__card--cardFilm"})}),Object(_.jsxs)("div",{className:"wrapp__description--cardFilm",children:[Object(_.jsx)("h2",{className:"title__card--cardFilm",children:Object(_.jsx)(x.b,{to:{pathname:"/cinema__React/film_detail/".concat(t),state:{from:S}},children:$(u,c)})}),Object(_.jsxs)("ul",{className:"menu__genres--cardFilm",children:[X(n,d).map((function(e,t){return Object(_.jsx)("li",{className:"liItem__card--cardFilm",children:e},t)})),o&&Object(_.jsx)("li",{className:"liItem__card--cardFilm",children:o.split("-")[0]})]})]})]})}));var te={getNewestMovieDB:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch(Q.NEWEST__REQUEST+e).then((function(e){return e.json()}))},getPopularMovieDB:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch(Q.POPULAR_REQUEST+e).then((function(e){return e.json()}))},getTopRatedMovieDB:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch(Q.TOPRATED_REQUEST+e).then((function(e){return e.json()}))}},ae=a(64),re=a.n(ae);a(123),a(124);var ne=Object(G.b)((function(e){return{films:e.films,currGenre:e.actions.currGenre}}),(function(e){return{addFilmsHandler:function(t){return e({type:H.ADD_FILM,payload:t})},addLoadMoreFilmsHandler:function(t){return e({type:H.ADD_LOADMORE,payload:t})},setGenresHandler:function(t){return e({type:H.ADD_GENRES,payload:t})}}}))((function(e){var t=e.films,a=e.currGenre,n=e.addFilmsHandler,c=e.addLoadMoreFilmsHandler,s=e.setGenresHandler,l=Object(r.useState)(1),o=Object(i.a)(l,2),d=o[0],u=o[1],m=Object(r.useState)(0),j=Object(i.a)(m,2),f=j[0],b=j[1];return Object(r.useEffect)((function(){re.a.init(),re.a.refresh(),k().then((function(e){return s(e)})),b(window.innerWidth)}),[]),Object(r.useEffect)((function(){function e(e){b(e.target.innerWidth)}return window.addEventListener("resize",y.debounce(e,100)),function(){return window.removeEventListener("resize",e)}}),[f]),Object(r.useEffect)((function(){u(1),"Featured"===a&&te.getTopRatedMovieDB().then((function(e){return n(e.results)})),"Popular"===a&&te.getPopularMovieDB().then((function(e){return n(e.results)})),"Newest"===a&&te.getNewestMovieDB().then((function(e){return n(e.results)}))}),[a]),Object(r.useEffect)((function(){d>1&&"Featured"===a&&te.getTopRatedMovieDB(d).then((function(e){return c(e.results)})),d>1&&"Popular"===a&&te.getPopularMovieDB(d).then((function(e){return c(e.results)})),d>1&&"Newest"===a&&te.getNewestMovieDB(d).then((function(e){return c(e.results)}))}),[d]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("section",{className:"wrapper__filmCatalog",children:t.map((function(e,t){var a=e.id,r=e.title,n=e.poster_path,c=e.vote_average,i=e.release_date,s=e.genre_ids;return Object(_.jsx)(ee,{id_currFilm:t,id_film:a,title:r,posterPath:n,voteAverage:c,release:i,genreIDs:s,currWidth:f},a)}))}),Object(_.jsx)("button",{className:"js-btn__loadMore",onClick:function(){u(d+1)},children:"Load more"})]})}));function ce(){return Object(_.jsx)("main",{children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(L,{}),Object(_.jsx)(P,{}),Object(_.jsx)(ne,{})," "]})})}a(125);var ie=a(82),se=a.n(ie);var le=function(e){var t,a="",r=[],n=null,c=Object(K.a)(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;a=Q.SEARCH_BY_ID.replace("show",i),n=se()(a),r.push(n)}}catch(s){c.e(s)}finally{c.f()}return Promise.all(r).then((function(e){return e})).then((function(e){return e.map((function(e){return e.data}))}))};var oe=Object(G.b)(null,(function(e){return{removeSelectedItem:function(t){return e({type:H.REMOVE_SELECTED,payload:t})}}}))((function(e){var t=e.id_film,a=e.genres,n=e.title,c=e.posterPath,s=e.voteAverage,l=e.release,o=e.removeSelectedItem,d=Object(r.useState)(!1),u=Object(i.a)(d,2),m=u[0],f=u[1],b=Object(r.useState)(!1),O=Object(i.a)(b,2),g=O[0],h=O[1],p=Object(j.g)();return Object(r.useEffect)((function(){var e=localStorage.getItem("itemsQueue"),a=localStorage.getItem("itemsWatched");e&&Z(t,JSON.parse(e))&&h(!0),a&&Z(t,JSON.parse(a))&&f(!0)}),[]),Object(_.jsxs)("div",{className:"wrapper__card--cardFilm",children:[Object(_.jsxs)("div",{className:"icons__action--cardFilm",children:[Object(_.jsx)("button",{className:g?"js-btn__addToQueue js-btn__addToQueue--catalog js-btn__addToQueue__active":"js-btn__addToQueue js-btn__addToQueue--catalog",onClick:function(){var e=localStorage.getItem("itemsQueue");if(g)if(Array.isArray(JSON.parse(e))){var a=JSON.parse(e).indexOf(t),r=JSON.parse(e).filter((function(e,t){return t!==a}));localStorage.setItem("itemsQueue",JSON.stringify(r)),h(!g)}else localStorage.setItem("itemsQueue",""),h(!g);if(e&&!g){var n=[JSON.parse(e),t];localStorage.setItem("itemsQueue",JSON.stringify(y.uniq(n.flat()))),h(!0)}e||(localStorage.setItem("itemsQueue",JSON.stringify(t)),h(!0))},children:Object(_.jsx)(U.a,{})}),Object(_.jsxs)("div",{className:"rating__description--cardFilm rating__description--catalog",children:[Object(_.jsx)(T.a,{})," ",Object(_.jsx)("span",{className:"description__rating--cardFilm",children:s})]})]}),Object(_.jsx)("button",{className:"js-btn__addToWatched--catalog",onClick:function(){var e=localStorage.getItem("itemsWatched");if(o(t),m)if(Array.isArray(JSON.parse(e))){var a=JSON.parse(e).indexOf(t),r=JSON.parse(e).filter((function(e,t){return t!==a}));localStorage.setItem("itemsWatched",JSON.stringify(r)),f(!m)}else localStorage.setItem("itemsWatched",""),f(!m);if(e&&!m){var n=[JSON.parse(e),t];localStorage.setItem("itemsWatched",JSON.stringify(y.uniq(n.flat()))),f(!0)}e||(localStorage.setItem("itemsWatched",JSON.stringify(t)),f(!0))},children:m?Object(_.jsx)(V.a,{}):Object(_.jsx)(z.a,{})}),Object(_.jsx)("div",{className:"wrapper__infoFilm--cardFilm",children:Object(_.jsx)("img",{src:"http://image.tmdb.org/t/p/w500"+c,alt:n,className:"img__card--cardFilm"})}),Object(_.jsxs)("div",{className:"wrapp__description--cardFilm",children:[Object(_.jsx)("h2",{className:"title__card--cardFilm",children:Object(_.jsx)(x.b,{to:{pathname:"/cinema__React/film_detail/".concat(t),state:{from:p}},children:n.length>12?n.substring(0,12)+"...":n})}),Object(_.jsxs)("ul",{className:"menu__genres--cardFilm",children:[void 0!==a&&a.map((function(e){var t=e.id,a=e.name;return Object(_.jsx)("li",{className:"liItem__card--cardFilm",children:a},t)})),l&&Object(_.jsx)("li",{className:"liItem__card--cardFilm",children:l.split("-")[0]})]})]})]})}));function de(){return Object(_.jsx)("article",{className:"wrapper__noFilms",children:Object(_.jsx)("h2",{className:"title__noFilms",children:"Sorry, but you haven't saved any movies."})})}var ue=Object(G.b)((function(e){return{films:e.films}}),(function(e){return{addGenresHandler:function(t){return e({type:H.ADD_GENRES,payload:t})},clearFilmsCatalogHandler:function(t){return e({type:H.CLEAR_FILMS,payload:t})},loadSelectedFilmsHandler:function(t){return e({type:H.ADD_FILM,payload:t})}}}))((function(e){var t=e.films,a=e.loadSelectedFilmsHandler,n=e.clearFilmsCatalogHandler;return Object(r.useEffect)((function(){var e=localStorage.getItem("itemsWatched");e&&(Array.isArray(JSON.parse(e))?le(JSON.parse(e)).then((function(e){return a(e)})):le([JSON.parse(e)]).then((function(e){return a(e)}))),e||n([])}),[]),Object(_.jsx)("main",{className:"main__watched",children:Object(_.jsx)("div",{className:"wrapper__catalog--watched",children:t.length>0?t.map((function(e,t){var a=e.id,r=e.title,n=e.poster_path,c=e.vote_average,i=e.release_date,s=e.genres;return Object(_.jsx)(oe,{genres:s,id_currFilm:t,id_film:a,title:r,posterPath:n,voteAverage:c,release:i},a)})):Object(_.jsxs)(_.Fragment,{children:[" ",Object(_.jsx)(de,{})," "]})})})}));var me=Object(G.b)(null,(function(e){return{removeSelectedItem:function(t){return e({type:H.REMOVE_SELECTED,payload:t})}}}))((function(e){var t=e.id_film,a=e.genres,n=e.title,c=e.posterPath,s=e.voteAverage,l=e.release,o=e.removeSelectedItem,d=Object(r.useState)(!1),u=Object(i.a)(d,2),m=u[0],f=u[1],b=Object(r.useState)(!1),O=Object(i.a)(b,2),g=O[0],h=O[1],p=Object(j.g)();return Object(r.useEffect)((function(){var e=localStorage.getItem("itemsQueue"),a=localStorage.getItem("itemsWatched");e&&Z(t,JSON.parse(e))&&h(!0),a&&Z(t,JSON.parse(a))&&f(!0)}),[]),Object(_.jsxs)("div",{className:"wrapper__card--cardFilm",children:[Object(_.jsxs)("div",{className:"icons__action--cardFilm",children:[Object(_.jsx)("button",{className:g?"js-btn__addToQueue js-btn__addToQueue--catalog js-btn__addToQueue__active":"js-btn__addToQueue js-btn__addToQueue--catalog",onClick:function(){var e=localStorage.getItem("itemsQueue");if(o(t),g)if(Array.isArray(JSON.parse(e))){var a=JSON.parse(e).indexOf(t),r=JSON.parse(e).filter((function(e,t){return t!==a}));localStorage.setItem("itemsQueue",JSON.stringify(r)),h(!g)}else localStorage.setItem("itemsQueue",""),h(!g);if(e&&!g){var n=[JSON.parse(e),t];localStorage.setItem("itemsQueue",JSON.stringify(y.uniq(n.flat()))),h(!0)}e||(localStorage.setItem("itemsQueue",JSON.stringify(t)),h(!0))},children:Object(_.jsx)(U.a,{})}),Object(_.jsxs)("div",{className:"rating__description--cardFilm rating__description--catalog",children:[Object(_.jsx)(T.a,{})," ",Object(_.jsx)("span",{className:"description__rating--cardFilm",children:s})]})]}),Object(_.jsx)("button",{className:"js-btn__addToWatched--catalog",onClick:function(){var e=localStorage.getItem("itemsWatched");if(o(t),m)if(Array.isArray(JSON.parse(e))){var a=JSON.parse(e).indexOf(t),r=JSON.parse(e).filter((function(e,t){return t!==a}));localStorage.setItem("itemsWatched",JSON.stringify(r)),f(!m)}else localStorage.setItem("itemsWatched",""),f(!m);if(e&&!m){var n=[JSON.parse(e),t];localStorage.setItem("itemsWatched",JSON.stringify(y.uniq(n.flat()))),f(!0)}e||(localStorage.setItem("itemsWatched",JSON.stringify(t)),f(!0))},children:m?Object(_.jsx)(V.a,{}):Object(_.jsx)(z.a,{})}),Object(_.jsx)("div",{className:"wrapper__infoFilm--cardFilm",children:Object(_.jsx)("img",{src:"http://image.tmdb.org/t/p/w500"+c,alt:n,className:"img__card--cardFilm"})}),Object(_.jsxs)("div",{className:"wrapp__description--cardFilm",children:[Object(_.jsx)("h2",{className:"title__card--cardFilm",children:Object(_.jsx)(x.b,{to:{pathname:"/cinema__React/film_detail/".concat(t),state:{from:p}},children:n.length>12?n.substring(0,12)+"...":n})}),Object(_.jsxs)("ul",{className:"menu__genres--cardFilm",children:[void 0!==a&&a.map((function(e,t){var a=e.id,r=e.name;return t<2&&Object(_.jsx)("li",{className:"liItem__card--cardFilm",children:r},a)})),l&&Object(_.jsx)("li",{className:"liItem__card--cardFilm",children:l.split("-")[0]})]})]})]})}));a(144);var je=Object(G.b)((function(e){return{films:e.films}}),(function(e){return{addGenresHandler:function(t){return e({type:H.ADD_GENRES,payload:t})},clearFilmsCatalogHandler:function(t){return e({type:H.CLEAR_FILMS,payload:t})},loadSelectedFilmsHandler:function(t){return e({type:H.ADD_FILM,payload:t})}}}))((function(e){var t=e.films,a=e.loadSelectedFilmsHandler,n=e.clearFilmsCatalogHandler;return Object(r.useEffect)((function(){var e=localStorage.getItem("itemsQueue");e&&(Array.isArray(JSON.parse(e))?le(JSON.parse(e)).then((function(e){return a(e)})):le([JSON.parse(e)]).then((function(e){return a(e)}))),e||n([])}),[]),Object(_.jsx)("main",{className:"main__queue",children:Object(_.jsx)("div",{className:"wrapper__catalog--queue",children:t.length>0?t.map((function(e,t){var a=e.id,r=e.title,n=e.poster_path,c=e.vote_average,i=e.release_date,s=e.genres;return Object(_.jsx)(me,{genres:s,id_currFilm:t,id_film:a,title:r,posterPath:n,voteAverage:c,release:i},a)})):Object(_.jsxs)(_.Fragment,{children:[" ",Object(_.jsx)(de,{})," "]})})})})),_e=(a(145),a(83)),fe=a.n(_e);function be(){return Object(_.jsxs)("form",{className:"js-form__addCommentary",children:[Object(_.jsx)("textarea",{type:"text",className:"js-input__commentary",placeholder:"Add comment"}),Object(_.jsx)("button",{type:"submit",className:"js-submit__addCommentary",children:"send"})]})}var Oe=function(e){var t=Q.SEARCH_BY_ID.replace("show",e);return fetch(t).then((function(e){return e.json()})).then((function(e){return e}))};var ge=Object(G.b)((function(e){return{films:e.films}}),(function(e){return{addCurrFilmHandler:function(t){return e({type:H.ADD_FILM,payload:t})}}}))((function(e){var t=e.addCurrFilmHandler,a=e.films,n=Object(j.g)();return Object(r.useEffect)((function(){Oe(n.pathname.split("/").reverse()[0]).then((function(e){return t([e])}))}),[]),1===a.length&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("article",{className:"wrapper__oneCard--film",children:[Object(_.jsx)("div",{className:"section__card__bg--film",children:Object(_.jsx)("img",{src:"http://image.tmdb.org/t/p/w500"+a[0].poster_path,alt:"test",className:"img__card--film"})}),Object(_.jsxs)("div",{className:"wrapper__info__card--film",children:[Object(_.jsx)("h1",{className:"title_infoCard--film",children:a[0].title}),Object(_.jsxs)("ul",{className:"ulMenu__category--film",children:[Object(_.jsxs)("li",{className:"liItem__category--film",children:[Object(_.jsx)(fe.a,{})," ",a[0].vote_average]}),a[0].genres.map((function(e){var t=e.id,a=e.name;return Object(_.jsx)("li",{className:"liItem__category--film",children:a},t)})),Object(_.jsx)("li",{className:"liItem__category--film",children:a[0].release_date.split("-")[0]}),Object(_.jsx)("li",{className:"liItem__category--film",children:a[0].adult?"16+":"18+"})]}),Object(_.jsx)("span",{className:"description__oneCard--film",children:a[0].overview}),Object(_.jsx)("h2",{className:"subTitle__oneCard--film",children:"Genres"}),Object(_.jsx)("div",{className:"wrapper__genres__list--film",children:a[0].genres.map((function(e){var t=e.id,a=e.name;return Object(_.jsx)("span",{className:"description__genres__oneCard--film",children:a},t)}))}),Object(_.jsxs)("div",{className:"wrapper__actions",children:[Object(_.jsx)("div",{className:"wrapper__commntary--film",children:Object(_.jsxs)("div",{className:"titles__commentary--film",children:[Object(_.jsxs)("h2",{className:"title__commentary--film",children:["Commentary ",Object(_.jsx)("span",{className:"icon_count--commentary",children:"0"})," "]}),Object(_.jsxs)("h2",{className:"title__commentary--film",children:["Reviews ",Object(_.jsx)("span",{className:"icon_count--commentary",children:"0"})]})]})}),Object(_.jsx)(be,{})]})]})]})," "]})}));var he={fetchingByNames:function(e,t){var a=Q.SEARCH_BY_NAME.replace("SearchMovie",e).replace("currPage",t);return fetch(a).then((function(e){return e.json()}))},fetchingGenres:function(){return fetch(Q.GENRE_LISTREQUEST).then((function(e){return e.json()}))}},pe=a(164);function ve(e){var t=e.totalPages,a=e.onChangeCurrPageHandle;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(pe.a,{count:t,hideNextButton:!0,hidePrevButton:!0,shape:"rounded",onChange:function(e){"BUTTON"===e.target.nodeName&&a(e.target.textContent)},variant:"outlined",color:"primary"})})}a(146);var xe=Object(G.b)((function(e){return{films:e.films,genres:e.genres}}),(function(e){return{addFilmsHandler:function(t){return e({type:H.ADD_FILM,payload:t})},addGenresHandler:function(t){return e({type:H.ADD_GENRES,payload:t})}}}))((function(e){var t=e.films,a=e.genres,n=e.addFilmsHandler,c=e.addGenresHandler,s=Object(j.g)(),l=Object(r.useState)(1),o=Object(i.a)(l,2),d=o[0],u=o[1],m=Object(r.useState)(1),f=Object(i.a)(m,2),b=f[0],O=f[1],g=Object(r.useState)(0),h=Object(i.a)(g,2),p=h[0],v=h[1];return Object(r.useEffect)((function(){function e(e){v(e.target.innerWidth)}return window.addEventListener("resize",y.debounce(e,100)),function(){return window.removeEventListener("resize",e)}}),[p]),Object(r.useEffect)((function(){var e=!0;return he.fetchingByNames(s.pathname.split("/").reverse()[0],d).then((function(t){e&&(n(t.results),O(t.total_pages))})),0===a.length&&e&&he.fetchingGenres().then((function(e){return c(e.genres)})),function(){e=!1}}),[d]),Object(_.jsxs)("main",{className:"main__search",children:[Object(_.jsx)("div",{className:"wrapper__catalod--search",children:t.map((function(e,t){var a=e.id,r=e.title,n=e.poster_path,c=e.vote_average,i=e.release_date,s=e.genre_ids;return Object(_.jsx)(ee,{id_currFilm:t,id_film:a,title:r,posterPath:n,voteAverage:c,release:i,genreIDs:s,currWidth:p,allPages:b},a)}))}),Object(_.jsx)(ve,{totalPages:b,onChangeCurrPageHandle:function(e){u(e)}})]})}));function Ne(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(j.d,{children:[Object(_.jsx)(j.b,{exact:!0,path:S.a.home,component:ce}),Object(_.jsx)(j.b,{exact:!0,path:S.a.watched,component:ue}),Object(_.jsx)(j.b,{exact:!0,path:S.a.queue,component:je}),Object(_.jsx)(j.b,{exact:!0,path:S.a.search,component:xe}),Object(_.jsx)(j.b,{exact:!0,path:S.a.film_detail,component:ge})]})})}var Se=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(E,{}),Object(_.jsx)(Ne,{})]})},ye=(a(147),a(57));var Ee=a(59);var Fe=Object(ye.a)({genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case H.ADD_GENRES:return r;default:return e}},films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.payload,r=t.type;switch(r){case H.ADD_FILM:return a;case H.ADD_LOADMORE:return[].concat(Object(Ee.a)(e),Object(Ee.a)(a));case H.REMOVE_SELECTED:return e.filter((function(e){return e.id!==a}));case H.ADD_LOCALFILM:return[].concat(Object(Ee.a)(e),[a]);case H.CLEAR_FILMS:return a;default:return e}},actions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currGenre:"Featured",selectedCategory:"All Genres"},t=arguments.length>1?arguments[1]:void 0,a=t.payload,r=t.type;switch(r){case H.ADD_CURRGENRE:return Object(F.a)(Object(F.a)({},e),{},{currGenre:a});case H.ADD_SELECTEDCATEGORY:return Object(F.a)(Object(F.a)({},e),{},{selectedCategory:a});default:return e}}}),we=Object(ye.b)(Fe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(_.jsx)(G.a,{store:we,children:Object(_.jsx)(x.a,{children:Object(_.jsx)(Se,{})})}),document.getElementById("root"))},17:function(e,t){var a="a0954edce1669bd21c76fe63f43c7ba1",r="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(a,"&language=en-US"),n="\nhttps://api.themoviedb.org/3/movie/upcoming?api_key=".concat(a,"&language=en-US&page="),c="https://api.themoviedb.org/3/movie/popular?api_key=".concat(a,"&language=en-US&page="),i="https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(a,"&language=en-US&page="),s="https://api.themoviedb.org/3/movie/show?api_key=".concat(a,"&language=en-US"),l="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&query=SearchMovie&page=currPage&include_adult=false");e.exports={API_KEY:a,GENRE_LISTREQUEST:r,NEWEST__REQUEST:n,POPULAR_REQUEST:c,TOPRATED_REQUEST:i,SEARCH_BY_ID:s,SEARCH_BY_NAME:l}},22:function(e,t){e.exports={home:"/cinema__React",watched:"/watched",queue:"/queue",search:"/cinema__React/:searchName",film_detail:"/cinema__React/film_detail/:filmID"}},3:function(e,t){e.exports={ADD_GENRES:"genres/add__genres",ADD_FILM:"films/add__films",ADD_LOADMORE:"films/loadMore__films",ADD_CURRGENRE:"actions/currGenre__actions",CLEAR_FILMS:"films/clear_filmsCatalog",ADD_LOCALFILM:"films/add_fromLocal_ToCatalog",ADD_SELECTEDCATEGORY:"actions/currCategory__actions",REMOVE_SELECTED:"films/removeSelected__films"}},80:function(e){e.exports=JSON.parse('[{"id":1,"name":"Inglourious Basterds","genres":["Adventure","Drama","War"],"year":2009,"rating":8.3},{"id":2,"name":"Fight Club","genres":["Drama"],"year":1999,"rating":8.8},{"id":3,"name":"Back To The Future","genres":["Adventure","Comedy","Sci-Fi"],"year":1985,"rating":8.5},{"id":4,"name":"Mad Max: Fury Road","genres":["Action","Thriller","Sci-Fi"],"year":2015,"rating":8.1},{"id":5,"name":"There Will Be Blood","genres":["Drama"],"year":2007,"rating":8.2},{"id":6,"name":"Reservoir Dogs","genres":["Drama"],"year":1992,"rating":8.3},{"id":7,"name":"Oldboy","genres":["Drama","Thriller","Action","Mystery"],"year":2003,"img":"","rating":8.4},{"id":8,"name":"The Departed","genres":["Drama","Thriller","Crime"],"year":2006,"img":"","rating":8.5}]')}},[[148,1,2]]]);
//# sourceMappingURL=main.e5ddd60a.chunk.js.map