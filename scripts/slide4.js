const slide4 = document.getElementsByClassName('slide4').item(0);
const s4infobox = slide4.getElementsByClassName('infobox').item(0);

const texts = [
    [
        'Il Parlamento europeo è l\'<strong>unica</strong> istituzione dell\'UE <strong>direttamente eletta</strong>.',
        'I suoi <strong>720</strong> deputati rappresentano i cittadini.',
        'Il <strong>Segretariato generale</strong> (Alessandro Chiocchetti) <strong>sostiene</strong> il lavoro dei <strong>deputati</strong> e degli <strong>organi parlamentari</strong>.',
        'La Presidente (Roberta Metsola) è <strong>eletta</strong> per un mandato rinnovabile di <strong>due anni e mezzo</strong>, che corrisponde a metà legislatura.',
        'Al Parlamento europeo siedono <strong>720 deputati</strong>, eletti a suffragio universale diretto.',
        'I deputati lavorano in <strong>commissioni</strong> (<strong>24</strong>) per preparare il lavoro delle sedute plenarie del Parlamento.',
        'I deputati si riuniscono in <strong>8 gruppi politici</strong>.',
        'Non sono organizzati su base nazionale bensì in funzione delle loro affinità politiche.',
        'Le <strong>8 delegazioni</strong> del Parlamento europeo <strong>intrattengono rapporti</strong> e <strong>scambiano informazioni</strong> con i parlamenti di paesi extra UE.',
    ].join('<br>'),
    [
        'Il suo ruolo è definire l\'<strong>orientamento politico generale</strong> e le <strong>priorità dell\'Unione europea</strong>',
        'L\'attuale <strong>presidente</strong> è <strong>Charles Michel</strong>.',
        '<strong>NON</strong> adotta <strong>legislazione</strong>.',
        '<strong>9 dicembre 1974:</strong> Il Consiglio europeo è <strong>istituito</strong> quale sede informale di discussione tra i capi di Stato o di governo degli Stati membri dell\'UE.',
        '<strong>7 febbraio 1992:</strong> Con il <strong>trattato di Maastricht</strong> il Consiglio europeo acquisisce uno <strong>status e un ruolo formali</strong> in forza dei quali <strong>dà impulsi all\'UE</strong> e ne <strong>definisce gli orientamenti politici generali</strong>.',
        '<strong>1 dicembre 2009:</strong> Il Consiglio europeo diventa una delle <strong>sette istituzioni dell\'UE</strong> a seguito delle modifiche introdotte dal <strong>trattato di Lisbona</strong>.',
        'Possiamo trovare l\'intera storia <a target="_blank" class="link" href="https://www.consilium.europa.eu/it/history">cliccando qui</a>.',
        'Possiamo trovare anche la lista dei membri <a target="_blank" class="link" href="https://www.consilium.europa.eu/it/european-council/members/">cliccando qui</a>.',
    ].join('<br>'),
    [
        'Il Consiglio dell\'UE <strong>rappresenta i governi</strong> degli <strong>Stati membri</strong>.',
        'È la sede in cui si <strong>riuniscono</strong> i <strong>ministri</strong> e gli <strong>esperti nazionali</strong> di ciascun paese dell\'UE per:',
        '',
        '<strong>-</strong> <strong>Negoziare</strong> e <strong>adottare</strong> la <strong>legislazione</strong> dell\'UE;',
        '<strong>-</strong> <strong>Concludere accordi internazionali</strong> a nome dell\'UE;',
        '<strong>-</strong> <strong>Adottare</strong> il <strong>bilancio</strong> dell\'UE;',
        '<strong>-</strong> <strong>Elaborare</strong> la <strong>politica estera</strong> e di <strong>sicurezza</strong> dell\'UE',
        '<strong>-</strong> <strong>Coordinare</strong> le <strong>politiche</strong> degli Stati membri in <strong>settori specifici</strong>',
        '',
        'Per maggiori informazioni su cosa fa il consiglio puoi <a target="_blank" class="link" href="https://www.consilium.europa.eu/it/council-eu/what-the-council-does/">cliccare qui</a>.',
        '',
        'I <strong>lavori</strong> del Consiglio sono organizzati a <strong>tre livelli</strong> differenti:',
        '',
        '<strong>1) Ministri:</strong> I ministri dei governi nazionali <strong>adottano</strong> le <strong>decisioni</strong> e la <strong>legislazione</strong> dell\'UE in occasione delle sessioni del Consiglio.',
        '<strong>2) Rappresentanti permanenti:</strong> Gli ambasciatori dei paesi dell\'UE <strong>preparano</strong> ogni <strong>sessione del Consiglio</strong> durante le <strong>riunioni del Coreper</strong>.',
        '<strong>3) Gruppi di lavoro/comitati:</strong> Gli esperti dei governi nazionali <strong>esaminano</strong> ogni <strong>proposta</strong> in <strong>sede di organi preparatori</strong>.',
        '',
        'Per maggiori informazioni puoi <a target="_blank" class="link" href="https://www.consilium.europa.eu/it/council-eu/decision-making/">cliccare qui</a>.',
        '',
        'Gli Stati membri <strong>assumono</strong> a <strong>rotazione</strong> la <strong>presidenza delle sessioni del Consiglio</strong> per <strong>6 mesi ciascuno</strong>.',
        'Attualmente è l\'Ungheria a detenere la presidenza del Consiglio, fino al 31 dicembre 2024.',
    ].join('<br>'),
    [
        'Il suo ruolo è <strong>promuovere</strong> l\'<strong>interesse generale</strong> dell\'UE <strong>proponendo</strong> la <strong>legislazione</strong> e <strong>assicurandone il rispetto</strong> e <strong>attuando le politiche</strong> e il <strong>bilancio</strong> dell\'UE.',
        'Un <strong>gruppo</strong> o "collegio" di <strong>commissari</strong>, uno per ciascun paese dell\'UE',
        'Presidente: Ursula von der Leyen',
        '<strong>Istituita</strong> nel <strong>1958</strong>.',
        'La Commissione europea è il <strong>braccio esecutivo politicamente indipendente</strong> dell\'UE.',
        'Ha competenza esclusiva dell\'<strong>elaborazione</strong> delle <strong>proposte di nuove normative europee</strong> e dell\'<strong>esecuzione delle decisioni</strong> del Parlamento europeo e del Consiglio dell\'Unione europea.',
        'Per maggiori informazioni puoi <a target="_blank" class="link" href="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/search-all-eu-institutions-and-bodies/european-commission_it">cliccare qui</a>.',
        'Puoi raggiungere il loro sito ufficiale <a target="_blank" class="link" href="https://commission.europa.eu/index_it">cliccando qui</a>.',
    ].join('<br>'),
    [
        'Il suo ruolo è <strong>garantire</strong> che il <strong>diritto</strong> dell\'UE venga <strong>interpretato</strong> e <strong>applicato</strong> allo <strong>stesso modo</strong> in ogni paese europeo, <strong>garantire</strong> che i <strong>paesi</strong> e le <strong>istituzioni</strong> dell\'Unione <strong>rispettino la normativa</strong> dell\'UE.',
        'I membri sono la <strong>corte di giustizia</strong> (<strong>1 giudice</strong> per <strong>ciascun paese</strong> dell\'UE, più <strong>11 avvocati generali</strong>)',
        '<strong>Istituiti</strong> nel <strong>1952</strong>.',
        'La Corte di giustizia dell\'Unione europea (<strong>CGUE</strong>) <strong>interpreta il diritto</strong> dell\'UE per <strong>garantire</strong> che sia <strong>applicato</strong> allo <strong>stesso modo</strong> in tutti gli Stati membri e <strong>dirime</strong> le <strong>controversie giuridiche</strong> tra <strong>governi nazionali</strong> e <strong>istituzioni</strong> dell\'UE.',
        'Può essere <strong>adita</strong>, in talune circostanze, anche da <strong>singoli cittadini</strong>, <strong>imprese</strong> o <strong>organizzazioni</strong> allo scopo di <strong>intraprendere</strong> un\'<strong>azione legale</strong> contro un\'<strong>istituzione</strong> dell\'UE qualora ritengano che abbia in qualche modo <strong>violato</strong> i loro diritti.',
        '',
        'Per maggiori informazioni puoi <a target="_blank" href="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/search-all-eu-institutions-and-bodies/court-justice-european-union-cjeu_it" class="link">cliccare qui</a>.',
    ].join('<br>'),
    [
        'La Banca centrale europea (<strong>BCE</strong>) lavora per <strong>mantenere stabili i prezzi</strong> nell\'area dell\'euro.',
        'Così anche in futuro ogniuno potrà <strong>acquistare</strong> con lo <strong>stesso denaro</strong> gli <strong>stessi beni</strong> e <strong>servizi</strong> che ti puoi permettere oggi.',
        'Inoltre contribuiscono alla <strong>sicurezza</strong> e alla <strong>solidità</strong> del <strong>sistema bancario europeo</strong>, per fare in modo che i <strong>nostri soldi in banca</strong> siano al <strong>sicuro</strong>.',
        '',
        'Le <strong>decisioni più importanti</strong>, comprese quelle sui <strong>tassi di interesse</strong> e sugli altri <strong>strumenti di politica monetaria</strong>, sono assunte dal <strong>Consiglio direttivo</strong>.',
        'La BCE si trova a Francoforte sul Meno, in Germania.',
        'La loro sede principale è stata progettata da COOP HIMMELB(L)AU e completata nel novembre 2014.',
        'Combina elementi storici e moderni, che ne fanno un monumento urbano unico.',
        '',
        'Per maggiori informazioni puoi <a target="_blank" class="link" href="https://www.ecb.europa.eu/ecb/html/index.it.html">cliccare qui</a>.',
    ].join('<br>'),
    [
        'Il suo ruolo è <strong>controllare</strong> che i <strong>fondi</strong> dell\'UE siano <strong>raccolti</strong> e <strong>utilizzati correttamente</strong>, e <strong>contribuire</strong> a <strong>migliorare</strong> la <strong>gestione finanziaria</strong> dell\'UE',
        'Il <strong>presidente</strong> è <strong>Tony Murphy</strong>.',
        'C\'è <strong>1 membro</strong> per ogni <strong>paese</strong> dell\'UE.',
        '<strong>Sede</strong>: <strong>Lussemburgo</strong>',
        'In quanto <strong>revisore esterno</strong> indipendente dell\'UE, la Corte dei conti europea <strong>tutela gli interessi</strong> dei <strong>contribuenti</strong> dell\'UE.',
        '<strong>Non è dotata di poteri legali</strong>, ma opera per <strong>migliorare</strong> la <strong>gestione</strong> da parte della Commissione europea del bilancio dell\'UE e <strong>riferisce</strong> sullo <strong>stato delle finanze</strong> dell\'Unione.',
        '',
        'Per maggiori informazioni puoi <a target="_blank" class="link" href="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/search-all-eu-institutions-and-bodies/european-court-auditors-eca_it">cliccare qui</a>.',
    ].join('<br>'),
];

let s4tbchildren = slide4.getElementsByClassName('textbox').item(0).children;

let selected = 0;
function s4update() {
    s4infobox.innerHTML = texts[selected];

    for(let i in s4tbchildren) {
        let item = s4tbchildren.item(i);
        item.classList[item.id.substring(3) === selected.toString() ? 'add' : 'remove']('slide4active');
    }
}

for(let i in s4tbchildren) {
    let item = s4tbchildren.item(i);
    item.addEventListener('click', () => {
        selected = parseInt(item.id.substring(3));
        s4update();
    });
}

s4update();