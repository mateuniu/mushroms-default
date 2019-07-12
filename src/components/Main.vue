<template>
  <div>
<!--loop throught mushroms which are fit to choosen categories from Navigation.vue component-->
    <div v-for='mushrom in alfabeticSort' :key='mushrom.id'>
<!--loadMainComponent is an expresion(bolean) with is switched from false
to true when Main.vue component is mounted. all of the child chomponents are running enter animations
on that pattern-->
      <article v-show="loadMainComponent" class="article">
        <div class="article__section1">
<!--HEADER-->
          <header class="header">
          <transition name="header__name__transition">  
            <h1 v-if="loadMainComponent" class="header__name">{{ mushrom.name }}</h1>
          </transition>
          <transition name="header__name-latin__transition">
            <h2 v-if="loadMainComponent" class="header__name-latin">{{ mushrom.latinName}}</h2>
          </transition>
          </header>
<!--FIGURE-->
          <transition name="figure">
          <figure v-if="loadMainComponent" class="figure">
            <img v-bind:src='mushrom.imgPlain' class="figure__img--plain" title="rysunek poglądowy"/>
              <transition name="img--color">
                <img v-show="showColour" v-bind:src="mushrom.imgColour" 
                class="figure__img--color" title="rysunek poglądowy"/>
              </transition>
          </figure>
          </transition>
<!--FIGCAPTION-->
<!--SECTION WITH FIGCAPTION FOR THE PARAMETERS-->
          <section>
            <div class="figcaption__parameters__placeholder">
              <transition name="figcaption__parameters__container">
                <div v-show="showParameters" class="figcaption__parameters__container">
<!--TIME-->
                  <transition name="figcaption__parameter__time">
                    <figcaption v-show="showParameters" class="figcaption__parameter">
                      <header class="figcaption__parameter__icon-container">
                        <img src="../assets/icons/time.svg" 
                        class="figcaption__parameters__icon"/>
                      </header> 
                        <div class="figcaption__parameter__description">
                          {{ mushrom.time }}
                        </div>
                    </figcaption>
                  </transition>
<!--PLACE-->
                  <transition name="figcaption__parameter__place">
                    <figcaption v-show="showParameters" class="figcaption__parameter">
                      <header class="figcaption__parameter__icon-container">
                        <img src="../assets/icons/place.svg" 
                        class="figcaption__parameters__icon"/>
                      </header>
                      <div class="figcaption__parameter__description">
                        {{ mushrom.place }}
                      </div>
                    </figcaption>
                  </transition>
<!--MUNCHIE-->
                 <transition name="figcaption__parameter__munchie">
                   <figcaption v-show="showParameters" class="figcaption__parameter">
                    <header class="figcaption__parameter__icon-container">
                      <img src="../assets/icons/munchie.svg" 
                      class="figcaption__parameters__icon"/>
                    </header> 
                    <div class="figcaption__parameter__description">
                      {{ mushrom.munchie }}
                    </div>
                  </figcaption>
                </transition>

              </div>
            </transition>
          </div>
          </section>
<!--SIDE BUTTONS CONTAINER-->
          <section class="side-bar">
<!--BUTTON toggle show/hide parameters -->
                  <transition name="button-parameters">
                    <button v-on:click="showParameters = !showParameters"
                    v-bind:class='{showParameters: showParameters}'
                    v-if="loadMainComponent" class="button-parameters">
                      <img src="../assets/icons/description.svg" class="button__img">
                    </button>
                  </transition>
<!--BUTTON toggle show/hide colours -->
                  <transition name="button-color">
                    <button v-on:click="showColour = !showColour" 
                    v-bind:class='{showColour: showColour}'
                    v-if="loadMainComponent" class="button-color">
                    <img src="../assets/icons/artistic-brush.svg" class="button__img">
                    </button>
                  </transition>
          </section>
        </div>
<!--SECTION WITH IMG FIGCAPTION-->
        <div class="article__section2">
          <section class="figcaption__img__container">
<!--CAP-->
            <figcaption>
              <transition name="figcaption-header-cap">
                <h5 v-if="loadMainComponent" class="figcaption__img__header">kapelusz</h5>
              </transition>
              <transition name="figcaption-description">
               <div v-if="loadMainComponent" class="figcaption__img">{{ mushrom.cap }}</div>
              </transition>
            </figcaption>
