const flashCards = [
    [
        ["Collide", "collided, collision", "The cars collided into each other"],
        ["Botsen", "botste, botsing", "De auto's botsten tegen elkaar"]
    ],
    [
        ["Rejected (thing)", "reject, rejection", "The request was rejected"],
        ["Afgekeurd (thing)", "afkeuren, afkeuring", "Het verzoek werd afgekeurd"]
    ],
    [
        ["Rejected (person)", "reject, rejection", "His job application was rejected"],
        ["Afgewezen (person)", "afwijzen, afwijzing", "Zijn sollicitatie werd afgewezen"]
    ],
    [
        ["Refused", "refuse, refusal", "The request was refused"],
        ["Geweigerd", "weigeren, weigering", "Het verzoek werd geweigerd"]
    ],
    [
        ["Decrease", "", "The diagram shows a decrease in 2021."],
        ["Afname", "", "De grafiek laat een afname zien in 2021."]
    ],
    [
        ["Increase", "", "The graph shows an increase in 2021."],
        ["Toename", "", "De grafiek laat een toename  zien in 2021."]
    ],
    [
        ["The percentage", "", "Men were in the highest percentage."],
        ["Het percentage", "", "Mannen waren in het hoogste percentage."]
    ],
    [
        ["The bar chart", "", "The bar chart shows an increase an increase in June and a decrease in July."],
        ["Het staafdiagram", "", "Het staafdiagram toont een stijging in juni en een daling in juli"]
    ],
    [
        ["The pie chart", "", "The pie chart indicates that the highest percentage is women."],
        ["Het cirkeldiagram", "", "Het cirkeldiagram geeft aan dat het hoogste percentage vrouwen is."]
    ],
    [
        ["Such", "such", "Such problems can be solved by more communication."],
        ["Dergelijk", "dergelijke", "Dergelijke problemen kunnen worden opgelost door meer communicatie."]
    ],
    [
        ["Cleaning products", "", "Cleaning products are poisonous"],
        ["Schoonmaakmiddelen ", "", "Schoonmaakmiddelen zijn giftig"]
    ],
    [
        ["Swerve", "Swerved", "The white car had to swerve"],
        ["Uitwijken", "uitgeweken", "De witte auto moest uitwijken"]
    ],
    [
        ["The Accident", "Accidentally", "the accident has happened"],
        ["Het Ongeluk", "Per ongeluk", "het ongeluk is gebeurd"]
    ],
    [
        ["Changed lanes", "", "The cars changed lanes"],
        ["Rijbaan veranderen", "", "De auto's wisselden van rijstrook"]
    ],
    [
        ["The boot", "", "what's in your boot?"],
        ["De kofferbak", "", "wat zit er in je kofferbak?"]
    ],
    [
        ["The bonnet", "", "what is under the bonnet of the car?"],
        ["De motorkap", "", "wat zit er onder de motorkap van de auto?"]
    ],
    [
        ["The indicator", "", "put his indicator on to turn left"],
        ["De richtingaanwijzer ", "", "zet zijn richtingaanwijzer aan om linksaf te slaan"]
    ],
    [
        ["The car tire", "", "The car tire is flat"],
        ["De autoband", "", "De autoband is lek"]
    ],
    [
        ["The steering wheel", "", "Turn the steering wheel right"],
        ["Het stuur", "", "Draai het stuur naar rechts"]
    ],
    [
        ["The steering wheel", "", "Turn the steering wheel right"],
        ["Het stuur", "", "Draai het stuur naar rechts"]
    ],
    [
        ["Change gears", "", "When driving you must gear down, gear up"],
        ["Schakelen", "", "Bij het rijden moet je terugschakelen, opschakelen."]
    ],
    [
        ["The headlights", "", "dim the headlights"],
        ["De koplampen", "", "de koplampen dimmen"]
    ],
    [
        ["Brave", "Bravely", "He is very brave"],
        ["Moedig", "Moedig", "Hij is erg moedig"]
    ],
    [
        ["Well behaved", "", "He is a well behaved dog"],
        ["Braaf", "", "Hij is een brave hond"]
    ],
    [
        ["Cheeky", "", "Don't be cheeky"],
        ["Brutaal", "", "Wees niet brutaal"]
    ],
    [
        ["Rude", "Rudely", "He is very rude"],
        ["Onbeleefd", "Onbeleefd", "Hij is erg onbeleefd"]
    ],
    [
        ["Tacky/Vulgar", "", "I find it quite vulgar."],
        ["Ordinair", "", "Ik vind het behoorlijk ordinair."]
    ],
    [
        ["Fairly", "", "It was quite busy in the city today."],
        ["Behoorlijk", "", "Het was behoorlijk druk in de stad vandaag."]
    ],
    [
        ["The ankle", "Ankles", "My ankle is sprained"],
        ["De enkel", "Enkels", "Mijn enkel is verstuikt"]
    ],
    [
        ["The knee", "Knees", "I injured my knee"],
        ["De knie", "knieën", "Ik heb mijn knie geblesseerd"]
    ],
    [
        ["The elbow", "Elbows", "I have tennis elbow"],
        ["De elleboog", "Ellebogen", "Ik heb een tenniselleboog"]
    ],
    [
        ["The Toe", "Toes", "My toes are crooked"],
        ["De Teen", "Tenen", "Mijn tenen staan ​​krom"]
    ],
    [
        ["The head", "", "You must protect your head from injury"],
        ["Het hoofd", "", "U moet uw hoofd beschermen tegen verwondingen"]
    ],
    [
        ["The brain", "", "The brain is the one of your most vital organs"],
        ["De hersenen", "", "De hersenen zijn een van je meest vitale organen"]
    ],
    [
        ["The mind", "", "The mind can play tricks on you."],
        ["De geest", "", "Je geest kan je voor de gek houden."]
    ],
    [
        ["The thought", "", "Try to have positive thoughts"],
        ["De gedachte", "", "Probeer positieve gedachten te hebben"]
    ],
    [
        ["Mood", "", "He is in a good mood"],
        ["Humeur", "", "Hij is in een goed humeur"]
    ],
    [
        ["Get used to", "", "you must get used to it"],
        ["Wennen aan", "", "je moet er aan wennen"]
    ],
    [
        ["Conquer", "", "you have to conquer your fears"],
        ["Overwinnen", "", "je moet je angsten overwinnen"]
    ],
    [
        ["The stove", "", "There is a pot boiling on the stove"],
        ["Het fornuis", "", "Er staat een pannetje te koken op het fornuis"]
    ],
    [
        ["The bread toaster", "", "Put some bread in the bread toaster"],
        ["De broodrooster", "", "Doe wat brood in de broodrooster"]
    ],
    [
        ["The kettle", "", "Put the kettle on"],
        ["De ketel", "", "Zet de ketel op"]
    ],
    [
        ["The spatula", "", "Flip it with the spatula"],
        ["De spatel", "", "Draai het om met de spatel"]
    ],
    [
        ["Pour", "pouring", "Can you pour some water in my glass."],
        ["Giet", "gieten", "kun je wat water in mijn glas gieten."]
    ],
    [
        ["The fridge", "", "the fridge is empty"],
        ["De koelkast", "", "de koelkast is leeg"]
    ],
    [
        ["The freezer", "", "The freezer needs to be defrosted"],
        ["De vriezer", "", "De vriezer moet ontdooid worden"]
    ],
    [
        ["The kitchen light", "", "Turn on the kitchen light"],
        ["Het keukenlicht", "", "Doe het keukenlicht aan"]
    ],
    [
        ["The kitchen cupboard", "kitchen cupboards", "Make sure to close all the kitchen cupboards"],
        ["De keukenkast", "keuken kasten", "Zorg ervoor dat je alle keukenkastjes sluit"]
    ],
    [
        ["The kitchen sink", "", "The kitchen sink is full of dirty dishes. "],
        ["De gootsteen", "", "De gootsteen staat vol vuile vaat."]
    ],
    [
        ["The dishwasher", "", "I must un/pack the dishwasher"],
        ["De vaatwasser", "", "Ik moet de vaatwasser uit/inpakken"]
    ],
    [
        ["Microwave", "", "the bread is in the microwave"],
        ["Magnetron", "", "het brood zit in de magnetron"]
    ],
    [
        ["Washing the dishes", "", "I must do the dishes"],
        ["Afwassen", "", "Ik moet de afwas doen"]
    ],
    [
        ["The knife", "", "The knife and the fork"],
        ["Het mes", "", "Het mes en de vork"]
    ],
    [
        ["The salt", "", "The salt and the pepper"],
        ["Het zout", "", "Het zout en de peper"]
    ],
    [
        ["The bread", "", "the bread and the butter"],
        ["Het brood", "", "het brood en de boter"]
    ],
    [
        ["The juice", "", "The juice and the tea"],
        ["Het sap", "", "Het sap en de thee"]
    ],
    [
        ["The glass", "", "The glass and the mug"],
        ["Het glas", "", "Het glas en de mok"]
    ],
    [
        ["The plate", "", "The plate and the bowl"],
        ["Het boord", "", "Het bord en de kom"]
    ],
    [
        ["Chopping", "Chopped", "he is busy chopping onions"],
        ["Hakken", "Gehakt", "hij is bezig uien te hakken"]
    ],
    [
        ["Frying", "Deep-frying", "he is frying the onions"],
        ["Bakken", "Frituren", "hij bakt de uien"]
    ],
    [
        ["Mixing", "", "mixing the ingredients in a bowl"],
        ["Mengen", "", "Hij mengt de ingrediënten in een kom"]
    ],
    [
        ["Boiling hot", "", "he is boiling the water"],
        ["Kokend heet", "", "hij kookt het water"]
    ],
    [
        ["Concern", "concerning", "i am concerned about his behaviour"],
        ["Zorg", "zorgwekkend", "ik maak me zorgen over zijn gedrag"]
    ],
    [
        ["Do no harm", "", "It would do no harm to ask"],
        ["Geen kwaad doen", "", "Vragen kan geen kwaad"]
    ],
    [
        ["Objections", "", "do you have any objections?"],
        ["Bezwaar", "", "heb je bezwaar?"]
    ],
    [
        ["Demands", "", "I don't want to make unrealistic demands"],
        ["Eisen", "", "Ik wil geen onrealistische eisen stellen"]
    ],
    [
        ["Expectations", "", "We need to manage expectations"],
        ["Verwachtingen", "", "We moeten verwachtingen managen"]
    ],
    [
        ["Accountability", "", "There is a lack of accountability"],
        ["Verantwoording", "", "Er is een gebrek aan verantwoording"]
    ],
    [
        ["Harmful", "", "I think that could be harmful"],
        ["Schadelijk", "", "Ik denk dat dat schadelijk kan zijn"]
    ],
    [
        ["Unless", "", "Unless there are any objections."],
        ["Tenzij", "", "Tenzij er bezwaren zijn."]
    ],
    [
        ["However", "", "However, if you disagree."],
        ["Echter", "", "echter als u het er niet mee eens bent."]
    ],
    [
        ["Therefore", "", "Therefore, I think it's a good idea."],
        ["Daarom", "", "Daarom vind ik het een goed idee."]
    ],
    [
        ["Nevertheless", "", "Nevertheless, I am going to the gym tonight."],
        ["Hoe dan ook", "", "Hoe dan ook, ga ik vanavond naar de sportschool."]
    ],
    [
        ["Spend time", "", "I don't want to spend anymore time on this."],
        ["Tijd besteden", "", "Ik wil hier geen tijd meer aan besteden."]
    ],
    [
        ["Yet", "", "There are more cars being bought every year"],
        ["Toch", "", "Toch, worden er elk jaar meer auto's gekocht"]
    ],
    [
        ["Confirm", "confirmation", "I will get confirmation"],
        ["bevestigen", "bevestiging", "Ik zal een bevestiging krijgen"]
    ],
    [
        ["is mine", "", "The dog is mine"],
        ["is van mij", "", "De hond is van mij"]
    ],
    [
        ["Put petrol in the car", "", "Put petrol in the car"],
        ["Benzine in de auto doen", "", "Benzine in de auto doen"]
    ],
    [
        ["Pack the shelves.", "", "Pack the bookshelf."],
        ["Pak de planken in.", "", "Pak de boekenplank in."]
    ],
    [
        ["Write down", "", "Write down the names and numbers"],
        ["Schrijf op", "", "Schrijf de namen en nummers op"]
    ],
    [
        ["Answer the phone", "", "When someone calls answer the phone"],
        ["Beantwoord de telefoon", "", "Als iemand belt, neem dan de telefoon op"]
    ],
    [
        ["Open the door", "", "close the door"],
        ["Open de deur", "", "doe de deur dicht"]
    ],
    [
        ["Turn on the tv", "", "Turn off the tv"],
        ["Doe de tv aan", "", "Zet de tv uit"]
    ],
    [
        ["Play the song", "", "Pause the song"],
        ["Speel het liedje", "", "Pauzeer het nummer"]
    ],
    [
        ["Ride the bike", "", ""],
        ["Rijd op de fiets", "", ""]
    ],
    [
        ["Drive the car", "", "Drive the car to work"],
        ["De auto rijden", "", "Rijd met de auto naar het werk"]
    ],
    [
        ["Take the train", "", "I took the train to work"],
        ["Neem de trein", "", "Ik nam de trein naar mijn werk"]
    ],
    [
        ["Measures", "", "We need to take some measure to ensure this doesn't happen again"],
        ["Maatregelen", "", "We moeten maatregelen nemen om ervoor te zorgen dat dit niet meer gebeurt"]
    ],
    [
        ["Shall we", "", "shall we go to the bar"],
        ["Zullen we", "", "zullen we naar de bar gaan"]
    ],
    [
        ["Every time ", "", "Every time you do that, it doesn't work"],
        ["Elke keer", "", "Elke keer dat je dat doet, werkt het niet"]
    ],
    [
        ["Its time", "", "Its time to leave"],
        ["Het is tijd", "", "Het is tijd om te gaan"]
    ],
    [
        ["I'm busy with", "", "I'm busy with something"],
        ["Ik ben bezig met", "", "Ik ben ergens mee bezig"]
    ],
    [
        ["Cause", "", "The rain was the reason for my wet clothes"],
        ["Aanleiding", "", "De regen was de aanleiding voor mijn natte kleren"]
    ],
    [
        ["Connect", "", "I would like to join your club."],
        ["Aansluiten", "", "Ik wil graag bij jullie club aansluiten."]
    ],
    [
        ["The number of", "", "The number of crimes has increased"],
        ["Het aantal", "", "Het aantal misdrijven is toegenomen"]
    ]
];
