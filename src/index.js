let tekst = `Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w latach dojrzałą. Lecz mniej silnie, ale nigdzie nie wiem, czy pod strażą. Dziś piękność zda się rówiennicą a wszystko strwonił, na niej z miny, Że ojciec w nieczynności! a potem Sędzia na gości prosi w testamencie wyrzekł taką wolę. Ustawicznie do pocałowani i dobra, które mógłby spójrzeć bez grzeczności i miłość dziecinna i Zabo biegły przed oczy swe osadzał. Dziwna rzecz! Miejsca wkoło pali. Nawet strony obie złotą na trzykrólskie święta przesuwają w jeden się spory o chwale i wysoką jego zasięgała zdania innych. więc szanują przyjaciół jak raz zaczął, bez urzędu. ogon też same obicia z dozorcą, potem się biedak zając. Puszczano wtenczas i szukał komnaty nim leży Fedon i potrząsając głową rzekł półgłosem: Przepraszam, musieliśmy siadać niepodobna wieczerzy będzie i uroda jej nie dozwolę. Woźny! odwołaj sprawę na jutro na awanpostach nasz z rzadka nowina! Ojcze Robaku ciszej rzekł do zamczyska? Nikt na piersiach, przydawając zasłony sukience. Włos w pukle i z Warszaw mam list, to mówiąc, że dziś nagodzi do piersi kryje, odsłaniając.

 Polski trzech mocarzów albo człowiek cudzy gdy inni, których by przy pełnym kielich o muzyce, o Polakach tak wedle dzisiejszej mody odmianą się pan Rejent. - tak rzadka ciche grusze siedzą. Śród cichej wsi litewskiej, kiedy mamy panien wiele. Stryjaszek myśli wkrótce sprawić ci znowu fajt w drewnianej szafie poznał u tamtej widział swych domysłów tysiące kroków zamek na Tadeusz Telimenie, Asesor zaś Gotem. Dość, że sobie zostawionem. Trudno było. bo tak myślili starzy. A na dole. Ujrzała, zaśmiała się Soplica. wszyscy poszli za dowód dobroci? Zresztą zdać się Soplica. wszyscy znali. Kibić miała wysmukłą, kształtną, pierś szeroka i zabawiać lubił porównywać, a bij jak światłość miesiąca. Nucąc chwyciła suknie, biegła do woli nagadać nie widział, bo tak rzuciły. Tuż i swój kielich o autorów pytała Tadeusza zdani i westchnień, i jak wytnie dwa tysiące kroków zamek na wieś i dwie strony: Uciszcie się! woła. Marząc i z pastwisk razem ja rozumiem! Wy Polaki, ja wam służyć, moje panny Róży a zając jak w ulicę się pomieszany, zły i światem. Dawniej na tem, Że w wieku mu bił głośno, i.
 
 Tuż stało wody pełne naczynie blaszane ale myśl wcale aby w Tadeusza zdani i nigdy nie powiedziała kogo owa piękność twą w rozmowę lecz w zamku worończańskim a czuł wtenczas, kim była ekonomowi poczciwemu świętą. Bo nie dozwalał, by stary który go wtenczas i przy damach obok srebrnych, od kogoś, co zaledwie dotykał się od wiatrów jesieni. Dóm mieszkalny niewielki, lecz nie zaś Gotem. Dość, że teraz się spory w nią śrut cienki! Trzymano wprawdzie pękła jedna króluje postać, jak mógł wyjść spotykać w Petersburgu mieszkała przed młodzieżą o pani Telimenie, Asesor zaś Gotem. Dość, że przymiotów jego proszę Pana zastępuje i żądał. I ogląda czule, jako wódz gospodarstwa obmyśla wypraw w Tabor w nié dzwonił, znak dawał, że w powiecie. Lubił bardzo szybko, suwała się przyciągnąć do rąk muskała włosów pukle nie gadał lecz latem nic nie przeczym, że oko pańskie jachał szlachcic młody ja wam służyć, moje panny córki choć przez wzgląd męża dla skończenia dawnego z latami przychodzi. Tadeusz, na wieczerzę. Rykow jadł smaczno, mało w nędzy. Jak mnie to mówiąc, że się cukier wytapia i Suwarów.
 `;

//Create array seperate by .
let arrTekst = tekst.split(".");

//Define limit of character
let limit = 400;

//Start point for character counter
let counterNumber = 0;

//Define array to hold limit amount of characters
let stringToDisplay = [];

//Create array with limited characters
let stringToDisplay2 = [];

//Search tekst for limited characters
arrTekst.forEach((item, index) => {
  //check for basic amount of characters
  if (counterNumber <= limit) {
    //add amount of characters
    counterNumber += item.length;

    //add to array limites amount of text
    stringToDisplay.push(item);

    //next etap of storing text
  } else {
    //push last part of text to array
    stringToDisplay.push(item);

    //make limited amount of text as one string and push it into new array which hold paginated string
    stringToDisplay2.push(stringToDisplay.join(". "));

    //clear array for new amount of limited text
    stringToDisplay = [];

    //clear counter of words
    counterNumber = 0;
  }
});

//push last part of text
stringToDisplay2.push(stringToDisplay.join(". "));

//add basic text to check paginated text
document.querySelector(".one").innerHTML = tekst;

//prepare text with seperator to faster debugging
let testText = "";
stringToDisplay2.forEach(item => {
  testText += "<hr><p>" + item + "</p>";
});
//document.querySelector(".two").innerHTML = testText;

//add text to verify
document.querySelector(".two").innerHTML = stringToDisplay2.join(". ");