<!--PLAQUE-->
            <figcaption>
              <transition name="figcaption-header-plaque">
                <h5 v-if="loadMainComponent" class="figcaption__img__header">blaszki</h5>
              </transition>
              <transition name="figcaption-description">
               <div v-if="loadMainComponent" class="figcaption__img">{{ mushrom.plaque }}</div>
              </transition>
            </figcaption>
<!--LEG-->
            <figcaption>
              <transition name="figcaption-header-leg">
                <h5 v-if="loadMainComponent" class="figcaption__img__header">trzonek</h5>
              </transition>
              <transition name="figcaption-description">
               <div v-if="loadMainComponent" class="figcaption__img">{{ mushrom.leg }}</div>
              </transition>
            </figcaption>
          </section>
        </div>
    </article><hr class="article__separating-hr">
    </div>
  </div>
</template>
<script>
export default {
    name: 'Main',
    props: ['outputMenu'],
    data() {
      return {
        showParameters: false,
        showColour: false,
        loadMainComponent: false,
        mushroms: [
                    {
                    name: 'lejkówka szarawa',
                    latinName: 'clitocybe nebularis',
                    time: 'wrzesień, październik', 
                    place: 'las mieszany',
                    munchie: 'trujący',
                    cap: 'kapelusz o średnicy 5-15 cm. u mlodych egzemplarzy wypukły, później płaski, a nawet wklęsły.',
                    plaque: 'blaszki cienkie i gęste, zbiegające na trzon',
                    leg: 'trzonek stosunkowo wąski o długości 6-12 cm. włóknisty, a u starszych okazów pusty w środku.',
                    imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                    imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                    }, {
                    name: 'borowik szlachetny',
                    latinName: 'boletus edilus',
                    time: 'lipiec, sierpień, wrzesień, październik, listopad',
                    place: 'las mieszany',
                    munchie: 'smaczny',
                    cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                    plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                    leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                    imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                    imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                    }, {
                      name: 'muchomor czerwony',
                      latinName: 'amanita muscaria',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik, listopad',
                      place: 'las mieszany',
                      munchie: 'trujący',
                      cap: 'kapelusz o średnicy do 20 cm. u młodych okazów kolisty, wraz z wiekiem spłaszcza się',
                      plaque: 'blaszki ułożone gęsto. białe lub bladoróżowe',
                      leg: 'trzonek o długości dochodzącej nawet do 20 cm',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'gołąbek wymiotny',
                      latinName: 'russula emetica',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik, listopad',
                      place: 'tereny podmokłe',
                      munchie: 'niezdatny',
                      cap: 'kapelusz ma około 4-10 cm śrdednicy. jest bardzo charakterystyczny ze względu na intensywnie czerwony kolor, który mocno kontrastuje z resztą grzyba',
                      plaque: 'blaszki są białe',
                      leg: 'trzonek ma długość 5-8 cm',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'goryczak żółciowy',
                      latinName: 'tylopilus felleus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las mieszany',
                      munchie: 'niezdatny',
                      cap: 'kapelusz o średnicy 5-20 cm, brązowy. u młodych egzemplarzy półkolisty, z wiekiem spłaszcza się',
                      plaque: 'rurki są niemal białe lub bladoróżowe',
                      leg: 'trzonek lekko wybrzuszony o długości 5-15 cm',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'lisówka pomarańczowa',
                      latinName: 'hygrophopsis aurantiaca',
                      time: 'latwrzesień, październik, listopad',
                      place: 'las mieszany',
                      munchie: 'niezdatny',
                      cap: 'kapelusz o żółtopomarańczowym zabarwieniu i średnicy 3-10 cm',
                      plaque: 'blaszki są jaskrawopomarańczowe, gęsto ułożone',
                      leg: 'trzonek jest stosunkowo cienki o długości do 5 cm',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'wilgotnica szkarłatna',
                      latinName: 'hydrocybe coca',
                      time: 'czerwiec, lipiec, sierpień',
                      place: 'tereny podmokłe',
                      munchie: 'niezdatny',
                      cap: 'kapelusz o średnicy 1-3 cm, matowy, a w porze deszczu śliski i błyszczący. młode osobniki są koloru czerwonego, a starsze są czerwonopomarańczowe',
                      plaque: 'blaszki są grube, nieco jaśniejsze od kapelusza',
                      leg: 'trzonek zazwyczaj długości 3-7 cm, pomarańczowożółty',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik sosnowy',
                      latinName: 'boletus pinophilus',
                      time: 'maj, czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las iglasty',
                      munchie: 'smaczny',
                      cap: 'może przybrać kolor od kasztanowego do ciemnobrązowego, a jego rozmiary mogą dochodzić do 25 cm średnicy',
                      plaque: 'u młodych osobników są jasnoszare, później przybierają oliwkową barwę',
                      leg: 'jest kolorze zbliżonym do kapelusza, choć lekko przebarwia się na czerwono. na jego powierzchni możesz dostrzec drobną',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'mleczaj rydz',
                      latinName: 'lactarius delicious',
                      time: 'sierpień, wrzesień, październik, listopad',
                      place: 'las iglasty',
                      munchie: 'smaczny',
                      cap: 'kapelusz ma średnicę 5-12 cm. na jego pomarańczowożółtej powierzchni dostrzeżesz kręgi o nieco ciemniejszym zabarwieniu',
                      plaque: 'blaszki są bladopomarańczowe, gęsto ułożone',
                      leg: 'trzonek może osiągać długość do 8 cm',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'opieńka miodowa',
                      latinName: 'armillaria mellea',
                      time: 'wrzesień, październik, listopad',
                      place: 'drewno',
                      munchie: 'jadalny',
                      cap: 'kapelusz o średnicy 5–13 cm. u młodych okazów zazwyczaj wypukły, po czym spłaszcza się. występuje w kolorach od miodowobrązowego po oliwkowy. na jego powierzchni łatwo dostrzec drobne łuseczki',
                      plaque: 'blaszki są kremowe',
                      leg: 'trzonek lekko wygięty, nieco jaśniejszy od kapelusza. również upstrzony łuseczkami',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'podgrzybek zajączek',
                      latinName: 'boletus subtomentosus',
                      time: 'lipiec, sierpień, wrzesień',
                      place: 'las iglasty',
                      munchie: 'smaczny',
                      cap: 'kapelusz u młodych osobników wypukły, u starszych zdecydowanie spłaszczony o średnicy do 10 cm. posiada aksamitną skórkę w kolorze oliwkowobrązowym, która po kilku dniach bez deszczu jest wyraźnie popękana',
                      plaque: 'rurki jasnożółte o szerokich porach. jeśli masz do czynienia ze świeżym grzybem, to nawet po naciśnięciu nie powinny zmieniać koloru',
                      leg: 'trzonek jest stosunkowo długi i wysmukły. miejscami może przebarwiać się na czerwono',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik usiatkowany',
                      latinName: 'boletus reticulatus',
                      time: 'czerwiec, lipiec, sierpień wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik ceglastopory',
                      latinName: 'boletus erythropus',
                      time: 'czerwiec, lipiec, sierpień wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik ponury',
                      latinName: 'boletus luridus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik szatański',
                      latinName: 'boletus satanas',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'trujący',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik żółtopory',
                      latinName: 'boletus calopus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las iglasty',
                      munchie: 'niejadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik korzeniasty',
                      latinName: 'boletus radicans',
                      time: 'lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'niezdatny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik żółtobrązowy',
                      latinName: 'boletus appendiculatus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik królewski',
                      latinName: 'boletus regius',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'podgrzybek brunatny',
                      latinName: 'xerocomus badius',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las mieszany',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'borowik klinowotrzonowy',
                      latinName: 'boletus pulverulentus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las mieszany',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'podgrzybek zajączek',
                      latinName: 'xerocomus subtomentosus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las mieszany',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'podgrzybek żeberkowany',
                      latinName: 'xerocomus spadiceus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'podgrzybek złotopory',
                      latinName: 'xerocomus chrysenteron',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las mieszany',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'podgrzybek czarwonawy',
                      latinName: 'xerocomus rubellus',
                      time: 'lipiec, sierpień, wrzesień ',
                      place: 'las liściasty',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'podgrzybek tęgoskóry',
                      latinName: 'xerocomus parasiticus',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'drewno',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, 
                      {
                      name: 'koźlarz babka',
                      latinName: 'leccinum scabrum',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'koźlarz grabowy',
                      latinName: 'leccinum carpini',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'koźlarz czerwony',
                      latinName: 'leccinum aurantiacum',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'koźlarz pomarańczowożółty',
                      latinName: 'leccinum versipelle',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'koźlarz róznobarwny',
                      latinName: 'leccinum variicolor',
                      time: 'czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'tereny podmokłe',
                      munchie: '',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      },
                      {
                      name: 'smardz jadalny',
                      latinName: 'morchella esculenta',
                      time: 'kwiecień, maj',
                      place: 'lasy, ogrody i łąki',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'smardz stożkowaty',
                      latinName: 'morchella conica',
                      time: 'marzec, kwiecień, maj',
                      place: 'tereny podmokłe, ogrody i łąki',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'smardz wyniosły',
                      latinName: 'morchella elata',
                      time: 'maj',
                      place: 'drewno, tereny podmokłe',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'mitrówka półwolna',
                      latinName: 'morchella gigas',
                      time: 'kwiecień, maj',
                      place: 'tereny podmokłe',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'smardzówka czeska',
                      latinName: 'verpa bohemica',
                      time: 'marzec, kwiecień, maj',
                      place: 'las, tereny podmokłe',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'naparstniczka stożkowa',
                      latinName: 'verpa conica',
                      time: 'kwiecień, maj',
                      place: 'tereny podmokłe',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'piestrzenica kasztanowata',
                      latinName: 'gyromitra esculenta',
                      time: 'marzec, kwiecień',
                      place: 'las iglasty',
                      munchie: 'trujący',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'piestrzenica infuowata',
                      latinName: 'gyromitra infula',
                      time: 'wrzesień, październik, listopad',
                      place: 'las iglasty',
                      munchie: 'smaczny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'piestrzyca kędzieżawa',
                      latinName: 'helvella crispa',
                      time: 'sierpień, wrzesień, październik, listopad',
                      place: 'las, ogrody i łąki',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'piestrzyca zatokowa',
                      latinName: 'helvella lacunosa',
                      time: 'kwiecień, maj, czerwiec, lipiec, sierpień, wrzesień, październik',
                      place: 'las liściasty, ogrody i łąki',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'piestrzyca zwyczajna',
                      latinName: 'helvella acetabulum',
                      time: 'kwiecień, maj, czerwiec',
                      place: 'las mieszany',
                      munchie: 'jadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'kisielnica trzoneczkowa',
                      latinName: 'exidia glandulosa',
                      time: 'listopad, grudzień, styczeń, luty, marzec, kwiecień',
                      place: 'drewno',
                      munchie: 'niejadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }, {
                      name: 'kisielnica kędzieżawa',
                      latinName: 'exidia nigricansa',
                      time: 'grudzień, styczeń, luty, marzec, kwiecień, maj',
                      place: 'drewno',
                      munchie: 'niejadalny',
                      cap: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      plaque: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      leg: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.',
                      imgColour: require('../assets/mushroms pictures/colour pictures/opieńka miodowa.svg'),
                      imgPlain: require('../assets/mushroms pictures/plain pictures/opieńka miodowa plain.svg'),
                      }
                  ]
        }},
    computed: {
// filtering all mushroms by selected time
      timeSort() {
        return this.mushroms.filter((mushrom) => {
        return mushrom.time.match(this.outputMenu.times);
        });
      },
// filtering all mushroms by selected place

      placeSort() {
        return this.timeSort.filter((mushrom) => {
        return mushrom.place.match(this.outputMenu.places);
        });
      },
// filtering all mushroms by selected munchie
      munchiesSort() {
        return this.placeSort.filter((mushrom) => {
        return mushrom.munchie.match(this.outputMenu.munchies);
        });
      },
// ALFABETIC SORT
      alfabeticSort() {
        function compare(a, b) {
        if (a.name < b.name)
        return -1;
        if (a.name > b.name)
        return 1;
        return 0;
        }
        return this.munchiesSort.sort(compare);
      }
    },
// function with will switch loadMainComponent from false to true
// when main.vue component will be mounted
    mounted() {
      return this.loadMainComponent = true;
    }
}
</script>
<style lang="scss">
@import '../styles/main.scss';
</style>
