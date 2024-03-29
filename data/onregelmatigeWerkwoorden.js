 const onregelmatigeWerkwoorden = [
        ["bederven","bedierf","bedierven","bedorven","hebben/zijn"],
        ["bedriegen","bedroog","bedrogen","bedrogen","hebben"],
        ["beginnen","begon","begonnen","begonnen","zijn"],
        ["begrijpen","begreep","begrepen","begrepen","hebben"],
        ["bevallen","beviel","bevielen","bevallen","zijn"],
        ["bewegen","bewoog","bewogen","bewogen","hebben"],
        ["bezoeken","bezocht","bezochten","bezocht","hebben"],
        ["bidden","bad","baden","gebeden","hebben"],
        ["bieden","bood","boden","geboden","hebben"],
        ["bijten","beet","beten","gebeten","hebben"],
        ["binden","bond","bonden","gebonden","hebben"],
        ["blazen","blies","bliezen","geblazen","hebben"],
        ["blijken","bleek","bleken","gebleken","zijn"],
        ["blijven","bleef","bleven","gebleven","zijn"],
        ["braden","braadde","braadden","gebraden","hebben"],
        ["breken","brak","braken","gebroken","hebben"],
        ["brengen","bracht","brachten","gebracht","hebben"],
        ["buigen","boog","bogen","gebogen","hebben"],
        ["denken","dacht","dachten","gedacht","hebben"],
        ["doen","deed","deden","gedaan","hebben"],
        ["dragen","droeg","droegen","gedragen","hebben"],
        ["drijven","dreef","dreven","gedreven","zijn/hebben"],
        ["drinken","dronk","dronken","gedronken","hebben"],
        ["duiken","dook","doken","gedoken","zijn/hebben"],
        ["dwingen","dwong","dwongen","gedwongen","hebben"],
        ["ervaren","ervoer","ervoeren","ervaren","hebben"],
        ["eten","at","aten","gegeten","hebben"],
        ["fluiten","floot","floten","gefloten","hebben"],
        ["gaan","ging","gingen","gegaan","zijn"],
        ["genezen","genas","genazen","genezen","zijn/hebben"],
        ["genieten","genoot","genoten","genoten","hebben"],
        ["geven","gaf","gaven","gegeven","hebben"],
        ["gieten","goot","goten","gegoten","hebben"],
        ["glijden","gleed","gleden","gegleden","zijn/hebben"],
        ["glimmen","glom","glommen","geglommen","hebben"],
        ["graven","groef","groeven","gegraven","hebben"],
        ["hangen","hing","hingen","gehangen","hebben"],
        ["hebben","had","hadden","gehad","hebben"],
        ["helpen","hielp","hielpen","geholpen","hebben"],
        ["houden","hield","hielden","gehouden","hebben"],
        ["kiezen","koos","kozen","gekozen","hebben"],
        ["kijken","keek","keken","gekeken","hebben"],
        ["klimmen","klom","klommen","geklommen","zijn/hebben"],
        ["klinken","klonk","klonken","geklonken","hebben"],
        ["knijpen","kneep","knepen","geknepen","hebben"],
        ["komen","kwam","kwamen","gekomen","zijn"],
        ["kopen","kocht","kochten","gekocht","hebben"],
        ["krijgen","kreeg","kregen","gekregen","hebben"],
        ["krimpen","kromp","krompen","gekrompen","zijn/hebben"],
        ["kruipen","kroop","kropen","gekropen","zijn/hebben"],
        ["kunnen","kon","konden","gekund","hebben"],
        ["laden","laadde","laadden","geladen","hebben"],
        ["laten","liet","lieten","gelaten","hebben"],
        ["lezen","las","lazen","gelezen","hebben"],
        ["liegen","loog","logen","gelogen","hebben"],
        ["liggen","lag","lagen","gelegen","hebben"],
        ["lijden","leed","leden","geleden","hebben"],
        ["lijken","leek","leken","geleken","hebben"],
        ["lopen","liep","liepen","gelopen","zijn/hebben"],
        ["meten","mat","maten","gemeten","hebben"],
        ["moeten","moest","moesten","gemoeten","hebben"],
        ["mogen","mocht","mochten","gemogen","hebben"],
        ["nemen","nam","namen","genomen","hebben"],
        ["ontbijten","ontbeet","ontbeten","ontbeten","hebben"],
        ["ontwerpen","ontwierp","ontwierpen","ontworpen","hebben"],
        ["overlijden","overleed","overleden","overleden","zijn"],
        ["raden","raadde","raadden","geraden","hebben"],
        ["rijden","reed","reden","gereden","zijn/hebben"],
        ["roepen","riep","riepen","geroepen","hebben"],
        ["ruiken","rook","roken","geroken","hebben"],
        ["scheiden","scheidde","scheidden","gescheiden","zijn/hebben"],
        ["schelden","schold","scholden","gescholden","hebben"],
        ["schenken","schonk","schonken","geschonken","hebben"],
        ["scheren","schoor","schoren","geschoren","hebben"],
        ["schieten","schoot","schoten","geschoten","hebben"],
        ["schijnen","scheen","schenen","geschenen","hebben"],
        ["schrijven","schreef","schreven","geschreven","hebben"],
        ["schrikken","schrok","schrokken","geschrokken","zijn"],
        ["schuiven","schoof","schoven","geschoven","zijn/hebben"],
        ["slaan","sloeg","sloegen","geslagen","hebben"],
        ["slapen","sliep","sliepen","geslapen","hebben"],
        ["slijpen","sleep","slepen","geslepen","hebben"],
        ["sluipen","sloop","slopen","geslopen","zijn"],
        ["sluiten","sloot","sloten","gesloten","hebben"],
        ["smelten","smolt","smolten","gesmolten","hebben"],
        ["snijden","sneed","sneden","gesneden","hebben"],
        ["snuiten","snoot","snoten","gesnoten","hebben"],
        ["snuiven","snoof","snoven","gesnoven","hebben"],
        ["spijten","speet","speten","gespeten","het/hebben"],
        ["spreken","sprak","spraken","gesproken","hebben"],
        ["springen","sprong","sprongen","gesprongen","zijn/hebben"],
        ["spuiten","spoot","spoten","gespoten","hebben"],
        ["staan","stond","stonden","gestaan","hebben"],
        ["steken","stak","staken","gestoken","hebben"],
        ["stelen","stal","stalen","gestolen","hebben"],
        ["sterven","stierf","stierven","gestorven","zijn"],
        ["stijgen","steeg","stegen","gestegen","zijn"],
        ["stinken","stonk","stonken","gestonken","hebben"],
        ["strijden","streed","streden","gestreden","hebben"],
        ["strijken","streek","streken","gestreken","hebben"],
        ["trekken","trok","trokken","getrokken","zijn/hebben"],
        ["vallen","viel","vielen","gevallen","zijn"],
        ["vangen","ving","vingen","gevangen","hebben"],
        ["varen","voer","voeren","gevaren","zijn/hebben"],
        ["vechten","vocht","vochten","gevochten","hebben"],
        ["verbieden","verbood","verboden","verboden","hebben"],
        ["verdwijnen","verdween","verdwenen","verdwenen","zijn"],
        ["vergelijken","vergeleek","vergeleken","vergeleken","hebben"],
        ["vergeten","vergat","vergaten","vergeten","zijn/hebben"],
        ["verliezen","verloor","verloren","verloren","zijn/hebben"],
        ["vermijden","vermeed","vermeden","vermeden","hebben"],
        ["verraden","verraadde","verraadden","verraden","hebben"],
        ["vertrekken","vertrok","vertrokken","vertrokken","zijn"],
        ["verwijten","verweet","verweten","verweten","hebben"],
        ["verzinnen","verzon","verzonnen","verzonnen","hebben"],
        ["vinden","vond","vonden","gevonden","hebben"],
        ["vliegen","vloog","vlogen","gevlogen","zijn/hebben"],
        ["vouwen","vouwde","vouwden","gevouwen","hebben"],
        ["vragen","vroeg","vroegen","gevraagd","hebben"],
        ["vriezen","vroor","vroren","gevroren","het/hebben"],
        ["wegen","woog","wogen","gewogen","hebben"],
        ["werpen","wierp","wierpen","geworpen","hebben"],
        ["weten","wist","wisten","geweten","hebben"],
        ["wijzen","wees","wezen","gewezen","hebben"],
        ["willen","wilde/wou","wilden/wouden","gewild","hebben"],
        ["winnen","won","wonnen","gewonnen","hebben"],
        ["worden","werd","werden","geworden","zijn"],
        ["wrijven","wreef","wreven","gewreven","hebben"],
        ["zeggen","zei","zeiden","gezegd","hebben"],
        ["zenden","zond","zonden","gezonden","hebben"],
        ["zien","zag","zagen","gezien","hebben"],
        ["zijn","was","waren","geweest","zijn"],
        ["zingen","zong","zongen","gezongen","hebben"],
        ["zinken","zonk","zonken","gezonken","zijn"],
        ["zitten","zat","zaten","gezeten","hebben"],
        ["zoeken","zocht","zochten","gezocht","hebben"],
        ["zuigen","zoog","zogen","gezogen","hebben"],
        ["zwemmen","zwom","zwommen","gezwommen","zijn/hebben"],
        ["zwijgen","zweeg","zwegen","gezwegen","hebben"]
];